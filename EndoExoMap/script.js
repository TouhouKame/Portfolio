'use strict';

const countries = document.querySelectorAll('.country');
// console.log(countries.id);

const endonymBox = document.querySelector('#endonyms');
const countryName = document.getElementById('country-name');
const countryEntonym = document.getElementById('country-endonym');
const entonymMeaning = document.getElementById('endonym-meaning');

const countryInfo = [
  //0
  {
    name: 'Canada',
    endonym: 'Canada',
    meaning:
      'The name “Canada” likely comes from the Huron-Iroquois word “kanata,” meaning “village” or “settlement.”',
  },
  //1
  {
    name: 'USA',
    endonym: 'United States of America',
    meaning:
      'The word "America" derives from the name of Italian cartographer, Amerigo Vespucci',
  },
  //2
  {
    name: 'Mexico',
    endonym: 'Estados Unidos Mexicanos',
    meaning:
      'Mexico derives from the Mexica people, a Nahuatl speaking people of the Valley of Mexico.',
  },
  //3
  {
    name: 'Guatemala',
    endonym: 'República de Guatemala',
    meaning:
      'The name "Guatemala" comes from the Nahuatl word Cuauhtēmallān, or "place of many trees"',
  },
  //4
  {
    name: 'Belize',
    endonym: 'Belize',
    meaning:
      'The simple truth is that no one is quite sure how Belize got its name.',
  },
  //5
  {
    name: 'El Salvador',
    endonym: 'República de El Salvador',
    meaning: 'El Salvador means "the savior" in Spanish.',
  },
  //6
  {
    name: 'Honduras',
    endonym: 'República de Honduras',
    meaning:
      'The literal meaning of the term "Honduras" is "depths" in Spanish.',
  },
  //7
  {
    name: 'Nicaragua',
    endonym: 'República de Nicaragua',
    meaning:
      'There are two theories on how "Nicaragua" came to be. The combination of "Nicarau" (an alleged native chief) and "agua" (water), or the following Nahuatl words: nic-anahuac, which meant "Anahuac reached this far"',
  },
  //8
  {
    name: 'Costa Rica',
    endonym: 'República de Costa Rica',
    meaning: 'Literally "Rich Coast"',
  },
  //9
  {
    name: 'Panama',
    endonym: 'República de Panamá',
    meaning: 'The definite origin of the name Panama is unknown.',
  },
  //10
  {
    name: 'Cuba',
    endonym: 'República de Cuba',
    meaning:
      'Historians believe the name Cuba comes from the Taíno language; however, "its exact derivation is unknown"',
  },
  //11
  {
    name: 'Jamaica',
    endonym: 'Jumieka',
    meaning:
      'The Taino people called the island Xaymaca in their language, meaning the "Land of Wood and Water" or the "Land of Springs".',
  },
  //12
  {
    name: 'Haiti',
    endonym: 'Repiblik d Ayiti',
    meaning: 'Haiti coms from the Taino word for "Land of High Mountains"',
  },
  //13
  {
    name: 'Dominica',
    endonym: 'República Dominicana',
    meaning:
      'The name Dominican originates from Saint Dominic, the patron saint of astronomers.',
  },
  //14
  {
    name: 'Colombia',
    endonym: 'República de Colombia',
    meaning:
      'The name "Colombia" is derived from the last name of Italian navigator Christopher Columbus',
  },
  //15
  {
    name: 'Venezuela',
    endonym: 'República Bolivariana de Venezuela',
    meaning:
      'Allegedly named "Veneziola" (Little Venice) by Amerigo Vespucci, reminded by the Italian city by the stilt houses in the area.',
  },
  //16
  {
    name: 'Guyana',
    endonym: 'Co-operative Republic of Guyana',
    meaning:
      'According to the Oxford English Dictionary, the name "Guyana" comes from an indigenous Amerindian language and means "land of many waters".',
  },
  //17
  {
    name: 'Suriname',
    endonym: 'Republiek Suriname',
    meaning:
      'The name Suriname may derive from an indigenous people called Surinen, who inhabited the area at the time of European contact.',
  },
  //18
  {
    name: 'French Guiana',
    endonym: 'Guyane, Lagwiyann',
    meaning: 'Guyana, but French.',
  },
  //19
  {
    name: 'Ecuador',
    endonym: 'República del Ecuador',
    meaning:
      'Equador means "equator" in spanish. Named for the former Ecuadorial Department of Gran Colombia.',
  },
  //20
  {
    name: 'Peru',
    endonym: 'República del Perú',
    meaning:
      'The name of the country may be derived from Birú, the name of a local ruler who lived near the Bay of San Miguel, Panama City, in the early 16th century.',
  },
  //21
  {
    name: 'Brazil',
    endonym: 'República Federativa do Brasil',
    meaning:
      'The word "Brazil" likely comes from the Portuguese word for brazilwood, a tree that once grew plentifully along the Brazilian coast.',
  },
  //22
  {
    name: 'Bolivia',
    endonym: 'Estado Plurinacional de Bolivia',
    meaning:
      'Bolivia is named after Simón Bolívar, a Venezuelan leader in the Spanish American wars of independence.',
  },
  //23
  {
    name: 'Paraguay',
    endonym: 'República del Paraguay',
    meaning:
      'The name Paraguay stems from Guarani paraguá "feather crown" and y "water" thus paraguaí "feather crown of waters".',
  },
  //24
  {
    name: 'Chile',
    endonym: 'República de Chile',
    meaning:
      'There are various theories about the origin of the word Chile. It may derive from a Native American word meaning "ends of the earth"',
  },
  //25
  {
    name: 'Argentina',
    endonym: 'República Argentina',
    meaning: 'Argentina means "made of silver, silver coloured" in Italian.',
  },
  //26
  {
    name: 'Uruguay',
    endonym: 'República Oriental del Uruguay',
    meaning:
      'The country name of Uruguay derives from the namesake Río Uruguay, from the Indigenous Guaraní language.',
  },
  //27
  {
    name: 'Greenland',
    endonym: 'Kalaallit Nunaat, Grønland',
    meaning:
      'Literally "Green Land". Pleasantly named to attract settlers by vikings.',
  },
  //28
  {
    name: 'Iceland',
    endonym: 'Ísland',
    meaning:
      'Literally "Ice Land". Derived from the name given by a viking named Flóki Vilgerðarson.',
  },
  //29
  {
    name: 'Ireland',
    endonym: 'Éire, Airlann',
    meaning:
      'The names Ireland and Éire derive from Old Irish Ériu, a goddess in Irish mythology first recorded in the ninth century.',
  },
  //30
  {
    name: 'Scotland',
    endonym: 'Scotland, Alba',
    meaning: 'Scotland comes from Scoti, the Latin name for the Gaels.',
  },
  //31
  {
    name: 'England',
    endonym: 'England',
    meaning:
      'The name "England" is derived from the Old English name Englaland, which means "land of the Angles".',
  },
  //32
  {
    name: 'Portugal',
    endonym: 'República Portuguesa',
    meaning:
      'The word Portugal derives from the combined Roman-Celtic place name Portus Cale.',
  },
  //33
  {
    name: 'Spain',
    endonym: 'Reino de España',
    meaning:
      'The name España comes from Hispania, the name used by the Romans for the Iberian Peninsula and its provinces during the Roman Empire. Derived from Spania (meaning "Land of rabbits")',
  },
  //34
  {
    name: 'France',
    endonym: 'République française',
    meaning:
      'Originally applied to the whole Frankish Empire, the name France comes from the Latin Francia, or "realm of the Franks".',
  },
  //35
  {
    name: 'Norway',
    endonym: 'Norge, Nynorsk',
    meaning:
      'Generally accepted as meaning "the northern way" from the old english Norþweg (northweg)',
  },
  //36
  {
    name: 'Sweden',
    endonym: 'Konungariket Sverige',
    meaning:
      'The name for Sweden is generally agreed to derive from the Proto-Indo-European root *s(w)e, meaning "one\'s own", referring to one\'s own tribe.',
  },
  //37
  {
    name: 'Denmark',
    endonym: 'Danmark',
    meaning:
      'Most etymological dictionaries and handbooks derive "Dan" from a word meaning "flat land". The element mark is believed to mean woodland or borderland.',
  },
  //38
  {
    name: 'Germany',
    endonym: 'Deutschland',
    meaning:
      "The German term Deutschland, originally diutisciu land ('the German lands') is derived from deutsch (cf. Dutch), descended from Old High German diutisc 'of the people' (from diot or diota 'people').",
  },
  //39
  {
    name: 'Netherlands',
    endonym: 'Nederland',
    meaning: 'Literally meaning "the low countries"',
  },
  //40
  {
    name: 'Belgium',
    endonym: 'Koninkrijk België, Royaume de Belgique, Königreich Belgien',
    meaning:
      'Derived from the Belgae tribe, the inhabitants of the northernmost part of Gaul.',
  },
  //41
  {
    name: 'Luxembourg',
    endonym:
      'Groussherzogtum Lëtzebuerg, Grand-Duché de Luxembourg, Großherzogtum Luxemburg',
    meaning: 'From Germanic lutilla "little" + burg "fort, castle."',
  },
  //42
  {
    name: 'Switzerland',
    endonym: 'Suisse, Svizzera, Svizra',
    meaning:
      'Switzer + land. Switzer is from the Alemannic Schwiizer, in origin an inhabitant of Schwyz and its associated territory, one of the Waldstätte cantons which formed the nucleus of the Old Swiss Confederacy. "',
  },
  //43
  {
    name: 'Austria',
    endonym: 'Republik Österreich',
    meaning:
      'Österreich, derives from the Old High German Ostarrîchi, which meant "eastern realm".',
  },
  //44
  {
    name: 'Italy',
    endonym: 'Repubblica Italiana',
    meaning:
      'One theory suggests that "Italy" originated from an Ancient Greek term that refers to the land of the Italói, a tribe that resided in the region now known as Calabria',
  },
  //45
  {
    name: 'Poland',
    endonym: 'Rzeczpospolita Polska',
    meaning:
      'The name is derived from the Polans, a West Slavic tribe who inhabited the Warta River basin of the present-day Greater Poland region.',
  },
  //46
  {
    name: 'Czech Republic',
    endonym: 'Česká republika',
    meaning:
      'The name comes from the Slavic tribe (Czech: Češi, Čechové) and, according to legend, their leader Čech, who brought them to Bohemia, to settle on Říp Mountain.',
  },
  //47
  {
    name: 'Slovakia',
    endonym: 'Slovenská republika',
    meaning:
      'Slovakia\'s name means the "Land of the Slavs" (Slovensko in Slovak stemming from the older form Sloven/Slovienin).',
  },
  //48
  {
    name: 'Hungary',
    endonym: 'Magyarország',
    meaning: "Composed of magyar ('Hungarian') and ország ('country').",
  },
  //49
  {
    name: 'Slovenia',
    endonym: 'Republika Slovenija',
    meaning:
      "The name Slovenia, similarly to Slovaia, etymologically means 'land of the Slavs'.",
  },
  //50
  {
    name: 'Croatia',
    endonym: 'Republika Hrvatska',
    meaning:
      'From proposed Proto-Slavic *Xъrvátъ which means  "one who guards".',
  },
  //51
  {
    name: 'Bosnia and Herzegovina',
    endonym: 'Bosna i Hercegovina',
    meaning:
      'Bosnia means  "small land", Herzegovina means "herzog\'s [land]", deriving from the german word for "duke".',
  },
  //52
  {
    name: 'Montenegro',
    endonym: 'Crna Gora',
    meaning:
      'Meaning literally "Black Mountain", deriving from the appearance of Mount Lovćen, which was covered in dense forests.',
  },
  //53
  {
    name: 'Serbia',
    endonym: 'Republika Srbija',
    meaning:
      'Named for the ethnonym "Serb", meaning itself "family kinship" and "alliance" in Proto-Slavic.',
  },
  //54
  {
    name: 'Albania',
    endonym: 'Republika e Shqipërisë',
    meaning: 'Albania means "Children of the Eagles" and "Land of the Eagles".',
  },
  //55
  {
    name: 'North Macedonia',
    endonym: 'Republika e Maqedonisë së Veriut',
    meaning:
      "The state's name derives from the Greek word Μακεδονία (Makedonía), a kingdom (later, region) named after the ancient Macedonians.",
  },
  //56
  {
    name: 'Greece',
    endonym: 'Ellinikí Dimokratía',
    meaning: 'Land of the Hellenes.',
  },
  //57
  {
    name: 'Turkey',
    endonym: 'Türkiye Cumhuriyeti',
    meaning: 'Land of the Turks',
  },
  //58
  {
    name: 'Bulgaria',
    endonym: 'Republika Bŭlgariya',
    meaning:
      'The name Bulgaria is derived from the Bulgars, a tribe of Turkic origin that founded the First Bulgarian Empire.',
  },
  //59
  {
    name: 'Romania',
    endonym: 'România',
    meaning:
      '"Romania" derives from the local name for Romanian (Romanian: român), which in turn derives from Latin romanus, meaning "Roman" or "of Rome".',
  },
  //60
  {
    name: 'Moldova',
    endonym: 'Republica Moldova',
    meaning:
      'The name Moldova is derived from the Moldova River (German: Moldau); the valley of this river served as a political centre at the time of the foundation of the Principality of Moldavia in 1359.',
  },
  //61
  {
    name: 'Malta',
    endonym: "Repubblika ta' Malta",
    meaning:
      'From ancient Greek Melítē (Μελίτη) of uncertain origin. The name Melítē—shared by the Croatian island Mljet in antiquity—literally means "place of honey" or "sweetness".',
  },
  //62
  {
    name: 'Finland',
    endonym: 'Suomen tasavalta',
    meaning:
      '"Suomi" and "suomalainen" refers originally to the tribe(-s) living in the area of Varsinais-Suomi in southwest Finland.',
  },
  //63
  {
    name: 'Estonia',
    endonym: 'Eesti Vabariik',
    meaning:
      'The name Estonia has been connected to Aesti, a people first mentioned by Ancient Roman historian Tacitus around 98 AD.',
  },
  //64
  {
    name: 'Latvia',
    endonym: 'Latvijas Republika, Latvejas Republika, Lețmō Vabāmō',
    meaning:
      'The name Latvija is derived from the name of the ancient Latgalians, one of four Indo-European Baltic tribes which formed the ethnic core of the area.',
  },
  //65
  {
    name: 'Lithuania',
    endonym: 'Lietuvos Respublika',
    meaning:
      'The name likely comes from Lietava, a small river not far from Kernavė, the core area of the early Lithuanian state',
  },
  //66
  {
    name: 'Belarus',
    endonym: 'Respublika Bielaruś',
    meaning:
      'Meaning "White Rus", possibly deriving lands within the Grand Duchy of Ruthenia populated by Slavic Christians. (as opposed to "black" (non-Christian) slavs)',
  },
  //67
  {
    name: 'Ukraine',
    endonym: 'Ukraina',
    meaning:
      "The name of Ukraine is frequently interpreted as coming from the old Slavic term for 'borderland' as is the word krajina.",
  },
  //68
  {
    name: 'Russia',
    endonym: 'Rossiyskaya Federatsiya',
    meaning:
      "Rossiya, comes from the Byzantine Greek name for Rus', Ρωσία (Rosía). Derived from the Rus' people, who were a swedish tribe.",
  },
  //69
  {
    name: 'Georgia',
    endonym: 'Sakartvelo',
    meaning:
      "Sakartvelo means 'land of Kartvelians', derived from the core central Georgian region of Kartli",
  },
  //70
  {
    name: 'Armenia',
    endonym: "Hayastani Hanrapetut'yun",
    meaning:
      'Haya + stan, traditionally derived from Hayk, the patriarch of the Armenians and great-great-grandson of Noah.',
  },
  //71
  {
    name: 'Azerbijan',
    endonym: 'Azərbaycan Respublikası',
    meaning:
      'Derived from Atropates, a Persian satrap of Media under the Achaemenid Empire.',
  },
  //72
  {
    name: 'Cyprus',
    endonym: 'Kypriakí Dimokratía',
    meaning:
      'Derived from Atropates, a Persian satrap of Media under the Achaemenid Empire.',
  },
  //73
  {
    name: '',
    endonym: '',
    meaning: '',
  },
  //74
  {
    name: 'Cyprus',
    endonym: 'Azərbaycan Respublikası',
    meaning:
      'Derived from Atropates, a Persian satrap of Media under the Achaemenid Empire.',
  },
  //75
  {
    name: 'Cyprus',
    endonym: 'Azərbaycan Respublikası',
    meaning:
      'Derived from Atropates, a Persian satrap of Media under the Achaemenid Empire.',
  },
  //76
  {
    name: 'Cyprus',
    endonym: 'Azərbaycan Respublikası',
    meaning:
      'Derived from Atropates, a Persian satrap of Media under the Achaemenid Empire.',
  },
  //77
  {
    name: 'Cyprus',
    endonym: 'Azərbaycan Respublikası',
    meaning:
      'Derived from Atropates, a Persian satrap of Media under the Achaemenid Empire.',
  },
];

const [name, endonym, meaning] = countryInfo;

countries.forEach((area) => {
  area.addEventListener('click', function () {
    const countryID = parseInt(area.id, 10);
    endonymBox.classList.remove('hidden');
    countryName.innerText = countryInfo[countryID].name;
    countryEntonym.innerText = countryInfo[countryID].endonym;
    entonymMeaning.innerText = countryInfo[countryID].meaning;
  });
});
