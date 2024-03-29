function formatToString(value: number): string {
  return value.toString().padStart(2, '0');
}

type Time = {
  hours: number;
  minutes: number;
  seconds: number;
};

function numberToTime(number: number): Time {
  if (number < 0) {
    return {hours: 0, minutes: 0, seconds: 0};
  }

  const hours = Math.floor(number / 3600);
  const minutes = Math.floor((number - hours * 3600) / 60);
  const seconds = number - hours * 3600 - minutes * 60;

  return {hours, minutes, seconds};
}

export {formatToString, numberToTime};
