export const formatTime = (time: Date): string => {
  const data = new Date(time);

  const hour = String(data.getHours()).padStart(2, '0');
  const minutes = String(data.getMinutes()).padStart(2, '0');

  return `${hour}:${minutes}`;
};
