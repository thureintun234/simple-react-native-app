export function convertToMonthDay(dateString) {
  const date = new Date(dateString);
  const options = { month: 'long', day: 'numeric' };
  return date.toLocaleString('en-US', options);
}
