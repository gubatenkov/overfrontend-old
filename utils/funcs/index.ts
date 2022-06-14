const months = [
  'January',
  'Febrary',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

export function getDayStrFromTstamp(timestamp: string): string {
  const date = new Date(timestamp);
  const day = date.getUTCDate();
  if (day < 10) return `0${day}`;
  return `${day}`;
}

export function getMonthStrFromTstamp(timestamp: string): string {
  const date = new Date(timestamp);
  const month = date.getUTCMonth();
  return months[month].slice(0, 3);
}

export function getDateStrFromTstamp(timestamp: string) {
  const date = new Date(timestamp);
  const day = date.getUTCDate();
  const month = date.getUTCMonth();
  const year = date.getUTCFullYear();
  return `${day} ${months[month]}, ${year}`;
}
