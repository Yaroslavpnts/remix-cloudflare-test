import { FC, useEffect, useMemo, useRef, useState } from "react";
import cn from "classnames";
import SmallArrow from "~/icons/components/SmallArrow";
import Loading from "~/icons/components/Loading";
import CheckMarkSmall from "~/icons/components/CheckMarkSmall";
import { isValidEmail } from "~/utils/isValidEmail";
import { Theme } from "~/types";
import { GtmEvent, gtmSendEvent } from "~/utils/gtmSendEvent";

const initialValue = {
  email: "",
};

const initialTouched = {
  email: false,
};

enum FormLabel {
  Initial = "Your email*",
  Success = "Thanks for subcription!",
  Error = "An error happened",
}

const themes = {
  dark: {
    textColorPrimary: "text-yw-gray-200",
    inputTextColor: "text-white",
    btnBorderColor: "border-white",
    btnArrowColor: "#fff",
    btnBgColor: "",
    labelColor: "text-white",
    autoCompleteColor: "subscription-form-input-white",
    inputBorderColor: "border-b-white",
  },
  light: {
    textColorPrimary: "text-black",
    inputTextColor: "text-black",
    btnBorderColor: "border-black",
    btnArrowColor: "#000",
    btnBgColor: "white",
    labelColor: "text-black",
    autoCompleteColor: "subscription-form-input-black",
    inputBorderColor: "border-b-black",
  },
};

type SubscriptionFormProps = {
  theme?: Theme;
  title: string;
  inFooter?: boolean;
  event: GtmEvent;
  className?: string;
};

const SubscriptionForm: FC<SubscriptionFormProps> = ({
  theme = Theme.light,
  title,
  inFooter = false,
  className,
  event,
}) => {
  const [values, setValues] = useState(initialValue);
  const [errors, setErrors] = useState(initialValue);
  const [touched, setTouched] = useState(initialTouched);
  const [formLabel, setFormLabel] = useState<FormLabel>(FormLabel.Initial);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isFormSended, setIsFormSended] = useState(false);
  const timeoutRef = useRef<number | null>(null);

  const themeData = themes[theme || Theme.light];

  const handleBlur = (fieldName: string) => {
    setTouched((touched) => ({
      ...touched,
      [fieldName]: true,
    }));

    validateForm();
  };

  const btnBgColor = useMemo(() => {
    let buttonBgColor = themeData.btnBgColor;

    if (isSubmitting || isFormSended) {
      buttonBgColor = "bg-white";
    }

    return buttonBgColor;
  }, [isSubmitting, isFormSended]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setValues({
      ...values,
      [name]: value,
    });
  };

  const validateForm = () => {
    const newErrors: any = {};

    if (!values.email) {
      newErrors.email = "Email is required field";
    } else if (!isValidEmail(values.email)) {
      newErrors.email = "Should be a valid email";
    }

    setErrors(newErrors);
    return newErrors;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
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

    try {
      const url =
        "https://api.hsforms.com/submissions/v3/integration/submit/139507789/432f0299-5045-4dd1-bf6b-b0615e9aca9e";

      const data = {
        submittedAt: Date.now(),
        fields: [
          {
            objectTypeId: "0-1",
            name: "email",
            value: values.email,
          },
        ],
        context: {
          // hutk: ":hutk", // include this parameter and set it to the hubspotutk cookie value to enable cookie tracking on your submission
          pageUri: location.href,
          pageName: location.href,
        },
        // legalConsentOptions: {
        //   // Include this object when GDPR options are enabled
        //   consent: {
        //     consentToProcess: true,
        //     text: "I agree to allow Example Company to store and process my personal data.",
        //     communications: [
        //       {
        //         value: true,
        //         subscriptionTypeId: 999,
        //         text: "I agree to receive marketing communications from Example Company.",
        //       },
        //     ],
        //   },
        // },
      };

      const final_data = JSON.stringify(data);

      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: final_data,
      });

      if (!response.ok) {
        const errorText = await response.text();

        if (response.status === 400) {
          throw new Error(`400 Bad Request: ${errorText}`);
        } else if (response.status === 403) {
          throw new Error(`403 Forbidden: ${errorText}`);
        } else if (response.status === 404) {
          throw new Error(`404 Not Found: ${errorText}`);
        } else {
          throw new Error(
            `Unexpected Error: ${response.status} - ${errorText}`
          );
        }
      }

      gtmSendEvent(event, values.email);

      setFormLabel(FormLabel.Success);
    } catch (error) {
      setFormLabel(FormLabel.Error);
    } finally {
      setValues(initialValue);
      setTouched(initialTouched);
      setIsSubmitting(false);
      setIsFormSended(true);

      timeoutRef.current = window?.setTimeout(() => {
        setFormLabel(() => FormLabel.Initial);
        setIsFormSended(false);
      }, 3500);
    }
  };

  useEffect(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }, []);

  useEffect(() => {
    validateForm();
  }, [values]);

  return (
    <div className={cn("flex justify-center flex-col", className)}>
      <div
        className={cn(
          "mb-8 whitespace-pre-line",
          inFooter ? "yw-h3" : "yw-h2",
          themeData.textColorPrimary
        )}
      >
        {title}
      </div>
      <form onSubmit={handleSubmit} className="flex items-center gap-6 w-full">
        <div className="relative form-field-email w-60 md:w-[323px]">
          <input
            type="email"
            name="email"
            value={values.email}
            className={cn(
              "text-lg h-10 sm:h-12 !px-3 !py-[10px] rounded-none",
              themeData.autoCompleteColor,
              themeData.inputTextColor,
              themeData.inputBorderColor
            )}
            onChange={handleChange}
            aria-label="Email"
            onBlur={() => handleBlur("email")}
          />
          <label
            htmlFor="email"
            className={cn(
              "yw-t1 px-3 top-3",
              formLabel === FormLabel.Error
                ? "text-[#ED5846]"
                : themeData.labelColor
            )}
          >
            {formLabel}
          </label>
          <p
            className="absolute bottom-0 translate-y-full form-error text-xs text-[#ED5846]"
            aria-live="assertive"
          >
            {touched.email ? errors.email : ""}
          </p>
        </div>
        <button
          className={cn(
            "rounded-full border border-solid w-10 h-10 sm:w-12 sm:h-12 flex justify-center items-center",
            themeData.btnBorderColor,
            btnBgColor
          )}
          type="submit"
        >
          {isSubmitting && <Loading fill="#000" />}
          {isFormSended && <CheckMarkSmall fill="#000" />}
          {!isFormSended && !isSubmitting && (
            <SmallArrow className="rotate-180" fill={themeData.btnArrowColor} />
          )}
        </button>
      </form>
    </div>
  );
};

export default SubscriptionForm;
