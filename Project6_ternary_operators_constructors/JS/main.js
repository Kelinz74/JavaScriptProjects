//A function utilizing a ternary operation using input from the browser
function Ride_Function() {
    var Height, Can_ride;
    Height = document.getElementById("Height").value;
    Can_ride = (Height < 52) ? "You are too short":"You are tall enough";
    document.getElementById("Ride").innerHTML = Can_ride + " to ride.";
}

//A cunstructor function that uses the New and This Keywords
function Funko_Pops(year, size, special_Edition, genre) {
    this.Funko_Pops_year = year;
    this.Funko_Pops_size = size;
    this.Funko_Pops_special_Edition = special_Edition;
    this.Funko_Pops_genre = genre;
}

var Peter = new Funko_Pops(2021, "Jumbo", "Walmart", "Batman")
var Sara = new Funko_Pops(2021, 15, "Walmart", "The Office")
var Chloe = new Funko_Pops(2021, 15, "Gamestop", "Naruto")

//A function that displays the result of the constructor function with an HTML element in main.html
function my_Function() {
    document.getElementById("New_and_This").innerHTML = "Chloe has a Funko pop that is from " + Chloe.Funko_Pops_year +
    " that is " + Chloe.Funko_Pops_size + " inches tall that she got from " + Chloe.Funko_Pops_special_Edition +
    ". It is from the Anime " + Chloe.Funko_Pops_genre + "."
}

//deomonstration of a nested function
function count_Function() {
    document.getElementById("Nested_Function").innerHTML = Count();
    function Count() {
        var Starting_point = 9;
        function Plus_one() {Starting_point += 1;}
        Plus_one();
        return Starting_point;
    }
}