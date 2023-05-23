var list = [{ value: 1 }, { value: 2 }];

list.forEach(function (item) {
  var out = list.shift();
  list.push({ value2: out.value + 1 })
});

console.log(list);
// list -> [{ value2: 2 }, { value2: 3 }]



var list1 = [1, 2, 3, 4, 5];
var list2 = [];
//var item;
function getFunc(item) {
  return function () {    //내부 환경은 컨텍스트와는 따로 메모리에 저장됨.따라서 이 function은 getFunc의 실행컨텍스트의 환경에 각각 연결됨.
    console.log(item);
  }
}
for (var i = 0; i < list1.length; i++) {
  // list2.push(function (item2) {
  //   console.log(item2);
  // }.bind(null, list1[i])); //bind 함수는 첫번째 인자는 this, 그 이후의 인자는 기존 arguments의 앞에 기록됨.
  item = list1[i];
  list2.push(getFunc(item));
}

for (var i = 0; i < list2.length; i++) {
  list2[i]();
}



var obj = {
  x: 1,
  add1: function (value) {
    return value + this.x;
  }
};

// 정상
console.log('obj.add1(1) =', obj.add1(1));

function a(callback) {
  return callback(1);
}

// 오류 발생
console.log('a(obj.add1) =', a(b));


function b(value) {   //클로저로 this를 obj로 설정
  return obj.add1(value);
}