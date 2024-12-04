import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faGraduationCap,
  faBriefcase,
  faLightbulb,
  faMapMarkedAlt,
} from "@fortawesome/free-solid-svg-icons";

import styles from "./Progressbar.module.css";
import { useState } from "react";

const ProgressBar = () => {
  const [isActive, setIsActive] = useState<boolean>(true);
  return (
    <div className={styles.progress_bar_container}>
      <div className={styles.progress_bar}></div>
      <div className={styles.steps}>
        <div className={`${styles.step_content} ${isActive ? "active" : ""}`}>
          <FontAwesomeIcon icon={faUser} />
          <p>Dados Pessoais</p>
        </div>
        <div className={styles.step_content}>
          <FontAwesomeIcon icon={faGraduationCap} />
          <p>Formação Acadêmica</p>
        </div>
        <div className={styles.step_content}>
          <FontAwesomeIcon icon={faBriefcase} />
          <p>Experiência</p>
        </div>
        <div className={styles.step_content}>
          <FontAwesomeIcon icon={faLightbulb} />
          <p>Habilidades</p>
        </div>
        <div className={styles.step_content}>
          <FontAwesomeIcon icon={faMapMarkedAlt} />
          <p>Endereço</p>
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;
