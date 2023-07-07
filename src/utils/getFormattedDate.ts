interface GetFormattedDateProps {
  date?: Date | undefined;
}

export function getFormattedDate({ date = new Date() }: GetFormattedDateProps) {
  return {
    day: date.toLocaleDateString('pt-BR', { day: '2-digit' }),
    month: date.toLocaleDateString('pt-BR', { month: 'long' }),
    year: date.toLocaleDateString('pt-BR', { year: 'numeric' }),
  };
}
