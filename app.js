const express = require("express");
const app  = express();

app.get("/", (req, res) => {
    res.json({
        message: "this is backend"
    })
})

app.listen(8080, () => {
    console.log("listening on port 8080")
})