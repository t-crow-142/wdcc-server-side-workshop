// Import packages, initial setup
const express = require("express");
const app = express();
const port = 3000;

// Enable static routing for "public" folder
const path = require("path");
app.use(express.static(path.join(__dirname, "public")));

// Set up to use the body parser (allows us to read POSTed form data)
app.use(express.urlencoded({ extended: false }));

/*


*/
app.get("/test", function(req, res){
    const minimumYear = req.query.minimum;
    const maximumYear = req.query.maximum;
    const filteredFilms = getFilmsWithinYears(minimumYear, maximumYear);
    res.json(filteredFilms);
});

// TODO Your code here.


// Start the server running
app.listen(port, function () {
    console.log(`Example app listening on port ${port}!`);
});



/*  
    MOCK DATABASE AND DATA ACCESS FUNCTIONS BELOW

    These functions and associated arrays of JavaScript objects are a very basic 'mock database' & data access functions.
    NOTE: In a real application, this would be handled by a real database not arrays of JavaScript objects.
    It is suggested that as an extension to this task, you convert the mock database to a MongoDB database.
*/
function getFilmsWithinYears(minimum, maximum){

    let filteredFilms = films.filter((film) => {
        return film.releaseYear >= minimum && film.releaseYear <= maximum;
    });
    return filteredFilms;
}

function getFilmsByDirectorId(directorId){
    let filteredFilms = films.filter((film) => {
        return film.directorId == directorId;
    });
    return filteredFilms;
}

/*
    Write your own data access functions here as needed:
*/

const directors = [{ "id": 1, "firstName": "Shaughn", "lastName": "Gladdor", "age": 18, "gender": "M", "country": "Indonesia" },
{ "id": 2, "firstName": "Burl", "lastName": "Reckhouse", "age": 51, "gender": "M", "country": "China" },
{ "id": 3, "firstName": "Darnell", "lastName": "Mynett", "age": 19, "gender": "M", "country": "Brazil" },
{ "id": 4, "firstName": "Asa", "lastName": "Dillintone", "age": 41, "gender": "M", "country": "Poland" },
{ "id": 5, "firstName": "Meade", "lastName": "Everwin", "age": 28, "gender": "F", "country": "Argentina" },
{ "id": 6, "firstName": "Raffarty", "lastName": "Bassham", "age": 48, "gender": "M", "country": "Afghanistan" },
{ "id": 8, "firstName": "Nico", "lastName": "Tellenbrook", "age": 44, "gender": "M", "country": "Venezuela" },
{ "id": 9, "firstName": "Sabina", "lastName": "Amort", "age": 44, "gender": "F", "country": "Kenya" },
{ "id": 10, "firstName": "Noll", "lastName": "Thorneloe", "age": 36, "gender": "M", "country": "Croatia" }];

