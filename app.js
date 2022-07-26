const express = require("express");

const path = require("path")

const app = express();

const publicFoldersPath = path.resolve(__dirname, "./public")

app.use(express.static(publicFoldersPath))

app.listen(3000, () => {
    console.log("Servidor corriendo en el puerto 3000")
});

app.get("/", (req, res) => {
    res.sendFile(path.resolve(__dirname, "./views/home.html"));
})