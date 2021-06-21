//JavaScriptにはオブジェクトと呼ばれる特殊なデータ型が存在する
//オブジェクトは波括弧{}と任意のプロパティの一覧から成り立つ
//プロパティは「key:value」のペアでkeyは文字列で、valueは何でも良い
//配列の中身に一つ一つ名前が付いているようなイメージ

const user1 = {
  name: "太郎", // キー "name"に値 "太郎" が格納される
  age: 20, //キー "age" に値 20 が格納される
};

//プロパティはコロン「 : 」 の前のキーで、コロンの右が値
//ここではuserオブジェクトは2つのプロパティを持っている


//オブジェクトへのアクセス
//プロパティ値へは、ドット表記を使ってアクセスする事が出来る
const user2 = {
  name: "太郎",
  age: 20,
};

console.log(user2.name);
console.log(user2.age);


//オブジェクト内のメソッド
//オブジェクト内に関数を記述する事ができる
//オブジェクト内の関数は「function」を省略できる
const user3 = {
  say: function () {
    console.log("Hello");
  },
};
user3.say();
const user = {
  say() {
    console.log("Hello");
  },
};
user3.say(); //関数の呼び出し


//メソッドの中の「this」
//オブジェクトの中のメソッド(関数)からオブジェクトに格納されている情報にアクセスする事は多い
//オブジェクトにアクセスするために、メソッドはthisキーワードを使う
//thisの値はメソッドを呼び出すのに使われた「ドットの前」のオブジェクト
//アロー関数内ではthisを使う事はできない
const user4 = {
  name: "太郎",
  age: 20,
  say: function () {
    console.log(this.name); //thisはuser4を指す
  },
};
user4.say();

//分割代入
//複数のプロパティを持ったオブジェクトから特定のプロパティのデータのみを取り出したい時、または値として定義したい時がある。その際には次のように記述する
//プロパティ名(p,q)の値を取り出し左辺のp,qに値を渡している
const o1 = { p: 42, q: true, r: "オブジェクト" };
const { p, q } = o1;

console.log(p); // 42
console.log(q); // true

//取り出した値に変数のように名前を付けて扱いたい場合は次のように記述する
const o2 = { p: 42, q: true };
const { p: a, q: b } = o2;
console.log(a); // 42
console.log(b); // true

//Mathオブジェクト
//Mathオブジェクトとは、主に数値計算を行う際に利用されるもので、多くのプロパティ、メソッドが用意されている。
//以下がよく利用するメソッド
//Math.random()・・・配列内のランダムな数値を取り出したい時に使用。少数による乱数を生成する事が出来る
//Math.ceil()・・・Math.ceilは()内に引数を与えることができ、引数の値を整数にする事ができる。
//少数を繰り上げることで整数にする。
//Math.floor()・・・Math.floor()はMath.ceil()と同様に引数の値を整数にすることができる。少数を繰り下げることで整数にする
//Math.round()・・・Math.round()も引数の値を整数にするが、少数を四捨五入することで整数にする
console.log(Math.random()); //0~1.0未満の乱数がランダムで表示
console.log(Math.ceil(5.4)); //6
console.log(Math.floor(5.4)); //5
console.log(Math.round(5.4)); //5
console.log(Math.floor(Math.random() * 20)); //0~19のうちの整数の乱数を生成


//JSON
//バックエンドにデータを送る際、そのままの形ではデータを送ることはできない
//基本的にはオブジェクトをJSONに変換して送る
//JSON(JavaScript Object Notation)は構造化したデータを表すためのデータ記述言語の一種
//名前にJavaScriptとついているが、書式がJavaScriptに従ったものとなっているだけで、JavaScript専用という事ではない
//オブジェクトとJSONは似ている形をしているが、オブジェクトと違い、JSONはキーをダブルクォートで囲む
//JavaScriptでは以下のメソッドを提供している
//JSON.stringify : オブジェクトをJSONに変換する
//JSON.parse : JSONをオブジェクトに変換する
const student = {
  name: "太郎",
  age: 20,
  gender: "男性",
  skills: ["html", "css", "js"],
  wife: null,
};

const json = JSON.stringify(student);
console.log(student);
console.log(json);

問題あり


