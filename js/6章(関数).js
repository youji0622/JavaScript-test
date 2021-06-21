//関数とは、同じ処理をまとめて定義し、使いまわしができる形にしたもの。インプット(引数)に対して処理を行いアウトプット(返り血)を出す事を意識する。

//関数宣言
//関数を使用するにはまず宣言を行う。引数には複数の値を入れることもできる

//関数呼び出し
//関数は宣言しただけでは利用できず、定義後に呼び出すことで利用できる。
//関数名()で呼び出しを行う事ができ、返り値が出力される
function 関数名(引数) {
    処理
    return 返り値;
}

function text(number1, number2) {
  const value = number1 + number2;
  return value;
}
console.log(text(2, 4)); //関数の呼び出し
//第一引数(number1)に「2」,第二引数(number2)に「4」を入れtext関数に値を渡している

//返り値を使用して別の値を算出することもできる
function text(number1, number2) {
  const value = number1 + number2;
  return value;
}
const sum = text(2, 4); // sumにvalueの値を代入
console.log(sum * 2); // 12

//アロー関数は、よりシンプルで簡潔な構文
const text = (number1, number2) => {
  const value = number1 + number2;
  return value;
}

console.log(text(2, 4));
//関数、関数式、アロー関数はどれもよく使うので覚えておく


//コールバック関数とは、関数の引数に入れられた関数のこと
function vegetable(name, price, func) { 
  const pit = func(price); // func（priceIncludingTax）の実行
  console.log(name + 'の税込価格は' + pit + 'です');
}
// 関数式
const priceIncludingTax = function (price) { // 税込み価格の計算
  const tax = 1.1;
  return Math.floor(price * tax);
}
vegetable('苺', 200, priceIncludingTax); // priceIncludingTaxがコールバック関数

//スコープとは、定義した変数や定数を参照できる範囲のことを指す。スコープには、グローバルスコープ、ローカルスコープの2種類がある。
const globalConst = 'globalConst';
let globalLet = 'globalLet';

function dummyFunc() {
  const localConst = 'localConst';
  let localLet = 'localLet';
}

dummyFunc();

console.log(globalConst);
console.log(globalLet);

// 値の更新
globalLet = 'updateGlobalLet';
console.log(globalLet);

console.log(localConst);