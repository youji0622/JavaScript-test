//問題
//1
const test = ["国語", "数学", "英語"];
test.push("理科", "社会");
console.log(test);
console.log(test.length);

//2
for (let i = 1; i <= 50; i++) {
  if (i % 15 == 0) {
    console.log("FizzBuzz")
  } else if (i % 5 == 0) {
    console.log("Buzz")
  } else if (i % 3 == 0) {
    console.log("Fizz")
  } else {
    console.log(i);
  }
}

//3
let water = 1000;
const drinkwater = 180;
while (water > 0) {
  console.log(water);
  water = water - drinkwater;
}
console.log("水を飲み干した");