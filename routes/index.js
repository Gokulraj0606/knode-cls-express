const express = require("express")
const router = express.Router()


router.get("/", (req, res) => {
    res.send("<h1>Welcome to express</h1>")
})

router.post("/users", (req, res) => {
    console.log(req.body)
    res.send({
        message: "data saved successfully"
    })
})

module.exports = router