import styles from "./ProgressBar.module.css";

type Props = {
  currentStep: number;
};


const progressValuesArray: number[] = [60, 210, 360, 470, 530];

const ProgressBar = ({ currentStep }: Props) => {
  return (
    <div className={styles.progress_bar}>
      <div
        className={styles.progress_bar_content}
        style={{ width: `${progressValuesArray[currentStep]}px` }}
      ></div>
    </div>
  );
};

export default ProgressBar;
