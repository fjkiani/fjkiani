const express = require ("express")
const bodyParser = require ("body-parser")
const request = require ("request")
// import Contact "./signUpComponents/components/pages/contact.js"

const app = express ()

app.use(bodyParser.urlencoded({extended: true}))

app.get("/", function(req, res) {
  res.sendFile(__dirname + "/contact.js")
})
app.post("/", function (req, res){
  let firstName = req.body.fName;
  let email = req.body.email;

  console.log(firstName, email)

})

app.listen(3000, function () {
  console.log("server is running on port 3000")
})