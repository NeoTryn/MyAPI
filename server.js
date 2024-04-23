let app = require('./app');
let port = process.env.PORT || 3000;

app.jsvar server = app.listen(port, function() {
    console.log('Express listening on port ' + port);
});

