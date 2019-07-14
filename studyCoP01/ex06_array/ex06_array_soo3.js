(function() {
    'use strict';
    var inputArr = getInputNumber();
    var btnElements = document.querySelectorAll('.btn_result');
    var txtResultEl = document.querySelector('.txt_result');
    var btnElsLength = btnElements.length;
    var i = 0;

    /* 최대값 */
    function getMaxNum(arr) {
        if(arr > arr){
            console.log('비교하여 출력하면?'+arr);
        }
        return "최대값은 54입니다.";
    }

    /* 최소값 */
    function getMinNum(arr) {
        if(arr<arr){
            console.log('최소의 값은?'+arr);
        }
        return "최소값은 54입니다.";
    }

    /* 평균값 */
    function getAverageNum(arr) {
        console.log(arr / arr.length);
        // 해당 함수를 완성하시오
        return "평균은 9입니다.";
    }

    /* 홀수값 */
    function getOddNum(arr) {
        if(arr % 2 === 1){
            console.log(arr+"은 홀수입니다.");
        }else{
            console.log(arr+"은 짝수입니다.");
        }
        // 해당 함수를 완성하시오
        return "홀수는 1,4입니다.";
    }
    function getInputNumber() {
        var arr = [];
        for (var i = 0; i < 5; i++) {
            arr.push(prompt(i + '인덱스 숫자 입력'));
        }
        return arr;
    }

    function viewResult(result) {
        txtResultEl.innerHTML = result;
    }

    function getResult(e) {
        var resultType = e.currentTarget.getAttribute('data-result-type');
        var result = 0;
        switch (resultType) {
            case 'max' :
                result = getMaxNum(inputArr);
                break;
            case 'min' :
                result = getMinNum(inputArr);
                break;
            case 'avg' :
                result = getAverageNum(inputArr);
                break;
            case 'odd' :
            result = getOddNum(inputArr);
            break;
        }
        viewResult(result);
    }
    function init() {
        for(i; i < btnElsLength ; i++) {
        btnElements[i].addEventListener('click', getResult);
        }  
    }
    init();
})();