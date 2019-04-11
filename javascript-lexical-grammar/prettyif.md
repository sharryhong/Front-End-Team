# if문 예쁘게 짜기
1. 홀수 번째에 있는 배열의 값의 합 구하기
```javascript
    var arrayOfIntegers = [1, 4, 5, 9, 0, -1, 5];

    var counter = 0;
    arrayOfIntegers.forEach(function (integer) {
      var remainder = Math.abs(integer % 2);
      if (remainder === 1) {
        counter++;
      }
    });
    console.log(counter);
```
위와 같은 형태로 코드를 짜게 된다.

이를 좀 더 예쁘게 짜면?
```javascript
    var counter = 0;
    arrayOfIntegers.forEach(function (integer) {
      var remainder = Math.abs(integer % 2);
      counter += remainder;
    });
    console.log(counter);
```
remainder에서 홀수로 떨어질 경우는 1이 되므로, counter에 1씩 더해진다.

2. 평일인지 주말인지 구하는 함수

 Date() 객체를 인자로 받아서 주말인지, 평일인지 구하는 함수를 구현한다고 했을때

아래와 같은 코드를 작성 했다고 가정하자.
```javascript
    var weekendOrWeekday = function (inputDate) {
      var day = inputDate.getDay();
      if (day === 0 || day === 6) {
        return 'weekend';
      } 
      
      return 'weekday';
      // Or, for ternary fans:
      // return (day === 0 || day === 6) ? 'weekend' : 'weekday';
    };
    console.log(weekendOrWeekday(new Date()));
```
이를 좀 더 예쁘게 짜면?
```javascript
    var weekendOrWeekday = function (inputDate) {
      var day = inputDate.getDay();
      return weekendOrWeekday.labels[day] || 
             weekendOrWeekday.labels['default'];
    };
    weekendOrWeekday.labels = { 
      0: 'weekend', 
      6: 'weekend', 
      default: 'weekday' 
    };
    console.log(weekendOrWeekday(new Date()));
```
labels의 Object에 저장하여 해당 하는 키값을 가져오는 방법을 사용한다.

3. doubler 함수

입력된 타입에 기반하여 아래의 규칙을 따르는 함수이다.

- 숫자인 경우에는 입력 받은 숫자에 x2

    10 ⇒ 20, -10 ⇒ -20

- 문자인 경우에는 각각 문자열을 반복한다.

    hi ⇒ hhii

- 함수인 경우에는 함수호출을 2번한다.
- 배열인 경우에는 배열의 모든 요소들을 doubler을 호출하여 타입에 따라 값을 반환하다.
```
    doubler([5, 'hello']) ⇒ [10, "hheelllloo"]
```
- 오브젝트인 경우에는 모든 오브젝트들을 doubler을 호출하여 타입에 따라 값을 반환하다.
```javascript
    doubler({ a: 5, b: 'hello' }) ⇒ {a: 10, b: "hheelllloo"}

    var doubler = function (input){
      switch (typeof input) {
        case 'number':
          return input + input;
        case 'string':
          return input
            .split('')
            .map((letter) => letter + letter)
            .join('');
        case 'object':
          Object.keys(input)
                .map((key) => (input[key] = doubler(input[key])));
          return input;
        case 'function':
          input();
          input();
      }
    };
    console.log(doubler(-10));
    console.log(doubler('hey'));
    console.log(doubler([5, 'hello']));
    console.log(doubler({ a: 5, b: 'hello' }));
    console.log(
      doubler(function() {
        console.log('call-me');
      }),
    );
```
 이를 조금 더 예쁘게 짜면 ?
```javascript
    const doubler = function (input) {
      return doubler.operationsByType[typeof input](input);
    };
    doubler.operationsByType = {
      number: function (input) {return input + input},
      string: function (input) {
        input
          .split('')
          .map(function (letter) {return letter + letter})
          .join(''),
    	}
      function: function (input) {
        input();
        input();
      },
      object: function (input) {
        Object.keys(input)
              .map(function (key) {return (input[key] = doubler(input[key]))} );
        return input;
      },
    };
    console.log(doubler(-10));
    console.log(doubler('hey'));
    console.log(doubler([5, 'hello']));
    console.log(doubler({ a: 5, b: 'hello' }));
    console.log(
      doubler(function() {
        console.log('call-me');
      }),
    );
```
operationsByType Object에 타입에 따라 호출하는 함수를 정의한다.

