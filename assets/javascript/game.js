//Crystals value is between 1-12
//random number should be between 19-120

console.log("Yo!")

$(document).ready(function () {

    var crystal = $(".crystal");
    var ruby = $("#ruby");
    var sapphire = $("#sapphire");
    var gold = $("#gold");
    var emerald = $("#emerald");
    var randomRuby = Math.floor((Math.random() * 12) + 1);
    var randomSapphire = Math.floor((Math.random() * 12) + 1);
    var randomGold = Math.floor((Math.random() * 12) + 1);
    var randomEmerald = Math.floor((Math.random() * 12) + 1);
    var currentNumber = 0;
    var randomNumber = 19 + Math.floor(Math.random() * 120);
    var wins = 0;
    var losses = 0;
    var winAudio = new Audio("assets/audio/victory.wav");
    var loseAudio = new Audio("assets/audio/scream.wav");


    $("#randomNumber").html(function () {

        $("#randomNumber").text(randomNumber);
    });

    function checkWin(){
        if (currentNumber === randomNumber) {
            $("#wins").text(++wins);
            $("#currentNumber").text(0);
            randomNumber = 19 + Math.floor(Math.random() * 120);
            $("#randomNumber").text(randomNumber);
            randomRuby = Math.floor((Math.random() * 12) + 1);
            randomSapphire = Math.floor((Math.random() * 12) + 1);
            randomGold = Math.floor((Math.random() * 12) + 1);
            randomEmerald = Math.floor((Math.random() * 12) + 1);
            currentNumber = 0;
            winAudio.play();
            alert("You win!");


        } else if (currentNumber > randomNumber) {
            $("#losses").text(++losses);
            $("#currentNumber").text(0);
            randomNumber = 19 + Math.floor(Math.random() * 120);
            $("#randomNumber").text(randomNumber);
            randomRuby = Math.floor((Math.random() * 12) + 1);
            randomSapphire = Math.floor((Math.random() * 12) + 1);
            randomGold = Math.floor((Math.random() * 12) + 1);
            randomEmerald = Math.floor((Math.random() * 12) + 1);
            currentNumber = 0;
            loseAudio.play();
            alert("You lose!");
        };
    } 


    $("#ruby").on("click", function () {

        currentNumber += randomRuby;
        console.log(currentNumber);
        $("#currentNumber").text(currentNumber);
        checkWin()

        

    });

    $("#sapphire").on("click", function () {

        currentNumber += randomSapphire
        console.log(currentNumber)
        $("#currentNumber").text(currentNumber)
        checkWin()
    });

    $("#gold").on("click", function () {

        currentNumber += randomGold
        console.log(currentNumber)
        $("#currentNumber").text(currentNumber)

        checkWin()

    });

    $("#emerald").on("click", function () {

        currentNumber += randomEmerald
        console.log(currentNumber)
        $("#currentNumber").text(currentNumber)

        checkWin()

    });



});