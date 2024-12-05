import { FormProvider, useForm } from "react-hook-form";
import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import FormControl from "../inputs/FormControl";
import styles from "./FormStyles.module.css";
import { validateCPF, validatePhone } from "../../utils/validations";
import { useEffect } from "react";
import { normalizeCPF, normalizePhoneNumber } from "../../utils/masks";
import { data } from "react-router-dom";

type Props = {
  onSubmit(data: any): any;
};

const PersonalDataForm = ({ onSubmit }: Props) => {
  // definir esquema de validação
  const personalDataSchema = z.object({
    firstName: z
      .string()
      .min(3, "O nome deve ter no minimo 3 caracteres")
      .max(25, "O nome não deve ultrapssar 25 caracteres"),
    lastName: z
      .string()
      .min(3, "O nome deve ter no minimo 3 caracteres")
      .max(25, "O nome não deve ultrapssar 25 caracteres"),
    email: z.string().email("O e-mail deve ser válido"),
    phoneNumber: z
      .string()
      .min(0, "O número é inválido")
      .refine((phoneNumber) => validatePhone(phoneNumber), {
        message: "Número de telefone inválido",
      }),
    birthday: z.string().date(),
    cpf: z
      .string()
      .min(14, "O cpf deve seguir o padrão XXX.XXX.XXX-XX")
      .optional()
      .refine((cpf) => validateCPF(cpf), {
        message: "CPF inválido",
      }),
  });

  const methods = useForm<personalSchemaForm>({
    resolver: zodResolver(personalDataSchema),
    mode: "all",
  });

  const phoneValue = methods.watch("phoneNumber");
  const cpfValue = methods.watch("cpf");

  // Mascaras de Inputs
  useEffect(() => {
    methods.setValue("phoneNumber", normalizePhoneNumber(phoneValue));
  }, [phoneValue]);

  useEffect(() => {
    methods.setValue("cpf", normalizeCPF(cpfValue));
  }, [cpfValue]);

  // Typando o retorno dos inputs
  type personalSchemaForm = z.infer<typeof personalDataSchema>;

  const handleSubmit = (data: personalSchemaForm) => {
    onSubmit(data);
  };

  return (
    <FormProvider {...methods}>
      <form
        className={styles.form}
        onSubmit={methods.handleSubmit(handleSubmit)}
      >
        <h2>Queremos te conhecer melhor...</h2>
        <p>Pronto para se apresentar?</p>
        <FormControl
          name={"firstName"}
          label={"Nome:"}
          type={"text"}
          placeholder="Digite seu primeiro nome"
        />
        <FormControl
          name={"lastName"}
          label={"Sobrenome:"}
          type={"text"}
          placeholder="Digite seu sobrenome"
        />
        <FormControl
          name={"birthday"}
          label={"Data de nascimento:"}
          type={"date"}
        />
        <FormControl
          name={"email"}
          label={"E-mail:"}
          type={"email"}
          placeholder="Digite seu email"
        />
        <FormControl
          name={"phoneNumber"}
          label={"Telefone:"}
          type={"text"}
          placeholder="Ex: (19) 98387-7865"
        />

        <FormControl
          name={"cpf"}
          label={"CPF:"}
          type={"text"}
          placeholder="Ex: XXX.XXX.XXX-XX"
        />
        <button type="submit">Aperte aqui</button>
        <button type="submit">Aperte aqui</button>
      </form>
    </FormProvider>
  );
};

export default PersonalDataForm;
