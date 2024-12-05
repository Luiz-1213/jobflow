import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faGraduationCap,
  faBriefcase,
  faLightbulb,
  faMapMarkedAlt,
} from "@fortawesome/free-solid-svg-icons";

import styles from "./Steps.module.css";
import ProgressBar from "./progressBar/ProgressBar";

type Props = {
  currentStep: number;
  stepLength: number;
};

const Steps = ({ currentStep, stepLength }: Props) => {
  return (
    <div className={styles.steps_container}>
      <ProgressBar currentStep={currentStep} />
      <div className={styles.steps}>
        <div
          className={`${styles.step_content} ${
            currentStep === 0 ? `${styles.active}` : ""
          }`}
        >
          <FontAwesomeIcon icon={faUser} />
          <p>Dados Pessoais</p>
        </div>
        <div
          className={`${styles.step_content} ${
            currentStep === 1 ? `${styles.active}` : ""
          }`}
        >
          <FontAwesomeIcon icon={faGraduationCap} />
          <p>Formação Acadêmica</p>
        </div>
        <div
          className={`${styles.step_content} ${
            currentStep === 2 ? `${styles.active}` : ""
          }`}
        >
          <FontAwesomeIcon icon={faBriefcase} />
          <p>Experiência</p>
        </div>
        <div
          className={`${styles.step_content} ${
            currentStep === 3 ? `${styles.active}` : ""
          }`}
        >
          <FontAwesomeIcon icon={faLightbulb} />
          <p>Habilidades</p>
        </div>
        <div
          className={`${styles.step_content} ${
            currentStep === 4 ? `${styles.active}` : ""
          }`}
        >
          <FontAwesomeIcon icon={faMapMarkedAlt} />
          <p>Endereço</p>
        </div>
      </div>
      <p>
        Etapa {currentStep + 1} de {stepLength}{" "}
      </p>
    </div>
  );
};

export default Steps;
