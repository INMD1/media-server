const express = require("express");
const app = express(); 

//Express 4.16.0버전 부터 body-parser의 일부 기능이 익스프레스에 내장 body-parser 연결 
app.use(express.json());
app.use(express.urlencoded({ extended: true}));

app.get("/", (req, res) => {
    res.send("I Working ON");
});


app.listen(3000, () => console.log("Starting media-server ver 0.0.1-echo"));