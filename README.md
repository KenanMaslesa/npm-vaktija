# Vaktija

Namaska vremena za Bosnu i Hercegovinu i Sandzak (IZ).

## Installation

```sh
npm install @kmaslesa/vaktija
const vaktija = require('@kmaslesa/vaktija');
```
```sh
vaktija.getLocations()
vaktija.getDailyPrayerTimes(locationId, year?, month?, day?)
vaktija.getMonthlyPrayerTimes(locationId, year?, month?)
vaktija.getYearlyPrayerTimes(locationId, year?)
```

getLocations:
```sh
vaktija.getLocations()
```

RESPONSE:
```sh
[
	{
		"name":"Banovići",
		"locationId":0,
		"latitude":44.40417,
		"longitude":18.4475
	},
	{
		"name":"Banja Luka",
		"locationId":1,
		"latitude":44.7667,
		"longitude":17.1833
	},
	{
		"name":"Bihać",
		"locationId":2,
		"latitude":44.8167,
		"longitude":15.8667
	},
	{
		"name":"Bijeljina",
		"locationId":3,
		"latitude":44.75,
		"longitude":19.2167
	},
	{
		"name":"Bileća",
		"locationId":4,
		"latitude":42.86667,
		"longitude":18.43333
	},
	{
		"name":"Bosanski Brod",
		"locationId":5,
		"latitude":45.13333,
		"longitude":17.98333
	},
	{
		"name":"Bosanska Dubica",
		"locationId":6,
		"latitude":45.17667,
		"longitude":16.80944
	},
	{
		"name":"Bosanska Gradiška",
		"locationId":7,
		"latitude":45.14484,
		"longitude":17.25453
	},
	{
		"name":"Bosansko Grahovo",
		"locationId":8,
		"latitude":44.19667,
		"longitude":16.37667
	},
	{
		"name":"Bosanska Krupa",
		"locationId":9,
		"latitude":44.8833,
		"longitude":16.15
	},
	{
		"name":"Bosanski Novi",
		"locationId":10,
		"latitude":45.05,
		"longitude":16.38333
	},
	{
		"name":"Bosanski Petrovac",
		"locationId":11,
		"latitude":44.55,
		"longitude":16.3667
	},
	{
		"name":"Bosanski Šamac",
		"locationId":12,
		"latitude":45.06667,
		"longitude":18.46667
	},
	{
		"name":"Bratunac",
		"locationId":13,
		"latitude":44.1846,
		"longitude":19.3309
	},
	{
		"name":"Brčko",
		"locationId":14,
		"latitude":44.8783,
		"longitude":18.8092
	},
	{
		"name":"Breza",
		"locationId":15,
		"latitude":44.021,
		"longitude":18.261
	},
	{
		"name":"Bugojno",
		"locationId":16,
		"latitude":44.0572,
		"longitude":17.4508
	},
	{
		"name":"Busovača",
		"locationId":17,
		"latitude":44.1,
		"longitude":17.88333
	},
	{
		"name":"Bužim",
		"locationId":18,
		"latitude":45.06056,
		"longitude":16.01667
	},
	{
		"name":"Cazin",
		"locationId":19,
		"latitude":44.96667,
		"longitude":15.93333
	},
	{
		"name":"Čajniče",
		"locationId":20,
		"latitude":43.55,
		"longitude":19.16667
	},
	{
		"name":"Čapljina",
		"locationId":21,
		"latitude":43.11,
		"longitude":17.7
	},
	{
		"name":"Čelić",
		"locationId":22,
		"latitude":44.721,
		"longitude":18.8231
	},
	{
		"name":"Čelinac",
		"locationId":23,
		"latitude":44.725,
		"longitude":17.33
	},
	{
		"name":"Čitluk",
		"locationId":24,
		"latitude":43.23,
		"longitude":17.7
	},
	{
		"name":"Derventa",
		"locationId":25,
		"latitude":44.98,
		"longitude":17.91
	},
	{
		"name":"Doboj",
		"locationId":26,
		"latitude":44.73333,
		"longitude":18.13333
	},
	{
		"name":"Donji Vakuf",
		"locationId":27,
		"latitude":44.15,
		"longitude":17.4
	},
	{
		"name":"Drvar",
		"locationId":28,
		"latitude":44.3575,
		"longitude":16.3711
	},
	{
		"name":"Foča",
		"locationId":29,
		"latitude":43.5,
		"longitude":18.78333
	},
	{
		"name":"Fojnica",
		"locationId":30,
		"latitude":43.96667,
		"longitude":17.9
	},
	{
		"name":"Gacko",
		"locationId":31,
		"latitude":43.16667,
		"longitude":18.53333
	},
	{
		"name":"Glamoč",
		"locationId":32,
		"latitude":44.05,
		"longitude":16.85
	},
	{
		"name":"Goražde",
		"locationId":33,
		"latitude":43.66667,
		"longitude":18.97778
	}
	....
	]
```










