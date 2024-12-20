import { useFetcher } from "@remix-run/react";
import { useEffect, useRef, useState } from "react";
// import mixpanel from "mixpanel-browser";
import { Turnstile } from "@marsidev/react-turnstile";
import cn from "classnames";
import { Theme } from "~/types";
import { useEnv } from "../../../hooks/useEnv";
import CloseIcon from "~/icons/components/CloseIcon";
import { isValidEmail } from "~/utils/isValidEmail";
import { GtmEvent, gtmSendEvent } from "~/utils/gtmSendEvent";

type InitialValues = {
  fullName: string;
  email: string;
  message: string;
  file: any;
  budget: string;
  captchaToken: string;
};

const initialValue: InitialValues = {
  fullName: "",
  email: "",
  message: "",
  file: "",
  budget: "",
  captchaToken: "",
};

const initialTouched = {
  fullName: false,
  email: false,
  message: false,
  captchaToken: false,
  file: false,
};

const budgetOptions = [
  "$10k-$20k",
  "$20k-$50k",
  "$50k-$100k",
  "more than $100k",
];

const validFilesMimeTypes = {
  docx: "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
  pptx: "application/vnd.openxmlformats-officedocument.presentationml.presentation",
  pdf: "application/pdf",
  zip: "application/x-zip-compressed",
  jpg: "image/jpeg",
  png: "image/png",
  svg: "image/svg+xml",
};

const maxFileSize = 20 * 1024 * 1024;

const themes = {
  light: {
    textColorPrimary: "text-yw-primary-default",
    textColorSecondary: "text-yw-gray-300",
    optionColor: "text-yw-gray-300",
    fileInfoText: "text-black",
    closeIconColor: "#000000",
    linkColor: "text-yw-cta-default",
  },
  dark: {
    textColorPrimary: "text-white",
    textColorSecondary: "text-yw-gray-300",
    optionColor: "text-white",
    fileInfoText: "text-white",
    closeIconColor: "#ffffff",
    linkColor: "text-white",
  },
};

