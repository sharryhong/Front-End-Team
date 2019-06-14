// 텍스트 입력 수 구하기
 var textArea = document.querySelector("#textArea");

 textArea.addEventListener('keydown', function() {
    var textValue = textArea.value;
    var textLength = textValue.length;
    
    // 구한 갯수 카운터에 넣기
    var countText = document.querySelector('#countText');
    countText.textContent = textLength;
});
