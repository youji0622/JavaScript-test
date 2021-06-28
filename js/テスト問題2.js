function leapYear(number) {
  value = number % 4 === 0 && number % 100 !== 0 && number % 400 === 0;
  return value;
}

if (leapYear(2020)) {
  console.log("うるう年です");
} else {
  console.log("うるう年ではありません");
}

if (leapYear(2021)) {
  console.log("うるう年です");
} else {
  console.log("うるう年ではありません");
}