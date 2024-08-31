export const parseDate = (value: string) => {
  const date = new Date(value);
  const parsedDate = date.toLocaleDateString();
  const parsedTime = date
    .toLocaleTimeString()
    .split(':')
    ?.slice(0, -1)
    ?.join(':');
  return parsedDate + ' ' + parsedTime;
};
