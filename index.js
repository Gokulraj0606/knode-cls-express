const express = require("express")
const app = express()
const userRouter = require("./routes/users")
const indexRouter = require("./routes/index")
const dashboardRouter = require("./routes/dashboard")
const PORT = process.env.PORT || 8000



//body has string, to convert json we use
app.use(express.json())

app.use("/", indexRouter)
app.use("/users", userRouter)
app.use("/dashboard", dashboardRouter)



app.listen(PORT, () => console.log(`app running in port ${PORT}`))

