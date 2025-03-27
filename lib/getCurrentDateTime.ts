export function getCurrentDateAndTime() {
  // Create a new Date object
  const now = new Date();

  // Get the date components
  const day = String(now.getDate()).padStart(2, "0"); // Get day and pad with leading zero if needed
  const month = String(now.getMonth() + 1).padStart(2, "0"); // Get month (0-indexed) and pad with leading zero
  const year = now.getFullYear(); // Get full year

  // Get the time components
  let hours = now.getHours(); // Get hours
  const minutes = String(now.getMinutes()).padStart(2, "0"); // Get minutes and pad with leading zero
  const ampm = hours >= 12 ? "PM" : "AM"; // Determine AM/PM

  hours = hours % 12; // Convert to 12-hour format
  hours = hours ? hours : 12; // If hour is 0, make it 12

  // Format the date and time
  const currentDate = `${day}-${month}-${year}`;
  const currentTime = `${hours}:${minutes} ${ampm}`;

  return { currentDate, currentTime };
}
