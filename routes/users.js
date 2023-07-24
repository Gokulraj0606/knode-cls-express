const express = require("express")
const router = express.Router()


const users = [
    {
        name: "gokul",
        email: "gokul@gmail.com",
        password: "Admin@123",
        role: "student"
    },
    {
        name: "bala",
        email: "bala@gmail.com",
        password: "Admin@123",
        role: "student"
    },
    {
        name: "mani",
        email: "mani@gmail.com",
        password: "Admin@123",
        role: "student"
    },
    {
        name: "naveen",
        email: "naveen@gmail.com",
        password: "Admin@123",
        role: "student"
    }

]

//GET method

router.get("/", (req, res) => {
    res.status(200).send({
        message: "data fetched successfully",
        data: users
    })
})



router.get("/:id", (req, res) => {
    if (Number(req.params.id) < users.length) {
        res.status(200).send({
            message: "Users data fetched successfuly",
            data: users[req.params.id]
        })
    }
    else {
        res.status(400).send({
            message: "Users not found"
        })
    }
})

//POST method
router.post("/", (req, res) => {
    users.push(req.body)
    res.status(200).send({
        message: "Users saved successfully"
    })
})

//PUT method
router.put("/:id", (req, res) => {
    if (Number(req.params.id) < users.length) {
        users.splice(req.params.id, 1, req.body)
        res.status(200).send({
            message: "Users data fetched successfuly",
            data: users[req.params.id]
        })
    }
    else {
        res.status(400).send({
            message: "Users not found"
        })
    }

})

//DELETE method
router.delete("/:id", (req, res) => {
    if (Number(req.params.id) < users.length) {
        users.splice(req.params.id, 1)
        res.status(200).send({
            message: "Users data deleted successfuly",

        })
    }
    else {
        res.status(400).send({
            message: "Users not found"
        })
    }

})


module.exports = router