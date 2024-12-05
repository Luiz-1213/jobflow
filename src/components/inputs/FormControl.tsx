import { useFormContext } from "react-hook-form";
// Styles
import styles from "./FormControl.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons/faCircleCheck";
import { faCircleExclamation } from "@fortawesome/free-solid-svg-icons";

type Props = {
  name: string;
  label: string;
  type: string;
  placeholder?: string;
};

const FormControl = ({ name, label, type, placeholder }: Props) => {
  const {
    register,
    formState: { errors, touchedFields },
  } = useFormContext();

  return (
    <div className={styles.form_control}>
      <label>{label}</label>
      <input
        type={type}
        {...register(name)}
        placeholder={placeholder}
        className={
          touchedFields[name]
            ? !errors[name]
              ? `${styles.sucess}`
              : `${styles.error}`
            : ""
        }
      />
      {touchedFields[name] ? (
        !errors[name] ? (
          <FontAwesomeIcon
            icon={faCircleCheck}
            className={styles.sucess_icon}
          />
        ) : (
          <FontAwesomeIcon
            icon={faCircleExclamation}
            className={styles.error_icon}
          />
        )
      ) : (
        <></>
      )}

      {errors[name] && (
        <span className={styles.label_error}>
          {errors[name].message as string}
        </span>
      )}
    </div>
  );
};

export default FormControl;
