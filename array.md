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

