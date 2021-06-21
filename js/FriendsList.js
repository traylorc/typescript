"use strict";
var Friends = /** @class */ (function () {
    function Friends(fullname, age, email, bff) {
        this.fullname = fullname;
        this.age = age;
        this.email = email;
        this.bff = bff;
    }
    Friends.prototype.print = function () {
        console.log(this.fullname, this.age, this.email, this.bff);
    };
    return Friends;
}());
var Mattea = new Friends("Mattea", 30, "mmswain@tql.com", true);
var Jeff = new Friends("Jeff", 30, "jnorth@tql.com", true);
var Z = new Friends("Z", 30, "zpoindexter@tql.com", true);
var friends = [
    Mattea, Jeff, Z
];
for (var _i = 0, friends_1 = friends; _i < friends_1.length; _i++) {
    var f = friends_1[_i];
    f.print();
}
;
