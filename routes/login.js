/**
 * Created by moons_000 on 2016/5/14.
 */
var express = require('express');
var router = express.Router();
var Member = require('../models/Member');
var async = require('async');



/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('login', {
        member : null
    });
});


router.post('/', function(req, res) {
    var inputAccount = req.body.account;
    var inputPassword = req.body.password;
    Member.getByAccount(inputAccount, inputPassword, function(err, member) {
        if(err || inputPassword != member.password) {
            res.render('login',{
                member : null
            });
            console.log("Your account or password is wrong");

        } else {
            req.session.member = member;
            res.redirect('/');
        }
    });
});

router.post('/logout', function(req, res) {
    req.session.member = null;
    res.redirect('/');
});


module.exports = router;
