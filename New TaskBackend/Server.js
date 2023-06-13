const express=require('express')
const connectDB = require('./Database')
const router = require('./Testrouter')
const dotenv=require('dotenv')
const cors=require('cors')

const app=express()
app.use(cors({
    origin:'http://localhost:3000',
    credentials:true,
}))

app.use(express.json())

connectDB()
dotenv.config()



app.use('/',router)
app.get('/',(req,res)=>{
    res.json('Api is running')
})



const PORT=5001

app.listen(PORT,()=>console.log(`SERVER IS RUNNING ON PORT ${PORT}`))