export const getCurrentTimeFormatted = (): string => {
  const now = new Date();
  let hours = now.getHours();
  const minutes = now.getMinutes();
  const period = hours >= 12 ? "PM" : "AM";

  // Convert to 12-hour format
  hours = hours % 12;
  hours = hours ? hours : 12; // If hours is 0, convert to 12

  // Add leading zero to minutes if needed
  const minutesFormatted = minutes < 10 ? `0${minutes}` : minutes;

  return `${hours}:${minutesFormatted} ${period}`;
};
