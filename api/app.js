import express from "express"
import cors from "cors"
import dotenv from "dotenv"
import jikanRoute from "./routes/jikan.route.js"
import anilibriaRoute from './routes/anilibria.route.js'

dotenv.config()

const app = express()

app.use(cors({ origin: process.env.CLIENT_URL, credentials: true }));

console.log(process.env.CLIENT_URL) // undefined

app.use("/api", jikanRoute)
app.use("/api", anilibriaRoute)
// app.use("/api")

app.listen(4444, () => {
    console.log(`port 4444`)
})