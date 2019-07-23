// v2 ->  v1일 경우 배열을 정확하게 이해하지 못함.
// 배열을 생성하면 계속 데이터가 추가가 되는 것이 아니라 push로 추가를 해야함.
// v1의 경우는 1개의 값을 가지게 되며, 값이 바뀌게 되는 것이었음.;;

// 코드리뷰 -> 잘못된 출력, 구구단 계산, 출력하는 부분이 함께 있으면 안됨.


// v1 필수과제
(arrayEx1 = function(){
    'use strict'
    let numberResult1 = document.querySelector(".v1");
    let results = [];
    let length = 9;
    for(let i=1; i <= length; i++) {
        results[i] = 2 * i;
        // console.log(results[i]);
    }

    for(let i=1; i <= length; i++) {
        numberResult1.innerHTML += 2 + " * " + i + " = " + results[i] + "<br>";
    }
})
arrayEx1();



(arrayEx2 = function(){
    'use strict'
    let numberResult2 = document.querySelector(".v2");
    let primeNumberResult = [];
    for(let numberList = 2; numberList < 10; numberList++){
        numberResult2.innerHTML += "<br>" + numberList + "단<br>"
        for(let j = 1; j <= 9; j++){
            primeNumberResult[numberList] = numberList * j;
            numberResult2.innerHTML += numberList + " * " + j + " = " + primeNumberResult[numberList] + " <br> ";
        }
    }
})
arrayEx2();
