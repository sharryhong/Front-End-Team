// v1
'use strict';
const inNumber = document.getElementById("numberInput");
const outNumber = document.querySelector(".num_box");
const resultNumber = document.querySelector(".btn_default");
const printResult = document.getElementById("area_result");
let resultOut = [1,2,3,4,5,6,7,8,9];
resultNumber.addEventListener('click', function(){
    let registerNumber = inNumber.value;
    if(isNaN(registerNumber) === true){
        printResult.innerHTML = '숫자가 아닙니다. 다시 입력해주세요.'
        printResult.classList.add('warn');
    }else if(registerNumber>1 && registerNumber<10){
        let text = "";
        for(let i=0; i < resultOut.length; i++){
            text += registerNumber+ "*" + resultOut[i] + "=" +registerNumber * resultOut[i] + "<br>";
        }
        document.querySelector(".txt_num").innerHTML = registerNumber;
        printResult.innerHTML = text;
        if(printResult.classList.contains('warn')){
            document.querySelector(".txt_num").innerHTML = '';
            printResult.classList.remove('warn');
        }
    }
});