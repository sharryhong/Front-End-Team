---
description: '작성자 : 스칼렛'
---

# array

- 배열에서 최대값, 최소값, 평균값, 홀수값을 구하시오
    - 홀수값의 경우 입력한 배열 중에서 홀수값인 것을 리턴하면 됩니다.
    - getMaxNum, getMinNum, getAverageNum, getOddNum 함수안을 완성하시오.
    - return은 임의로 넣었습니다.

```html
<style>
.txt_result{display:block}
</style>

<button class="btn_result" data-result-type='min'>
    최소값
  </button>
  <button class="btn_result" data-result-type='max'>
    최대값
  </button>
  <button class="btn_result" data-result-type='avg'>
    평균값
  </button>
  <button class="btn_result" data-result-type='odd'>
    홀수값
  </button>
  <span class="txt_result"></span>

<script>  
(function() {
    'use strict';
    var inputArr = getInputNumber();
    var btnElements = document.querySelectorAll('.btn_result');
    var txtResultEl = document.querySelector('.txt_result');
    var btnElsLength = btnElements.length;
    var i = 0;

    /* 최대값 */
    function getMaxNum(arr) {
        // 해당 함수를 완성하시오
        return "최대값은 54입니다.";
    }

    /* 최소값 */
    function getMinNum(arr) {
        // 해당 함수를 완성하시오
        return "최소값은 54입니다.";
    }

    /* 평균값 */
    function getAverageNum(arr) {
        // 해당 함수를 완성하시오
        return "퍙군은 9입니다.";
    }

    /* 홀수값 */
    function getOddNum(arr) {
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
                result = getMinNum(inputArr);
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
</script>
```