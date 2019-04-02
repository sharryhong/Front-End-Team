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
* [`Array.prototype.copyWithin()`](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/copyWithin)
* [`Array.prototype.entries()`](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/entries)
* [`Array.prototype.every()`](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/every)

1. [`Array.prototype.fill()`](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/fill)
2. [`Array.prototype.filter()`](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)
3. [`Array.prototype.find()`](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/find)
4. [`Array.prototype.findIndex()`](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex)
5. [`Array.prototype.flat()`](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/flat)
6. [`Array.prototype.flatMap()`](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/flatMap)
7. [`Array.prototype.forEach()`](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach)
8. [`Array.prototype.includes()`](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/includes)
9. [`Array.prototype.indexOf()`](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf)
10. [`Array.prototype.join()`](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/join)
11. [`Array.prototype.keys()`](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/keys)
12. [`Array.prototype.lastIndexOf()`](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/lastIndexOf)
13. [`Array.prototype.map()`](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/map)
14. [`Array.prototype.pop()`](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/pop)
15. [`Array.prototype.push()`](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/push)
16. [`Array.prototype.reduce()`](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce)
17. [`Array.prototype.reduceRight()`](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/ReduceRight)
18. [`Array.prototype.reverse()`](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse)
19. [`Array.prototype.shift()`](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/shift)
20. [`Array.prototype.slice()`](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/slice)
21. [`Array.prototype.some()`](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/some)
22. [`Array.prototype.sort()`](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/sort)
23. [`Array.prototype.splice()`](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/splice)
24. [`Array.prototype.toLocaleString()`](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/toLocaleString)
25. [`Array.prototype.toSource()`](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/toSource)
26. [`Array.prototype.toString()`](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/toString)
27. [`Array.prototype.unshift()`](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/unshift)
28. [`Array.prototype.values()`](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/values)
29. [`Array.prototype[@@iterator]()`](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/@@iterator)
30. [`Array.unobserve()`](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/unobserve) [\[Translate\]](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/unobserve$translate)
31. [`get Array[@@species]`](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/@@species)

* 좋은 메서드들이 많지만 크로스브라우징을 생각하면 아직 사용하지 못할 것들이 많다. 이럴땐 polyfill을 코드에 추가해도 되는데, 해당 메서드 MDN페이지의 하단에 나와있다.  폴리필 코드를 직접 추가해도 되지만 npm으로 추가해서 사용하는 방법도 있다. [https://www.npmjs.com/package/js-polyfills](https://www.npmjs.com/package/js-polyfills) 

