const data = require("./data");
const api = require("./api");

const locations = data.locations;
const currentYear = new Date().getFullYear();
const currentMonth = new Date().getMonth() + 1;
const currentDay = new Date().getDate();

function getDailyPrayerTimes(
  locationNumber,
  year = currentYear,
  month = currentMonth,
  day = currentDay
) {
  const daily = api.getDailyPrayerTimes(locationNumber, year, month, day).vakat;
  const prayerTimes = [];

  daily.forEach((vakat) => {
    prayerTimes.push({
      hours: vakat._data.hours,
      minutes: vakat._data.minutes,
    });
  });

  return {
    locationId: locationNumber,
    location: locations[locationNumber],
    date: { day, month, year },
    prayerTimes,
  };
}

function getMonthlyPrayerTimes(
  locationNumber,
  year = currentYear,
  month = currentMonth
) {
  const monthly = api.getMonthlyPrayerTimes(locationNumber, year, month);
  const prayerTimesByMonth = [];

  monthly.days.forEach((element) => {
    const vakats = [];
    element.vakat.forEach((vakat) => {
      vakats.push({
        hours: vakat._data.hours,
        minutes: vakat._data.minutes,
      });
    });

    prayerTimesByMonth.push({
      locationId: locationNumber,
      location: locations[locationNumber],
      date: {
        month,
        year,
      },
      prayerTimes: vakats,
    });
  });

  return prayerTimesByMonth;
}

function getYearlyPrayerTimes(locationNumber, year = currentYear) {
  const yearly = api.getYearlyPrayerTimes(locationNumber, year);
  const prayerTimesByYear = [];

  yearly.months.forEach((month, monthIndex) => {
    const monthArray = [];
    month.days.forEach((day, dayIndex) => {
      const vakats = [];
      day.vakat.forEach((vakat) => {
        vakats.push({
          hours: vakat._data.hours,
          minutes: vakat._data.minutes,
        });
      });
      monthArray.push({
        date: {
          day: dayIndex + 1,
          month: monthIndex + 1,
          year,
        },
        prayerTimes: vakats,
      });
    });

    prayerTimesByYear.push({
      locationId: locationNumber,
      location: locations[locationNumber],
      date: {
        year,
      },
      days: monthArray,
    });
  });

  return prayerTimesByYear;
}

module.exports = {
  getDailyPrayerTimes,
  getMonthlyPrayerTimes,
  getYearlyPrayerTimes,
};
