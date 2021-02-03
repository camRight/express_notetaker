const db = require("../db/db.json")

const router = require("express").Router()

const fs = require("fs")


// Make sure that your routes and script match
router.post("/api/notes", function (req, res) {
    console.log(req.body)
    db.push(req.body)
    fs.writeFile("./db/db.json", JSON.stringify(db), function () {
        res.json(db)
    })
})

router.get("/api/notes", function (req, res) {
    res.json(db)
})

module.exports = router