var number = 60;
var counter
var correct = 0;

$(document).ready(function () {

    function start() {
        counter = setInterval(timer, 1000);
    }

    function stop() {
        clearInterval(counter);
    }

    function timer() {
        number--; //decrement
        $("#timer").html("<h2>" + number + "</h2>");
        if (number === 0) {
            alert("Game Over")
            stop();
        }
    }

    $("#trivia").hide();
    $("#results").hide();

    $("#start").click(function () {
        $("#trivia").show();
        $("#start").hide();

        start();

    })

    $("#submit").click(function () {
        var question1 = $("input[name='question1']:checked").val() === "a";
        var question2 = $("input[name='question2']:checked").val() === "b";
        var question3 = $("input[name='question3']:checked").val() === "b";
        var question4 = $("input[name='question4']:checked").val() === "c";
        var question5 = $("input[name='question5']:checked").val() === "a";


        if (question1) {
            correct++
        }
        if (question2) {
            correct++
        }
        if (question3) {
            correct++
        }
        if (question4) {
            correct++
        }
        if (question5) {
            correct++
        }

        $("#trivia").hide();
        $("#results").show();
        $("#results").html("<p>You got " + correct + " correct!</p>");

    })

    $("#results").click(function () {
        $("#results").hide();
        $("#trivia").show();

    })

});
