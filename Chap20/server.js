var connect = require('connect'),
    serveStatic = require('serve-static');

var app = connect();

app.use(serveStatic("../Chap20"));
app.listen(5000);

console.log("Server start!");