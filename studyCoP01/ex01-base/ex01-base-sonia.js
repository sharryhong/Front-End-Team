// 텍스트 입력 수 구하기
 var text = document.querySelector("#tf");
 var textValue = text.value;
 var textLength = textValue.length;

 // 구한 갯수 카운터에 넣기
 var count = document.querySelector('#countText');
 var countVal = textLength;
 count.value = countVal;
 count.innerHTML = textLength;

 // 해결사항 : html에 입력했을 때만 카운트가 됨. 입력창에 입력한 밸류값 받아와야 하는데..