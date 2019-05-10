---
description: '작성자 : 스칼렛'
---

# formVaildation

## 과제 내용

* jQuery로 되어 있는 코드를 오로지 javascript로 작성해 보시오.

## 과제 진행

### 단계 1 \(미입력에 대한 처리\)

* "전송" 버튼을 누르면 Name, Age, E-mail 필드의 값이 입력이 되었는지 확인한다.
  * 필드의 값이 입력이 안되어 있다면 미입력 시 input 영역 아래에 입력 해달라는 메시지를 출력한다.
  * 필드의 값이 입력이 안되어 있다면 미입력 시 input 영역을 붉은색 점선으로 표시한다.
* Age가 50이상, Weight 필드 미입력 했을 경우 Weight 필드를 입력 해달라는 메시지, input 영역을 붉은색으로 표시한다.

### 단계 2 \(최소값에 대한 처리\)

* Name이 3글자 이하이면 3글자 이상 input 영역 아래에 입력해달라는 메시지를 출력하고 input 영역에 붉은색 점선으로 표시한다. \(Name이 3글자 이상\)
* Age가 18세 이하이면 input 영역 아래에 18세 이상을 입력해달라는 메시지 출력, input 영역에 붉은색 점선으로 표시한다. \(Age가 18세 이상\)
* Age가 18세 이상인데 Weight의 값이 0보다 작으면 input 영역 아래에 0이상을 입력해달라는 메시지 출력, input 영역에 붉은색 점선으로 표시한다. \(Age가 18세 이상 && Weight는 0 이상\)

### 단계 3 \(숫자 타입에 대한 처리\)

* Age, Weight 필드가 숫자 입력이 아닐 경우 input 영역 아래에 숫자로 입력해달라는 메시지를 input 아래에 메시지를 출력, 해당 input에 붉은색 점선으로 표시한다.

### 단계 4 \(이메일 형식에 대한 처리\)

* Email 형식에 맞지 않을 경우 input 영역 아래에 Email 형식에 맞춰 달라는 메시지를 표시, 해당 input에 붉은색 점선으로 표시한다.

## 과제 목적

* inputNumber의 심화
* getElementById 등등 셀렉터를 사용할 수 있게 한다.
* input 폼 요소에 대해 이해를 돕는다.
* DOM 객체에 대한 이해를 돕는다.
* EventListener, 조건문, 이메일 정규 표현식 사용에 대한 사례에 대한 이해를 돕는다.

## 코드

```markup
<form id="basic-form" action="" method="post">
    <p>
      <label for="name">Name <span>(필수, 3글자 이상 입력)</span></label>
      <input id="name" name="name">
    </p>
  <p>
      <label for="age">Your Age <span>(최소 18세)</span></label>
      <input id="age" name="age">
    </p>
    <p>
      <label for="email">E-Mail <span>(필수)</span></label>
      <input id="email" name="email">
    </p>
  <p>
    <label for="weight">Weight <span>(나이가 50인 경우에는 입력 필수)</span></label>
    <input id="weight" name="weight">
    </p>
    <p>
      <input class="submit" type="submit" value="전송">
    </p>
</form>
```

```css
body {
  margin: 20px 0;
  font-family: 'Lato';
  font-weight: 300;
  font-size: 1.25rem;
  width: 300px;
}

form, p {
  margin: 20px;
}

p.note {
  font-size: 1rem;
  color: red;
}

input, textarea {
  border-radius: 5px;
  border: 1px solid #ccc;
  padding: 4px;
  font-family: 'Lato';
  width: 300px;
  margin-top: 10px;
}

label {
  width: 300px;
  font-weight: bold;
  display: inline-block;
  margin-top: 20px;
}

label span {
  font-size: 1rem;
}

label.error {
    color: red;
    font-size: 1rem;
    display: block;
    margin-top: 5px;
}

input.error, textarea.error {
    border: 1px dashed red;
    font-weight: 300;
    color: red;
}

[type="submit"], [type="reset"], button, html [type="button"] {
    margin-left: 0;
    border-radius: 0;
    background: black;
    color: white;
    border: none;
    font-weight: 300;
    padding: 10px 0;
    line-height: 1;
}
```

```javascript
$(document).ready(function() {
  $("#basic-form").validate({
    rules: {
      name : {
        required: true,
        minlength: 3
      },
      age: {
        required: true,
        number: true,
        min: 18
      },
      email: {
        required: true,
        email: true
      },
      weight: {
        required: {
          depends: function(elem) {
            return $("#age").val() > 50
          }
        },
        number: true,
        min: 0
      }
    },
    messages : {
      name: {
        minlength: "이름은 3글자 이상 입력해야 합니다."
      },
      age: {
        required: "이름을 입력해주세요.",
        number: "나이는 숫자로만 입력할 수 있습니다.",
        min: "18세 이상 입력해주세요."
      },
      email: {
        email: "이메일 포멧을 맞춰주세요. example : abc@domain.tld"
      },
      weight: {
        required: "나이가 50인 경우에는 weight를 입력해주세요.",
        number: "weight는 숫자만 입력해주세요."
      }
    }
  });
});
```

## 과제 참고

* [https://code.tutsplus.com/tutorials/easy-form-validation-with-jquery--cms-33096](https://code.tutsplus.com/tutorials/easy-form-validation-with-jquery--cms-33096)

