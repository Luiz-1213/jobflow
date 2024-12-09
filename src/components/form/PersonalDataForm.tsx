import FormControl from "../inputs/FormControl";
import styles from "./FormStyles.module.css";

type Props = {
  onSubmit(data: any): any;
};

const PersonalDataForm = ({ onSubmit }: Props) => {
  return (
    <form className={styles.form}>
      <h2>Queremos te conhecer melhor...</h2>
      <p>Pronto para se apresentar?</p>
      <FormControl
        name={"firstName"}
        label={"Nome:"}
        type={"text"}
        placeholder="Digite seu primeiro nome"
        field={"personalDate"}
      />
      <FormControl
        name={"lastName"}
        label={"Sobrenome:"}
        type={"text"}
        placeholder="Digite seu sobrenome"
        field={"personalDate"}
      />

      <FormControl
        name={"email"}
        label={"E-mail:"}
        type={"email"}
        placeholder="Digite seu email"
        field={"personalDate"}
      />
      <FormControl
        name={"phoneNumber"}
        label={"Telefone:"}
        type={"text"}
        placeholder="Ex: (19) 98387-7865"
        field={"personalDate"}
      />
    </form>
  );
};

export default PersonalDataForm;
