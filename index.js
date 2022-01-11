const express = require("express")
const morgan=require("morgan")
const { contactRouter } = require("./Routes/contact.routes")
const app = express()
require('dotenv').config()
const PORT = process.env.PORT || 4000
// MiddleWare
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
// Morgan
app.use(morgan("dev"))
// Contact Routes
app.use("/api/contact", contactRouter)
// Home Routes
app.get("/", (req, res) => {
    res.send("<h1>Welcome Home</h1>")
})
// 404 Page
app.use((req, res) => {
    res.send("Page Not found 404")
})
app.listen(PORT, () => {
    console.log(`Server is Running at http://localhost:${PORT}`)
})