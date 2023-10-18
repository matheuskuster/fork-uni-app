import { parsePhoneNumber } from 'libphonenumber-js';

export function formatPhoneNumber(phone: string) {
  const phoneNumber = parsePhoneNumber(phone);

  if (!phoneNumber) {
    return phone;
  }

  return phoneNumber.formatInternational();
}
