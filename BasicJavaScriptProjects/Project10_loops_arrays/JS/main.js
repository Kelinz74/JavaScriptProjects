// A function utilizing a while loop counting to 10
function count_To_Ten() {
    var Digit = "";
    var X = 1;
    while (X < 11) {
        Digit += "<br>" + X;
        X++
    }
    document.getElementById("Loop").innerHTML = Digit;
    
}

// A function utilizing a for loop listing super heros
var Marvel_Avenger = ["Captain America", "Iron Man", "Incredible Hulk", "Thor", "Black Widow", "Hawkeye"];
var Hero = "";
var X;
function for_loop() {
    for (X = 0; X < Marvel_Avenger.length; X++) {
        Hero += Marvel_Avenger[X] + "<br>";
    }
    document.getElementById("List_of_Marvel_Avengers").innerHTML = Hero;
}

//A function utilizing an array of data(s) and displaying a property selected from the index of the array
//in an HTML file
function array_Function() {
    var bad_Guy = [];
    bad_Guy[0] = "Doctor Doom";
    bad_Guy[1] = "Loki";
    bad_Guy[2] = "Thanos";
    document.getElementById("Array").innerHTML = "The worst of the bad guys is " + bad_Guy[2] + ".";
}

//A function with a constant value displaying a string with const value included.
function constant_function() {
    const Bat_Man = {car: "Batmobile", plane: "Batplane", headquarters: "Batcave"}
    Bat_Man.Motorcycle = "Batcycle"
    Bat_Man.Motorcycle = "Batblade"
    document.getElementById("Constant").innerHTML = " Batman would keep his " + Bat_Man.plane + ", " 
    + Bat_Man.car + " and Batcycle, also known as the " + Bat_Man.Motorcycle + ", in his headquarters; the " + Bat_Man.headquarters + "."
}

//A function to show the uses of a Var and Let vaariable declaration as a function and block declaration
function will_Let() {
    var num = 55
    document.write(num);{
        let num = 25;
        document.write("<br>" + num);
    }
    document.write("<br>" + num) 
}

//A let object including 4 properties and a method to display properties in a string
let Marvel = {
    avenger: "Captain America",
    fantastic_four: "Reed Richards",
    shield: "Nick Fury",
    x_men: "Professor Xavier",
    description : function() {
        return "There has been many teams in the Marvel universe with great leaders.  Some of the best are " 
        + this.avenger + ", " + this.fantastic_four + ", " + this.shield + " and " + this.x_men + ".";
    }

};
document.getElementById("leader").innerHTML = Marvel.description();