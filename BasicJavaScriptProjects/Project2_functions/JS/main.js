function My_First_Function() {

    //Display a string and change the color to green.
    var str = "This text is green!";
    var result = str.fontcolor("green");

    //Concatenate two sentences.
    var sentence = "I am leanring";
    sentence += " a lot from this book!";

    //id for html file to display  a string and change the color to green
    document.getElementById("Green_Text").innerHTML = result
    //id for html file to dispaly Concatenated sentence
    document.getElementById("Concatenate").innerHTML = sentence
}