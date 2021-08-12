//A global variable
var Dr_Strange = "Sorcerer Supreme"

//A function utilizing a global variable
function Avenger() {
    document.getElementById("Doctor_Strang").innerHTML = "Doctor Strange is the " + Dr_Strange + "."
}

//A function utilizing a local variable
function Avenger2() {
    var Hulk = "inhuman strength"
    document.getElementById("Hulk").innerHTML = "The Incredible Hulk has " + Hulk + "."
}

//A function displaying in the console an error for an Undefined Variable
function Iron_man () {
    console.log("Iron Man is " + cool + ".")
}

//A function with an if statement that utilizes the new Date().getHours() method
function get_Date() {
    if (new Date().getHours() < 18) {
        document.getElementById("Greeting").innerHTML = "How are you today?";
    }
}

//A function with an if statment that utilizes the new Date().getDay and .getMonth method with an else
//statment that will say "Not your Birthday" if the if stament is not met.
function Birthday() {
    var Birthday_Day = (new Date().getDay())
    var Birthday_Month = (new Date().getMonth())
    if (Birthday_Day == 15 && Birthday_Month == 12){
        document.getElementById("Happy_Birthday").innerHTML = "Happey Birthday!"     
    } else {document.getElementById("Happy_Birthday").innerHTML = "Not your Birthday!"}
}

// A function that includes an if and an else statment utilizing the document.getElementById() to display
//an answer in the HTML file
function Superhero () {
    hero = document.getElementById("hero").value;
    if (hero == "Doctor Strange" || hero == "doctor strange") {
        correct = "You are correct.";
    }
    else {
        correct = "Wrong!";
    }
    document.getElementById("correct_answer_or_not").innerHTML = correct
}

//A function that will get the time of day from your computer and display a 
//message depending on what time of the day it is
//with if, else if, else conditions utilizing the "new Date().getHours" method
function Time_Function() {
    var Time = new Date().getHours();
    var Reply;
    if (Time < 12 == Time > 0) {
        Reply = "It is morning time!";
    }
    else if (Time >= 12 == Time < 18) {
        Reply = "It is afternoon.";
    }
    else {
        Reply = "It is evening time.";
    }
    document.getElementById("Time_of_day").innerHTML = Reply
}