const moment = require("moment");
const data = require("./data");

const vaktija = data.vaktija;
const differences = data.differences;

function getDailyPrayerTimes(locationNumber, year, month, day) {
  const location = locationNumber;

  if (moment([year, month - 1, day]).isValid()) {
    return {
      vakat: vaktija.months[month - 1].days[day - 1].vakat.map((v, i) =>
        moment([year, month - 1, day])
          .add(3, "h")
          .isDST()
          ? moment.duration(
              v + differences[location].months[month - 1].vakat[i] + 3600,
              "s"
            )
          : moment.duration(
              v + differences[location].months[month - 1].vakat[i],
              "s"
            )
      ),
    };
  }
}

function getMonthlyPrayerTimes(locationNumber, year, month) {
  const location = locationNumber;
  return {
    days: vaktija.months[month - 1].days
      .filter((d, i) => moment([year, month - 1, i + 1]).isValid())
      .map((d, j) => ({
        vakat: d.vakat.map((v, i) =>
          moment([year, month - 1, j + 1])
            .add(3, "h")
            .isDST()
            ? moment.duration(
                v + differences[location].months[month - 1].vakat[i] + 3600,
                "s"
              )
            : moment.duration(
                v + differences[location].months[month - 1].vakat[i],
                "s"
              )
        ),
      })),
  };
}

function getYearlyPrayerTimes(locationNumber, year) {
  const location = locationNumber;
  return {
    months: vaktija.months.map((m, i) => ({
      days: m.days
        .filter((d, j) => moment([year, i, j + 1]).isValid())
        .map((d, k) => ({
          vakat: d.vakat.map((v, l) =>
            moment([year, i, k + 1])
              .add(3, "h")
              .isDST()
              ? moment.duration(
                  v + differences[location].months[i].vakat[l] + 3600,
                  "s"
                )
              : moment.duration(
                  v + differences[location].months[i].vakat[l],
                  "s"
                )
          ),
        })),
    })),
  };
}

module.exports = {
  getDailyPrayerTimes,
  getMonthlyPrayerTimes,
  getYearlyPrayerTimes,
};
