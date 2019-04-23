---
description: 형변환 (데이터를 다른 종류의 값으로 변경)
---

# Type Casting \(type conversion\)

## 명시적 형변환

Boolean\(\), Number\(\), parseInt\(\), String\(\) : 글로벌함수로써 객체없이 바로쓸수있다.

```text
1_boolean형으로 변환
/* number --> boolean
- 0은 false, 0 이외의 모든 수는 true
*/
console.log(0, Boolean(0)); // 0만 false
console.log(1, Boolean(1));
/* string --> boolean
- "" 빈문자열은 false, 그밖에 true
*/
console.log("", Boolean("")); // 빈문자열 ""만 false
console.log(" ", Boolean(" ")); // true


// 2_number형으로 변환
/* boolean --> number
- true는 1, false는 0
*/
console.log(true, Number(true)); // 1
console.log(false, Number(false)); // 0


/* string --> number
- 빈문자열 또는 공백만 있는 문자열은 0,
- 숫자만들어있는 문자열은 그 숫자,
- 숫자가 아닌 모든 문자열은 NaN,
*/
console.log("", Number("")); // 0
console.log("$2500", Number("$2500")); // NaN
// parseInt(문자열)
// - 숫자로 시작하는 경우, 숫자 다음에 오는 문자는 없애고 숫자로 바꾼다.
// - 문자로 시작할 경우 숫자로 바꾸지 못한다.
console.log("2500원", parseInt("2500원")); // 2500
console.log("$2500", parseInt("$2500")); // NaN
console.log("2500$", parseInt("2500$")); // 2500
console.log("2500만원", parseInt("2500만원")); // 2500
/* 배열 또는 객체 --> Number
- 빈배열은 0,
- 값이 한 개만 있는 배열은 일반 변수처럼 계산한다.
- 값이 두 개 이상 들어있는 배열은 NaN,
- 객체는 NaN,
*/
console.log("[]", Number([])); // 0
console.log("[10]", Number([10])); // 10
console.log("['10']", Number(['10'])); // 10
console.log("[10, 20]", Number([10, 20])); // NaN
console.log("['10', '20']", Number(['10', '20'])); // NaN
console.log("{}", Number({})); // NaN
// 3_string형으로 변환
/* boolean --> string
- true는 'true', false는 'false'
*/
console.log(true, String(true)); // 'true' 문자열로
console.log(null, String(null)); // 'null'
console.log(undefined, String(undefined)); // 'undefined'
console.log(NaN, String(NaN)); // 'NaN'
console.log("[10, 20, 30]", String([10, 20, 30])); // 10, 20, 30 : 배열 항목
console.log("{}", String({})); // [object Object] : 객체 정보
```

## 암시적 형변환

피연산자의 타입이 다르면 연산을 수행할 수 없다. 이런 경우 자바스크립트 엔진은 자바스크립트 명세서에서 정한 규칙에 따라 두 개의 값 중에서 한 개의 값을 다른 한 개의 값과 동일한 타입으로 자동변환한다. 내부적으로 자동 변환하는 것을 "암시적 형변환"이라 부른다.

팁 : 다른 타입끼리 비교하는 것은 코딩에 문제가 있는 것이다. 예측하지 못한 상황이 생길 수 있다. 따라서 === 만 쓰자. 암시적 형변환 자체를 하지 않는다.

