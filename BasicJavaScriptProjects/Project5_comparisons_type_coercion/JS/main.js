//displaying the type of operator
document.write(typeof "Avengers")

//displaying a coercion of Integers and Strings
document.write(", Avengers team consist of " + 5 + " humans and " + 1 + " Demi-God.")

//function to display NaN
function my_Function() {
    document.getElementById("Test").innerHTML = 0/0;
}

//function to display "True" that a String is not a number
function my_Function2() {
    document.getElementById("Test2").innerHTML = isNaN('This is a string');
}

//function to display "False" that 007 is a number
function my_Function3() {
    document.getElementById("Test3").innerHTML = isNaN('007')
}

//function to display Infinity (Infinity)
function my_Function4() {
    document.getElementById("Test4").innerHTML = (2E310)
}

//function to display negative Infinity (-Infinity)
function my_Function5() {
    document.getElementById("Test5").innerHTML = (-2E310)
}

//function to display true/false by a > comparison (10 > 5)
function my_Function6() {
    document.getElementById("Test6").innerHTML = (10 > 5)
}

//function to display true/false by a < comparison (10 < 5)
function my_Function7() {
    document.getElementById("Test7").innerHTML = (10 < 5)
}

//Demonstration of writing to the console viewable in the Developer tools
console.log(10 + 10)
console.log(10 == 10)

//function to display true/false by a == comparison (10 + 5 == 15)
function my_Function8() {
    document.getElementById("Test8").innerHTML = (10 + 5 == 15)
}

//function to display true/false by a == comparison
function my_Function9() {
    document.getElementById("Test9").innerHTML = (10 == 5)
}

//function to display true/false by a === comparison (Same Data Type | Same Value)
function my_Function10() {
    document.getElementById("Test10").innerHTML = (10 === 10)
}

//function to display true/false by a === comparison (Different Data Type | Different Value)
function my_Function11() {
    document.getElementById("Test11").innerHTML = ("10" === 25)
}

//function to display true/false by a === comparison (Different Data Type | Same Value)
function my_Function12() {
    document.getElementById("Test12").innerHTML = ("10" === 10)
}

//function to display true/false by a === comparison (Same Data Type | Different Value)
function my_Function13() {
    document.getElementById("Test13").innerHTML = (10 === 25)
}

//function to display true/false by a || comparison (10 > 25 || 10 < 100)
function my_Function14() {
    document.getElementById("Test14").innerHTML = (10 > 25 || 10 < 100)
}

//function to display true/false by ! (Not Operator)
function my_Function15() {
    document.getElementById("Test15").innerHTML = !(10 > 5)
}

//function to display true/false by ! (Not Operator)
function my_Function16() {
    document.getElementById("Test16").innerHTML = !(10 < 5)
}
