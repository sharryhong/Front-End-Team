# 반복문

### 커리큘럼
: 인프런 강의 https://www.inflearn.com/course/javascript-자바스크립트-codesquad-masters_lv1


> 반복문은 비슷한 일은 반복적으로 처리하기 위한 명령문입니다.

## while 반복문

```
while(조건) {
  console.log("참일때 실행됨");
}
```

```
var n = 1;
while(n <= 100) {    
    console.log("Hi " + n);
    n++; // 없으면 무한루프에 빠집니다.
}
```

### 예제 : while 문을 사용해서 1에서 100까지의 합을 구해 봅시다.

### 자주 사용하는 패턴

```
var i = 0; //(1)
while (i <= 100) { //(2)
  console.log(i); //(3)
  i++; //(4)
}
```

## 그래서 for가 등장함

> 위의 while 코드와 완전히 똑같음

```
for (var i = 0; i <= 100; i++) {
  console.log(i);
}
```

### 추가 설명

> 반복문은 자주 사용하는 형태가 있습니다.

1. n 회 코드 실행
2. 특정 조건을 만족시킬 때까지 코드 실행
3. 배열 안의 원소들 각각에 대해 코드 실행

## break 와 continue

> break는 반복문을 중간에 빠져나갈 때 사용합니다. 무한 루프와 함께 많이 사용합니다.

```
var str;
while (true) {    
    str = prompt("아무거나 입력하세요");
    document.write(str + "<br>");
    if (str == "q") {
        break;
    }
}
document.write("Bye~");
```

> 아래 코드의 실행 결과를 예측해 보세요.

```
for(var i = 0;i < 10; i++) {
    if (i == 5) {
        break;
    }
    console.log(i);
}
```

> continue는 반복문의 처음으로 돌아갑니다.

- while: 조건식( i < 10 )으로 이동
- for: 증감식 ( i++) 으로 이동

```
for(var i = 0;i < 10; i++) {
    if (i == 5) {
        continue;
    }
    console.log(i);
}
```

> 둘 사이의 차이를 잘 이해했나요? 다양한 방법으로 코드를 변경해 가면서 이해될 때까지 해 봅시다.

## 이중 루프

> 반복문 안에 반복문이 있는 걸 이중 루프라고 합니다. 종종 사용합니다. 3중, 4중도 가능하지만 잘 사용하지 않습니다.

```
for (var i = 0; i < 2; i++) {
    for (var j = 0; j < 3; j++) {
        console.log(i + ", " +j);
    }
}
```

> (생각해 보기) 이중 루프 중간에 한꺼번에 빠져나갈 수 있을까요? 아래 코드의 결과는?

```
for (var i = 0; i < 3; i++) {
    for (var j = 0; j < 5; j++) {
        console.log("i= " + i+ ", j= " + j);
        if (j == 2) {
            break;
        }
    }
}
```
