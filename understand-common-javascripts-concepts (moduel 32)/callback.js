function greetings(greetingHandler, name){
    greetingHandler(name);
}

function greetingHandler(name){
    console.log("Good Mornig", name);
}

function greetEvening(name){
    console.log("Good Evening", name);
}

function greetNight(name){
    console.log("Good Night", name);
}

greetings(greetingHandler, "Tom Hanks");
greetings(greetEvening, "Bob Merly");
greetings(greetNight, "Syamon Shuvro");