import { useEffect, useState } from 'react';
import './App.css';
import ButtonBlock from './component/ButtonBlock';
import FlagBlock from './component/FlagBlock';

const quizData = [
  {
    flagName: "United States of America",
    options: ["United States of America", "Canada", "Australia", "France"],
    imageSrc: "https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/1200px-Flag_of_the_United_States.svg.png",
    answer: "United States of America"
  },
  {
    flagName: "United Kingdom",
    options: ["United Kingdom", "Germany", "Italy", "Spain"],
    imageSrc: "https://upload.wikimedia.org/wikipedia/en/thumb/a/ae/Flag_of_the_United_Kingdom.svg/1200px-Flag_of_the_United_Kingdom.svg.png",
    answer: "United Kingdom"
  },
  {
    flagName: "Canada",
    options: ["Canada", "United States of America", "Australia", "Brazil"],
    imageSrc: "https://upload.wikimedia.org/wikipedia/en/thumb/c/cf/Flag_of_Canada.svg/1200px-Flag_of_Canada.svg.png",
    answer: "Canada"
  },
  {
    flagName: "Australia",
    options: ["Australia", "New Zealand", "United Kingdom", "Japan"],
    imageSrc: "https://upload.wikimedia.org/wikipedia/en/thumb/b/b9/Flag_of_Australia.svg/1200px-Flag_of_Australia.svg.png",
    answer: "Australia"
  },
  {
    flagName: "Germany",
    options: ["Germany", "United States of America", "China", "Russia"],
    imageSrc: "https://upload.wikimedia.org/wikipedia/en/thumb/b/ba/Flag_of_Germany.svg/1200px-Flag_of_Germany.svg.png",
    answer: "Germany"
  },
  {
    flagName: "Japan",
    options: ["Japan", "South Korea", "China", "Vietnam"],
    imageSrc: "https://upload.wikimedia.org/wikipedia/en/thumb/9/9e/Flag_of_Japan.svg/1280px-Flag_of_Japan.svg.png",
    answer: "Japan"
  },
  {
    flagName: "China",
    options: ["China", "Japan", "India", "South Korea"],
    imageSrc: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Flag_of_the_People%27s_Republic_of_China.svg/1200px-Flag_of_the_People%27s_Republic_of_China.svg.png",
    answer: "China"
  },
  {
    flagName: "India",
    options: ["India", "Pakistan", "Bangladesh", "Nepal"],
    imageSrc: "https://upload.wikimedia.org/wikipedia/en/thumb/4/41/Flag_of_India.svg/1200px-Flag_of_India.svg.png",
    answer: "India"
  },
  // Continue with more real data
  {
    flagName: "Russia",
    options: ["Russia", "Germany", "China", "France"],
    imageSrc: "https://upload.wikimedia.org/wikipedia/en/thumb/f/f3/Flag_of_Russia.svg/1200px-Flag_of_Russia.svg.png",
    answer: "Russia"
  },
  {
    flagName: "South Africa",
    options: ["South Africa", "Egypt", "Nigeria", "Kenya"],
    imageSrc: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Flag_of_South_Africa.svg/1200px-Flag_of_South_Africa.svg.png",
    answer: "South Africa"
  },
  {
    flagName: "Mexico",
    options: ["Mexico", "Spain", "Argentina", "Brazil"],
    imageSrc: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Flag_of_Mexico.svg/1200px-Flag_of_Mexico.svg.png",
    answer: "Mexico"
  },
  {
    flagName: "Argentina",
    options: ["Argentina", "Brazil", "Mexico", "Chile"],
    imageSrc: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Flag_of_Argentina.svg/1200px-Flag_of_Argentina.svg.png",
    answer: "Argentina"
  },
  {
    flagName: "South Korea",
    options: ["South Korea", "Japan", "China", "Vietnam"],
    imageSrc: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Flag_of_South_Korea.svg/1200px-Flag_of_South_Korea.svg.png",
    answer: "South Korea"
  },
  {
    flagName: "Saudi Arabia",
    options: ["Saudi Arabia", "United Arab Emirates", "Qatar", "Kuwait"],
    imageSrc: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Flag_of_Saudi_Arabia.svg/1200px-Flag_of_Saudi_Arabia.svg.png",
    answer: "Saudi Arabia"
  },
  {
    flagName: "Egypt",
    options: ["Egypt", "Nigeria", "South Africa", "Kenya"],
    imageSrc: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Flag_of_Egypt.svg/1200px-Flag_of_Egypt.svg.png",
    answer: "Egypt"
  },
  {
    flagName: "Nigeria",
    options: ["Nigeria", "South Africa", "Kenya", "Ethiopia"],
    imageSrc: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Flag_of_Nigeria.svg/1200px-Flag_of_Nigeria.svg.png",
    answer: "Nigeria"
  },
  {
    flagName: "Turkey",
    options: ["Turkey", "Greece", "Syria", "Iran"],
    imageSrc: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Flag_of_Turkey.svg/1200px-Flag_of_Turkey.svg.png",
    answer: "Turkey"
  },
  {
    flagName: "Indonesia",
    options: ["Indonesia", "Malaysia", "Philippines", "Thailand"],
    imageSrc: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Flag_of_Indonesia.svg/1200px-Flag_of_Indonesia.svg.png",
    answer: "Indonesia"
  },
  {
    flagName: "Pakistan",
    options: ["Pakistan", "India", "Bangladesh", "Afghanistan"],
    imageSrc: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Flag_of_Pakistan.svg/1200px-Flag_of_Pakistan.svg.png",
    answer: "Pakistan"
  },
  {
    flagName: "Bangladesh",
    options: ["Bangladesh", "India", "Pakistan", "Nepal"],
    imageSrc: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Flag_of_Bangladesh.svg/1200px-Flag_of_Bangladesh.svg.png",
    answer: "Bangladesh"
  },
  {
    flagName: "Iran",
    options: ["Iran", "Iraq", "Afghanistan", "Turkey"],
    imageSrc: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Flag_of_Iran.svg/1200px-Flag_of_Iran.svg.png",
    answer: "Iran"
  },
  {
    flagName: "Iraq",
    options: ["Iraq", "Iran", "Syria", "Kuwait"],
    imageSrc: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Flag_of_Iraq.svg/1200px-Flag_of_Iraq.svg.png",
    answer: "Iraq"
  },
  {
    flagName: "Afghanistan",
    options: ["Afghanistan", "Pakistan", "Iran", "Tajikistan"],
    imageSrc: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Flag_of_Afghanistan.svg/1200px-Flag_of_Afghanistan.svg.png",
    answer: "Afghanistan"
  },
  {
    flagName: "Thailand",
    options: ["Thailand", "Vietnam", "Malaysia", "Indonesia"],
    imageSrc: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Flag_of_Thailand.svg/1200px-Flag_of_Thailand.svg.png",
    answer: "Thailand"
  },
  {
    flagName: "Vietnam",
    options: ["Vietnam", "Thailand", "Laos", "Cambodia"],
    imageSrc: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Flag_of_Vietnam.svg/1200px-Flag_of_Vietnam.svg.png",
    answer: "Vietnam"
  },
  {
    flagName: "Philippines",
    options: ["Philippines", "Indonesia", "Malaysia", "Singapore"],
    imageSrc: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Flag_of_the_Philippines.svg/1200px-Flag_of_the_Philippines.svg.png",
    answer: "Philippines"
  },
  {
    flagName: "Malaysia",
    options: ["Malaysia", "Singapore", "Thailand", "Indonesia"],
    imageSrc: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Flag_of_Malaysia.svg/1200px-Flag_of_Malaysia.svg.png",
    answer: "Malaysia"
  },
  {
    flagName: "Singapore",
    options: ["Singapore", "Malaysia", "Thailand", "Indonesia"],
    imageSrc: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Flag_of_Singapore.svg/1200px-Flag_of_Singapore.svg.png",
    answer: "Singapore"
  },
  {
    flagName: "Colombia",
    options: ["Colombia", "Brazil", "Peru", "Argentina"],
    imageSrc: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Flag_of_Colombia.svg/1200px-Flag_of_Colombia.svg.png",
    answer: "Colombia"
  },
  {
    flagName: "Poland",
    options: ["Poland", "Russia", "Germany", "Czech Republic"],
    imageSrc: "https://upload.wikimedia.org/wikipedia/en/thumb/1/12/Flag_of_Poland.svg/1200px-Flag_of_Poland.svg.png",
    answer: "Poland"
  },
  {
    flagName: "Ukraine",
    options: ["Ukraine", "Russia", "Poland", "Belarus"],
    imageSrc: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Flag_of_Ukraine.svg/1200px-Flag_of_Ukraine.svg.png",
    answer: "Ukraine"
  },
  {
    flagName: "Peru",
    options: ["Peru", "Brazil", "Chile", "Colombia"],
    imageSrc: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Flag_of_Peru.svg/1200px-Flag_of_Peru.svg.png",
    answer: "Peru"
  },
  {
    flagName: "Romania",
    options: ["Romania", "Bulgaria", "Hungary", "Serbia"],
    imageSrc: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Flag_of_Romania.svg/1200px-Flag_of_Romania.svg.png",
    answer: "Romania"
  },
  {
    flagName: "Netherlands",
    options: ["Netherlands", "Belgium", "Germany", "Denmark"],
    imageSrc: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Flag_of_the_Netherlands.svg/1200px-Flag_of_the_Netherlands.svg.png",
    answer: "Netherlands"
  },
  {
    flagName: "Belgium",
    options: ["Belgium", "Netherlands", "France", "Germany"],
    imageSrc: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/Flag_of_Belgium.svg/1200px-Flag_of_Belgium.svg.png",
    answer: "Belgium"
  },
  {
    flagName: "Czech Republic",
    options: ["Czech Republic", "Poland", "Slovakia", "Austria"],
    imageSrc: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Flag_of_the_Czech_Republic.svg/1200px-Flag_of_the_Czech_Republic.svg.png",
    answer: "Czech Republic"
  },
  {
    flagName: "Switzerland",
    options: ["Switzerland", "Germany", "France", "Italy"],
    imageSrc: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Flag_of_Switzerland.svg/1200px-Flag_of_Switzerland.svg.png",
    answer: "Switzerland"
  },
  {
    flagName: "Israel",
    options: ["Israel", "Palestine", "Jordan", "Egypt"],
    imageSrc: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Flag_of_Israel.svg/1200px-Flag_of_Israel.svg.png",
    answer: "Israel"
  },
  {
    flagName: "Finland",
    options: ["Finland", "Sweden", "Norway", "Denmark"],
    imageSrc: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Flag_of_Finland.svg/1200px-Flag_of_Finland.svg.png",
    answer: "Finland"
  },
  {
    flagName: "Slovakia",
    options: ["Slovakia", "Czech Republic", "Hungary", "Austria"],
    imageSrc: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Flag_of_Slovakia.svg/1200px-Flag_of_Slovakia.svg.png",
    answer: "Slovakia"
  },
  {
    flagName: "UAE",
    options: ["UAE", "Saudi Arabia", "Qatar", "Kuwait"],
    imageSrc: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Flag_of_the_United_Arab_Emirates.svg/1200px-Flag_of_the_United_Arab_Emirates.svg.png",
    answer: "UAE"
  },
  {
    flagName: "Greece",
    options: ["Greece", "Turkey", "Italy", "Spain"],
    imageSrc: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Flag_of_Greece.svg/1200px-Flag_of_Greece.svg.png",
    answer: "Greece"
  },
  {
    flagName: "Cuba",
    options: ["Cuba", "Dominican Republic", "Haiti", "Puerto Rico"],
    imageSrc: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Flag_of_Cuba.svg/1200px-Flag_of_Cuba.svg.png",
    answer: "Cuba"
  },
  {
    flagName: "Ecuador",
    options: ["Ecuador", "Peru", "Colombia", "Chile"],
    imageSrc: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Flag_of_Ecuador.svg/1200px-Flag_of_Ecuador.svg.png",
    answer: "Ecuador"
  },
  {
    flagName: "Belarus",
    options: ["Belarus", "Russia", "Ukraine", "Poland"],
    imageSrc: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Flag_of_Belarus.svg/1200px-Flag_of_Belarus.svg.png",
    answer: "Belarus"
  },
  {
    flagName: "Serbia",
    options: ["Serbia", "Croatia", "Bosnia and Herzegovina", "Montenegro"],
    imageSrc: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Flag_of_Serbia.svg/1200px-Flag_of_Serbia.svg.png",
    answer: "Serbia"
  },
  {
    flagName: "New Zealand",
    options: ["New Zealand", "Australia", "Fiji", "Samoa"],
    imageSrc: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Flag_of_New_Zealand.svg/1200px-Flag_of_New_Zealand.svg.png",
    answer: "New Zealand"
  },
  {
    flagName: "Iceland",
    options: ["Iceland", "Norway", "Denmark", "Sweden"],
    imageSrc: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Flag_of_Iceland.svg/1200px-Flag_of_Iceland.svg.png",
    answer: "Iceland"
  },
  {
    flagName: "Morocco",
    options: ["Morocco", "Algeria", "Tunisia", "Libya"],
    imageSrc: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Flag_of_Morocco.svg/1200px-Flag_of_Morocco.svg.png",
    answer: "Morocco"
  },
  {
    flagName: "Algeria",
    options: ["Algeria", "Morocco", "Tunisia", "Libya"],
    imageSrc: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Flag_of_Algeria.svg/1200px-Flag_of_Algeria.svg.png",
    answer: "Algeria"
  },
  {
    flagName: "Tunisia",
    options: ["Tunisia", "Algeria", "Morocco", "Libya"],
    imageSrc: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Flag_of_Tunisia.svg/1200px-Flag_of_Tunisia.svg.png",
    answer: "Tunisia"
  },
  {
    flagName: "Kenya",
    options: ["Kenya", "Uganda", "Tanzania", "Rwanda"],
    imageSrc: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Flag_of_Kenya.svg/1200px-Flag_of_Kenya.svg.png",
    answer: "Kenya"
  },
  {
    flagName: "Ethiopia",
    options: ["Ethiopia", "Kenya", "Somalia", "Sudan"],
    imageSrc: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Flag_of_Ethiopia.svg/1200px-Flag_of_Ethiopia.svg.png",
    answer: "Ethiopia"
  },
  {
    flagName: "Nepal",
    options: ["Nepal", "India", "China", "Bhutan"],
    imageSrc: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/Flag_of_Nepal.svg/1200px-Flag_of_Nepal.svg.png",
    answer: "Nepal"
  },
  {
    flagName: "Sri Lanka",
    options: ["Sri Lanka", "India", "Bangladesh", "Maldives"],
    imageSrc: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Flag_of_Sri_Lanka.svg/1200px-Flag_of_Sri_Lanka.svg.png",
    answer: "Sri Lanka"
  },
  {
    flagName: "Lebanon",
    options: ["Lebanon", "Syria", "Israel", "Jordan"],
    imageSrc: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Flag_of_Lebanon.svg/1200px-Flag_of_Lebanon.svg.png",
    answer: "Lebanon"
  },
  {
    flagName: "Croatia",
    options: ["Croatia", "Serbia", "Slovenia", "Bosnia and Herzegovina"],
    imageSrc: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Flag_of_Croatia.svg/1200px-Flag_of_Croatia.svg.png",
    answer: "Croatia"
  },
  {
    flagName: "Slovenia",
    options: ["Slovenia", "Croatia", "Serbia", "Austria"],
    imageSrc: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Flag_of_Slovenia.svg/1200px-Flag_of_Slovenia.svg.png",
    answer: "Slovenia"
  },
  {
    flagName: "Bosnia and Herzegovina",
    options: ["Bosnia and Herzegovina", "Croatia", "Serbia", "Montenegro"],
    imageSrc: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/Flag_of_Bosnia_and_Herzegovina.svg/1200px-Flag_of_Bosnia_and_Herzegovina.svg.png",
    answer: "Bosnia and Herzegovina"
  },
  {
    flagName: "Libya",
    options: ["Libya", "Egypt", "Algeria", "Tunisia"],
    imageSrc: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Flag_of_Libya.svg/1200px-Flag_of_Libya.svg.png",
    answer: "Libya"
  },
  {
    flagName: "Jordan",
    options: ["Jordan", "Syria", "Lebanon", "Israel"],
    imageSrc: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/Flag_of_Jordan.svg/1200px-Flag_of_Jordan.svg.png",
    answer: "Jordan"
  },
  {
    flagName: "Paraguay",
    options: ["Paraguay", "Brazil", "Argentina", "Uruguay"],
    imageSrc: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/Flag_of_Paraguay.svg/1200px-Flag_of_Paraguay.svg.png",
    answer: "Paraguay"
  },
  {
    flagName: "Uruguay",
    options: ["Uruguay", "Brazil", "Argentina", "Paraguay"],
    imageSrc: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Flag_of_Uruguay.svg/1200px-Flag_of_Uruguay.svg.png",
    answer: "Uruguay"
  },
  {
    flagName: "Mongolia",
    options: ["Mongolia", "China", "Russia", "Kazakhstan"],
    imageSrc: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Flag_of_Mongolia.svg/1200px-Flag_of_Mongolia.svg.png",
    answer: "Mongolia"
  },
  {
    flagName: "Sudan",
    options: ["Sudan", "South Sudan", "Chad", "Ethiopia"],
    imageSrc: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/Flag_of_Sudan.svg/1200px-Flag_of_Sudan.svg.png",
    answer: "Sudan"
  },
  {
    flagName: "Kuwait",
    options: ["Kuwait", "Saudi Arabia", "Qatar", "UAE"],
    imageSrc: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/Flag_of_Kuwait.svg/1200px-Flag_of_Kuwait.svg.png",
    answer: "Kuwait"
  },
  {
    flagName: "Oman",
    options: ["Oman", "Yemen", "Saudi Arabia", "UAE"],
    imageSrc: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Flag_of_Oman.svg/1200px-Flag_of_Oman.svg.png",
    answer: "Oman"
  },
  {
    flagName: "Panama",
    options: ["Panama", "Costa Rica", "Colombia", "Honduras"],
    imageSrc: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Flag_of_Panama.svg/1200px-Flag_of_Panama.svg.png",
    answer: "Panama"
  },
  {
    flagName: "Costa Rica",
    options: ["Costa Rica", "Panama", "Nicaragua", "Honduras"],
    imageSrc: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Flag_of_Costa_Rica.svg/1200px-Flag_of_Costa_Rica.svg.png",
    answer: "Costa Rica"
  },
  {
    flagName: "Puerto Rico",
    options: ["Puerto Rico", "Cuba", "Dominican Republic", "Haiti"],
    imageSrc: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/Flag_of_Puerto_Rico.svg/1200px-Flag_of_Puerto_Rico.svg.png",
    answer: "Puerto Rico"
  },
  {
    flagName: "Dominican Republic",
    options: ["Dominican Republic", "Cuba", "Haiti", "Jamaica"],
    imageSrc: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Flag_of_the_Dominican_Republic.svg/1200px-Flag_of_the_Dominican_Republic.svg.png",
    answer: "Dominican Republic"
  },
  {
    flagName: "Bolivia",
    options: ["Bolivia", "Peru", "Chile", "Paraguay"],
    imageSrc: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Flag_of_Bolivia.svg/1200px-Flag_of_Bolivia.svg.png",
    answer: "Bolivia"
  },
  {
    flagName: "Latvia",
    options: ["Latvia", "Lithuania", "Estonia", "Belarus"],
    imageSrc: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Flag_of_Latvia.svg/1200px-Flag_of_Latvia.svg.png",
    answer: "Latvia"
  },
  {
    flagName: "Lithuania",
    options: ["Lithuania", "Latvia", "Estonia", "Belarus"],
    imageSrc: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Flag_of_Lithuania.svg/1200px-Flag_of_Lithuania.svg.png",
    answer: "Lithuania"
  },
  {
    flagName: "Estonia",
    options: ["Estonia", "Latvia", "Lithuania", "Finland"],
    imageSrc: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Flag_of_Estonia.svg/1200px-Flag_of_Estonia.svg.png",
    answer: "Estonia"
  },
  {
    flagName: "Palestine",
    options: ["Palestine", "Israel", "Jordan", "Syria"],
    imageSrc: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Flag_of_Palestine.svg/1200px-Flag_of_Palestine.svg.png",
    answer: "Palestine"
  },
  {
    flagName: "Qatar",
    options: ["Qatar", "Saudi Arabia", "UAE", "Bahrain"],
    imageSrc: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/Flag_of_Qatar.svg/1200px-Flag_of_Qatar.svg.png",
    answer: "Qatar"
  },
  {
    flagName: "Luxembourg",
    options: ["Luxembourg", "Belgium", "Netherlands", "Germany"],
    imageSrc: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Flag_of_Luxembourg.svg/1200px-Flag_of_Luxembourg.svg.png",
    answer: "Luxembourg"
  },
  {
    flagName: "Bahrain",
    options: ["Bahrain", "Saudi Arabia", "Qatar", "UAE"],
    imageSrc: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Flag_of_Bahrain.svg/1200px-Flag_of_Bahrain.svg.png",
    answer: "Bahrain"
  },
  {
    flagName: "Trinidad and Tobago",
    options: ["Trinidad and Tobago", "Jamaica", "Barbados", "Guyana"],
    imageSrc: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Flag_of_Trinidad_and_Tobago.svg/1200px-Flag_of_Trinidad_and_Tobago.svg.png",
    answer: "Trinidad and Tobago"
  },
  {
    flagName: "Guyana",
    options: ["Guyana", "Suriname", "French Guiana", "Venezuela"],
    imageSrc: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Flag_of_Guyana.svg/1200px-Flag_of_Guyana.svg.png",
    answer: "Guyana"
  },
  {
    flagName: "Suriname",
    options: ["Suriname", "Guyana", "French Guiana", "Venezuela"],
    imageSrc: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Flag_of_Suriname.svg/1200px-Flag_of_Suriname.svg.png",
    answer: "Suriname"
  },
  {
    flagName: "Maldives",
    options: ["Maldives", "Sri Lanka", "India", "Mauritius"],
    imageSrc: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Flag_of_Maldives.svg/1200px-Flag_of_Maldives.svg.png",
    answer: "Maldives"
  },
  {
    flagName: "Mauritius",
    options: ["Mauritius", "Seychelles", "Madagascar", "Comoros"],
    imageSrc: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Flag_of_Mauritius.svg/1200px-Flag_of_Mauritius.svg.png",
    answer: "Mauritius"
  },
  {
    flagName: "Mali",
    options: ["Mali", "Niger", "Burkina Faso", "Ivory Coast"],
    imageSrc: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/Flag_of_Mali.svg/1200px-Flag_of_Mali.svg.png",
    answer: "Mali"
  },
  {
    flagName: "Guatemala",
    options: ["Guatemala", "Honduras", "El Salvador", "Nicaragua"],
    imageSrc: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Flag_of_Guatemala.svg/1200px-Flag_of_Guatemala.svg.png",
    answer: "Guatemala"
  },
  {
    flagName: "Honduras",
    options: ["Honduras", "Guatemala", "El Salvador", "Nicaragua"],
    imageSrc: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Flag_of_Honduras.svg/1200px-Flag_of_Honduras.svg.png",
    answer: "Honduras"
  },
  {
    flagName: "El Salvador",
    options: ["El Salvador", "Guatemala", "Honduras", "Nicaragua"],
    imageSrc: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Flag_of_El_Salvador.svg/1200px-Flag_of_El_Salvador.svg.png",
    answer: "El Salvador"
  },
  {
    flagName: "Nicaragua",
    options: ["Nicaragua", "Honduras", "Guatemala", "El Salvador"],
    imageSrc: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Flag_of_Nicaragua.svg/1200px-Flag_of_Nicaragua.svg.png",
    answer: "Nicaragua"
  },
  {
    flagName: "Senegal",
    options: ["Senegal", "Mauritania", "Mali", "Guinea"],
    imageSrc: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Flag_of_Senegal.svg/1200px-Flag_of_Senegal.svg.png",
    answer: "Senegal"
  },
  {
    flagName: "Tanzania",
    options: ["Tanzania", "Kenya", "Uganda", "Rwanda"],
    imageSrc: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Flag_of_Tanzania.svg/1200px-Flag_of_Tanzania.svg.png",
    answer: "Tanzania"
  },
  {
    flagName: "Cambodia",
    options: ["Cambodia", "Vietnam", "Thailand", "Laos"],
    imageSrc: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Flag_of_Cambodia.svg/1200px-Flag_of_Cambodia.svg.png",
    answer: "Cambodia"
  },
  {
    flagName: "Laos",
    options: ["Laos", "Cambodia", "Vietnam", "Thailand"],
    imageSrc: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Flag_of_Laos.svg/1200px-Flag_of_Laos.svg.png",
    answer: "Laos"
  },
  {
    flagName: "Uganda",
    options: ["Uganda", "Kenya", "Tanzania", "Rwanda"],
    imageSrc: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Flag_of_Uganda.svg/1200px-Flag_of_Uganda.svg.png",
    answer: "Uganda"
  },
  {
    flagName: "Cameroon",
    options: ["Cameroon", "Nigeria", "Chad", "Central African Republic"],
    imageSrc: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Flag_of_Cameroon.svg/1200px-Flag_of_Cameroon.svg.png",
    answer: "Cameroon"
  },
  {
    flagName: "Yemen",
    options: ["Yemen", "Oman", "Saudi Arabia", "UAE"],
    imageSrc: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Flag_of_Yemen.svg/1200px-Flag_of_Yemen.svg.png",
    answer: "Yemen"
  },
  {
    flagName: "Ghana",
    options: ["Ghana", "Ivory Coast", "Burkina Faso", "Togo"],
    imageSrc: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Flag_of_Ghana.svg/1200px-Flag_of_Ghana.svg.png",
    answer: "Ghana"
  },
  {
    flagName: "Ivory Coast",
    options: ["Ivory Coast", "Ghana", "Burkina Faso", "Liberia"],
    imageSrc: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Flag_of_C%C3%B4te_d%27Ivoire.svg/1200px-Flag_of_C%C3%B4te_d%27Ivoire.svg.png",
    answer: "Ivory Coast"
  },
  {
    flagName: "Madagascar",
    options: ["Madagascar", "Mauritius", "Seychelles", "Comoros"],
    imageSrc: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Flag_of_Madagascar.svg/1200px-Flag_of_Madagascar.svg.png",
    answer: "Madagascar"
  },
  {
    flagName: "North Korea",
    options: ["North Korea", "South Korea", "China", "Russia"],
    imageSrc: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Flag_of_North_Korea.svg/1200px-Flag_of_North_Korea.svg.png",
    answer: "North Korea"
  },
  {
    flagName: "Zimbabwe",
    options: ["Zimbabwe", "Zambia", "Botswana", "South Africa"],
    imageSrc: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/Flag_of_Zimbabwe.svg/1200px-Flag_of_Zimbabwe.svg.png",
    answer: "Zimbabwe"
  },
  {
    flagName: "Zambia",
    options: ["Zambia", "Zimbabwe", "Botswana", "Namibia"],
    imageSrc: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Flag_of_Zambia.svg/1200px-Flag_of_Zambia.svg.png",
    answer: "Zambia"
  },
  {
    flagName: "Botswana",
    options: ["Botswana", "Zimbabwe", "Zambia", "Namibia"],
    imageSrc: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Flag_of_Botswana.svg/1200px-Flag_of_Botswana.svg.png",
    answer: "Botswana"
  },
  {
    flagName: "Namibia",
    options: ["Namibia", "Botswana", "Zambia", "Angola"],
    imageSrc: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Flag_of_Namibia.svg/1200px-Flag_of_Namibia.svg.png",
    answer: "Namibia"
  },
  {
    flagName: "Chad",
    options: ["Chad", "Niger", "Cameroon", "Sudan"],
    imageSrc: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Flag_of_Chad.svg/1200px-Flag_of_Chad.svg.png",
    answer: "Chad"
  },
  {
    flagName: "Niger",
    options: ["Niger", "Chad", "Mali", "Burkina Faso"],
    imageSrc: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/Flag_of_Niger.svg/1200px-Flag_of_Niger.svg.png",
    answer: "Niger"
  },
  {
    flagName: "Angola",
    options: ["Angola", "Namibia", "Zambia", "Congo"],
    imageSrc: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Flag_of_Angola.svg/1200px-Flag_of_Angola.svg.png",
    answer: "Angola"
  },
  {
    flagName: "Guinea",
    options: ["Guinea", "Guinea-Bissau", "Sierra Leone", "Liberia"],
    imageSrc: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/Flag_of_Guinea.svg/1200px-Flag_of_Guinea.svg.png",
    answer: "Guinea"
  },
  {
    flagName: "Tajikistan",
    options: ["Tajikistan", "Uzbekistan", "Kyrgyzstan", "Turkmenistan"],
    imageSrc: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Flag_of_Tajikistan.svg/1200px-Flag_of_Tajikistan.svg.png",
    answer: "Tajikistan"
  },
  {
    flagName: "Kyrgyzstan",
    options: ["Kyrgyzstan", "Tajikistan", "Uzbekistan", "Turkmenistan"],
    imageSrc: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Flag_of_Kyrgyzstan.svg/1200px-Flag_of_Kyrgyzstan.svg.png",
    answer: "Kyrgyzstan"
  },
  {
    flagName: "Turkmenistan",
    options: ["Turkmenistan", "Tajikistan", "Uzbekistan", "Kyrgyzstan"],
    imageSrc: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Flag_of_Turkmenistan.svg/1200px-Flag_of_Turkmenistan.svg.png",
    answer: "Turkmenistan"
  },
  {
    flagName: "Georgia",
    options: ["Georgia", "Armenia", "Azerbaijan", "Turkey"],
    imageSrc: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Flag_of_Georgia.svg/1200px-Flag_of_Georgia.svg.png",
    answer: "Georgia"
  },
  {
    flagName: "Armenia",
    options: ["Armenia", "Georgia", "Azerbaijan", "Turkey"],
    imageSrc: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Flag_of_Armenia.svg/1200px-Flag_of_Armenia.svg.png",
    answer: "Armenia"
  },
  {
    flagName: "Azerbaijan",
    options: ["Azerbaijan", "Armenia", "Georgia", "Turkey"],
    imageSrc: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Flag_of_Azerbaijan.svg/1200px-Flag_of_Azerbaijan.svg.png",
    answer: "Azerbaijan"
  },
  {
    flagName: "Moldova",
    options: ["Moldova", "Romania", "Ukraine", "Belarus"],
    imageSrc: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/Flag_of_Moldova.svg/1200px-Flag_of_Moldova.svg.png",
    answer: "Moldova"
  },
  {
    flagName: "Uzbekistan",
    options: ["Uzbekistan", "Tajikistan", "Kyrgyzstan", "Turkmenistan"],
    imageSrc: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Flag_of_Uzbekistan.svg/1200px-Flag_of_Uzbekistan.svg.png",
    answer: "Uzbekistan"
  },
  {
    flagName: "Gambia",
    options: ["Gambia", "Senegal", "Guinea-Bissau", "Guinea"],
    imageSrc: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Flag_of_The_Gambia.svg/1200px-Flag_of_The_Gambia.svg.png",
    answer: "Gambia"
  },
  {
    flagName: "Guinea-Bissau",
    options: ["Guinea-Bissau", "Guinea", "Senegal", "Gambia"],
    imageSrc: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/Flag_of_Guinea-Bissau.svg/1200px-Flag_of_Guinea-Bissau.svg.png",
    answer: "Guinea-Bissau"
  },
  {
    flagName: "Mozambique",
    options: ["Mozambique", "Zimbabwe", "Zambia", "Malawi"],
    imageSrc: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Flag_of_Mozambique.svg/1200px-Flag_of_Mozambique.svg.png",
    answer: "Mozambique"
  },
  {
    flagName: "Syria",
    options: ["Syria", "Lebanon", "Israel", "Jordan"],
    imageSrc: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Flag_of_Syria.svg/1200px-Flag_of_Syria.svg.png",
    answer: "Syria"
  },
  {
    flagName: "Liberia",
    options: ["Liberia", "Sierra Leone", "Ivory Coast", "Guinea"],
    imageSrc: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/Flag_of_Liberia.svg/1200px-Flag_of_Liberia.svg.png",
    answer: "Liberia"
  },
  {
    flagName: "Congo",
    options: ["Congo", "Angola", "Cameroon", "Central African Republic"],
    imageSrc: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/Flag_of_the_Republic_of_the_Congo.svg/1200px-Flag_of_the_Republic_of_the_Congo.svg.png",
    answer: "Congo"
  },
  {
    flagName: "Central African Republic",
    options: ["Central African Republic", "Chad", "Cameroon", "Congo"],
    imageSrc: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Flag_of_the_Central_African_Republic.svg/1200px-Flag_of_the_Central_African_Republic.svg.png",
    answer: "Central African Republic"
  },
  {
    flagName: "Gabon",
    options: ["Gabon", "Equatorial Guinea", "Republic of the Congo", "Cameroon"],
    imageSrc: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Flag_of_Gabon.svg/1200px-Flag_of_Gabon.svg.png",
    answer: "Gabon"
  },
  {
    flagName: "Hungary",
    options: ["Hungary", "Austria", "Slovakia", "Romania"],
    imageSrc: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Flag_of_Hungary.svg/1200px-Flag_of_Hungary.svg.png",
    answer: "Hungary"
  },
  {
    flagName: "Austria",
    options: ["Austria", "Germany", "Hungary", "Switzerland"],
    imageSrc: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Flag_of_Austria.svg/1200px-Flag_of_Austria.svg.png",
    answer: "Austria"
  },
  {
    flagName: "Denmark",
    options: ["Denmark", "Sweden", "Norway", "Germany"],
    imageSrc: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Flag_of_Denmark.svg/1200px-Flag_of_Denmark.svg.png",
    answer: "Denmark"
  },
  {
    flagName: "Sweden",
    options: ["Sweden", "Norway", "Finland", "Denmark"],
    imageSrc: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Flag_of_Sweden.svg/1200px-Flag_of_Sweden.svg.png",
    answer: "Sweden"
  },
  {
    flagName: "Norway",
    options: ["Norway", "Sweden", "Finland", "Denmark"],
    imageSrc: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Flag_of_Norway.svg/1200px-Flag_of_Norway.svg.png",
    answer: "Norway"
  },
  {
    flagName: "Italy",
    options: ["Italy", "France", "Switzerland", "Austria"],
    imageSrc: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Flag_of_Italy.svg/1200px-Flag_of_Italy.svg.png",
    answer: "Italy"
  },
  {
    flagName: "France",
    options: ["France", "Germany", "Italy", "Spain"],
    imageSrc: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Flag_of_France.svg/1200px-Flag_of_France.svg.png",
    answer: "France"
  },
  {
    flagName: "Spain",
    options: ["Spain", "France", "Portugal", "Italy"],
    imageSrc: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Flag_of_Spain.svg/1200px-Flag_of_Spain.svg.png",
    answer: "Spain"
  },
  {
    flagName: "Portugal",
    options: ["Portugal", "Spain", "France", "Italy"],
    imageSrc: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Flag_of_Portugal.svg/1200px-Flag_of_Portugal.svg.png",
    answer: "Portugal"
  },
  {
    flagName: "Ireland",
    options: ["Ireland", "United Kingdom", "France", "Germany"],
    imageSrc: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/Flag_of_Ireland.svg/1200px-Flag_of_Ireland.svg.png",
    answer: "Ireland"
  },
  {
    flagName: "United States",
    options: ["United States", "Canada", "Mexico", "Brazil"],
    imageSrc: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Flag_of_the_United_States.svg/1200px-Flag_of_the_United_States.svg.png",
    answer: "United States"
  },
  {
    flagName: "Brazil",
    options: ["Brazil", "Argentina", "Colombia", "Peru"],
    imageSrc: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Flag_of_Brazil.svg/1200px-Flag_of_Brazil.svg.png",
    answer: "Brazil"
  },
  {
    flagName: "Chile",
    options: ["Chile", "Argentina", "Peru", "Bolivia"],
    imageSrc: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Flag_of_Chile.svg/1200px-Flag_of_Chile.svg.png",
    answer: "Chile"
  }]

