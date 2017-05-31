const ONE_SECOND = 1000;
const ONE_MINUTE = ONE_SECOND * 60;
const ONE_HOUR = ONE_MINUTE * 60;
const ONE_DAY = ONE_HOUR * 24;

export default function humanizeTime (then: Date | number, now: Date | number = new Date()) {
  const diff = Math.abs(Number(now) - Number(then));
  if (diff < ONE_MINUTE) {
    return 'a few seconds';
  } else if (diff < ONE_HOUR) {
    const minutes = Math.round(diff / ONE_MINUTE);
    return minutes + ' ' + (minutes === 1 ? 'minute' : 'minutes');
  } else if (diff < ONE_DAY) {
    const hours = Math.round(diff / ONE_HOUR);
    return hours + ' ' + (hours === 1 ? 'hour' : 'hours');
  } else {
    const days = Math.round(diff / ONE_DAY);
    return days + ' ' + (days === 1 ? 'day' : 'days');
  }
}
