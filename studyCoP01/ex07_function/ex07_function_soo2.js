(function() {
    'use strict';
    var slideImgArr = 
        ['http://shop2.daumcdn.net/shophow/sib/0_190711174317_WHFzDOodnDUymbRJWPTjsuHSjJUxUXYz',
        'http://shop1.daumcdn.net/shophow/sib/0_190711174309_frhsqvyDAIYxSCMUnyZtbcVHddiOpCEy',
        'http://shop3.daumcdn.net/shophow/sib/0_190711174325_rQUPoiSCCAeMENaCCNvihWEECtGFccbI']; // 배열로 이미지 저장.
    var currentImgIndex = 0; // 이미지 초기값
    var slideImgEl = document.querySelector('.slide_img');
    
    // 이전 이미지 경로 구하는 함수
    function preImageList(){
        currentImgIndex = currentImgIndex - 1;
        imageNameChange();
    }

    // 다음 이미지 경로를 구하는 함수
    function nextImageList(){
        currentImgIndex = currentImgIndex + 1;
        imageNameChange();
    }

    // 현재 이미지 index (currentImgIndex값) 구하는 함수
    // function indexImage(){
    //     var idx = null;
    //     if(idx === -1){
    //         currentImgIndex = 2;
    //     }else if(idx === 3){
    //         currentImgIndex = 0;
    //     }
    // }

    // 이미지의 src값을 변경하는 함수
    function imageNameChange(){
        if(currentImgIndex === -1){
            console.log(currentImgIndex);
            currentImgIndex = 2;
        }else if(currentImgIndex === 3){
            console.log(currentImgIndex);
            currentImgIndex = 0;
        }
        return slideImgEl.setAttribute('src',slideImgArr[currentImgIndex]);
    }

    // 클릭 이벤트 등록하는 함수 (addEventListener)
    function clickEvent(){
        var preImage = document.querySelector('.btn_prev');
        var nextImage = document.querySelector('.btn_next');
        preImage.addEventListener('click', preImageList);
        nextImage.addEventListener('click', nextImageList);
    }
    clickEvent();

    function init() {
        slideImgEl.setAttribute('src',slideImgArr[currentImgIndex]);
    }
    init();
})();