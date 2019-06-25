var textArea = document.querySelector("#textArea");
var numCount = document.querySelector('#numCount');

textArea.addEventListener('keydown', function() {
   //텍스트필드의 입력한 글자 갯수 구하기
   var textLength = textArea.value.length;
   
   // 구한 갯수 카운터에 넣기
   numCount.textContent = textLength;
});
