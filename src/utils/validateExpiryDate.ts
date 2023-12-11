export function validateExpiryDate(date: string) {
  let [month, year] = date.split('/');

  const currentMonth = new Date().getMonth() + 1;
  const currentYear = new Date().getFullYear();

  if (year.length === 2) {
    year = `20${year}`;
  }

  if (
    Number(year) < currentYear ||
    (Number(month) < currentMonth && Number(year) === currentYear) ||
    Number(month) > 12
  )
    return 'Cartão vencido';

  return true;
}
