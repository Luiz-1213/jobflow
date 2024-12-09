import { FormProvider, useForm } from "react-hook-form";
import Steps from "../components/Steps";
import AcademicForm from "../components/form/AcademicForm";
import AddressForm from "../components/form/AddressForm";
import ExperienceForm from "../components/form/ExperienceForm";
import PersonalDataForm from "../components/form/PersonalDataForm";
import SkillsForm from "../components/form/SkillsForm";
import { useChangeStep } from "../hooks/useChangeStep";

import z from "zod";

import styles from "./Formpage.module.css";
import { curriculumSchema } from "../utils/validationsSchema";
import { zodResolver } from "@hookform/resolvers/zod";

const FormPage = () => {
  const onSubmit = (data: any) => {
    console.log(data);
    changeStep(currentStep + 1);
  };
  const formComponents = [
    <PersonalDataForm onSubmit={onSubmit} />,
    <AcademicForm />,
    <ExperienceForm />,
    <SkillsForm />,
    <AddressForm />,
  ];

  const { currentStep, currentComponent, changeStep, isFirtsStep } =
    useChangeStep(formComponents);

  // Typando o retorno dos inputs
  type curriculumSchemaForm = z.infer<typeof curriculumSchema>;

  const methods = useForm<curriculumSchemaForm>({
    resolver: zodResolver(curriculumSchema),
    mode: "all",
  });

  console.log(methods.formState.errors);
  console.log(methods.formState.errors?.personalDate?.firstName?.message);

  return (
    <div className={styles.form_container}>
      <Steps currentStep={currentStep} stepLength={formComponents.length} />
      <FormProvider {...methods}>
        {currentComponent}
        <div>
          {!isFirtsStep && (
            <button onClick={() => changeStep(currentStep - 1)}>Voltar</button>
          )}
          <button onClick={() => changeStep(currentStep + 1)}>Avançar</button>
        </div>
      </FormProvider>
    </div>
  );
};

export default FormPage;
