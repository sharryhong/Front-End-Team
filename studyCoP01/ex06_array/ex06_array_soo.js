// v2 ->  v1일 경우 배열을 정확하게 이해하지 못함.
// 배열을 생성하면 계속 데이터가 추가가 되는 것이 아니라 push로 추가를 해야함.
// v1의 경우는 1개의 값을 가지게 되며, 값이 바뀌게 되는 것이었음.;;
'use strict';
let results = [];
let length = 9;
for(let i=2; i <= length; i++) {
    document.write(i+"단<br>");
    for(let j=1; j <= length; j++){
        document.write(i+"*"+j+"="+results.push(i*j)+"<br>");
    }
}
console.log(results);
