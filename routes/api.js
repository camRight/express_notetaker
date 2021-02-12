// api does crud

let db = require("../db/db.json")
const uniqid = require('uniqid');
const router = require("express").Router()

const fs = require("fs")


// Make sure that your routes and script match
router.post("/api/notes", function (req, res) {
    console.log(req.body)
    req.body.id = uniqid()
    db.push(req.body)
    fs.writeFile("./db/db.json", JSON.stringify(db), function () {
        res.json(db)
    })
})

router.get("/api/notes", function (req, res) {
    res.json(db)
})

// then reassigned. 
//  if no id then take it out, then return that. if it doesn't return a match....
router.delete("/api/notes/:id", function (req, res) {
    db = db.filter(note => note.id != req.params.id)
    fs.writeFile("./db/db.json", JSON.stringify(db), function () {
        res.json(db)
    })
})

module.exports = router