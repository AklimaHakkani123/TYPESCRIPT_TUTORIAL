var user = /** @class */ (function () {
    function user(username, age) {
        this.username = username;
        this.age = age;
    }
    user.prototype.display = function () {
        console.log("username:".concat(this.username, ",age:").concat(this.age));
    };
    return user;
}());
var user1 = new user('hima', 34);
user1.display();
