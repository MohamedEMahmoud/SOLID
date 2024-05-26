class Bird {

    constructor(public name: string){}
    eat(): void{
        console.log(`I am ${this.name} and I am eating`);
    }
}

class FlyableBird extends Bird {
    constructor(name: string){
        super(name);
    }
    fly(): void{
        console.log(`I am ${this.name} and I am flying`);
    }
}

const penguin = new Bird('Penguin');

penguin.eat();


const falcon = new FlyableBird('Falcon');

falcon.eat();

falcon.fly();