//Crystals value is between 1-12
//random number should be between 19-120

console.log("Yo!")

$(document).ready(function() {

    var crystal = $(".crystal");
    var ruby = $("#ruby");
    var sapphire = $("#sapphire");
    var gold = $("#gold");
    var emerald = $("#emerald");
    var randomRuby = Math.floor((Math.random() * 12) + 1);
    var randomSapphire = Math.floor((Math.random() * 12) + 1);
    var randomGold = Math.floor((Math.random() * 12) + 1);
    var randomEmerald = Math.floor((Math.random() * 12) + 1);
    var currentNumber = 0

    $("#randomNumber").html(function() {


        var randomNumber = 19 + Math.floor(Math.random() * 120);

        $("#randomNumber").text(randomNumber)
    });


    $("#ruby").on("click", function() {
        
        currentNumber += randomRuby
        console.log(currentNumber)
        $("#currentNumber").text(currentNumber)
        
    });

    $("#sapphire").on("click", function() {
        
        currentNumber += randomSapphire
        console.log(currentNumber)
        $("#currentNumber").text(currentNumber)
        
    });

    $("#gold").on("click", function() {
        
        currentNumber += randomGold
        console.log(currentNumber)
        $("#currentNumber").text(currentNumber)
        
    });

    $("#emerald").on("click", function() {
        
        currentNumber += randomEmerald
        console.log(currentNumber)
        $("#currentNumber").text(currentNumber)
        
    });



});