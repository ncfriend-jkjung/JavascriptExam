setTimeout(() => alert("timeout"));

new Promise(resolve => {
  alert("executor");
  resolve();
})
  .then(() => alert("promise"));

alert("code");


////////////////
function delay(ms) {
  // 여기에 코드 작성
  return new Promise(function (resolve, reject) {
    setTimeout(resolve, ms);
  });
}

delay(3000).then((res) => alert('3초후 실행' + res));