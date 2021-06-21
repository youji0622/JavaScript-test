//if文
const price = 1800;
if (price < 1000) {
  console.log("安い")
} else if (price > 2000) {
  console.log("高い")
} else {
  console.log("丁度いい")
} //結果：丁度いい

//三項演算子　　if文のショートカットに使う
const number = "1";
const num = (number >= 6) ? "多い" : "少ない"; //定数「number」が6以上なら多い、6以下なら少ない
console.log(num);　　//結果:少ない

//switch文　　分岐が多い場合、if文より分かりやすい場合もある
const person = 3;
switch (person) {
  case 1:　　　　　　　　　　　　　//「case」で分岐を開始
    console.log("太郎さん");
    break;　　　　　　　　　　　　//「break」で分岐を終了
  case 2:
    console.log("次郎さん");
    break;
   case 3:
    console.log("三郎さん");
    break;
   case 4:
    console.log("四郎さん");
    break;
   case 5:
    console.log("五郎さん");
    break;
} // 結果：三郎さん

問題
//A君とB君、それぞれの合計点数が300以上の場合、コンソール画面に「素晴らしい」と出力してください。どちらか片方が300点以上だった場合は、「普通」と出力してください。どちらも、300点より下の場合は、「頑張ろう」と出力してください。
if(scoreA >= 300 && scoreB >= 300) {
  console.log("素晴らしい");
} else if (scoreA >= 300 || scoreB >= 300) {
  console.log("普通");
} else if (scoreA < 300 && scoreB < 300) {
  console.log("頑張ろう");
}

//以下のif文を三項演算子で書き換えてください。
const price = 1800;

if (price < 1000) {
  console.log("安い");
} else if (price > 2000) {
  console.log("高い");
} else {
  console.log("丁度良い");
}

// 以下に記述
const price = 1800;
const result = (price < 1000) ? "安い" : (price > 2000) ? "高い" : "丁度いい";
console.log(result);
