(function() {
    'use strict';
    var inputArr = getInputNumber();
    var btnElements = document.querySelectorAll('.btn_result');
    var txtResultEl = document.querySelector('.txt_result');
    var btnElsLength = btnElements.length;
    var i = 0;

    /* 최대값 */
    function getMaxNum(arr) {
        var max = Math.max.apply(null, arr);
        console.log(arr);
        return max;
    }

    /* 최소값 */
    function getMinNum(arr) {
        var min = Math.min.apply(null, arr);
        console.log(arr);
        return min;
    }

    /* 평균값 */
    function getAverageNum(arr) {
        var arrayLength = arr.length;
        var avg = "";
        for(var i = 0; i<arrayLength; i++){
            var sum =+ arr[i];
        }
        var avg = sum / arrayLength;
        return avg
    }

    /* 홀수값 */
    function getOddNum(arr) {
        var odd = "";
        if(Number(arr[i]) % 2 === 1){
            var odd = arr+"은 홀수입니다.";
        }else{
            var odd = arr+"은 짝수입니다.";
        }
        // 해당 함수를 완성하시오
        return odd;
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