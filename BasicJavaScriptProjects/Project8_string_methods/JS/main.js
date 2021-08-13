//A function applying string values to variables to make a whole sentance display in the HTML file using
//the concat() method.
function Concat_method() {
    var Avenger1 = "Doctor Strange ";
    var Avenger2 = "is the ";
    var Avenger3 = "best super hero ";
    var Avenger4 = "in the ";
    var Avenger5 = "Marvel Universe.";
    var Best_Avenger = Avenger1.concat(Avenger2, Avenger3, Avenger4, Avenger5);

    document.getElementById("Concatenate").innerHTML = Best_Avenger;
}

//a function that searches data to a spcific point utilizing the slice() method
function slice_Method() {
    var sentance = "Be careful which path you travel down, Strange. Stronger men than you have lost their way.";
    var section = sentance.slice(39, 46)
    document.getElementById("slice").innerHTML = section
}

//A function that returns a number as a string utilizing toString() method
function Number_String() {
    var x = 310
    document.getElementById("Num_String").innerHTML = x.toString() + " is now a String."
}

//A function that will return string to a number of specified length utilizing toPrecision() method
function Precise_length() {
    var length_1 = 471827.473838739298375611;
    document.getElementById("length").innerHTML = length_1.toPrecision(10)
}