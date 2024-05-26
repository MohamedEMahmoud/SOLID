var Calculator = /** @class */ (function () {
    function Calculator() {
    }
    Calculator.prototype.summation = function (a, b) {
        return a + b;
    };
    Calculator.prototype.subtraction = function (a, b) {
        return a - b;
    };
    Calculator.prototype.multiplication = function (a, b) {
        return a * b;
    };
    Calculator.prototype.division = function (a, b) {
        return a / b;
    };
    Calculator.prototype.square = function (a) {
        return a * a;
    };
    Calculator.prototype.power = function (a, b) {
        return Math.pow(a, b);
    };
    return Calculator;
}());
var Printer = /** @class */ (function () {
    function Printer() {
    }
    Printer.print = function (num) {
        console.log("Number is ".concat(num));
    };
    return Printer;
}());
var calculator = new Calculator();
Printer.print(calculator.summation(5, 10));
Printer.print(calculator.subtraction(5, 10));
Printer.print(calculator.multiplication(5, 10));
Printer.print(calculator.division(5, 10));
Printer.print(calculator.square(5));
Printer.print(calculator.power(5, 10));
