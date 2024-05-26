interface IPrinter {
    print(): void;
}

interface IFax{
    fax(): void;
}


interface IScan{
    scan(): void;
}


class Printer implements IPrinter, IFax, IScan{

    print(): void{
        console.log("print");
    }

    fax(): void{
        console.log("fax");
    }


    scan(): void {
        console.log("scan");
    }
}


class EcoPrinter implements IPrinter{
    print(): void{
        console.log("print");
    }
}


const printer = new Printer();

printer.print();

printer.fax();

printer.scan();


const ecoPrinter = new EcoPrinter();

ecoPrinter.print();

