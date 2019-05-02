# Function

## 함수 이전에 알면 좋을 개념 간단 정리

#### 변수 선언 : 메모리 준비 

   방법 1\_ var 변수명 ;

   방법2\_ const 상수변수명 = 값;  // 사용범위 제약

   방법3\_ let 변수명;                     // 사용범위 제약

#### 연산자 

   +, -, \*, / , %

   ==, !=, &gt;, &gt;=, &lt;, &lt;=              // 암시적 형변환 개념 

   ===, !==                              // 엄격한 비교 

   &&, \|\|                                    // 값 전체에 대해 true, false 논리비교 // 조건 && 식, 조건 \|\| 식 이렇게 사용하기도 한다.

   &, \|, ^                                    // 비트 단위에 대해 true, false. 그래픽 처리에 많이 사용 

   &lt;&lt;, &gt;&gt;                                   // &lt;&lt; 1은 \*2, &gt;&gt;1은 /2의 효과 

   = 

   +=, ==, \*=, /= 

   ++, -- 

   조건 ?  참이면 실행 : 거짓이면 실행     // 삼항 연산자  

#### statement 문장 만드는 방법 : 흐름제어 

* 조건문 : 조건에 따라 실행

```text
    if, switch
```

* 반복문 : 조건이 만족되는 동안 반복 

```text
    while, do ~ while, for, for ... in, for ... of 
```

## Function \(함수\) 

* 반복적으로 사용할 명령어들을 기능 단위로 묶어 놓은 것
* 하나의 단위로 실행되는 문의 집합 

#### 함수 선언 \(function declaration\) 

```text
function sayHello() {
  console.log("Hello"); // 함수 바디 
}
```

#### 함수 호출/실행 

```text
sayHello(); 
```



> 여기 잘 정리되어있으니 참고 : [https://april.gitbook.io/learning-js/chapter-6.](https://april.gitbook.io/learning-js/chapter-6.)

### 

### 함수 관련 개념 정리 

#### 함수 호이스팅 

자바스크립트 엔진은 변수, 함수 정의 부분을 먼저 실행한다. \(hoisting : 끌어올리다\)  
[https://developer.mozilla.org/ko/docs/Glossary/Hoisting](https://developer.mozilla.org/ko/docs/Glossary/Hoisting) 

#### 레퍼런스\(참조\) 타입 : 메모리 주소 저장 

Primitive Type\(원시 타입\) vs Reference Type\(참조 타입\) [https://poiemaweb.com/js-data-type-variable](https://poiemaweb.com/js-data-type-variable) 







