var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Bird = /** @class */ (function () {
    function Bird(name) {
        this.name = name;
    }
    Bird.prototype.eat = function () {
        console.log("I am ".concat(this.name, " and I am eating"));
    };
    return Bird;
}());
var FlyableBird = /** @class */ (function (_super) {
    __extends(FlyableBird, _super);
    function FlyableBird(name) {
        return _super.call(this, name) || this;
    }
    FlyableBird.prototype.fly = function () {
        console.log("I am ".concat(this.name, " and I am flying"));
    };
    return FlyableBird;
}(Bird));
var penguin = new Bird('Penguin');
penguin.eat();
var falcon = new FlyableBird('Falcon');
falcon.eat();
falcon.fly();
