'use strict';
(function(){
    let results = [];
    let length = 9;

    let gugudan = {
        calculate: function(i){
         for(let j=1; j<=length; j++){
             results[j-1] = i *j;
             }
        },
        print: function(i,results){
         document.write(i+ "단<br>")
             for(var j=1; j<=length; j++){
                 document.write(i+ " * " +j+ " = " + results[j-1]+"<br>");
             }
        }
    }
    
   for(let i=2; i<=length; i++){
        gugudan.calculate(i);
        gugudan.print(i,results);
    }
    
})();