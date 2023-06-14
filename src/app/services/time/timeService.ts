import * as months from './monthsList';

export function getCurrentMonth(): any {
  const currMonth = new Date().getMonth().toString();

  for (const [key, value] of Object.entries(months.monthsPL)) {
    if (key === currMonth) {
      return value;
    }
  }
}

export function getCurrentYear(): any {
  return new Date().getFullYear();
}
