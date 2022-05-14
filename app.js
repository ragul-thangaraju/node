const app = require('express')();
const server = require('http').createServer(app);
const io = require('socket.io')(server);


app.get("/", (req, res) => {
    res.json({
        message: "this backend automatically deployed using github actions CICD"
    })
})


io.on('connection', () => { /* … */ });

server.listen(8080, () => {
    console.log("running on port 8080")
});