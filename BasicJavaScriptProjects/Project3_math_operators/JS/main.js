
//Addition function
function My_First_Function() {
    var together = 45 + 54;
document.getElementById("Math").innerHTML = "45 + 54 = " + together
}

//Subtraction function
function My_First_Function2() {
    var seperated = 54 - 45;
document.getElementById("Math2").innerHTML = "54 - 45 = " + seperated
}

//Multiplication function
function My_First_Function3() {
    var multiple = 54 * 45;
document.getElementById("Math3").innerHTML = "54 * 45 = " + multiple
}

//Division function
function My_First_Function4() {
    var divided = 2430 / 54;
document.getElementById("Math4").innerHTML = "2430 / 54 = " + divided
}

//Multiple mathematical operations function
function My_First_Function5() {
    var multiple = (350 + 25) * 15 - 200 / 4;
document.getElementById("Math5").innerHTML = "(350 + 25) * 15 - 200 / 4 = " + multiple
}

//Modulus operator function
function My_First_Function6() {
    var remainder = 357 % 5;
document.getElementById("Math6").innerHTML = "When you divide 357 by 5 you have a remainder of: " 
+ remainder
}

//Negation operator function
function My_First_Function7() {
    var negativity = 325;
document.getElementById("Math7").innerHTML = - negativity
}

//Increment operators funtion
function upper() {
    var x = 10
    x++
    
document.getElementById("upper").innerHTML = x
}

//Decrement operators function
function downer() {
    var y = 10
    y--

document.getElementById("downer").innerHTML = y
}

//Math.random function
function random() {
    window.alert(Math.random() * 100)
}

//math object method Math.min function
function min() {
    var x = Math.min(0, 150, 30, 20, -8, -200)
document.getElementById("lowest_value").innerHTML = x
}