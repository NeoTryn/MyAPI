var express = require('express');

var router = express.Router();

var bodyParser = require('body-parser');

router.use(bodyParser.urlencoded({ extended : true}));
router.use(bodyParser.json());

var User = require('./User');

router.post('/', function (req, res) {
    User.create({
        name : req.body.name,
        email : req.body.email,
        password : req.body.password
    }).then((user) => {
        res.status(200).send(user);
    }).catch((error) => {
        return res.status(500).send("that aint work" + error);
    });
})

router.get('/', function(req, res) {
    User.find({}).then((users) => {
        res.status(200).send(users);
    }).catch((error) => {
        return res.status(500).send("Problem getting users: " + error);
    });
});

router.get('/id/:id', function (req, res) {
    User.findById(req.params.id).then((user) => {
        if (!user) return res.status(404).send("User not found");
        res.status(200).send(user);
    }).catch((error) => {
        return res.status(500).send("Problem finding user: " + error);
    });
});

router.delete('/name/:name', function (req, res) {
    User.findOneAndDelete({ name : req.params.name})
    .then((user) => {
        if(!user) return res.status(404).send("User not found");
        res.status(200).send(JSON.stringify(user.name));
    })
    .catch((error) => {
        return res.status(500).send("Problem deleting user: " + error);
    });
});

router.delete('/id/:id', function (req, res) {
    User.findByIdAndDelete(req.params.id).then((user) => {
        if (!user) return res.status(404).send("User not found");
        res.status(200).send(JSON.stringify(user.name));
    })
    .catch((error) => {
        return res.status(500).send("Problem deleting user: " + error);
    });
});

router.put('/id/:id', function(req, res) {
    User.findByIdAndUpdate(req.params.id, req.body, { new : true })
    .then((user) => {
        if (!user) return res.status(404).send("User not found");
        res.status(200).send(user);
    })
    .catch((error) => {
        return res.status(500).send("Problem updating user " + error);
    });
});

module.exports = router;