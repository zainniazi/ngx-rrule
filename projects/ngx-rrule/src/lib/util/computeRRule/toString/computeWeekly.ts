import RRule from "rrule";

const computeWeekly = ({ interval, days }) => ({
  freq: RRule.WEEKLY,
  interval,
  byweekday: Object.values(days).reduce(
    (activeDays: [], isDayActive, dayIndex) =>
      isDayActive ? [...activeDays, dayIndex] : activeDays,
    []
  ),
});

export default computeWeekly;
