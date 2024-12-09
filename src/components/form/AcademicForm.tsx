import { useFieldArray, useFormContext } from "react-hook-form";
import FormControl from "../inputs/FormControl";
import { months, educationOptions } from "../../utils/validations";
import styles from "./FormStyles.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

// Componente do formulário acadêmico
const AcademicForm = () => {
  const { control } = useFormContext();
  const { fields, append, remove } = useFieldArray({
    control,
    name: "academic",
  });

  return (
    <div className={styles.form}>
      <h2>🎓 Vamos falar sobre sua formação acadêmica!</h2>
      <p>
        Cada experiência conta! Conte-nos sobre suas instituições, áreas de
        estudo e progressos. Seus dados ajudarão a destacar suas habilidades e
        sua trajetória de aprendizado
      </p>

      {fields.map((field, index) => (
        <div key={field.id} className={styles.form_grid}>
          <FormControl
            label={"Instituição de Ensino"}
            type={"text"}
            name={"institution"}
            field={"academic"}
            placeholder={"USP"}
            index={index}
          ></FormControl>
          <FormControl
            label={"Formação"}
            type={"select"}
            name={"degree"}
            field={"academic"}
            index={index}
            options={educationOptions.map((option) => ({
              value: option.key,
              label: option.value,
            }))}
          ></FormControl>
          <FormControl
            label={"Mês de Início"}
            type={"select"}
            name={"startMonth"}
            field={"academic"}
            index={index}
            options={months.map((month) => ({
              value: month.key,
              label: month.value,
            }))}
          ></FormControl>
          <FormControl
            label={"Ano de Início"}
            type={"number"}
            name={"startYear"}
            field={"academic"}
            placeholder={"2020"}
            index={index}
          ></FormControl>
          <FormControl
            label={"Mês de Formação"}
            type={"select"}
            name={"endMonth"}
            field={"academic"}
            index={index}
            options={months.map((month) => ({
              value: month.key,
              label: month.value,
            }))}
          ></FormControl>
          <FormControl
            label={"Ano de Formação"}
            type={"number"}
            name={"endYear"}
            field={"academic"}
            placeholder={"2025"}
            index={index}
          ></FormControl>
          {index !== 0 && (
            <button
              type="button"
              onClick={() => remove(index)}
              className={styles.remove_btn}
            >
              <FontAwesomeIcon icon={faXmark} />
            </button>
          )}
        </div>
      ))}
      {fields.length <= 2 && (
        <p>Adicione até 3 formações e aumente seu repertório</p>
      )}

      {fields.length <= 2 && (
        <button
          type="button"
          onClick={() => append({ institution: "", degree: 0 })}
        >
          Adicionar Formação
        </button>
      )}
    </div>
  );
};

export default AcademicForm;
