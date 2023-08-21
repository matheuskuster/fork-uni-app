import { weekDays } from './constants/weekDays';
import { getFormattedDate } from './getFormattedDate';

export function getFormattedNextBoardingDate(date: Date) {
  const nextDate = new Date(date);
  const nextDateFormatted = `${
    getFormattedDate({
      date: nextDate,
    }).day
  } de ${
    getFormattedDate({
      date: nextDate,
    })
      .month.charAt(0)
      .toUpperCase() +
    getFormattedDate({
      date: nextDate,
    }).month.slice(1)
  }`;

  return {
    nextDateFormatted,
    nextWeekDay: weekDays[nextDate.getDay()],
  };
}
