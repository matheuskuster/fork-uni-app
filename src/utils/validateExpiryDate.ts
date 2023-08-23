export function validateExpiryDate(date: string) {
  const [month, year] = date.split('/');

  const currentMonth = new Date().getMonth() + 1;
  const currentYear = new Date().getFullYear();

  if (
    Number(year) < currentYear ||
    (Number(month) < currentMonth && Number(year) === currentYear)
  )
    return 'Cartão vencido';

  return true;
}
