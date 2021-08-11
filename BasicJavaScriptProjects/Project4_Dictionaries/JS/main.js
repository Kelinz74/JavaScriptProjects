//A dictionary funtion
function My_Dictionary() {
    //The variable to hold the KVP
    var Avengers_Team = {
        //key value:pairs = KVP
        Leadership: "Captain America",
        Techknowledgy: "Iron Man",
        BioHazard: "Incredible Hulk",
        Magic: "Thor",
        MartialArts: "Black Widow",
        Skill: "Hawkeye"
    };
    //a delete statment deleting the KVP Magic: "Thor"
    delete Avengers_Team.Magic
    //JavaScript method to output a value from the dictionary to the HTML file
    document.getElementById("Dictionary").innerHTML = Avengers_Team.Magic
}