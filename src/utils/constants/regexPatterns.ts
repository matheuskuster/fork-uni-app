export const regexPatterns = {
  cpf: /^\d{3}\.\d{3}\.\d{3}-\d{2}$/,
  email: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
  personalFullName: /^[A-ZÀ-Úa-zà-ú~]{3,30}(?: [A-ZÀ-Úa-zà-ú~]{2,30})+$/iu,
  generalName: /^[A-Z][a-z]+(?: [A-Z][a-z]+)*$/i,
  address: /^[A-ZÀ-Úa-zà-ú~0-9\s,.-]{2,}$/iu,
  birthDate: /^\d{2}\/\d{2}\/\d{4}$/,
  internationalPhone:
    /^\+55\s?\(?([1-9]{2})\)?\s?(?:9[1-9]|[2-9][0-9])\d{3}-?\d{4}$/i,
  cep: /^\d{5}-?\d{3}$/,
};
