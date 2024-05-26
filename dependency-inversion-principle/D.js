var ConsoleLogger = /** @class */ (function () {
    function ConsoleLogger() {
    }
    ConsoleLogger.prototype.log = function (message) {
        console.log(message);
    };
    return ConsoleLogger;
}());
var App = /** @class */ (function () {
    function App(logger) {
        this.logger = logger;
    }
    App.prototype.run = function () {
        this.logger.log('Application is running');
    };
    return App;
}());
var logger = new ConsoleLogger();
var app = new App(logger);
app.run();
