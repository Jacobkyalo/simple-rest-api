const express = require("express");
const users = require("./users");

const app = express();

app.get("/users", (req, res) => {
    res.send(users);
});

app.listen(5000, () => {
    console.log(`Server is running...`);
});
