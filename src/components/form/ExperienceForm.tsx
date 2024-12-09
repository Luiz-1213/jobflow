import { useFieldArray, useFormContext } from "react-hook-form";
import FormControl from "../inputs/FormControl";
import { months, employmentTypes } from "../../utils/validations";
import styles from "./FormStyles.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import AutoCompleteInput from "../inputs/AutoCompleteInput";

// Componente do formulário acadêmico
const ExperienceForm = () => {
  const { control } = useFormContext();
  const { fields, append, remove } = useFieldArray({
    control,
    name: "experiences",
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
            label={"Cargo:"}
            type={"text"}
            name={"position"}
            field={"experiences"}
            placeholder={"Design Gráfico"}
            index={index}
          ></FormControl>
          <FormControl
            label={"Tipo de emprego"}
            type={"select"}
            name={"employmentType"}
            field={"experiences"}
            index={index}
            options={employmentTypes.map((option) => ({
              value: option.key,
              label: option.value,
            }))}
          ></FormControl>
          <FormControl
            label={"Modalidade"}
            type={"select"}
            name={"employmentMode"}
            field={"experiences"}
            index={index}
            options={[
              { value: 0, label: "Selecione a modalidade" },
              { value: 1, label: "Presencial" },
              { value: 2, label: "Hidrído" },
              { value: 3, label: "Home Office" },
            ]}
          ></FormControl>

          <AutoCompleteInput />
          <FormControl
            label={"Localização"}
            type={"select"}
            name={"location"}
            field={"experiences"}
            index={index}
            options={[
              { value: 0, label: "Selecione a modalidade" },
              { value: 1, label: "Presencial" },
              { value: 2, label: "Hidrído" },
              { value: 3, label: "Home Office" },
            ]}
          ></FormControl>
          <FormControl
            label={"Mês de Início"}
            type={"select"}
            name={"startMonth"}
            field={"experiences"}
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
            field={"experiences"}
            placeholder={"2020"}
            index={index}
          ></FormControl>
          <FormControl
            label={"Mês de Formação"}
            type={"select"}
            name={"endMonth"}
            field={"experiences"}
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
            field={"experiences"}
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

export default ExperienceForm;
