interface ILogger {
    log(message: string): void;
}


class ConsoleLogger implements ILogger {
    log(message: string): void {
        console.log(message);
    }
}


class App {
    private logger: ILogger;

    constructor(logger: ILogger){
        this.logger = logger;
    }

    run(): void{
        this.logger.log('Application is running')
    }
}


const logger = new ConsoleLogger();
const app = new App(logger);
app.run();