# [Tutorial1] CountDown

## 서론
- 이 방식은 Tutorial을 따라하는 방법 이다.
- 프로그래밍 언어를 학습할 때 두가지 방식이 존재한다. DownTop, TopDown
    - DownTop : 개념부터 잡고 학습
    - TopDown : 개발 부터 하고 난 다음에 나중에 개념 학습
    - 이 두가지 방식이 각각 장단점이 있다.
    - 하지만 개념을 알고 있으면(코어 지식) 나중에 다른 언어 학습에 대한 시간이 줄어들고 근본적인 원인을 찾을 수 있게 된다. 

## Tutorial 방식의 목적
- 노마드 코더의 클론 코딩의 concept에서 차용 해왔다.
- Javascript 코드에 익숙하지 않은 사람들에게 코드라도 따라치며 우선 친숙하게 위함이다.
- 수학 문제를 풀 때 해답을 보고 풀이해나가면서 자신의 것으로 만드는 것과 비슷하다. 

## Tutorial 방식의 주의 사항
- 해당 방법은 스크립트가 낯선 사람들에게 추천하는 방법이다. 따라서 스크립트 코드가 어느 정도 익숙해지고 난 다음 부터는 해당 방법은 추천하지 않는다.
    - 프로그래밍에서는 논리적인 생각과 문제 해결 하는 능력을 많이 요구한다. (마크업으로 따지자면 의미론적이고 구조적인 생각을 가지는 능력을 요구하는 것처럼)
- 코드는 작성하는 사람에 따라 다르게 나오는 것이므로 Tutorial에 나와 있는 코드가 꼭 정답은 아니다.
- 코드를 따라 칠 때 절대 복붙은 해서는 안된다.

## 학습 방법
- 피아노 학원에서 피아노 배울 때 악보에 동그라미 다섯 개를 친적이 있는가? 이와 비슷하다.
- step1. 튜토리얼을 시작한 5일간 하루에 한 번씩 페이지에 있는 코드를 한 번 이상 따라친다. (자신과의 약속이니 절대 복붙하지 않길...)
- step2. step1이 끝난 다음에 해당 코드를 한 줄 , 한 줄 분석하고 인터넷에서 코드를 보면서 생긴 궁금증을 찾아서 자신의 방법대로 정리하거나 익힌다. 
 - example)
    - function, var이 뭐지 ?
    - isNaN이 뭐지 ?
    - new Date이 뭐지 ?
- step3. step2가 끝나면 최종적으로 필요한 참고 자료, 개념들을 설명하는 시간을 가진다. (알려주는 사람)
- step4. 개념, 참고한 자료, 설명을 들은 이 후 자신의 스타일대로, 식대로 코드를 작성한다.
    - 마크업도 작성한 사람마다 코드가 다르듯이 스크립트도 같은 기능이라도 각각 다른 스크립트가 존재한다. jquery로도 작성해도 무방하다. 

- step5. 코드 리뷰를 진행한다.

## 코드

```html
<div class="countdown">
    <p class="timer">
        <span id="days"></span> Day(s)
        <span id="hours"></span> Hour(s)
        <span id="minutes"></span> Minute(s)
        <span id="seconds"></span> Second(s)
    </p>
</div>
```

```javascript
    function countdown(endDate) {
        var days=0, hours=0, minutes=0, seconds=0;  
        endDate = new Date(endDate).getTime();
        if (isNaN(endDate)) {
            return;
        }
        setInterval(calculate, 1000);

        function calculate() {
            var startDate = new Date();
            startDate = startDate.getTime();    
            var timeRemaining = parseInt((endDate - startDate) / 1000);
            if(timeRemaining < 0) return false;
            days = parseInt(timeRemaining / 86400);
            timeRemaining = (timeRemaining % 86400);
            
            hours = parseInt(timeRemaining / 3600);
            timeRemaining = (timeRemaining % 3600);
            
            minutes = parseInt(timeRemaining / 60);
            timeRemaining = (timeRemaining % 60);
            
            seconds = parseInt(timeRemaining);
            
            document.getElementById("days").innerHTML = parseInt(days, 10);
            document.getElementById("hours").innerHTML = ("0" + hours).slice(-2);
            document.getElementById("minutes").innerHTML = ("0" + minutes).slice(-2);
            document.getElementById("seconds").innerHTML = ("0" + seconds).slice(-2);
        }
    }
(function () { 
    countdown('05/01/2019 05:00:00 PM'); 
}());
```