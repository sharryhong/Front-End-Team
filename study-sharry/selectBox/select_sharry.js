"use strict";

(function(){
    var regionSelect = document.querySelector(".opt_comm");
    var selectedRegion = document.querySelector(".link_selected");
    var nowRegion = document.querySelectorAll(".opt_comm .link_option");
    var selectedOption = document.querySelector('#selectedOption');

    //셀렉트박스 열기
    selectedRegion.addEventListener("click", function(){
        regionSelect.classList.add("opt_open");
    });

    // 셀렉트박스 값 선택하기
    // querySelectorAll에서 선택한 '유사배열'을 실제 배열처럼 사용하기
    // 아래방법 MDN에서 확인해보기. IE에서 안되므로 폴리필 필요. 이건 나중에 웹팩에서 관리
    // 예전에는 다른 방법(call, apply를 사용하여 폴리필필요없이도 가능함. 검색해보기
    Array.from(nowRegion).forEach(el => {
      el.addEventListener("click", function() {
        // this란? => 스터디
        console.log(this); // 콘솔찍어서 확인하는 습관
        var seleVal = this.innerHTML;
        selectedRegion.innerHTML = seleVal;
        selectedOption.value = seleVal;
        regionSelect.classList.remove("opt_open");

        // 실제 백엔드로 데이터를 전달시 selectedOption.value를 전달하면됨 
        console.log(selectedOption.value);
      })
    })


})();