getDailyPrayerTimes:

```sh
vaktija.getDailyPrayerTimes(locationId, year?, month?, day?) 
```
- ako se ne proslijedi year, month i day automatski ce year biti trenutna godina, mjesec trenutni mjesec a day trenutni dan:

```sh
vaktija.getDailyPrayerTimes(77) - vratit ce namaska vremena za trenutni dan za Sarajevo

vaktija.getDailyPrayerTimes(77, 2022, 10, 21) - vratit ce namaska vremena za 21.10.2022. godine za Sarajevo
```

RESPONSE:
```sh
{
  locationId: 77,
  location: 'Sarajevo',
  date: { day: 12, month: 3, year: 2022 },
  prayerTimes: [
    { hours: 4, minutes: 23 }, //sabah
    { hours: 5, minutes: 59 }, //izlazak sunca
    { hours: 11, minutes: 57 }, //podne
    { hours: 15, minutes: 12 }, //ikindija
    { hours: 17, minutes: 54 }, //aksam
    { hours: 19, minutes: 19 }, //jacija
    { hours: 23, minutes: 8 }, //polovina noći
    { hours: 0, minutes: 53 } //zadnja trećina noći
  ]
}
```










getMonthlyPrayerTimes:
```sh
vaktija.getMonthlyPrayerTimes(locationId, year?, month?)
```
- ako se ne proslijedi year i month automatski ce year biti trenutna godina a mjesec trenutni mjesec

```sh
vaktija.getMonthlyPrayerTimes(42) - vratit ce namaska vremena za trenutni mjesec za Jablanicu

vaktija.getMonthlyPrayerTimes(42, 2021, 10) - vratit ce namaska vremena za 10. mjesec 2021. godine za Jablanicu
```

