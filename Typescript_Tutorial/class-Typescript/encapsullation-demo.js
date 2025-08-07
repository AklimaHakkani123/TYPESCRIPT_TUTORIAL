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
var user = /** @class */ (function () {
    function user(username, age) {
        this.username = username;
        this.age = age;
    }
    user.prototype.display = function () {
        console.log('hi');
    };
    return user;
}());
var student = /** @class */ (function (_super) {
    __extends(student, _super);
    function student(username, age, city) {
        var _this = _super.call(this, username, age) || this;
        _this.city = city;
        return _this;
    }
    student.prototype.display = function () {
        console.log("username:".concat(this.username, ",age:").concat(this.age, ",city:").concat(this.city));
    };
    return student;
}(user));
var student1 = new student('hima', 34, 'bangladesh');
student1.display();
