const express = require("express");

function keepAlive() {
    const app = express();
    const port = 3000;

    app.get("/", (req, res) => {
        res.send("Bot is alive!");
    });

    app.listen(port, () => {
        console.log(`KeepAlive running on port ${port}`);
    });
}

module.exports = keepAlive;