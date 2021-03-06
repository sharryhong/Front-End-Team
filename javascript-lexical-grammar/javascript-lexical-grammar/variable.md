# Variable

우리에겐 MDN이 있습니다. [https://developer.mozilla.org/ko/docs/Web/JavaScript/Guide/Values,\_variables,\_and\_literals](https://developer.mozilla.org/ko/docs/Web/JavaScript/Guide/Values,_variables,_and_literals)

변수 \(Variable\) : 값을 저장하는 메모리의 이름

데이터를 저장하기 위해서는 메모리가 필요하다.

메모리를 확보하기 위해서 변수 선언 \(RAM중에 OS가 사용하는 영역, 기타 프로그램들이 사용하는 영역이 있다. 남는 메모리 중에 내 프로그램을 실행할 때 필요한 메모리 확보\)

변수에 값 할당\(=배정; assignment\)

* 메모리\(변수\)에 값을 저장하는 방법
* assignment operator\(할당연산자=배정연산자\)  "=" 연산자를 사용한다.
* 문법

  변수명 = 값;

스태틱 타입 바인딩\(static type binding\)

* 변수\(메모리\)의 용도를 고정하는 방식
* 변수를 만들 때 선언한 용도대로만 값을 넣어야 한다.
* 예\) C, C++, C\#, Java 등

다이나믹 타입 바인딩\(dynamic type binding\)

* 변수\(메모리\)의 용도가 가변적이다.
* 값을 넣는 순간 그 용도로 자동 설정된다.
* 예\) JavaScript 등 스크립트 류는 보통 동적 타입 바인딩 방식이다.

프로그램을 짠다는 것 : 사람이 원하는 정보를 뽑아내기 위해 수많은 데이터를 저장  
: 정형데이터, 비정형 데이터 빅데이터 : 작은 데이터가 계속 대량으로 발생, 보통 log형태일 가능성이 많다. 예\) 쇼핑몰 방문기록 빅데이터를 입력받아 --&gt; 가공 \(개발자가 하는 일\) --&gt; 정보\(information\)를 얻어낸다. 이 데이터들을 저장 : RAM, HDD등에 저장  
언어를 배울때 첫번째로 메모리를 준비\(변수만들기\)하는 방법을 배운다.

## var, let, const

scope관련 설명 추가 필요 \(구두 설명, MDN\)

var 변수는 중복 선언하면 기존 변수를 덮어쓰지만, let 변수는 중복 선언할 수 없다. 오류를 발생시킨다.

```text
var name = "홍길동";
var name = "임꺽정"; // 오류안남
console.log(name);


let name2 = "Hong";
let name2 = "Goo"; // 오류. 장점 : 프로그램을 더 정교하게 다룰 수 있다.
console.log(name2);
```

오류발생의 장점 : 프로그램을 더 정교하게 다룰 수 있다.

const : 상수변수. 값을 한 번 할당하면 값을 변경할 수 없다. 상수 변수는 선언할 때 값을 지정해야 한다.

```text
const age; // Missing initializer in const declaration 실행 오류
age = 20;
```