const ContactForm = ({
  theme,
  subtitle,
  showTitle,
  formId = "",
  className,
  formOnContactPage = false,
  event,
}: {
  theme?: Theme;
  showTitle?: boolean;
  subtitle?: string;
  formId?: string;
  className?: string;
  formOnContactPage?: boolean;
  event: GtmEvent | null;
}) => {
  const themeData = themes[theme || Theme.light];

  const [values, setValues] = useState(initialValue);
  const [errors, setErrors] = useState(initialValue);
  const [touched, setTouched] = useState(initialTouched);
  const [isFormSuccess, setIsFormSuccess] = useState(false);
  const [isFormFailure, setIsFormFailure] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [file, setFile] = useState<File | null>(null);

  const budgetLabelRef = useRef<HTMLLabelElement>(null);
  const messageTextAreaRef = useRef<HTMLTextAreaElement>(null);

  const { CAPTCHA_PUBLIC_KEY } = useEnv();
  const fetcher = useFetcher<{ success: boolean; error: string }>();

  const validateForm = () => {
    const newErrors: any = {};

    if (!values.email) {
      newErrors.email = "Email is required field";
    } else if (!isValidEmail(values.email)) {
      newErrors.email = "Should be a valid email";
    }

    if (!values.fullName) {
      newErrors.fullName = "Name is required field";
    } else if (
      !(values.fullName?.length >= 1 && values.fullName?.length < 100)
    ) {
      newErrors.fullName = "Invalid name";
    }

    if (!values.message) {
      newErrors.message = "Message is required field";
    } else if (values.message && values.message.length < 10) {
      newErrors.message = "Message must be at least 10 characters long";
    }

    if (!values.captchaToken) {
      newErrors.captchaToken = "Please check the box to proceed";
    }

    if (file && !Object.values(validFilesMimeTypes).includes(file.type)) {
      newErrors.file = `Only these file types are valid: ${Object.keys(
        validFilesMimeTypes
      ).join(", ")}`;
    } else if (file && file.size > maxFileSize) {
      newErrors.file = `Max file size is ${maxFileSize / 1024 / 1024} mb`;
    }

    setErrors(newErrors);
    return newErrors;
  };

  useEffect(() => {
    if (fetcher.state == "idle" && fetcher.data && !fetcher.data.success) {
      setIsFormFailure(true);
      setIsSubmitting(false);
      setValues(initialValue);
      setTouched(initialTouched);
      window.gtag && window.gtag("event", "y_form_submit_error");
      // mixpanel.track && mixpanel.track("Form submit error");
    }

    if (fetcher.state === "idle" && fetcher.data?.success) {
      if (event) {
        gtmSendEvent(event, values.email);
      }

      setIsFormSuccess(true);
      setIsSubmitting(false);
      setValues(initialValue);
      setTouched(initialTouched);
      window.gtag && window.gtag("event", "u_form_submit_success");
      window.gtag && window.gtag("event", "y_form_submit_success");
      // mixpanel.track && mixpanel.track("Form submit success");
    }
  }, [fetcher]);

  useEffect(() => {
    if (values.budget) {
      budgetLabelRef.current?.classList.add("input-have-value");
    } else {
      budgetLabelRef.current?.classList.remove("input-have-value");
    }
  }, [values]);

  useEffect(() => {
    validateForm();
  }, [values, file]);

  const handleBlur = (fieldName: string) => {
    setTouched((touched) => ({
      ...touched,
      [fieldName]: true,
    }));

    validateForm();
  };

  const handleChangeFile = (newValue: {
    target: { name: any; value: any };
  }) => {
    if (!newValue.target.files.length) {
      return;
    }

    const file = newValue.target.files[0];

    setFile(file);
  };

  const handleChange = (
    newValue: { target: { name: any; value: any } } | string
  ) => {
    if (
      typeof newValue === "object" &&
      newValue !== null &&
      "target" in newValue
    ) {
      const { name, value } = newValue.target;

      setValues({
        ...values,
        [name]: value,
      });
    } else {
      setValues({
        ...values,
        captchaToken: newValue,
      });
    }
  };

  const deleteFieldValue = (field: keyof InitialValues) => {
    setValues({
      ...values,
      [field]: "",
    });

    if (field === "file") {
      setFile(null);
    }
  };

  useEffect(() => {
    if (messageTextAreaRef.current && messageTextAreaRef.current.scrollHeight) {
      const textarea = messageTextAreaRef.current;
      textarea.style.height = `${textarea.scrollHeight}px`;
    }
  }, [values.message]);

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    setIsSubmitting(true);

    e.preventDefault();

    const formErrors = validateForm();

    const touchedFields = Object.keys(initialTouched).reduce(
      (acc, key) => ({ ...acc, [key]: true }),
      initialTouched
    );

    setTouched(touchedFields);

    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      setIsSubmitting(false);
      return;
    }

    const formData = new FormData(e.target);

    formData.append("source", "https://yojji.io");
    formData.append("context", location.href);
    formData.append("captchaToken", values.captchaToken);
    formData.delete("file");

    if (file) {
      formData.append("file", file);
    }
    // formData.append("mixpanel_id", mixpanel?.get_distinct_id());

    fetcher.submit(formData, {
      method: "POST",
      action: "/contact-form",
      encType: "multipart/form-data",
    });

    setFile(null);
  };

  return (
    <div className={className}>
      {isFormFailure && (
        <div className={`formFailure w-full ${themeData.textColorPrimary}`}>
          <div className="flex flex-col justify-center items-center text-center">
            <div className=" mb-8">
              <p className="yw-h3 mb-8">Something went wrong!</p>
              <p className="yw-t1">Try again later or contact us via email:</p>
              <a
                href="mailto:hello@yojji.com"
                className="text-yw-cta-default yw-h5 mb-8 flex items-center"
              >
                <span className="ltr:mr-2 rtl:ml-2">hello@yojji.com</span>
              </a>

              <button
                onClick={() => setIsFormFailure(false)}
                type="button"
                className="formTryAgain btn group rounded-full yw-button-large btn-cta"
              >
                Try again
              </button>
            </div>
          </div>
        </div>
      )}

      {isFormSuccess && (
        <div className={`formSuccess w-full ${themeData.textColorPrimary}`}>
          <div className="flex flex-col justify-center items-center text-center">
            <div className=" mb-8"></div>
            <p className="yw-h3 mb-8">
              Your application has been successfully sent!
            </p>
            <p className="yw-t1 mb-8">We will contact you soon as possible</p>
            <button
              onClick={() => setIsFormSuccess(false)}
              className="formApplyMore btn group rounded-full yw-button-large btn-cta"
            >
              Apply one more form
            </button>
          </div>
        </div>
      )}

      {!isFormSuccess && !isFormFailure && (
        <fetcher.Form onSubmit={handleSubmit} className="block w-full">
          <div className="flex flex-col items-stretch">
            {showTitle && (
              <p className={`${themeData.textColorPrimary} yw-h3 mb-8`}>
                {subtitle}
              </p>
            )}
            <div className="input-container mb-2 form-field-fullName">
              <input
                type="text"
                name="fullName"
                value={values.fullName}
                className={`${themeData.textColorPrimary} !px-3 !py-2`}
                onChange={handleChange}
                aria-label="Full name"
                onBlur={() => handleBlur("fullName")}
              />
              <label htmlFor="fullName" className="px-3">
                Full name*
              </label>
              <p
                className="form-error text-xs text-[#ED5846]"
                aria-live="assertive"
              >
                {touched.fullName ? errors.fullName : ""}
              </p>
            </div>

            <div className="input-container mb-2 form-field-email">
              <input
                type="email"
                name="email"
                value={values.email}
                className={`${themeData.textColorPrimary} !px-3 !py-2`}
                onChange={handleChange}
                aria-label="Email"
                onBlur={() => handleBlur("email")}
              />
              <label htmlFor="email" className="px-3">
                Email*
              </label>
              <p
                className="form-error text-xs text-[#ED5846]"
                aria-live="assertive"
              >
                {touched.email ? errors.email : ""}
              </p>
            </div>

            <div className="input-container mb-2 form-field-message relative">
              <textarea
                name="message"
                rows="5"
                placeholder=" "
                aria-label="Message"
                value={values.message}
                ref={messageTextAreaRef}
                className={`${themeData.textColorPrimary} !pl-3 pr-8 block h-10 overflow-hidden min-h-[40px] resize-none`}
                onChange={handleChange}
                onBlur={() => handleBlur("message")}
              ></textarea>
              <label htmlFor="message" className="px-3">
                Briefly describe your project*
              </label>
              <div className="absolute left-[calc(100%-20px)] w-6 h-6 top-5">
                <label className="cursor-pointer top-0 pointer-events-auto">
                  <input
                    type="file"
                    name="file"
                    className="hidden"
                    id="file"
                    aria-label="File"
                    onChange={handleChangeFile}
                  />
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M14.8278 7.75689L9.1718 13.4139C9.07629 13.5061 9.00011 13.6165 8.9477 13.7385C8.89529 13.8605 8.8677 13.9917 8.86655 14.1245C8.86539 14.2573 8.8907 14.3889 8.94098 14.5118C8.99126 14.6347 9.06551 14.7464 9.1594 14.8403C9.2533 14.9342 9.36495 15.0084 9.48784 15.0587C9.61074 15.109 9.74242 15.1343 9.8752 15.1331C10.008 15.132 10.1392 15.1044 10.2612 15.052C10.3832 14.9996 10.4936 14.9234 10.5858 14.8279L16.2428 9.17189C16.8055 8.60923 17.1216 7.8461 17.1216 7.05039C17.1216 6.25467 16.8055 5.49154 16.2428 4.92889C15.6801 4.36623 14.917 4.05013 14.1213 4.05013C13.3256 4.05013 12.5625 4.36623 11.9998 4.92889L6.3428 10.5859C5.86887 11.048 5.49143 11.5996 5.23236 12.2088C4.97328 12.8179 4.83774 13.4724 4.8336 14.1344C4.82945 14.7963 4.95678 15.4525 5.2082 16.0648C5.45961 16.6771 5.83012 17.2334 6.29821 17.7015C6.76631 18.1695 7.32268 18.5399 7.93505 18.7913C8.54742 19.0426 9.20361 19.1698 9.86553 19.1656C10.5275 19.1614 11.182 19.0257 11.7911 18.7666C12.4002 18.5074 12.9517 18.1299 13.4138 17.6559L19.0708 11.9999L20.4848 13.4139L14.8278 19.0709C14.1778 19.7209 13.406 20.2366 12.5567 20.5884C11.7074 20.9402 10.7971 21.1212 9.8778 21.1212C8.9585 21.1212 8.0482 20.9402 7.19888 20.5884C6.34956 20.2366 5.57784 19.7209 4.9278 19.0709C4.27776 18.4208 3.76211 17.6491 3.41031 16.7998C3.05851 15.9505 2.87744 15.0402 2.87744 14.1209C2.87744 13.2016 3.05851 12.2913 3.41031 11.442C3.76211 10.5926 4.27776 9.82093 4.9278 9.17089L10.5858 3.51489C11.5288 2.6041 12.7918 2.10013 14.1028 2.11152C15.4138 2.12291 16.6679 2.64875 17.5949 3.57579C18.5219 4.50284 19.0478 5.7569 19.0592 7.06788C19.0706 8.37887 18.5666 9.64188 17.6558 10.5849L11.9998 16.2439C11.7211 16.5225 11.3903 16.7435 11.0263 16.8942C10.6622 17.045 10.272 17.1225 9.87794 17.1225C9.4839 17.1224 9.09372 17.0448 8.72969 16.894C8.36566 16.7431 8.0349 16.5221 7.7563 16.2434C7.4777 15.9647 7.25671 15.6339 7.10596 15.2698C6.95521 14.9058 6.87765 14.5156 6.87769 14.1215C6.87774 13.7275 6.9554 13.3373 7.10623 12.9733C7.25707 12.6092 7.47813 12.2785 7.7568 11.9999L13.4138 6.34289L14.8278 7.75689Z"
                      fill="#8A8F94"
                    />
                  </svg>
                </label>
              </div>
              <p
                className="form-error text-xs text-[#ED5846]"
                aria-live="assertive"
              >
                {touched.message ? errors.message : ""}
              </p>
              {file && (
                <>
                  <div
                    className={cn("flex items-center gap-3", {
                      "mt-[18px]": touched.message && errors.message,
                    })}
                  >
                    <button
                      type="button"
                      className={themeData.fileInfoText}
                      onClick={() => deleteFieldValue("file")}
                    >
                      <CloseIcon color={themeData.closeIconColor} />
                    </button>
                    <span
                      className={`${themeData.fileInfoText} text-sm sm:text-base`}
                    >
                      {`(${Number((file.size / 1024).toFixed(2))} kB) ${
                        file.name
                      }`}
                    </span>
                  </div>
                  <p
                    className="form-error text-xs text-[#ED5846] !static sm:abosulute sm:bottom-3 mt-[6px]"
                    aria-live="assertive"
                  >
                    {errors.file}
                  </p>
                </>
              )}
            </div>

            <div className="input-container">
              <select
                name="budget"
                id="budget"
                value={values.budget}
                onChange={handleChange}
                className={`${themeData.textColorPrimary} !px-3 !py-2`}
              >
                <option value="" hidden></option>
                {budgetOptions.map((option) => (
                  <option
                    value={option}
                    key={option}
                    className={`${themeData.optionColor} bg-yw-gray-700 rounded-sm`}
                  >
                    {option}
                  </option>
                ))}
              </select>
              <label
                htmlFor="budget"
                className="px-3 select-label"
                ref={budgetLabelRef}
              >
                Your budget
              </label>
              {values.budget && (
                <span
                  className="absolute right-6 top-8 cursor-pointer"
                  onClick={() => deleteFieldValue("budget")}
                >
                  <CloseIcon color={themeData.closeIconColor} />
                </span>
              )}
            </div>
            <p className="text-[#afb3b8]">
              By submitting this form, you agree to our{" "}
              <a
                href="/terms-of-service"
                className={`cursor-pointer ${themeData.linkColor}`}
                target="_blank"
              >
                Terms of Use
              </a>{" "}
              and{" "}
              <a
                href="/privacy"
                className={`cursor-pointer ${themeData.linkColor}`}
                target="_blank"
              >
                Privacy Policy.
              </a>
            </p>

            <div
              className={cn("input-container min-[420px]:pb-7", {
                "!p-0": formOnContactPage,
              })}
            >
              <div className="flex justify-start origin-top-left scale-90 sm:scale-100">
                <Turnstile
                  siteKey={CAPTCHA_PUBLIC_KEY}
                  as={"div"}
                  onError={() =>
                    setErrors({
                      ...errors,
                      captchaToken:
                        "Captcha challenge failed, please try again later",
                    })
                  }
                  onSuccess={handleChange}
                  options={{
                    theme,
                  }}
                />
              </div>
              <p
                className="form-error text-xs text-[#ED5846] bottom-2 sm:bottom-3"
                aria-live="assertive"
              >
                {touched.captchaToken && errors.captchaToken}
              </p>
            </div>

            <button
              id={formId}
              type="submit"
              className="submitButton btn group rounded-full yw-button-large btn-cta text-lg leading-none"
              disabled={isSubmitting}
            >
              {isSubmitting ? "sending..." : "Send"}
            </button>
          </div>
        </fetcher.Form>
      )}
    </div>
  );
};

export default ContactForm;
