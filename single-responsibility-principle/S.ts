
interface ICalculator {
    summation(a: number, b: number): number;
    subtraction(a: number, b: number): number;
    multiplication(a: number, b:number): number;
    division(a: number, b: number): number;
    square(a: number): number;
    power(a: number, b: number): number;
}


class Calculator implements ICalculator {
    summation(a: number, b: number): number {
        return a + b;
    }

    subtraction(a: number, b: number): number {
        return a - b;
    }
    
    multiplication(a: number, b: number): number {
        return a * b;
    }

    division(a: number, b: number): number {
        return a / b;
    }

    square(a: number): number {
        return a * a;
    }

    power(a: number, b: number): number {
        return Math.pow(a, b)
    }
}

class Printer{

    static print(num: number): void {
        console.log(`Number is ${num}`);
    }
}

const calculator = new Calculator();

Printer.print(calculator.summation(5, 10));

Printer.print(calculator.subtraction(10, 5));

Printer.print(calculator.multiplication(5, 10));

Printer.print(calculator.division(5, 10));

Printer.print(calculator.square(5));

Printer.print(calculator.power(5, 10));