var db = require('./db');
var bcrypt = require('bcryptjs');
var async = require('async');

var salt = "blog-password-salt-edu-nccu-soslab";
//上次我們使用了一般的方法直接連接DB
var memberList = [{
  name : "William1",
  password : "password1",
  account : "account1"
},
{
  name : "William2",
  password : "password2",
  account : "account2"
},
{
  name : "William3",
  password : "password3",
  account : "account3"
}];



db("member")
  .insert({
      name: "Test-name1",
    account: "account1",
    password: "password1"
  })
  .then(function(result) {
    var insertedId = result[0];
    console.log(insertedId);
  })
  .catch(function(err) {
    console.log(err);
  });
