# npm install vaktija

# const vaktija = require('vaktija');

# vaktija.getDailyPrayerTimes(locationId, year?, month?, day?)
# vaktija.getMonthlyPrayerTimes(locationId, year?, month?)
# vaktija.getYearlyPrayerTimes(0, 2002)


# vaktija.getDailyPrayerTimes(locationId, year?, month?, day?) - ako se ne proslijedi year, month i day automatski ce year biti trenutna godina, mjesec trenutni mjesec a day trenutni dan

# vaktija.getDailyPrayerTimes(77) - vratit ce namaska vremena za trenutni dan za Sarajevo

# vaktija.getDailyPrayerTimes(77, 2022, 10, 21) - vratit ce namaska vremena za 21.10.2022. godine za Sarajevo

# vaktija.getMonthlyPrayerTimes(locationId, year?, month?) - ako se ne proslijedi year i month automatski ce year biti trenutna godina a mjesec trenutni mjesec

# vaktija.getMonthlyPrayerTimes(42) - vratit ce namaska vremena za trenutni mjesec za Jablanicu

# vaktija.getMonthlyPrayerTimes(42, 2021, 10) - vratit ce namaska vremena za 10. mjesec 2021. godine za Jablanicu

# vaktija.getYearlyPrayerTimes(locationId, year?) - ako se ne proslijedi year automatski ce biti trenutna godina

# vaktija.getYearlyPrayerTimes(0) - vratit ce namaska vremena za trenutnu godinu za Banovice

# vaktija.getYearlyPrayerTimes(0, 2002) - vratit ce namaska vremena za 2002. godinu za Banovice

# locationIds:
# 0. Banovići

# 1. Banja Luka

# 2. Bihać

# 3. Bijeljina

# 4. Bileća

# 5. Bosanski Brod

# 6. Bosanska Dubica

# 7. Bosanska Gradiška

# 8. Bosansko Grahovo

# 9. Bosanska Krupa

# 10. Bosanski Novi

# 11. Bosanski Petrovac

# 12. Bosanski Šamac

# 13. Bratunac

# 14. Brčko

# 15. Breza

# 16. Bugojno

# 17. Busovača

# 18. Bužim

# 19. Cazin

# 20. Čajniče

# 21. Čapljina

# 22. Čelić

# 23. Čelinac

# 24. Čitluk

# 25. Derventa

# 26. Doboj

# 27. Donji Vakuf

# 28. Drvar

# 29. Foča

# 30. Fojnica

# 31. Gacko

# 32. Glamoč

# 33. Goražde

# 34. Gornji Vakuf

# 35. Gračanica

# 36. Gradačac

# 37. Grude

# 38. Hadžići

# 39. Han-Pijesak

# 40. Hlivno

# 41. Ilijaš

# 42. Jablanica

# 43. Jajce

# 44. Kakanj

# 45. Kalesija

# 46. Kalinovik

# 47. Kiseljak

# 48. Kladanj

# 49. Ključ

# 50. Konjic

# 51. Kotor-Varoš

# 52. Kreševo

# 53. Kupres

# 54. Laktaši

# 55. Lopare

# 56. Lukavac

# 57. Ljubinje

# 58. Ljubuški

# 59. Maglaj

# 60. Modriča

# 61. Mostar

# 62. Mrkonjić-Grad

# 63. Neum

# 64. Nevesinje

# 65. Novi Travnik

# 66. Odžak

# 67. Olovo

# 68. Orašje

# 69. Pale

# 70. Posušje

# 71. Prijedor

# 72. Prnjavor

# 73. Prozor

# 74. Rogatica

# 75. Rudo

# 76. Sanski Most

# 77. Sarajevo

# 78. Skender-Vakuf

# 79. Sokolac

# 80. Srbac

# 81. Srebrenica

# 82. Srebrenik

# 83. Stolac

# 84. Šekovići

# 85. Šipovo

# 86. Široki Brijeg

# 87. Teslić

# 88. Tešanj

# 89. Tomislav-Grad

# 90. Travnik

# 91. Trebinje

# 92. Trnovo

# 93. Tuzla

# 94. Ugljevik

# 95. Vareš

# 96. Velika Kladuša

# 97. Visoko

# 98. Višegrad

# 99. Vitez

# 100. Vlasenica

# 101. Zavidovići

# 102. Zenica

# 103. Zvornik

# 104. Žepa

# 105. Žepče

# 106. Živinice

# 107. Bijelo Polje

# 108. Gusinje

# 109. Nova Varoš

# 110. Novi Pazar

# 111. Plav

# 112. Pljevlja

# 113. Priboj

# 114. Prijepolje

# 115. Rožaje

# 116. Sjenica

# 117. Tutin