import Steps from "../components/Steps";
import AcademicForm from "../components/form/AcademicForm";
import AddressForm from "../components/form/AddressForm";
import ExperienceForm from "../components/form/ExperienceForm";
import PersonalDataForm from "../components/form/PersonalDataForm";
import SkillsForm from "../components/form/SkillsForm";
import { useForm } from "../hooks/useForm";

import styles from "./Formpage.module.css";

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

  const { currentStep, currentComponent, changeStep, isLastStep, isFirtsStep } =
    useForm(formComponents);
  return (
    <div className={styles.form_container}>
      <Steps currentStep={currentStep} stepLength={formComponents.length} />
      {currentComponent}
      <button>Próximo</button>
      <button onClick={() => changeStep(currentStep - 1)}>Voltar</button>
    </div>
  );
};

export default FormPage;