---

1. Array.includes를 활용하라.
```javascript
    // condition
    function test(fruit) {
      if (fruit == 'apple' || fruit == 'strawberry') {
        console.log('red');
      }
    }

    function test(fruit) {
      // extract conditions to array
      var redFruits = ['apple', 'strawberry', 'cherry', 'cranberries'];
    
      if (redFruits.includes(fruit)) {
        console.log('red');
      }
    }
```
2. 중첩을 줄이고, 빨리 리턴하라
```javascript
    function test(fruit, quantity) {
      var redFruits = ['apple', 'strawberry', 'cherry', 'cranberries'];
    
      // condition 1: fruit must has value
      if (fruit) {
        // condition 2: must be red
        if (redFruits.includes(fruit)) {
          console.log('red');
    
          // condition 3: must be big quantity
          if (quantity > 10) {
            console.log('big quantity');
          }
        }
      } else {
        throw new Error('No fruit!');
      }
    }
```
해당 코드는 

3개의 if문이 중첩되어 있는 코드이다. 

1개의 if/else 문으로 조건에 맞지 않을 경우에 에러를 throw하는 코드이다.
```javascript
    /_ return early when invalid conditions found _/
    
    function test(fruit, quantity) {
      const redFruits = ['apple', 'strawberry', 'cherry', 'cranberries'];
    
      // condition 1: throw error early
      if (!fruit) throw new Error('No fruit!');
    
      // condition 2: must be red
      if (redFruits.includes(fruit)) {
        console.log('red');
    
        // condition 3: must be big quantity
        if (quantity > 10) {
          console.log('big quantity');
        }
      }
    }
```
조건에 맞지 않는 것은 빨리 리턴(throw) 하는 코드를 적용하였다.

아래의 코드는 중첩된 if문을 줄였다.
```javascript
    /_ return early when invalid conditions found _/
    
    function test(fruit, quantity) {
      const redFruits = ['apple', 'strawberry', 'cherry', 'cranberries'];
    
      if (!fruit) throw new Error('No fruit!'); // condition 1: throw error early
      if (!redFruits.includes(fruit)) return; // condition 2: stop when fruit is not red
    
      console.log('red');
    
      // condition 3: must be big quantity
      if (quantity > 10) {
        console.log('big quantity');
      }
    }
```
중첩된 if문을 줄이기 위해 반대인 조건을 기입하고, 리턴을 일찍하였다.

하지만 이 방법은 강제하진 않는다. 적용하기 전 코드와 적용한 코드에 대해 자신이 한번 더 생각해야한다. 

-중첩을 줄임으로써 좀 더 코드가 간결하고, 직관적이게 되었다.

-반대인 조건을 적용하면 더 많은 생각을 할 수도 있다.

그러므로 일찍 리턴을 하고, if의 중첩을 줄이는 것은 너무 남발해서는 안된다.

3. default function parameter을 사용하라
```javascript
    function test(fruit, quantity) {
      if (!fruit) return;
      var q = quantity || 1; // if quantity not provided, default to one
    
      console.log(`We have ${q} ${fruit}!`);
    }
    
    //test results
    test('banana'); // We have 1 banana!
    test('apple', 2); // We have 2 apple!
```
q변수에 함수 파라미터의 기본값을 정의하였다.
```javascript
    function test(fruit, quantity = 1) { // if quantity not provided, default to one
      if (!fruit) return;
      console.log(`We have ${quantity} ${fruit}!`);
    }
    
    //test results
    test('banana'); // We have 1 banana!
    test('apple', 2); // We have 2 apple!
```
(IE에서는 지원하지 않음)

아래의 코드에서 처럼 fruit가 object인 경우에는?
```javascript
    function test(fruit) { 
      // printing fruit name if value provided
      if (fruit && fruit.name)  {
        console.log (fruit.name);
      } else {
        console.log('unknown');
      }
    }
    
    //test results
    test(undefined); // unknown
    test({ }); // unknown
    test({ name: 'apple', color: 'red' }); // apple
```    

