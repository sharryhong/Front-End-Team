---
description: 스터디콥10 예습
---

# homework\_oop\_this

바빠서 잠시 쉬었던 스터디 이어합니다 ^^;

### 필수 강의 \(시간되는 분들은 생활코딩 Javascript 언어 강의 중에 궁금한 것들 찾아 듣기\) 

1. 생활코딩 - 객체지향 프로그래밍 [https://opentutorials.org/course/743/6553](https://opentutorials.org/course/743/6553) 

    2. 생활코딩 - 생성자와 new [https://opentutorials.org/course/743/6570](https://opentutorials.org/course/743/6570)

    3. 코드종 - 자바스크립트의 this : [https://www.youtube.com/watch?v=PAr92molMHU&list=PLuBMRNcyzsWxcnDdAmJWyWYXuExyP9aS1&index=6](https://www.youtube.com/watch?v=PAr92molMHU&list=PLuBMRNcyzsWxcnDdAmJWyWYXuExyP9aS1&index=6)



### 3개의 강의를 들은 후 아래 코드를 이해해봅시다. \(출처: [https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/this](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/this)\)

```text
// 처리기로 호출하면 관련 객체를 파랗게 만듦
function bluify(e) {
  // 언제나 true
  console.log(this === e.currentTarget); 
  // currentTarget과 target이 같은 객체면 true
  console.log(this === e.target);
  this.style.backgroundColor = '#A5D9F3';
}

// 문서 내 모든 요소의 목록
var elements = document.getElementsByTagName('*');

// 어떤 요소를 클릭하면 파랗게 변하도록
// bluify를 클릭 처리기로 등록
for (var i = 0; i < elements.length; i++) {
  elements[i].addEventListener('click', bluify, false);
}
```

