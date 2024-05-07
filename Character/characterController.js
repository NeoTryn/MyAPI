let express = require('express');
let router = express.Router();
let bodyParser = require('body-parser');

router.use(bodyParser.urlencoded({ extended : true }));
router.use(bodyParser.json());

let Character = require('./Character');

router.post('/', function (req, res) {
    Character.create({
        name : req.body.name,
        height : req.body.height,
        alive : req.body.alive,
        strength : req.body.strength,
        weakness : req.body.weakness
    }).then((character) => {
        res.status(200).send(character);
    }).catch((error) => {
        return res.status(500).send("that aint work: " + error);
    });
});


router.get('/', function(req, res) {
    Character.find({}).then((character) => {
        res.status(200).send(character);
    }).catch((error) => {
        return res.status(500).send("Problem getting Character: " + error);
    });
});

module.exports = router;