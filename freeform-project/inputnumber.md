# inputNumber

결과 참고 : [https://element.eleme.io/\#/en-US/component/input-number](https://element.eleme.io/#/en-US/component/input-number) 

![&#xC608;&#xC2DC; &#xC774;&#xBBF8;&#xC9C0;](../.gitbook/assets/inputnumber.png)

1단계 - 마이너스, 플러스 버튼을 누르면 input 의 숫자가 변경됩니다. 

2단계 - input에 숫자를 입력할 수 있습니다. 입력한 숫자를 기준으로 마이너스, 플러스 버튼 대응

3단계 - input에 숫자이외의 것을 입력이 안되게 합니다. 

4단계\(선택\) - min, max값 입력을 추가하여 제어할 수 있게 합니다. 

5단계\(선택\) - min, max값에 따라 마이너스, 플러스 버튼이 disabled되게 처리합니다. 

그 외 - 본인이 하고 싶은 기능을 추가 :\) 



## 참고자료 

#### BOM \(Browser Object Model\)

* 제가 예전에 정리한 것 [https://sharryhong.github.io/2016/12/28/javascript-bom/](https://sharryhong.github.io/2016/12/28/javascript-bom/)

#### DOM \(Document Object Model\)

* 제가 예전에 정리한 것 [https://sharryhong.github.io/2016/12/28/javascript-dom/](https://sharryhong.github.io/2016/12/28/javascript-dom/) 

#### Event

* click 
* keyup :  [https://developer.mozilla.org/en-US/docs/Web/Events/keyup](https://developer.mozilla.org/en-US/docs/Web/Events/keyup) 하단의 예시 참고 
* blur : [https://developer.mozilla.org/en-US/docs/Web/API/Element/blur\_event](https://developer.mozilla.org/en-US/docs/Web/API/Element/blur_event) 

#### event 객체 

* [https://blog.sonim1.com/152](https://blog.sonim1.com/152) 참고 
* event.keyCode, event.which 

## 스터디시 나온 사항  

#### "use strict"; 쓰는 이유 

#### var, let, const 차이점과 사용시 유의 사항   

#### IIFE 패턴 사용이유 

#### 전위 증감 연산자, 후위 증감 연산자 

#### 제이쿼리의 장점과 단점, 순수JS도 작성해보기       

```text
var key = e.keyCode || e.which;
if(key === 8) return; 
```



#### input요소에 value값 set, get하는 방법

#### document.getElementById 와 그 외 돔 선택할 수 있는 방법, 장단점

#### parseInt\(\)  [https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global\_Objects/parseInt](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/parseInt)

#### data type 체크해보기

#### 이벤트

#### function

#### this

#### disabled시키는 

* 방법1 [https://developer.mozilla.org/en-US/docs/Mozilla/Tech/XUL/Attribute/disabled](https://developer.mozilla.org/en-US/docs/Mozilla/Tech/XUL/Attribute/disabled) , 
* 방법2 [https://developer.mozilla.org/en-US/docs/Web/API/HTMLSelectElement/disabled](https://developer.mozilla.org/en-US/docs/Web/API/HTMLSelectElement/disabled)





