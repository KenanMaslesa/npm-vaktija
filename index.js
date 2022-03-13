const data = require("./data");
const api = require("./api");
const cities = require("./locations.json");

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

  for(let i = 0; i < daily.length; i++){
    prayerTimes.push({
      hours: daily[i]._data.hours,
      minutes: daily[i]._data.minutes,
    });
  }
  const midleNight = midleNightAndlastThirdOrMidnight(2, daily[0]._data, daily[4]._data);
  const lastThirdOfNight = midleNightAndlastThirdOrMidnight(3, daily[0]._data, daily[4]._data);
  prayerTimes.push(midleNight);
  prayerTimes.push(lastThirdOfNight);

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
    for(let i = 0; i < element.vakat.length; i++)
    {
      vakats.push({
        hours: element.vakat[i]._data.hours,
        minutes: element.vakat[i]._data.minutes,
      });
    }
    const midleNight = midleNightAndlastThirdOrMidnight(2, element.vakat[0]._data, element.vakat[4]._data);
    const lastThirdOfNight = midleNightAndlastThirdOrMidnight(3, element.vakat[0]._data, element.vakat[4]._data);
    vakats.push(midleNight);
    vakats.push(lastThirdOfNight);

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
      for(let i = 0; i < day.vakat.length; i++)
      {
        vakats.push({
          hours: day.vakat[i]._data.hours,
          minutes: day.vakat[i]._data.minutes,
        });
      }
      const midleNight = midleNightAndlastThirdOrMidnight(2, day.vakat[0]._data, day.vakat[4]._data);
      const lastThirdOfNight = midleNightAndlastThirdOrMidnight(3, day.vakat[0]._data, day.vakat[4]._data);
      vakats.push(midleNight);
      vakats.push(lastThirdOfNight);

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

function midleNightAndlastThirdOrMidnight(number, fajr, magrib) {
  var magribTime = new Date();
  magribTime.setHours(magrib.hours);
  magribTime.setMinutes(magrib.minutes);
  magribTime.setSeconds(0);

  var fajrTime = new Date();
  fajrTime.setDate(fajrTime.getDate() + 1);

  fajrTime.setHours(fajr.hours);
  fajrTime.setMinutes(fajr.minutes);
  fajrTime.setSeconds(0);

  var diferenceMiliseconds = fajrTime - magribTime;

  var Miliseconds = diferenceMiliseconds / number;
  var hours = Math.floor((Miliseconds % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((Miliseconds % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((Miliseconds % (1000 * 60)) / 1000);


  var lastThirdOrMidnight = new Date(fajrTime);
  lastThirdOrMidnight.setHours(fajrTime.getHours() - hours);
  lastThirdOrMidnight.setMinutes(fajrTime.getMinutes() - minutes);
  lastThirdOrMidnight.setSeconds(fajrTime.getSeconds() - seconds);

  var lastThirdOrMidnightHours = lastThirdOrMidnight.getHours();
  var lastThirdOrMidnightMinutes = lastThirdOrMidnight.getMinutes();
  return {hours: lastThirdOrMidnightHours, minutes: lastThirdOrMidnightMinutes};

}

function getLocations() {
  return cities;
}

module.exports = {
  getLocations,
  getDailyPrayerTimes,
  getMonthlyPrayerTimes,
  getYearlyPrayerTimes,
};
