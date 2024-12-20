import {
  ActionFunctionArgs,
  json,
  unstable_composeUploadHandlers,
  unstable_createMemoryUploadHandler,
  unstable_parseMultipartFormData,
} from "@remix-run/cloudflare";

export const action = async ({ request, context }: ActionFunctionArgs) => {
  const uploadHandler = unstable_composeUploadHandlers(
    async ({ name, contentType, data, filename }) => {
      if (name !== "file") {
        return undefined;
      }

      const chunks = [];

      for await (const chunk of data) {
        chunks.push(chunk);
      }

      const blob = new Blob(chunks, { type: contentType });
      const file = new File([blob], filename || "fallback filename", {
        type: contentType,
      });

      return file;
    },
    // fallback to memory for everything else
    unstable_createMemoryUploadHandler()
  );

  const formData = await unstable_parseMultipartFormData(
    request,
    uploadHandler
  );

  const fullName = formData.get("fullName");
  const email = formData.get("email");
  const message = formData.get("message");
  const appContext = formData.get("context");
  const captchaToken = formData.get("captchaToken");
  const file = formData.get("file") as File;
  const budget = formData.get("budget");

  // Start captcha block____________________________________________
  try {
    const captchaPrivateKey = (context as any).env.CAPTCHA_PRIVATE_KEY;

    let formData = new FormData();
    formData.append("secret", captchaPrivateKey);
    formData.append("response", captchaToken!);

    const response = await fetch(
      `https://challenges.cloudflare.com/turnstile/v0/siteverify`,
      {
        method: "POST",
        body: formData,
      }
    );

    const verifyResult = await response.json<{
      success: boolean;
      "error-codes": string[];
    }>();

    if (!verifyResult.success) {
      return json({ success: false, error: verifyResult["error-codes"][0] });
    }
  } catch (error) {
    console.log("verify captcha error", error);
    return json({
      success: false,
      error: error?.message || "Something went wrong",
    });
  }
  // End captcha block______________________________________________

  let fileUrl;

  if (file?.size) {
    const accessToken = (context as any).env.HUBSPOT_ACCESS_TOKEN;
    const hubspotFilesFolder = (context as any).env.HUBSPOT_FILES_FOLDER;
    const uploadFileUrl =
      "https://api.hubapi.com/filemanager/api/v3/files/upload";

    const fileOptions = {
      access: "PUBLIC_INDEXABLE",
      ttl: "P3M",
      overwrite: false,
      duplicateValidationStrategy: "NONE",
      duplicateValidationScope: "ENTIRE_PORTAL",
    };

    const formData = new FormData();
    formData.append("file", file);
    formData.append("options", JSON.stringify(fileOptions));
    formData.append("folderPath", hubspotFilesFolder);

    try {
      const uploadFileResponse = await fetch(uploadFileUrl, {
        method: "POST",
        body: formData,
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });

      const uploadFileResult = await uploadFileResponse.json<{
        objects: { url: string }[];
      }>();

      fileUrl = uploadFileResult.objects[0].url;
    } catch (error) {
      console.log("File uploading error", error);
      return json({ success: false, error: error.message });
    }
  }

  try {
    const url =
      "https://api.hsforms.com/submissions/v3/integration/submit/139507789/ecb2a907-05ef-4fde-b409-fae5f01446c2";

    const data = {
      submittedAt: Date.now(),
      fields: [
        {
          objectTypeId: "0-1",
          name: "email",
          value: email,
        },
        {
          objectTypeId: "0-1",
          name: "firstname",
          value: fullName,
        },
        {
          objectTypeId: "0-1",
          name: "message",
          value: message,
        },
      ],
      context: {
        pageUri: appContext,
        pageName: appContext,
      },
    };

    if (budget) {
      data.fields.push({
        objectTypeId: "0-1",
        name: "budget",
        value: budget,
      });
    }

    if (fileUrl) {
      data.fields.push({
        objectTypeId: "0-1",
        name: "fileUrl",
        value: fileUrl,
      });
    }

    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      const errorResponse = await response.json();

      throw new Error(errorResponse.message || "Form submission failed");
    }

    return json({ success: true });
  } catch (error) {
    console.log("Form uploading error", error);
    return json({ success: false, error: error.message });
  }
};
