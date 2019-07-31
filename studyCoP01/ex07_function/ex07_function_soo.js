'use strict';
    (function(){
        // 1. 2단만 구현 

        // for(var i = 1; i <= 9; i++){
        //     console.log(2 * i);
        // }

        // for(var i = 1; i <= 9; i++){
        //     console.log(3 * i);
        // }

        // for(var i = 1; i <= 9; i++){
        //     console.log(4 * i);
        // }

        // 2중 for문으로 

        // for(var i = 2; i<=9; i++){
        //     for(var j = 1; j<=9; j++){
        //         console.log(i * j);
        //     }
        // }

        // 배열로 구구단
        // var results = [];
        // var length = 9;
        // for(var i=1; i <= length; i++) {
        //     // 계산 결과를 배열에 저장
        // }

        // for(var i=1; i <= length; i++) {
        //     // 배열의 내용을 출력 
        // }

        // var results = [];
        // var length = 9;
        // for(var i=1; i<=length; i++){
        //     results[i] = 2 * i;
        // }

        // for(var i=1; i <= length; i++){
        //     document.write("2 * "+ i + " = " + results[i] + "<br>");
        // }

        // for(var i=1; i<=length; i++){
        //     results[i] = 3 * i;
        // }

        // for(var i=1; i <= length; i++){
        //     document.write("3 * "+ i + " = " + results[i] + "<br>");
        // }

        // 배열로 구구단 2~9단 (이중반복문)
        // var results = [];
        // var length = 9;

        // for(var i=2; i<=length; i++){
        //     for(var j=1; j<=length; j++){
        //         results[j-1] = i * j;
        //     }

        //     for(var j=1; j<=length; j++){
        //         document.write(i+ "*" +j+ "=" + results[j-1]+"<br>");
        //     }
        // }


        var results = [];
        var length = 9;
        
        function calculate(j){
            for(var j=1; j<length; j++){
                results[j-1] = i * j;
            }
        }

        function calculatePrint(results){
            document.write(i+ "단"+"<br>");
            for(var j=1; j<length; j++){
                document.write(i+ " * " +j+ " = " + results[j-1]+"<br>");
            }
        }

        for(var i=2; i<=length; i++){
            calculate(i);
            calculatePrint(results);
        }
    })();