RESPONSE:
```sh
[{"locationId":77,"location":"Sarajevo","date":{"month":3,"year":2022},"prayerTimes":[{"hours":4,"minutes":42},{"hours":6,"minutes":18},{"hours":12,"minutes":0},{"hours":15,"minutes":3},{"hours":17,"minutes":40},{"hours":19,"minutes":5},{"hours":23,"minutes":11},{"hours":1,"minutes":1}]},{"locationId":77,"location":"Sarajevo","date":{"month":3,"year":2022},"prayerTimes":[{"hours":4,"minutes":40},{"hours":6,"minutes":16},{"hours":12,"minutes":0},{"hours":15,"minutes":4},{"hours":17,"minutes":41},{"hours":19,"minutes":6},{"hours":23,"minutes":10},{"hours":1,"minutes":0}]},{"locationId":77,"location":"Sarajevo","date":{"month":3,"year":2022},"prayerTimes":[{"hours":4,"minutes":38},{"hours":6,"minutes":15},{"hours":11,"minutes":59},{"hours":15,"minutes":4},{"hours":17,"minutes":42},{"hours":19,"minutes":7},{"hours":23,"minutes":10},{"hours":0,"minutes":59}]},{"locationId":77,"location":"Sarajevo","date":{"month":3,"year":2022},"prayerTimes":[{"hours":4,"minutes":37},{"hours":6,"minutes":13},{"hours":11,"minutes":59},{"hours":15,"minutes":5},{"hours":17,"minutes":44},{"hours":19,"minutes":9},{"hours":23,"minutes":10},{"hours":0,"minutes":59}]},{"locationId":77,"location":"Sarajevo","date":{"month":3,"year":2022},"prayerTimes":[{"hours":4,"minutes":35},{"hours":6,"minutes":11},{"hours":11,"minutes":59},{"hours":15,"minutes":7},{"hours":17,"minutes":45},{"hours":19,"minutes":10},{"hours":23,"minutes":10},{"hours":0,"minutes":58}]},{"locationId":77,"location":"Sarajevo","date":{"month":3,"year":2022},"prayerTimes":[{"hours":4,"minutes":34},{"hours":6,"minutes":9},{"hours":11,"minutes":59},{"hours":15,"minutes":8},{"hours":17,"minutes":46},{"hours":19,"minutes":11},{"hours":23,"minutes":10},{"hours":0,"minutes":58}]},{"locationId":77,"location":"Sarajevo","date":{"month":3,"year":2022},"prayerTimes":[{"hours":4,"minutes":32},{"hours":6,"minutes":8},{"hours":11,"minutes":59},{"hours":15,"minutes":9},{"hours":17,"minutes":48},{"hours":19,"minutes":13},{"hours":23,"minutes":10},{"hours":0,"minutes":57}]},{"locationId":77,"location":"Sarajevo","date":{"month":3,"year":2022},"prayerTimes":[{"hours":4,"minutes":30},{"hours":6,"minutes":7},{"hours":11,"minutes":58},{"hours":15,"minutes":10},{"hours":17,"minutes":49},{"hours":19,"minutes":14},{"hours":23,"minutes":9},{"hours":0,"minutes":56}]},{"locationId":77,"location":"Sarajevo","date":{"month":3,"year":2022},"prayerTimes":[{"hours":4,"minutes":28},{"hours":6,"minutes":5},{"hours":11,"minutes":58},{"hours":15,"minutes":10},{"hours":17,"minutes":50},{"hours":19,"minutes":15},{"hours":23,"minutes":9},{"hours":0,"minutes":55}]},{"locationId":77,"location":"Sarajevo","date":{"month":3,"year":2022},"prayerTimes":[{"hours":4,"minutes":27},{"hours":6,"minutes":3},{"hours":11,"minutes":58},{"hours":15,"minutes":11},{"hours":17,"minutes":52},{"hours":19,"minutes":17},{"hours":23,"minutes":9},{"hours":0,"minutes":55}]},{"locationId":77,"location":"Sarajevo","date":{"month":3,"year":2022},"prayerTimes":[{"hours":4,"minutes":25},{"hours":6,"minutes":1},{"hours":11,"minutes":58},{"hours":15,"minutes":12},{"hours":17,"minutes":53},{"hours":19,"minutes":18},{"hours":23,"minutes":9},{"hours":0,"minutes":54}]},{"locationId":77,"location":"Sarajevo","date":{"month":3,"year":2022},"prayerTimes":[{"hours":4,"minutes":23},{"hours":5,"minutes":59},{"hours":11,"minutes":57},{"hours":15,"minutes":12},{"hours":17,"minutes":54},{"hours":19,"minutes":19},{"hours":23,"minutes":8},{"hours":0,"minutes":53}]},{"locationId":77,"location":"Sarajevo","date":{"month":3,"year":2022},"prayerTimes":[{"hours":4,"minutes":21},{"hours":5,"minutes":58},{"hours":11,"minutes":57},{"hours":15,"minutes":12},{"hours":17,"minutes":56},{"hours":19,"minutes":21},{"hours":23,"minutes":8},{"hours":0,"minutes":52}]},{"locationId":77,"location":"Sarajevo","date":{"month":3,"year":2022},"prayerTimes":[{"hours":4,"minutes":19},{"hours":5,"minutes":56},{"hours":11,"minutes":57},{"hours":15,"minutes":13},{"hours":17,"minutes":57},{"hours":19,"minutes":22},{"hours":23,"minutes":8},{"hours":0,"minutes":51}]},{"locationId":77,"location":"Sarajevo","date":{"month":3,"year":2022},"prayerTimes":[{"hours":4,"minutes":16},{"hours":5,"minutes":54},{"hours":11,"minutes":56},{"hours":15,"minutes":14},{"hours":17,"minutes":58},{"hours":19,"minutes":23},{"hours":23,"minutes":7},{"hours":0,"minutes":50}]},{"locationId":77,"location":"Sarajevo","date":{"month":3,"year":2022},"prayerTimes":[{"hours":4,"minutes":15},{"hours":5,"minutes":52},{"hours":11,"minutes":56},{"hours":15,"minutes":15},{"hours":17,"minutes":59},{"hours":19,"minutes":24},{"hours":23,"minutes":7},{"hours":0,"minutes":49}]},{"locationId":77,"location":"Sarajevo","date":{"month":3,"year":2022},"prayerTimes":[{"hours":4,"minutes":13},{"hours":5,"minutes":50},{"hours":11,"minutes":56},{"hours":15,"minutes":16},{"hours":18,"minutes":0},{"hours":19,"minutes":26},{"hours":23,"minutes":6},{"hours":0,"minutes":48}]},{"locationId":77,"location":"Sarajevo","date":{"month":3,"year":2022},"prayerTimes":[{"hours":4,"minutes":11},{"hours":5,"minutes":48},{"hours":11,"minutes":56},{"hours":15,"minutes":17},{"hours":18,"minutes":1},{"hours":19,"minutes":27},{"hours":23,"minutes":6},{"hours":0,"minutes":47}]},{"locationId":77,"location":"Sarajevo","date":{"month":3,"year":2022},"prayerTimes":[{"hours":4,"minutes":9},{"hours":5,"minutes":46},{"hours":11,"minutes":55},{"hours":15,"minutes":17},{"hours":18,"minutes":2},{"hours":19,"minutes":28},{"hours":23,"minutes":5},{"hours":0,"minutes":46}]},{"locationId":77,"location":"Sarajevo","date":{"month":3,"year":2022},"prayerTimes":[{"hours":4,"minutes":7},{"hours":5,"minutes":44},{"hours":11,"minutes":55},{"hours":15,"minutes":18},{"hours":18,"minutes":4},{"hours":19,"minutes":30},{"hours":23,"minutes":5},{"hours":0,"minutes":46}]},{"locationId":77,"location":"Sarajevo","date":{"month":3,"year":2022},"prayerTimes":[{"hours":4,"minutes":5},{"hours":5,"minutes":43},{"hours":11,"minutes":55},{"hours":15,"minutes":19},{"hours":18,"minutes":5},{"hours":19,"minutes":31},{"hours":23,"minutes":5},{"hours":0,"minutes":45}]},{"locationId":77,"location":"Sarajevo","date":{"month":3,"year":2022},"prayerTimes":[{"hours":4,"minutes":3},{"hours":5,"minutes":41},{"hours":11,"minutes":54},{"hours":15,"minutes":20},{"hours":18,"minutes":6},{"hours":19,"minutes":32},{"hours":23,"minutes":4},{"hours":0,"minutes":44}]},{"locationId":77,"location":"Sarajevo","date":{"month":3,"year":2022},"prayerTimes":[{"hours":4,"minutes":1},{"hours":5,"minutes":39},{"hours":11,"minutes":54},{"hours":15,"minutes":20},{"hours":18,"minutes":8},{"hours":19,"minutes":34},{"hours":23,"minutes":4},{"hours":0,"minutes":43}]},{"locationId":77,"location":"Sarajevo","date":{"month":3,"year":2022},"prayerTimes":[{"hours":4,"minutes":0},{"hours":5,"minutes":37},{"hours":11,"minutes":54},{"hours":15,"minutes":21},{"hours":18,"minutes":9},{"hours":19,"minutes":35},{"hours":23,"minutes":4},{"hours":0,"minutes":43}]},{"locationId":77,"location":"Sarajevo","date":{"month":3,"year":2022},"prayerTimes":[{"hours":3,"minutes":58},{"hours":5,"minutes":36},{"hours":11,"minutes":53},{"hours":15,"minutes":21},{"hours":18,"minutes":10},{"hours":19,"minutes":36},{"hours":23,"minutes":4},{"hours":0,"minutes":42}]},{"locationId":77,"location":"Sarajevo","date":{"month":3,"year":2022},"prayerTimes":[{"hours":3,"minutes":56},{"hours":5,"minutes":34},{"hours":11,"minutes":53},{"hours":15,"minutes":22},{"hours":18,"minutes":11},{"hours":19,"minutes":38},{"hours":23,"minutes":3},{"hours":0,"minutes":41}]},{"locationId":77,"location":"Sarajevo","date":{"month":3,"year":2022},"prayerTimes":[{"hours":4,"minutes":53},{"hours":6,"minutes":32},{"hours":12,"minutes":53},{"hours":16,"minutes":22},{"hours":19,"minutes":13},{"hours":20,"minutes":40},{"hours":0,"minutes":3},{"hours":1,"minutes":39}]},{"locationId":77,"location":"Sarajevo","date":{"month":3,"year":2022},"prayerTimes":[{"hours":4,"minutes":51},{"hours":6,"minutes":31},{"hours":12,"minutes":53},{"hours":16,"minutes":23},{"hours":19,"minutes":14},{"hours":20,"minutes":41},{"hours":0,"minutes":2},{"hours":1,"minutes":38}]},{"locationId":77,"location":"Sarajevo","date":{"month":3,"year":2022},"prayerTimes":[{"hours":4,"minutes":48},{"hours":6,"minutes":29},{"hours":12,"minutes":52},{"hours":16,"minutes":23},{"hours":19,"minutes":15},{"hours":20,"minutes":42},{"hours":0,"minutes":1},{"hours":1,"minutes":37}]},{"locationId":77,"location":"Sarajevo","date":{"month":3,"year":2022},"prayerTimes":[{"hours":4,"minutes":47},{"hours":6,"minutes":27},{"hours":12,"minutes":52},{"hours":16,"minutes":24},{"hours":19,"minutes":16},{"hours":20,"minutes":43},{"hours":0,"minutes":1},{"hours":1,"minutes":36}]},{"locationId":77,"location":"Sarajevo","date":{"month":3,"year":2022},"prayerTimes":[{"hours":4,"minutes":45},{"hours":6,"minutes":25},{"hours":12,"minutes":52},{"hours":16,"minutes":24},{"hours":19,"minutes":18},{"hours":20,"minutes":45},{"hours":0,"minutes":1},{"hours":1,"minutes":36}]}]
```











getYearlyPrayerTimes:
```sh
vaktija.getYearlyPrayerTimes(locationId, year?)
```
- ako se ne proslijedi year automatski ce biti trenutna godina

```sh
vaktija.getYearlyPrayerTimes(0) - vratit ce namaska vremena za trenutnu godinu za Banoviće

vaktija.getYearlyPrayerTimes(0, 2002) - vratit ce namaska vremena za 2002. godinu za Banoviće
```