const films = [{"id":1,"filmTitle":"Bending the Rules","releaseYear":1994,"directorId":1,"length":106},
{"id":2,"filmTitle":"Kiss or Kill","releaseYear":2019,"directorId":1,"length":177},
{"id":3,"filmTitle":"Almanya - Welcome to Germany (Almanya - Willkommen in Deutschland)","releaseYear":2012,"directorId":9,"length":153},
{"id":4,"filmTitle":"Infernal Affairs 2 (Mou gaan dou II)","releaseYear":2022,"directorId":9,"length":162},
{"id":5,"filmTitle":"Verlorene, Der (Lost One, The)","releaseYear":2000,"directorId":6,"length":114},
{"id":6,"filmTitle":"Paths of Glory","releaseYear":2013,"directorId":3,"length":146},
{"id":7,"filmTitle":"De Dana Dan","releaseYear":1998,"directorId":7,"length":153},
{"id":8,"filmTitle":"Parisian Love","releaseYear":1993,"directorId":6,"length":138},
{"id":9,"filmTitle":"Journey to the Far Side of the Sun (a.k.a. Doppelgänger)","releaseYear":2004,"directorId":10,"length":148},
{"id":10,"filmTitle":"Brothers Karamazov, The","releaseYear":1997,"directorId":5,"length":107},
{"id":11,"filmTitle":"Captain America: The First Avenger","releaseYear":2007,"directorId":9,"length":181},
{"id":12,"filmTitle":"Babyfever","releaseYear":2007,"directorId":10,"length":149},
{"id":13,"filmTitle":"Dragonquest","releaseYear":2004,"directorId":7,"length":162},
{"id":14,"filmTitle":"Maniac","releaseYear":1999,"directorId":7,"length":124},
{"id":15,"filmTitle":"Pie in the Sky","releaseYear":2005,"directorId":1,"length":133},
{"id":16,"filmTitle":"Revolution OS","releaseYear":2006,"directorId":3,"length":173},
{"id":17,"filmTitle":"Escape to Athena","releaseYear":2015,"directorId":2,"length":152},
{"id":18,"filmTitle":"Only Daughter","releaseYear":1994,"directorId":5,"length":167},
{"id":19,"filmTitle":"Zero Motivation (Efes beyahasei enosh)","releaseYear":2015,"directorId":7,"length":124},
{"id":20,"filmTitle":"Straightheads (Closure)","releaseYear":2003,"directorId":1,"length":150},
{"id":21,"filmTitle":"Opposite of Sex, The","releaseYear":2013,"directorId":4,"length":101},
{"id":22,"filmTitle":"Alamo, The","releaseYear":2012,"directorId":1,"length":184},
{"id":23,"filmTitle":"Blue","releaseYear":2002,"directorId":3,"length":132},
{"id":24,"filmTitle":"Rhinestone","releaseYear":1987,"directorId":5,"length":169},
{"id":25,"filmTitle":"Charlotte Sometimes","releaseYear":1991,"directorId":8,"length":108},
{"id":26,"filmTitle":"Cranford","releaseYear":2021,"directorId":1,"length":134},
{"id":27,"filmTitle":"American Madness","releaseYear":1990,"directorId":10,"length":173},
{"id":28,"filmTitle":"Death In Love","releaseYear":2019,"directorId":4,"length":134},
{"id":29,"filmTitle":"Thomas Crown Affair, The","releaseYear":2002,"directorId":6,"length":151},
{"id":30,"filmTitle":"Shrimp on the Barbie, The","releaseYear":1986,"directorId":4,"length":131},
{"id":31,"filmTitle":"Carts of Darkness","releaseYear":2012,"directorId":1,"length":128},
{"id":32,"filmTitle":"Trailer Park of Terror","releaseYear":1987,"directorId":7,"length":143},
{"id":33,"filmTitle":"Bread and Alley (Nan va Koutcheh)","releaseYear":1994,"directorId":5,"length":154},
{"id":34,"filmTitle":"Uptown Girls","releaseYear":1996,"directorId":5,"length":156},
{"id":35,"filmTitle":"Irreversible (Irréversible)","releaseYear":2013,"directorId":10,"length":113},
{"id":36,"filmTitle":"Go Tell the Spartans","releaseYear":1989,"directorId":2,"length":105},
{"id":37,"filmTitle":"Bandits (Bandidos)","releaseYear":2016,"directorId":8,"length":135},
{"id":38,"filmTitle":"Dandelion","releaseYear":2022,"directorId":4,"length":103},
{"id":39,"filmTitle":"Undertow","releaseYear":1987,"directorId":8,"length":112},
{"id":40,"filmTitle":"Shall We Dance? (Shall We Dansu?)","releaseYear":2016,"directorId":3,"length":99},
{"id":41,"filmTitle":"Redirected","releaseYear":2017,"directorId":5,"length":151},
{"id":42,"filmTitle":"Nine Dead","releaseYear":1997,"directorId":2,"length":113},
{"id":43,"filmTitle":"Vincere","releaseYear":2000,"directorId":9,"length":148},
{"id":44,"filmTitle":"Ice Pirates, The","releaseYear":1986,"directorId":10,"length":155},
{"id":45,"filmTitle":"Royal Scandal, A","releaseYear":2003,"directorId":4,"length":121},
{"id":46,"filmTitle":"Final Season, The","releaseYear":1991,"directorId":10,"length":157},
{"id":47,"filmTitle":"Tables Turned on the Gardener","releaseYear":1997,"directorId":9,"length":174},
{"id":48,"filmTitle":"Spin (You Are Here)","releaseYear":2023,"directorId":10,"length":104},
{"id":49,"filmTitle":"Trauma","releaseYear":1990,"directorId":4,"length":103},
{"id":50,"filmTitle":"In Dreams","releaseYear":1992,"directorId":3,"length":101},
{"id":51,"filmTitle":"Walking Tall","releaseYear":2016,"directorId":7,"length":157},
{"id":52,"filmTitle":"Calamari Union","releaseYear":1994,"directorId":8,"length":158},
{"id":53,"filmTitle":"Notebook, The","releaseYear":2004,"directorId":7,"length":137},
{"id":54,"filmTitle":"Return of Doctor X, The","releaseYear":2000,"directorId":7,"length":113},
{"id":55,"filmTitle":"First Daughter","releaseYear":1993,"directorId":5,"length":166},
{"id":56,"filmTitle":"Angel Baby","releaseYear":2005,"directorId":10,"length":183},
{"id":57,"filmTitle":"Towering Inferno, The","releaseYear":2014,"directorId":8,"length":98},
{"id":58,"filmTitle":"The Big Shave","releaseYear":1993,"directorId":1,"length":115},
{"id":59,"filmTitle":"Anarchist Cookbook, The","releaseYear":1992,"directorId":3,"length":140},
{"id":60,"filmTitle":"Rough Magic","releaseYear":2018,"directorId":10,"length":175},
{"id":61,"filmTitle":"Journey for Margaret","releaseYear":1992,"directorId":3,"length":96},
{"id":62,"filmTitle":"Devil Times Five (a.k.a. Peopletoys)","releaseYear":1986,"directorId":2,"length":161},
{"id":63,"filmTitle":"Fatal Beauty","releaseYear":1988,"directorId":10,"length":183},
{"id":64,"filmTitle":"Frownland","releaseYear":2012,"directorId":9,"length":149},
{"id":65,"filmTitle":".45","releaseYear":2005,"directorId":6,"length":126},
{"id":66,"filmTitle":"Wanted: Dead or Alive","releaseYear":2021,"directorId":8,"length":171},
{"id":67,"filmTitle":"Evil Dead, The","releaseYear":2018,"directorId":6,"length":177},
{"id":68,"filmTitle":"Casualties of War","releaseYear":2009,"directorId":7,"length":101},
{"id":69,"filmTitle":"Champion","releaseYear":2005,"directorId":5,"length":135},
{"id":70,"filmTitle":"Waltzes from Vienna","releaseYear":1987,"directorId":10,"length":113},
{"id":71,"filmTitle":"Babes in Toyland","releaseYear":2002,"directorId":2,"length":177},
{"id":72,"filmTitle":"When the Road Bends: Tales of a Gypsy Caravan","releaseYear":2004,"directorId":10,"length":133},
{"id":73,"filmTitle":"Runaways, The","releaseYear":2022,"directorId":5,"length":128},
{"id":74,"filmTitle":"The Gunman","releaseYear":2016,"directorId":2,"length":101},
{"id":75,"filmTitle":"Front of the Class","releaseYear":1987,"directorId":9,"length":125},
{"id":76,"filmTitle":"Santa Who?","releaseYear":1999,"directorId":1,"length":172},
{"id":77,"filmTitle":"Cherry","releaseYear":1997,"directorId":4,"length":158},
{"id":78,"filmTitle":"You Belong to Me","releaseYear":1994,"directorId":3,"length":185},
{"id":79,"filmTitle":"My Flesh and Blood","releaseYear":2012,"directorId":7,"length":182},
{"id":80,"filmTitle":"Red Rock West","releaseYear":1996,"directorId":4,"length":144},
{"id":81,"filmTitle":"Blue Hawaii","releaseYear":2001,"directorId":9,"length":117},
{"id":82,"filmTitle":"America the Beautiful ","releaseYear":1987,"directorId":5,"length":137},
{"id":83,"filmTitle":"Ace High (Quattro dell'Ave Maria, I)","releaseYear":2010,"directorId":5,"length":166},
{"id":84,"filmTitle":"Rasmus på luffen","releaseYear":2007,"directorId":2,"length":137},
{"id":85,"filmTitle":"Life is a Miracle (Zivot je cudo)","releaseYear":1989,"directorId":10,"length":153},
{"id":86,"filmTitle":"Assassins","releaseYear":1995,"directorId":7,"length":122},
{"id":87,"filmTitle":"Young and Innocent","releaseYear":1990,"directorId":3,"length":96},
{"id":88,"filmTitle":"Seeking a Friend for the End of the World","releaseYear":2018,"directorId":6,"length":122},
{"id":89,"filmTitle":"Romeo and Juliet","releaseYear":1990,"directorId":8,"length":157},
{"id":90,"filmTitle":"Pirate, The","releaseYear":2015,"directorId":10,"length":116},
{"id":91,"filmTitle":"Winter Light (Nattvardsgästerna)","releaseYear":2022,"directorId":9,"length":112},
{"id":92,"filmTitle":"Algiers","releaseYear":2014,"directorId":6,"length":103},
{"id":93,"filmTitle":"Flight of Fury","releaseYear":2001,"directorId":2,"length":112},
{"id":94,"filmTitle":"Unreal Dream: The Michael Morton Story, An","releaseYear":2004,"directorId":7,"length":166},
{"id":95,"filmTitle":"Now, Voyager","releaseYear":1992,"directorId":7,"length":111},
{"id":96,"filmTitle":"Monterey Pop","releaseYear":2013,"directorId":7,"length":147},
{"id":97,"filmTitle":"Take a Giant Step","releaseYear":1991,"directorId":8,"length":175},
{"id":98,"filmTitle":"Cream Lemon (Kurîmu remon)","releaseYear":2015,"directorId":4,"length":157},
{"id":99,"filmTitle":"Mayor of the Sunset Strip","releaseYear":1990,"directorId":4,"length":185},
{"id":100,"filmTitle":"Suzanne's Diary for Nicholas","releaseYear":2005,"directorId":9,"length":139}];