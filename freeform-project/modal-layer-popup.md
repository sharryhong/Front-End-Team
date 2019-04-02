# Modal \(layer popup\)

결과 참고 : [https://vuetifyjs.com/ko/components/dialogs](https://vuetifyjs.com/ko/components/dialogs)

> 평소 마크업개발시 하셨던 레이어팝업이 있다면\(html, css\) 내용만 조금 바꿔서 사용하시면 더 좋을 것 같습니다. :\)

1단계 - 버튼 클릭시 레이어팝업이 뜨고, 팝업내의 닫기버튼이나 x를 클릭시 닫힙니다.  
평소 설계하신대로 css와 js의 적절한 조화가 필요합니다.

2단계 - 실제 프로젝트 시에는 기획에 따라 다르겠지만, 화면 중앙에 뜨고, 아래에 검정 투명바탕이 깔리게 합니다.

3단계\(선택\) : 팝업이 뜨고 닫힐 때 적절한 애니메이션을 줍니다.

4단계\(선택\) - 팝업이 떴을때에는 스크롤이 안되게 제어합니다.

5단계\(선택\) - 팝업 이외의 곳을 클릭해도 닫히게 해봅니다.

6단계\(선택\) : 다양한 상황 대처   
예: 팝업 body부분의 내용이 길어지면 스크롤이 되고, max-height가 적용되어있는데, 높이가 작은 모바일 \(아이폰6 기준, 높이 667px이하\)에서만 max-height를 따로 적용합니다. 



> 나중에 pc : 크롬, 사파리, 파이어폭스, mobile: ios, android 에서 테스트하면서 어떤점에 주의하여야 하는지 체크해 보셔도 많은 도움이 됩니다. :\) 
>
> 검색시 자료로 남기면 더더욱 좋아요~ 본인 깃헙이나 블로그 혹은 이 곳 ^^

## 참고자료

JavaScript Web API &gt; DOM &gt; Document &gt; Document.querySelector\(\) :   
[https://developer.mozilla.org/ko/docs/Web/API/Document/querySelector](https://developer.mozilla.org/ko/docs/Web/API/Document/querySelector) \(IE8이상\) 

JavaScript Web API &gt; DOM &gt; Element &gt; Element.querySelector\(\) :   
[https://developer.mozilla.org/en-US/docs/Web/API/Element/querySelector](https://developer.mozilla.org/en-US/docs/Web/API/Element/querySelector) \(IE9이상\) 

JavaScript Web API &gt; DOM &gt; Element &gt; Element.classList :   
[https://developer.mozilla.org/ko/docs/Web/API/Element/classList](https://developer.mozilla.org/ko/docs/Web/API/Element/classList)  \(브라우저 호환성체크\)  

jQuery를 사용하셔도 좋습니다. 





