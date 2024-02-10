export const formatTime = (time: string): string => {
  const data = new Date(time);

  const hour = String(data.getUTCHours()).padStart(2, '0');
  const minutes = String(data.getUTCMinutes()).padStart(2, '0');

  return `${hour}:${minutes}`;
};
