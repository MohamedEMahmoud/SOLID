abstract class Shape {
    abstract area(): number;
}


class Rectangle extends Shape {

    constructor(private width: number, private height: number){
        super()
    }

    override area(): number {
        return this.width * this.height
    }
}


class Circle extends Shape {

    constructor(private radius: number){
        super()
    }

    override area() : number {
        return  Math.PI * Math.pow(this.radius, 2);
    }
}


class Triangle extends Shape {
    constructor(private base: number, private height: number){
        super();
    }

    override area(): number {
        return 0.5 * this.base * this.height;
    }
}


const rectangle = new Rectangle(10, 5);

console.log(`rectangle Area: ${rectangle.area()}`);

const circle = new Circle(7);

console.log(`circle Area: ${circle.area()}`);


const triangle = new Triangle(10, 5);

console.log(`triangle Area: ${triangle.area()}`);