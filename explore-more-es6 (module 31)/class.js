const products = [
    {id:1, name:"lenovo", price:65000},
    {id:1, name:"hp", price:55000},
    {id:1, name:"mac", price:150000},
    {id:1, name:"del", price:45000},
];


class Product{
    country = 'Bangladesh';
    constructor(name){
        this.name =name;
    }
    speak(talk){
        console.log(`Talking about ${talk}`);
    }
}


const bird = new Product('lenovo');
console.log(bird);
bird.speak("Oba kita kou");



class Teacher{
    country = "Bangladesh";
    constructor(name, subj){
        this.name = name;
        this.subj = subj;
    }

    does(teach){
        console.log(`This writer writes book about ${teach}`);
    }
};

const tapan = new Teacher('tapan', 'physics');
console.log(tapan);
tapan.does("physics");