import "dotenv/config"
import  express from "express"
import { connectDB } from "./src/db/databaseconnect.js"



const app = express()
app.use(express.json())
app.use('/',url)