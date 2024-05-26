var Printer = /** @class */ (function () {
    function Printer() {
    }
    Printer.prototype.print = function () {
        console.log("print");
    };
    Printer.prototype.fax = function () {
        console.log("fax");
    };
    Printer.prototype.scan = function () {
        console.log("scan");
    };
    return Printer;
}());
var EcoPrinter = /** @class */ (function () {
    function EcoPrinter() {
    }
    EcoPrinter.prototype.print = function () {
        console.log("print");
    };
    return EcoPrinter;
}());
var printer = new Printer();
printer.print();
printer.fax();
printer.scan();
var ecoPrinter = new EcoPrinter();
ecoPrinter.print();
