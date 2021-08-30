
const express = require("express")
const app = express()
const mongoose = require("mongoose")
const dotenv = require("dotenv")
const authRoute = require("./routes/auth")
const userRoute = require("./routes/users")
const movieRoute = require("./routes/movies")

dotenv.config()

//connect mongo to our app
main().catch(err => console.log(err));
async function main() {
    await mongoose.connect(process.env.MONGO_URL,{useNewUrlParser:true, useUnifiedTopology: true})
    .then(() => console.log('DB connection successful'))
    .catch((err) => console.log(err))
  }
  app.use(express.json())

  app.use('/api/auth', authRoute)
  app.use('/api/users', userRoute)
  app.use('/api/movies', movieRoute)


app.listen(8800, ()=> {
    console.log("Back-end server is running")
}) 