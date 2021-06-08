const express = require('express');
const router = express.Router();
const shortid = require('shortid');
const url_data = {};
router.get("/", (req, res, next) => {
    res.send("hello");
    next();
})
router.use(express.json());

router.post("/", (req, res, next) => {
    const data = req.body;
    const short = shortid.generate();
    const shortUrl = "https://localhost:3000/urls/" + short;
    url_data[short] = data;
    //console.log(url_data);
    res.send("shortUrl : " + shortUrl);   
})

router.get("/:id", (req, res) => {
    const data = url_data[req.params.id];
    console.log(data);
    res.send(data);
})

module.exports = router;