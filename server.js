// ingredients that make a server

const express = require("express");
const app = express();
// telphone line
// port process.env is for heroku , or if falsey (because undefined) then 8080 port localhost
const port = process.env.PORT || 8080

//converts the public folder into the root of the domain name
app.use(express.static("public"))

// {
//     title:"new title",
//     body:"new body"
// }-> data will be sent from the client via port 
// with encryption->dksfhdsklfhdsj
// The server receives that encrypted data with dksfhdsklfhdsj via port->
// parse the data using the two lines of code below, it will 
// convert to original format {

//     title: "new title",
//         body: "new body"
// } -> it wll store the data in req.body

// id needs to be at push. then when you delete you get id.

app.use(express.urlencoded({extended: true}))
app.use(express.json())

app.use(require("./routes/api"))
app.use(require("./routes/html"))

app.listen(port, function() {
    console.log("app is listening on PORT:" + port)
})