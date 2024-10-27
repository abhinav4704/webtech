const express = require("express")

const authroutes = require("./routes/protected")
const cors = require("cors");
const sequelize = require("./db")

const User = require("./model/user")
const Unprotected = require("./routes/unprotected")




const app = express()
app.use(cors())
app.use(express.json());
app.use(express.urlencoded({extended:false}))

app.use("/",authroutes)

app.use("/",Unprotected)

sequelize
.sync()
.then(result=>{
    app.listen(3000); 
    
    
}).catch(err=>{
    console.log(err)
})



