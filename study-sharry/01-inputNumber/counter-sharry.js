// 소니아 코드를 바탕으로 3단계까지 리펙토링
"use strict";

(function () {
    var count = document.getElementById("count");
    var num = 0;
    count.value = num; // input 값에 set

    count.addEventListener("keyup", function(event) {
      inputOnlyNumber(event); // 우선 숫자만 입력하는 기능을 가진 함수로 체크합니다.
      // input 값을 get하여 num 변수에 set
      // input value는 string이므로 number로 형변환 // 01 -> 1 대응
      num = Number(count.value);
      if (num !== 0) count.value = num;
    });

    // +버튼 클릭 시 1씩 증가
    document.getElementById("btnPlus").addEventListener("click", function () {
      num++;
      count.value = num;
    });

    // - 버튼 클릭 시 1씩 감소
    document.getElementById("btnMinus").addEventListener("click", function () {
      num--;
      count.value = num;
    });

})();

// 숫자만 입력되게 하는 기능 함수
// if (code > 47 && code < 58) 방법과 차이점
// regex(정규표현식)에 대해 알아봅시다.
// 현재 이슈 : 마이너스도 삭제됩니다. 키키 
function inputOnlyNumber(event) {
   var code = event.keyCode || event.which;
   if (code == 8 || code == 46 || code == 37 || code == 39) return;
   else event.target.value = event.target.value.replace(/[^0-9]/g, '');
}
