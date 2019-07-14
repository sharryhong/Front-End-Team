// v1
'use strict';
let results = [];
let length = 9;
for(let i=2; i <= length; i++) {
    document.write(i+"단<br>");
    for(let j=1; j <= length; j++){
        results = i * j;
        document.write(i+"*"+j+"="+results+"<br>");
    }

    // 계산 결과를 배열에 저장
// document.write(i+"단"+results+"<br>");  
}
