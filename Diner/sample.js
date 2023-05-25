function makeCounter() {
  var count = 0;

  return function () {
    return count++;
  };
}

var counter = makeCounter();
console.log(counter()); // 0
console.log(counter()); // 1
counter.count = 10;     //직접 접근 불가
console.log(counter()); // 2(not 10)

var counter2 = makeCounter(); // 새로운 환경을 갖고 있는 클로저 함수가 반환됩니다
console.log(counter2()); // 0
console.log(counter2()); // 1

// 외부에서 count 변수의 존재를 알지 못합니다
// 이를 통해 클로저로 원하는 값 또는 메서드를 숨길 수 있습니다

//callback 예제 - 비동기 작업 => 단, 순차적으로 비동기 처리를 해야 하면 Depth가 계속 추가되는 약점이 있음.
function loadScript(src, callback) {
  let script = document.createElement('script');
  script.src = src;
  script.onload = () => callback(null, script);
  script.onerror = () => callback(new Error(`${src}를 불러오는 도중에 에러가 발생했습니다.`));
  document.head.append(script);
}

loadScript('https://cdnjs.cloudflare.com/ajax/libs/lodash.js/3.2.0/lodash.js', (error, script) => {
  if (error) return handleError(error);

  //alert(`${script.src}가 로드되었습니다.`);
  //alert(_); // 스크립트에 정의된 함수
});


//콜백 지옥을 해결한 개념, Promise
let promise = new Promise(function (resolve, reject) {
  // 프라미스가 만들어지면 executor 함수는 자동으로 실행됩니다.
  //내부는 비동기 작업 정의 - 즉시 실행됨.

  //resolve -> 성공시 callback
  //reject -> 실패시 callback

  // 1초 뒤에 일이 성공적으로 끝났다는 신호가 전달되면서 result는 '완료'가 됩니다.
  setTimeout(() => resolve("완료"), 1000);
});
// resolve 함수는 .then의 첫 번째 함수(인수)를 실행합니다.
promise.then(function (result) {
  alert(result);
}
  // result => alert(result), // 1초 후 "완료!"를 출력
  // error => alert(error) // 실행되지 않음
)
  //reject 함수는 .catch의 첫 번째 함수(인수)를 실행합니다.
  .catch(function (error) {
    alert(error);
  });