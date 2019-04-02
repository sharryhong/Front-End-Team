---
description: 배열
---

# Array

* 배열은 단지 여러 개의 연결된 메모리일 뿐이다.

  그 메모리에 어떤 값을 넣든지 개발자 마음대로 이다.

Java등의 다른 언어 : 배열의 타입이 고정되어 있다. 따라서 같은 타입의 값 온다.

JavaScript는 배열안의 타입이 고정되어 있지 않으므로 아래의 예제가 가능하다.

```text
"use static"


// 2,3,4...차원 배열이 아니라 1차원 배열이다.
// 배열 안에 배열이 있을 뿐이다.
var a1 = [["홍길동", 99, 98, 97],
          true,
          ["유관순", 79, 78, 77, 30, "여자"],
          "오호라",
          function() {},
          {}];


console.log(a1.length); // 6
console.log(a1[1].length); // undefined (배열이 아니므로)
console.log(a1[2].length); // 6
```

## JavaScript Array Methods

* MDN [https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global\_Objects/Array](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array)  의 왼쪽 리스트들을 쭉 살펴보자. 

#### 주요 Array [**M**ethods](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/from#)

* [`Array.prototype.concat()`](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/concat)
* [`Array.prototype.every()`](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/every)
* [`Array.prototype.filter()`](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)
* [`Array.prototype.forEach()`](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach)
* [`Array.prototype.includes()`](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/includes) `: IE호환이 안됨. 이 메서드 대신 indexOf메서드를 많이 사용`  
* [`Array.prototype.indexOf()`](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf)
* [`Array.prototype.join()`](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/join)
* [`Array.prototype.lastIndexOf()`](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/lastIndexOf)
* [`Array.prototype.map()`](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/map)
* [`Array.prototype.pop()`](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/pop)
* [`Array.prototype.push()`](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/push)
* [`Array.prototype.reduce()`](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce)
* [`Array.prototype.reduceRight()`](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/ReduceRight)
* [`Array.prototype.reverse()`](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse)
* [`Array.prototype.shift()`](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/shift)
* [`Array.prototype.slice()`](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/slice)
* [`Array.prototype.some()`](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/some)
* [`Array.prototype.sort()`](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/sort)
* [`Array.prototype.splice()`](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/splice)`: 배열의 기존 요소 삭제, 교체, 요소 추가 등에 많이 쓰임`
* [`Array.prototype.toString()`](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/toString)
* [`Array.prototype.unshift()`](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/unshift) `: 새로운 요소를 배열의 맨 앞에 추가하고, 새로운 길이를 반환`    



* 좋은 메서드들이 많지만 크로스브라우징을 생각하면 아직 사용하지 못할 것들이 많다. 이럴땐 polyfill을 코드에 추가해도 되는데, 해당 메서드 MDN페이지의 하단에 나와있다.  폴리필 코드를 직접 추가해도 되지만 npm으로 추가해서 사용하는 방법도 있다. [https://www.npmjs.com/package/js-polyfills](https://www.npmjs.com/package/js-polyfills) 



* 읽어보기 : includes\(\) vs indexOf\(\) [https://dev.to/adroitcoder/includes-vs-indexof-in-javascript](https://dev.to/adroitcoder/includes-vs-indexof-in-javascript) 

