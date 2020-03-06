//Crystals value is between 1-12
//random number should be between 19-120

console.log("Yo!")

$(document).ready(function() {

    var crystal = $(".crystal");
    var ruby = $("#ruby");
    var sapphire = $("#sapphire");
    var gold = $("#gold");
    var emerald = $("#emerald");
    var randomCrystal = Math.floor((Math.random() * 12) + 1);
    var rubyNumber = randomCrystal
    var saphNumber = randomCrystal
    var goldNumber = randomCrystal
    var greenNumber = randomCrystal

    $("#randomNumber").html(function() {

        var minNumber = 19;

        var maxNumber = 120;

        var randomNumber = Math.floor((Math.random() * maxNumber) + minNumber);

        $("#randomNumber").text(randomNumber)
    });

    $("#currentNumber").html(function() {

       var currentNumber = (rubyNumber + saphNumber + goldNumber + greenNumber)

       console.log(currentNumber)

    });

    $("#ruby").on("click", function() {


        
    });

});