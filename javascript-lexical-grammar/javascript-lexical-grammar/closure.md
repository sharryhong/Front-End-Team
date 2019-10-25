# Closure

### 클로저\(closure\)

* 함수 안에서 만든 함수를 클로저라 부른다.
* 클로저에서 사용하는 메모리는 별도 관리한다.

  내부함수에서 전역 변수를 사용하는 경우는 굳이 따로 저장하지 않아도 되므로, 메모리를 별도로 관리 하지 않는다.

```text
/* 주제 : 함수 - 클로저(closure) 예제1 */

"use strict"

var arr = ['홍길동', '임꺽정', '유관순', '안중근', '윤봉길']
var count = -1;

// 클로저가 자체 변수를 사용하기 전
// 클로저는 글로벌 변수 count를 사용한다.
function outer() {
  count++;
  return function() { // 굳이 이름을 가질 필요없다.
    console.log(arr[count])
  }
}

var f1 = outer();
var f2 = outer();
var f3 = outer();
var f4 = outer();
var f5 = outer();

f1(); // 호출되는 시점에서 count는 이미 4이다.
f2(); // 호출되는 시점에서 count는 이미 4이다.
f3(); // 호출되는 시점에서 count는 이미 4이다.
f4(); // 호출되는 시점에서 count는 이미 4이다.
f5(); // 호출되는 시점에서 count는 이미 4이다.
```

* 클로저가 자체 변수를 사용한 후 클로저가 사용하는 변수가 글로벌 변수가 아니라 바깥 함수의 로컬 변수라면,  로컬 변수는 함수 호출이 끝나면 제거되기 때문에,  나중에 클로저가 호출될 때 사용할 수 없는 문제가 있다.  그래서 로컬 변수를 사용할 때는 로컬 변수를 자체 메모리에 복제해 둔다.  이렇게 복제해 두면 바깥 함수의 호출이 끝나서 로컬 변수가 제거된다 하더라도 자체 복제해둔 변수가 있기 때문에 계속 유효하게 사용할 수 있다. 

```text
/* 주제 : 함수 - 클로저(closure) 예제2 */

"use strict"

var arr = ['홍길동', '임꺽정', '유관순', '안중근', '윤봉길']
var count = -1;

function outer() {
  var i = ++count; // 원래 로컬변수는 함수실행끝나면 사라진다.
  return function() {
    console.log(arr[i]) // 하지만 클로저에서 로컬변수 사용시 자체 메모리에 변수를 저장해둔다. (for 개발자)
  }
}

var f1 = outer();
var f2 = outer();
var f3 = outer();
var f4 = outer();
var f5 = outer();

f1();
f2();
f3();
f4();
f5();
```

```text
/* 주제 : 함수 - 클로저(closure) 예제3
- 글로벌 변수와 블록 제한 변수
*/

"use strict"

var arr = ['홍길동', '임꺽정', '유관순', '안중근', '윤봉길']
var functionList = []

for (var i = 0; i < arr.length; i++) {
  functionList[i] = function() {
    console.log(arr[i]) // i는 전역변수이다. 즉, 따로 복제하지 않는다.
  }
}

console.log(i) // i = 5
functionList[0](); // index 0 인 함수를 실행하라. 그런데 i = 5이기때문에, 
                   // arr[5]는 없기 때문에 undefined이다.
```

* let 변수는 선언된 범위 안에서만 유효하다.  즉 그 범위를 벗어나면 로컬 변수처럼 제거된다.  그래서 let 변수도 클로저의 복제 대상이다.

```text
/* 주제 : 함수 - 클로저(closure) 예제4 
- 글로벌 변수와 블록 제한 변수
*/

"use strict"

var arr = ['홍길동', '임꺽정', '유관순', '안중근', '윤봉길']
var functionList = []

for (let i = 0; i < arr.length; i++) {
  functionList[i] = function() {
    console.log(arr[i]) // i는 let변수이기 때문에 로컬 변수처럼 따로 복제한다.
  }
}

// console.log(i); // i는 let변수이므로 for문이 끝나면 제거된다.
functionList[0](); // 따로 복제되었기 때문에 '홍길동'이 제대로 나온다. arr[0]
functionList[1]();
functionList[2]();
functionList[3]();
functionList[4]();
```



