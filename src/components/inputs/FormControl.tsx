import React from "react";
import { useFormContext } from "react-hook-form";
import styles from "./FormControl.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleCheck,
  faCircleExclamation,
} from "@fortawesome/free-solid-svg-icons";



interface Props {
  label: string;
  type:
    | "text"
    | "number"
    | "email"
    | "password"
    | "textarea"
    | "select"
    | "checkbox"
    | "radio";
  name: string; // Nome do campo
  field: string; // Nome do grupo (objeto ou array)
  index?: number; // Índice para arrays
  placeholder?: string;
  options?: { value: string | number; label: string }[];
  rows?: number;
}

const FormControl = ({
  label,
  type,
  name,
  field,
  index,
  placeholder,
  options,
  rows,
}: Props) => {
  const {
    register,
    formState: { errors, touchedFields },
  } = useFormContext();

  const fieldPath =
    index !== undefined ? `${field}[${index}].${name}` : `${field}.${name}`;
  const isTouched =
    index !== undefined
      ? touchedFields?.[field]?.[index as number]?.[name]
      : touchedFields?.[field]?.[name];

  const error =
    index !== undefined
      ? errors?.[field]?.[index]?.[name]
      : errors?.[field]?.[name];

  const isValid = isTouched && !error;

  const renderInput = () => {
    switch (type) {
      case "textarea":
        return (
          <textarea
            {...register(fieldPath)}
            placeholder={placeholder}
            rows={rows}
            className={[
              styles.input,
              isTouched ? (isValid ? styles.success : styles.error) : "",
            ].join(" ")}
          />
        );
      case "select":
        return (
          <select
            {...register(fieldPath)}
            className={[
              styles.input,
              isTouched ? (isValid ? styles.success : styles.error) : "",
            ].join(" ")}
          >
            {options?.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        );
      case "checkbox":
      case "radio":
        return (
          <div className={styles.checkbox_group}>
            {options?.map((option) => (
              <label key={option.value} className={styles.checkbox_label}>
                <input
                  type={type}
                  {...register(fieldPath)}
                  value={option.value}
                />
                {option.label}
              </label>
            ))}
          </div>
        );
      default:
        return (
          <input
            type={type}
            {...register(fieldPath)}
            placeholder={placeholder}
            className={[
              styles.input,
              isTouched ? (isValid ? styles.success : styles.error) : "",
            ].join(" ")}
          />
        );
    }
  };

  return (
    <div className={styles.form_control}>
      <label>{label}</label>
      {renderInput()}
      {isTouched && (
        <FontAwesomeIcon
          icon={isValid ? faCircleCheck : faCircleExclamation}
          className={isValid ? styles.success_icon : styles.error_icon}
        />
      )}
      {error && (
        <span className={styles.label_error}>{error.message as string}</span>
      )}
    </div>
  );
};

export default FormControl;
