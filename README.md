# Vaktija

Namaska vremena za Bosnu i Hercegovinu i Sandzak (IZ).

## Installation

```sh
npm install @kmaslesa/vaktija
const vaktija = require('@kmaslesa/vaktija');
```
```sh
vaktija.getDailyPrayerTimes(locationId, year?, month?, day?)
vaktija.getMonthlyPrayerTimes(locationId, year?, month?)
vaktija.getYearlyPrayerTimes(locationId, year?)
```
Location Ids:
```sh
0. Banovići
1. Banja Luka
2. Bihać
3. Bijeljina
4. Bileća
5. Bosanski Brod
6. Bosanska Dubica
7. Bosanska Gradiška
8. Bosansko Grahovo
9. Bosanska Krupa
10. Bosanski Novi
11. Bosanski Petrovac
12. Bosanski Šamac
13. Bratunac
14. Brčko
15. Breza
16. Bugojno
17. Busovača
18. Bužim
19. Cazin
20. Čajniče
21. Čapljina
22. Čelić
23. Čelinac
24. Čitluk
25. Derventa
26. Doboj
27. Donji Vakuf
28. Drvar
29. Foča
30. Fojnica
31. Gacko
32. Glamoč
33. Goražde
34. Gornji Vakuf
35. Gračanica
36. Gradačac
37. Grude
38. Hadžići
39. Han-Pijesak
40. Hlivno
41. Ilijaš
42. Jablanica
43. Jajce
44. Kakanj
45. Kalesija
46. Kalinovik
47. Kiseljak
48. Kladanj
49. Ključ
50. Konjic
51. Kotor-Varoš
52. Kreševo
53. Kupres
54. Laktaši
55. Lopare
56. Lukavac
57. Ljubinje
58. Ljubuški
59. Maglaj
60. Modriča
61. Mostar
62. Mrkonjić-Grad
63. Neum
64. Nevesinje
65. Novi Travnik
66. Odžak
67. Olovo
68. Orašje
69. Pale
70. Posušje
71. Prijedor
72. Prnjavor
73. Prozor
74. Rogatica
75. Rudo
76. Sanski Most
77. Sarajevo
78. Skender-Vakuf
79. Sokolac
80. Srbac
81. Srebrenica
82. Srebrenik
83. Stolac
84. Šekovići
85. Šipovo
86. Široki Brijeg
87. Teslić
88. Tešanj
89. Tomislav-Grad
90. Travnik
91. Trebinje
92. Trnovo
93. Tuzla
94. Ugljevik
95. Vareš
96. Velika Kladuša
97. Visoko
98. Višegrad
99. Vitez
100. Vlasenica
101. Zavidovići
102. Zenica
103. Zvornik
104. Žepa
105. Žepče
106. Živinice
107. Bijelo Polje
108. Gusinje
109. Nova Varoš
110. Novi Pazar
111. Plav
112. Pljevlja
113. Priboj
114. Prijepolje
115. Rožaje
116. Sjenica
117. Tutin
```



getDailyPrayerTimes:

