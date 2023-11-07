import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';

import 'dayjs/locale/pt-br';
import { capitalizeFirstLetter } from './capitalizeFirstLetter';

dayjs.extend(utc);

export function getFormattedNextBoardingDate(date: Date) {
  const utcDate = dayjs(date).locale('pt-br').utc();

  const month = capitalizeFirstLetter(utcDate.format('MMMM'));

  return {
    nextDateFormatted: utcDate.format(`DD [de] [${month}]`),
    nextWeekDay: utcDate.format('dddd').toUpperCase(),
  };
}
