




var clickBtn = document.querySelector("#clickBtn");
var input = document.querySelector("#answer");

clickBtn.addEventListener('click', function() {
    var x = 2;
    var i = 1;
    var y = i++;

    answer = x * y
    input.value = answer;
});
