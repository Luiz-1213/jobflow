import z from "zod";
import { validatePhone } from "./validations";

// valores padrões de validação

export const curriculumSchema = z.object({
  personalDate: z.object({
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
  }),
  academic: z.array(
    z.object({
      institution: z
        .string()
        .min(3, "O nome é obrigatório")
        .max(25, "Limite de 25 caracteres"),
      degree: z.enum(["1", "2", "3", "4", "5", "6", "7", "8", "9"], {
        message: "A formação deve ser válida",
      }),
      filedOfStudy: z
        .string()
        .min(5, "A área de formação deve ter mais de 5 caracteres")
        .max(25, "Limite de 25 caracteres"),
      startMonth: z.enum(
        ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"],
        { message: "O campo deve ser um mês válido" }
      ),
      startYear: z.string().refine(
        (value) => {
          let newValue = parseInt(value);
          if (Number.isNaN(newValue)) return false;

          if (newValue < 1950 || newValue >= 2024) {
            return false;
          } else {
            return true;
          }
        },
        { message: " Data inválida" }
      ),
      endMonth: z.enum(
        ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"],
        { message: "O campo deve ser um mês válido" }
      ),
      endYear: z.string().refine(
        (value) => {
          let newValue = parseInt(value);

          if (Number.isNaN(newValue)) return false;

          if (newValue < 1950 || newValue > 2070) {
            return false;
          } else {
            return true;
          }
        },
        { message: " Data inválida" }
      ),
    })
  ),
  experiences: z.array(
    z.object({
      position: z.string(),
      employmentType: z.enum(["1", "2", "3", "4", "5", "6", "7", "8", "9"], {
        message: "O campo deve ser um emprego válido",
      }),
      employmentMode: z.enum(["1", "2", "3"], {
        message: "A modalidade  deve ser válida",
      }),
      employer: z.string(),
      location: z.string(),
      startMonth: z.enum(
        ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"],
        { message: "O campo deve ser um mês válido" }
      ),
      startYear: z
        .number()
        .gte(1950, "O ano deve ser maior que 1950")
        .lte(2024, "O ano deve ser maior que 2024"),
      endMonth: z.enum(
        ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"],
        { message: "O campo deve ser um mês válido" }
      ),
      endYear: z
        .number()
        .gte(1950, "O ano deve ser maior que 1950")
        .lte(2024, "O ano deve ser maior que 2024"),
      description: z.string(),
    })
  ),
  skills: z.array(
    z.object({
      skill: z.string(),
      level: z.string(),
      isCertificated: z.boolean(),
    })
  ),
  description: z.string(),
});
