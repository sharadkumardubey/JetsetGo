export const formatTime = (dateTimeString) => {
  const date = new Date(dateTimeString);

  let hours = date.getHours();
  let minutes = date.getMinutes();

  const amPM = hours >= 12 ? "PM" : "AM";
  hours = hours % 12 || 12;
  minutes = minutes < 10 ? "0" + minutes : minutes;

  const formattedTime = hours + ":" + minutes + " " + amPM;

  return formattedTime;
};

export const durationToMinutes = (durationStr) => {
  const [hours, minutes] = durationStr.split("h ");
  return parseInt(hours) * 60 + parseInt(minutes);
};
