'use strict';
if(typeof document !== "undefined")


     let inputNum = document.querySelector("#inputNumber");
   

    //  console.log(inputNum);
     inputNum.addEventListener('keyup', function(){
        let inputNumValue = Number(inputNum.value);
        //  console.log(inputNumValue);
        //  console.log(inputNum.value);

        if (inputNumValue % 2 === 0){
            console.log('짝수입니다.');
        } else {
            console.log('홀수입니다.');
        }

        console.log('그래서' + inputNumValue);
        
     });