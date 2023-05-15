const zipCodeMask = [/\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/];

const phoneMask = [
  // eslint-disable-next-line prettier/prettier
  '+',
  '5',
  '5',
  ' ',
  '(',
  /\d/,
  /\d/,
  ')',
  ' ',
  /\d/,
  /\d/,
  /\d/,
  /\d/,
  /\d/,
  '-',
  /\d/,
  /\d/,
  /\d/,
  /\d/,
];

const dateMask = [/\d/, /\d/, '/', /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/];

const cpfMask = [
  // eslint-disable-next-line prettier/prettier
  /\d/,
  /\d/,
  /\d/,
  '.',
  /\d/,
  /\d/,
  /\d/,
  '.',
  /\d/,
  /\d/,
  /\d/,
  '-',
  /\d/,
  /\d/,
];

export const mask = {
  cpf: cpfMask,
  phone: phoneMask,
  date: dateMask,
  zipCode: zipCodeMask,
};
