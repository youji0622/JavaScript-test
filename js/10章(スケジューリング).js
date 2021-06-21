

//以下の例では1秒ごとにメッセージを表示し、5秒後に表示が停止される
function say() {
  alert("Hello");
}
const timerId = setInterval(say, 1000);
function stop() {
  clearInterval(timerId);
}
setTimeout(stop, 5000)