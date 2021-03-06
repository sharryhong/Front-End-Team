---
description: 연산자
---

# Operator

역시 우리에겐 MDN [https://developer.mozilla.org/ko/docs/Web/JavaScript/Guide/Expressions\_and\_Operators](https://developer.mozilla.org/ko/docs/Web/JavaScript/Guide/Expressions_and_Operators)

## 비교 연산자 == vs ===

"==" 연산자

* 두 값의 타입이 다를 경우 자동으로 타입의 변환\(형변환;type conversion = type casting\)이 일어난다.

  이렇게 개발자의 의사와 상관없이 내부에서 자동으로 타입이 바뀌는 것을

  "암시적 형변환"이라 부른다.

* 규칙:

  두 값의 타입이 다르고 그 중 하나가 number이면,

  다른 하나를 숫자로 타입으로 바꾼 후 비교한다.

```text
"use static"
var a = 7;
var b = "7";
console.log(a == b);  // true // 7 == "7" --> 7 == 7
```

"===" 연산자

* 같은 타입에 대해서만 비교를 수행한다.
* 타입이 다르면 무조건 false이다.
* 비교하려는 두 값의 타입이 같아야 true. 엄격하게 비교

```text
console.log(a === b); // false
console.log(a !== b); // true
```

## 삼항 연산자

## 비트 연산자

* 비트 단위로 AND, OR, XOR 연산 수행

```text
a & b (AND; 둘 다 1일 때만 1, 그밖에 0)
a | b (OR; 둘 중 하나라도 1이면 1, 그밖에 0)
a ^ b (Exclusive OR; 두 개의 값이 다르면 1, 같으면 0)
~a (비트 not; 모든 비트는 반대 값으로 바꾼다.)
```

* 비트 연산 언제쓸까? =&gt; 그래픽\(포토샵 등\), 영상처리 

```text
// AND의 사용
// - 색상의 변화나 색조 변경시 사용
// - 그림에서 특정 영역의 값을 필터링 또는 마스킹 할 때 사용한다.
// 예) RGB 값 중에서 red와 blue 색을 없애는 기법
var pixel = 0x34f588; // 00110100 11111010 10001000
// 00000000 11111111 00000000 : red, blue없애기 : red, blue부분을 0과 & 시키면 모두 0이 되는것 이용
var mask = 0x00ff00; // 00000000 11111111 00000000
console.log((pixel & mask).toString(16)); // 00000000 11111010 00000000


// OR의 사용
// - 기존 색상을 강화할 때 사용한다.
// 예) 어떤 픽셀에 대해 빨간색을 강화해보자!
var pixel = 0x34f588;
var mask = 0xaa0000;
console.log((pixel | mask).toString(16)); // bef588 즉 red부분이 34 -> be로 강화되었다.


// XOR의 사용
// - 배경 사진과 사람이 들어간 상태의 배경 사진을 XOR 하면
//   원래 있던 배경 사진, 즉 같은 값은 0으로 제거되고 다른 값만 남게 된다.
//   크로마킹 기법을 처리할 때 사용한다.
// 예) rgb 픽셀의 값이 같을 경우 제거하기
var pixel = 0x34f588; // 00110100 11111010 10001000
var mask = 0x34f588; //
// 픽셀을 mask를 씌우자.
console.log((pixel ^ mask).toString(16)); // 16진수로 표현. 결과 0.
```

팁: javascript에서 숫자 표현은 32비트. 이거 넘어가면 지원하는 것 필요하다.