```sh
vaktija.getDailyPrayerTimes(locationId, year?, month?, day?) 
```
- ako se ne proslijedi year, month i day automatski ce year biti trenutna godina, mjesec trenutni mjesec a day trenutni dan
Second Tab:

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
[
	{
		"locationId":77,
		"location":"Sarajevo",
		"date":{
			"month":3,
			"year":2022
		},
		"prayerTimes":[
			{
				"hours":4,
				"minutes":42
			},
			{
				"hours":6,
				"minutes":18
			},
			{
				"hours":12,
				"minutes":0
			},
			{
				"hours":15,
				"minutes":3
			},
			{
				"hours":17,
				"minutes":40
			},
			{
				"hours":19,
				"minutes":5
			},
			{
				"hours":23,
				"minutes":11
			},
			{
				"hours":1,
				"minutes":1
			}
		]
	},
	{
		"locationId":77,
		"location":"Sarajevo",
		"date":{
			"month":3,
			"year":2022
		},
		"prayerTimes":[
			{
				"hours":4,
				"minutes":40
			},
			{
				"hours":6,
				"minutes":16
			},
			{
				"hours":12,
				"minutes":0
			},
			{
				"hours":15,
				"minutes":4
			},
			{
				"hours":17,
				"minutes":41
			},
			{
				"hours":19,
				"minutes":6
			},
			{
				"hours":23,
				"minutes":10
			},
			{
				"hours":1,
				"minutes":0
			}
		]
	},
	{
		"locationId":77,
		"location":"Sarajevo",
		"date":{
			"month":3,
			"year":2022
		},
		"prayerTimes":[
			{
				"hours":4,
				"minutes":38
			},
			{
				"hours":6,
				"minutes":15
			},
			{
				"hours":11,
				"minutes":59
			},
			{
				"hours":15,
				"minutes":4
			},
			{
				"hours":17,
				"minutes":42
			},
			{
				"hours":19,
				"minutes":7
			},
			{
				"hours":23,
				"minutes":10
			},
			{
				"hours":0,
				"minutes":59
			}
		]
	},
	{
		"locationId":77,
		"location":"Sarajevo",
		"date":{
			"month":3,
			"year":2022
		},
		"prayerTimes":[
			{
				"hours":4,
				"minutes":37
			},
			{
				"hours":6,
				"minutes":13
			},
			{
				"hours":11,
				"minutes":59
			},
			{
				"hours":15,
				"minutes":5
			},
			{
				"hours":17,
				"minutes":44
			},
			{
				"hours":19,
				"minutes":9
			},
			{
				"hours":23,
				"minutes":10
			},
			{
				"hours":0,
				"minutes":59
			}
		]
	},
	{
		"locationId":77,
		"location":"Sarajevo",
		"date":{
			"month":3,
			"year":2022
		},
		"prayerTimes":[
			{
				"hours":4,
				"minutes":35
			},
			{
				"hours":6,
				"minutes":11
			},
			{
				"hours":11,
				"minutes":59
			},
			{
				"hours":15,
				"minutes":7
			},
			{
				"hours":17,
				"minutes":45
			},
			{
				"hours":19,
				"minutes":10
			},
			{
				"hours":23,
				"minutes":10
			},
			{
				"hours":0,
				"minutes":58
			}
		]
	},
	{
		"locationId":77,
		"location":"Sarajevo",
		"date":{
			"month":3,
			"year":2022
		},
		"prayerTimes":[
			{
				"hours":4,
				"minutes":34
			},
			{
				"hours":6,
				"minutes":9
			},
			{
				"hours":11,
				"minutes":59
			},
			{
				"hours":15,
				"minutes":8
			},
			{
				"hours":17,
				"minutes":46
			},
			{
				"hours":19,
				"minutes":11
			},
			{
				"hours":23,
				"minutes":10
			},
			{
				"hours":0,
				"minutes":58
			}
		]
	},
	{
		"locationId":77,
		"location":"Sarajevo",
		"date":{
			"month":3,
			"year":2022
		},
		"prayerTimes":[
			{
				"hours":4,
				"minutes":32
			},
			{
				"hours":6,
				"minutes":8
			},
			{
				"hours":11,
				"minutes":59
			},
			{
				"hours":15,
				"minutes":9
			},
			{
				"hours":17,
				"minutes":48
			},
			{
				"hours":19,
				"minutes":13
			},
			{
				"hours":23,
				"minutes":10
			},
			{
				"hours":0,
				"minutes":57
			}
		]
	},
	{
		"locationId":77,
		"location":"Sarajevo",
		"date":{
			"month":3,
			"year":2022
		},
		"prayerTimes":[
			{
				"hours":4,
				"minutes":30
			},
			{
				"hours":6,
				"minutes":7
			},
			{
				"hours":11,
				"minutes":58
			},
			{
				"hours":15,
				"minutes":10
			},
			{
				"hours":17,
				"minutes":49
			},
			{
				"hours":19,
				"minutes":14
			},
			{
				"hours":23,
				"minutes":9
			},
			{
				"hours":0,
				"minutes":56
			}
		]
	},
	{
		"locationId":77,
		"location":"Sarajevo",
		"date":{
			"month":3,
			"year":2022
		},
		"prayerTimes":[
			{
				"hours":4,
				"minutes":28
			},
			{
				"hours":6,
				"minutes":5
			},
			{
				"hours":11,
				"minutes":58
			},
			{
				"hours":15,
				"minutes":10
			},
			{
				"hours":17,
				"minutes":50
			},
			{
				"hours":19,
				"minutes":15
			},
			{
				"hours":23,
				"minutes":9
			},
			{
				"hours":0,
				"minutes":55
			}
		]
	},
	{
		"locationId":77,
		"location":"Sarajevo",
		"date":{
			"month":3,
			"year":2022
		},
		"prayerTimes":[
			{
				"hours":4,
				"minutes":27
			},
			{
				"hours":6,
				"minutes":3
			},
			{
				"hours":11,
				"minutes":58
			},
			{
				"hours":15,
				"minutes":11
			},
			{
				"hours":17,
				"minutes":52
			},
			{
				"hours":19,
				"minutes":17
			},
			{
				"hours":23,
				"minutes":9
			},
			{
				"hours":0,
				"minutes":55
			}
		]
	},
	{
		"locationId":77,
		"location":"Sarajevo",
		"date":{
			"month":3,
			"year":2022
		},
		"prayerTimes":[
			{
				"hours":4,
				"minutes":25
			},
			{
				"hours":6,
				"minutes":1
			},
			{
				"hours":11,
				"minutes":58
			},
			{
				"hours":15,
				"minutes":12
			},
			{
				"hours":17,
				"minutes":53
			},
			{
				"hours":19,
				"minutes":18
			},
			{
				"hours":23,
				"minutes":9
			},
			{
				"hours":0,
				"minutes":54
			}
		]
	},
	{
		"locationId":77,
		"location":"Sarajevo",
		"date":{
			"month":3,
			"year":2022
		},
		"prayerTimes":[
			{
				"hours":4,
				"minutes":23
			},
			{
				"hours":5,
				"minutes":59
			},
			{
				"hours":11,
				"minutes":57
			},
			{
				"hours":15,
				"minutes":12
			},
			{
				"hours":17,
				"minutes":54
			},
			{
				"hours":19,
				"minutes":19
			},
			{
				"hours":23,
				"minutes":8
			},
			{
				"hours":0,
				"minutes":53
			}
		]
	},
	{
		"locationId":77,
		"location":"Sarajevo",
		"date":{
			"month":3,
			"year":2022
		},
		"prayerTimes":[
			{
				"hours":4,
				"minutes":21
			},
			{
				"hours":5,
				"minutes":58
			},
			{
				"hours":11,
				"minutes":57
			},
			{
				"hours":15,
				"minutes":12
			},
			{
				"hours":17,
				"minutes":56
			},
			{
				"hours":19,
				"minutes":21
			},
			{
				"hours":23,
				"minutes":8
			},
			{
				"hours":0,
				"minutes":52
			}
		]
	},
	{
		"locationId":77,
		"location":"Sarajevo",
		"date":{
			"month":3,
			"year":2022
		},
		"prayerTimes":[
			{
				"hours":4,
				"minutes":19
			},
			{
				"hours":5,
				"minutes":56
			},
			{
				"hours":11,
				"minutes":57
			},
			{
				"hours":15,
				"minutes":13
			},
			{
				"hours":17,
				"minutes":57
			},
			{
				"hours":19,
				"minutes":22
			},
			{
				"hours":23,
				"minutes":8
			},
			{
				"hours":0,
				"minutes":51
			}
		]
	},
	{
		"locationId":77,
		"location":"Sarajevo",
		"date":{
			"month":3,
			"year":2022
		},
		"prayerTimes":[
			{
				"hours":4,
				"minutes":16
			},
			{
				"hours":5,
				"minutes":54
			},
			{
				"hours":11,
				"minutes":56
			},
			{
				"hours":15,
				"minutes":14
			},
			{
				"hours":17,
				"minutes":58
			},
			{
				"hours":19,
				"minutes":23
			},
			{
				"hours":23,
				"minutes":7
			},
			{
				"hours":0,
				"minutes":50
			}
		]
	},
	{
		"locationId":77,
		"location":"Sarajevo",
		"date":{
			"month":3,
			"year":2022
		},
		"prayerTimes":[
			{
				"hours":4,
				"minutes":15
			},
			{
				"hours":5,
				"minutes":52
			},
			{
				"hours":11,
				"minutes":56
			},
			{
				"hours":15,
				"minutes":15
			},
			{
				"hours":17,
				"minutes":59
			},
			{
				"hours":19,
				"minutes":24
			},
			{
				"hours":23,
				"minutes":7
			},
			{
				"hours":0,
				"minutes":49
			}
		]
	},
	{
		"locationId":77,
		"location":"Sarajevo",
		"date":{
			"month":3,
			"year":2022
		},
		"prayerTimes":[
			{
				"hours":4,
				"minutes":13
			},
			{
				"hours":5,
				"minutes":50
			},
			{
				"hours":11,
				"minutes":56
			},
			{
				"hours":15,
				"minutes":16
			},
			{
				"hours":18,
				"minutes":0
			},
			{
				"hours":19,
				"minutes":26
			},
			{
				"hours":23,
				"minutes":6
			},
			{
				"hours":0,
				"minutes":48
			}
		]
	},
	{
		"locationId":77,
		"location":"Sarajevo",
		"date":{
			"month":3,
			"year":2022
		},
		"prayerTimes":[
			{
				"hours":4,
				"minutes":11
			},
			{
				"hours":5,
				"minutes":48
			},
			{
				"hours":11,
				"minutes":56
			},
			{
				"hours":15,
				"minutes":17
			},
			{
				"hours":18,
				"minutes":1
			},
			{
				"hours":19,
				"minutes":27
			},
			{
				"hours":23,
				"minutes":6
			},
			{
				"hours":0,
				"minutes":47
			}
		]
	},
	{
		"locationId":77,
		"location":"Sarajevo",
		"date":{
			"month":3,
			"year":2022
		},
		"prayerTimes":[
			{
				"hours":4,
				"minutes":9
			},
			{
				"hours":5,
				"minutes":46
			},
			{
				"hours":11,
				"minutes":55
			},
			{
				"hours":15,
				"minutes":17
			},
			{
				"hours":18,
				"minutes":2
			},
			{
				"hours":19,
				"minutes":28
			},
			{
				"hours":23,
				"minutes":5
			},
			{
				"hours":0,
				"minutes":46
			}
		]
	},
	{
		"locationId":77,
		"location":"Sarajevo",
		"date":{
			"month":3,
			"year":2022
		},
		"prayerTimes":[
			{
				"hours":4,
				"minutes":7
			},
			{
				"hours":5,
				"minutes":44
			},
			{
				"hours":11,
				"minutes":55
			},
			{
				"hours":15,
				"minutes":18
			},
			{
				"hours":18,
				"minutes":4
			},
			{
				"hours":19,
				"minutes":30
			},
			{
				"hours":23,
				"minutes":5
			},
			{
				"hours":0,
				"minutes":46
			}
		]
	},
	{
		"locationId":77,
		"location":"Sarajevo",
		"date":{
			"month":3,
			"year":2022
		},
		"prayerTimes":[
			{
				"hours":4,
				"minutes":5
			},
			{
				"hours":5,
				"minutes":43
			},
			{
				"hours":11,
				"minutes":55
			},
			{
				"hours":15,
				"minutes":19
			},
			{
				"hours":18,
				"minutes":5
			},
			{
				"hours":19,
				"minutes":31
			},
			{
				"hours":23,
				"minutes":5
			},
			{
				"hours":0,
				"minutes":45
			}
		]
	},
	{
		"locationId":77,
		"location":"Sarajevo",
		"date":{
			"month":3,
			"year":2022
		},
		"prayerTimes":[
			{
				"hours":4,
				"minutes":3
			},
			{
				"hours":5,
				"minutes":41
			},
			{
				"hours":11,
				"minutes":54
			},
			{
				"hours":15,
				"minutes":20
			},
			{
				"hours":18,
				"minutes":6
			},
			{
				"hours":19,
				"minutes":32
			},
			{
				"hours":23,
				"minutes":4
			},
			{
				"hours":0,
				"minutes":44
			}
		]
	},
	{
		"locationId":77,
		"location":"Sarajevo",
		"date":{
			"month":3,
			"year":2022
		},
		"prayerTimes":[
			{
				"hours":4,
				"minutes":1
			},
			{
				"hours":5,
				"minutes":39
			},
			{
				"hours":11,
				"minutes":54
			},
			{
				"hours":15,
				"minutes":20
			},
			{
				"hours":18,
				"minutes":8
			},
			{
				"hours":19,
				"minutes":34
			},
			{
				"hours":23,
				"minutes":4
			},
			{
				"hours":0,
				"minutes":43
			}
		]
	},
	{
		"locationId":77,
		"location":"Sarajevo",
		"date":{
			"month":3,
			"year":2022
		},
		"prayerTimes":[
			{
				"hours":4,
				"minutes":0
			},
			{
				"hours":5,
				"minutes":37
			},
			{
				"hours":11,
				"minutes":54
			},
			{
				"hours":15,
				"minutes":21
			},
			{
				"hours":18,
				"minutes":9
			},
			{
				"hours":19,
				"minutes":35
			},
			{
				"hours":23,
				"minutes":4
			},
			{
				"hours":0,
				"minutes":43
			}
		]
	},
	{
		"locationId":77,
		"location":"Sarajevo",
		"date":{
			"month":3,
			"year":2022
		},
		"prayerTimes":[
			{
				"hours":3,
				"minutes":58
			},
			{
				"hours":5,
				"minutes":36
			},
			{
				"hours":11,
				"minutes":53
			},
			{
				"hours":15,
				"minutes":21
			},
			{
				"hours":18,
				"minutes":10
			},
			{
				"hours":19,
				"minutes":36
			},
			{
				"hours":23,
				"minutes":4
			},
			{
				"hours":0,
				"minutes":42
			}
		]
	},
	{
		"locationId":77,
		"location":"Sarajevo",
		"date":{
			"month":3,
			"year":2022
		},
		"prayerTimes":[
			{
				"hours":3,
				"minutes":56
			},
			{
				"hours":5,
				"minutes":34
			},
			{
				"hours":11,
				"minutes":53
			},
			{
				"hours":15,
				"minutes":22
			},
			{
				"hours":18,
				"minutes":11
			},
			{
				"hours":19,
				"minutes":38
			},
			{
				"hours":23,
				"minutes":3
			},
			{
				"hours":0,
				"minutes":41
			}
		]
	},
	{
		"locationId":77,
		"location":"Sarajevo",
		"date":{
			"month":3,
			"year":2022
		},
		"prayerTimes":[
			{
				"hours":4,
				"minutes":53
			},
			{
				"hours":6,
				"minutes":32
			},
			{
				"hours":12,
				"minutes":53
			},
			{
				"hours":16,
				"minutes":22
			},
			{
				"hours":19,
				"minutes":13
			},
			{
				"hours":20,
				"minutes":40
			},
			{
				"hours":0,
				"minutes":3
			},
			{
				"hours":1,
				"minutes":39
			}
		]
	},
	{
		"locationId":77,
		"location":"Sarajevo",
		"date":{
			"month":3,
			"year":2022
		},
		"prayerTimes":[
			{
				"hours":4,
				"minutes":51
			},
			{
				"hours":6,
				"minutes":31
			},
			{
				"hours":12,
				"minutes":53
			},
			{
				"hours":16,
				"minutes":23
			},
			{
				"hours":19,
				"minutes":14
			},
			{
				"hours":20,
				"minutes":41
			},
			{
				"hours":0,
				"minutes":2
			},
			{
				"hours":1,
				"minutes":38
			}
		]
	},
	{
		"locationId":77,
		"location":"Sarajevo",
		"date":{
			"month":3,
			"year":2022
		},
		"prayerTimes":[
			{
				"hours":4,
				"minutes":48
			},
			{
				"hours":6,
				"minutes":29
			},
			{
				"hours":12,
				"minutes":52
			},
			{
				"hours":16,
				"minutes":23
			},
			{
				"hours":19,
				"minutes":15
			},
			{
				"hours":20,
				"minutes":42
			},
			{
				"hours":0,
				"minutes":1
			},
			{
				"hours":1,
				"minutes":37
			}
		]
	},
	{
		"locationId":77,
		"location":"Sarajevo",
		"date":{
			"month":3,
			"year":2022
		},
		"prayerTimes":[
			{
				"hours":4,
				"minutes":47
			},
			{
				"hours":6,
				"minutes":27
			},
			{
				"hours":12,
				"minutes":52
			},
			{
				"hours":16,
				"minutes":24
			},
			{
				"hours":19,
				"minutes":16
			},
			{
				"hours":20,
				"minutes":43
			},
			{
				"hours":0,
				"minutes":1
			},
			{
				"hours":1,
				"minutes":36
			}
		]
	},
	{
		"locationId":77,
		"location":"Sarajevo",
		"date":{
			"month":3,
			"year":2022
		},
		"prayerTimes":[
			{
				"hours":4,
				"minutes":45
			},
			{
				"hours":6,
				"minutes":25
			},
			{
				"hours":12,
				"minutes":52
			},
			{
				"hours":16,
				"minutes":24
			},
			{
				"hours":19,
				"minutes":18
			},
			{
				"hours":20,
				"minutes":45
			},
			{
				"hours":0,
				"minutes":1
			},
			{
				"hours":1,
				"minutes":36
			}
		]
	}
]
```

getYearlyPrayerTimes:
```sh
vaktija.getYearlyPrayerTimes(locationId, year?)
```
- ako se ne proslijedi year automatski ce biti trenutna godina

```sh
vaktija.getYearlyPrayerTimes(0) - vratit ce namaska vremena za trenutnu godinu za Banovice

vaktija.getYearlyPrayerTimes(0, 2002) - vratit ce namaska vremena za 2002. godinu za Banovice
```




