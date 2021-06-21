//try...catch構文
try {
  console.log("try節:この行は実行されます");
  undefinedFunction();
  console.log("try節:この行は実行されません");
} catch (error) {
  console.log("catch節:この行は実行されます");
  console.log(error.message);
} finally {
  console.log("finally節:この行は実行されます");
}

//片方は省略できる
try {
    undefinedFunction();
} catch (error) {
    console.error(error);
}

try {
    undefinedFunction();
} finally {
    console.log("この行は実行されます");
}

//throw文
try {
    throw new Error("例外が投げられました");
} catch (error) {
    console.log(error.message);
}