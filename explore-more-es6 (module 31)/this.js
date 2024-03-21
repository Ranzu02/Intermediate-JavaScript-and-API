class Person{
    constructor(name, age){
        this.Name = name;
        this.Age = age;
    }
    sleep(){
        console.log(`Sleeping now ${this.Name}`);
    }

    activity(){
        this.sleep();
    }
}

const kodom = new Person('kodom ali', 23);
console.log(kodom);
kodom.sleep();

const badam = new Person('badam', 21);
console.log(badam);
badam.activity();