fruit.name을 사용하는 대신에 {name} 파라미터를 사용하여 해당 키 기본값을 사용한다.
```javascript
    // destructing - get name property only
    // assign default empty object {}
    function test({name} = {}) {
      console.log (name || 'unknown');
    }
    
    //test results
    test(undefined); // unknown
    test({ }); // unknown
    test({ name: 'apple', color: 'red' }); // apple
```
4. switch 구문 보다 맵과 Object 리터럴을 좀 더 사용하자.
```javascript
    function test(color) {
      // use switch case to find fruits in color
      switch (color) {
        case 'red':
          return ['apple', 'strawberry'];
        case 'yellow':
          return ['banana', 'pineapple'];
        case 'purple':
          return ['grape', 'plum'];
        default:
          return [];
      }
    }
    
    //test results
    test(null); // []
    test('yellow'); // ['banana', 'pineapple']

    // use object literal to find fruits in color
      const fruitColor = {
        red: ['apple', 'strawberry'],
        yellow: ['banana', 'pineapple'],
        purple: ['grape', 'plum']
      };
    
    function test(color) {
      return fruitColor[color] || [];
    }
```
Object리터럴을 적용한 코드이다.
```javascript
    // use Map to find fruits in color
      const fruitColor = new Map()
        .set('red', ['apple', 'strawberry'])
        .set('yellow', ['banana', 'pineapple'])
        .set('purple', ['grape', 'plum']);
    
    function test(color) {
      return fruitColor.get(color) || [];
    }
```
맵을 사용하여 적용한 코드 이다.

Map은 ES2015이후 부터 사용된 object 타입이다.

5. TL;DR; syntax를 리팩터

Array.filter을 사용하여 코드를 좀 더 향상 시킬 수 있다.
```javascript
    var fruits = [
        { name: 'apple', color: 'red' }, 
        { name: 'strawberry', color: 'red' }, 
        { name: 'banana', color: 'yellow' }, 
        { name: 'pineapple', color: 'yellow' }, 
        { name: 'grape', color: 'purple' }, 
        { name: 'plum', color: 'purple' }
    ];
    
    function test(color) {
      // use Array filter to find fruits in color
    
      return fruits.filter(function f(){ f.color == color});
    }
```
6. Array.every 그리고 Array.some 을 사용하라.
```javascript
    var fruits = [
        { name: 'apple', color: 'red' },
        { name: 'banana', color: 'yellow' },
        { name: 'grape', color: 'purple' }
      ];
    
    function test() {
      var isAllRed = true;
    
      // condition: all fruits must be red
      for (var f of fruits) {
        if (!isAllRed) break;
        isAllRed = (f.color == 'red');
      }
    
      console.log(isAllRed); // false
    }
```
아래는 Array.every를 적용한 코드
```javascript
    var fruits = [
        { name: 'apple', color: 'red' },
        { name: 'banana', color: 'yellow' },
        { name: 'grape', color: 'purple' }
      ];
    
    function test() {
      // condition: short way, all fruits must be red
      var isAllRed = fruits.every(function f() {return f.color == 'red'});
    
      console.log(isAllRed); // false
    }
```
Array.some을 적용한 코드
```javascript
    var fruits = [
        { name: 'apple', color: 'red' },
        { name: 'banana', color: 'yellow' },
        { name: 'grape', color: 'purple' }
    ];
    
    function test() {
      // condition: if any fruit is red
      var isAnyRed = fruits.some(function f() {return f.color == 'red'});
    
      console.log(isAnyRed); // true
    }
```
해당 내용은 

[https://edgecoders.com/coding-tip-try-to-code-without-if-statements-d06799eed231](https://edgecoders.com/coding-tip-try-to-code-without-if-statements-d06799eed231)

[https://scotch.io/tutorials/5-tips-to-write-better-conditionals-in-javascript](https://scotch.io/tutorials/5-tips-to-write-better-conditionals-in-javascript)

위의 사이트에서 발췌하여 정리