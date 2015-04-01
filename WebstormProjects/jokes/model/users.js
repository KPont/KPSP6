/**
 * Created by Kasper on 01-04-2015.
 */
var users = [
    {userName: "Peter", password : "secret"},
    {userName: "Lars", password : "test"}
];

module.exports = function(userName,password){
    var found = users.filter(function(user){
        return user.userName === userName && user.password === password;
    })
    return found.length === 1 ? true : false;
}