function App() {

  const [currentQuestion, setCurrentQuestion] = useState(quizData[getRandomInt()]);
  const [answer, setAnswer] = useState('');
  const [count, setCount] = useState(1);
  const [wrongCorrectClass, setwrongCorrectClass] = useState('');
  const [score, setScore] = useState(0)

  function getRandomInt() {
    const max = quizData.length - 1;
    const min = 0;
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  const nextQuestion = () => {
    if (count < 10) {
      setCount(count + 1);
      setAnswer('')
      setwrongCorrectClass('')
      setCurrentQuestion((quizData[getRandomInt()]));
    } else {
      setCount(count + 1)
    }
  }

  const handleClick = (e) => {
    if (e.target.innerText == currentQuestion.answer) {
      setAnswer(`Correct - ${currentQuestion.answer}`)
      setwrongCorrectClass('right')
      setScore(prev => prev + 1);

    } else {
      setAnswer(`Wrong Answer - correct answer is ${currentQuestion.answer}`)
      setwrongCorrectClass('wrong')
    }
    setTimeout(() => {
      nextQuestion();
    }, 2000)
  }

  return (
    count <= 10 ? <div className="App">
      <h1>FLAG QUIZ COMPETITION</h1>
      <h2>Qustion {count}</h2>
      <FlagBlock
        flagData={currentQuestion}
      />

      <ButtonBlock
        handleClick={handleClick}
        flagData={currentQuestion}
      />

      <div>
        <h3 className={wrongCorrectClass}>{answer}</h3>
      </div>
    </div> : <div>
      <h1 style={{ textAlign: "center" }}>Your Score</h1>
      <h2 style={{ textAlign: "center", }}>{score} / 10</h2>
    </div>
  );
}
export default App;
