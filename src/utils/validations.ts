export function validateCPF(cpf: string | undefined) {
  if (!cpf) {
    return false;
  }
  cpf = cpf.replace(/[^\d]+/g, "");

  if (cpf.length !== 11 || /^(\d)\1+$/.test(cpf)) {
    return false;
  }

  let soma = 0;
  for (let i = 1; i <= 9; i++) {
    soma += parseInt(cpf.substring(i - 1, i)) * (11 - i);
  }
  let resto = (soma * 10) % 11;
  if (resto === 10 || resto === 11) resto = 0;
  if (resto !== parseInt(cpf.substring(9, 10))) return false;

  soma = 0;
  for (let i = 1; i <= 10; i++) {
    soma += parseInt(cpf.substring(i - 1, i)) * (12 - i);
  }
  resto = (soma * 10) % 11;
  if (resto === 10 || resto === 11) resto = 0;
  if (resto !== parseInt(cpf.substring(10, 11))) return false;

  return true;
}

export function validatePhone(phone: string) {
  // Regex para validar o formato (XX) XXXXX-XXXX
  const regex = /^\(\d{2}\) \d{5}-\d{4}$/;
  if (!regex.test(phone)) {
    return false;
  }

  // Remove caracteres não numéricos e verifica o DDD
  const phoneNumber = phone.replace(/\D/g, "");
  const firstDigit = phoneNumber.charAt(2); // Primeiro dígito do telefone

  // Verifica se o primeiro dígito do telefone é 9 (para celulares no Brasil)
  if (firstDigit !== "9") {
    return false;
  }

  return true;
}
