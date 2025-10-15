import express from "express"
import cors from "cors"
import dotenv from "dotenv"
import jikanRoute from "./routes/jikan.route.js"
import anilibriaRoute from './routes/anilibria.route.js'
import mangadexRoute from "./routes/mangadex.route.js"

dotenv.config()

const app = express()


// app.use(cors({
//     origin: "*",
//     credentials: true
// }));


app.use(cors({
    origin: [
        "https://kiroku-pet-project.vercel.app",
        "https://kiroku-pet-project-*.vercel.app",
        "http://localhost:5173",
        "http://localhost:3000"
    ],
    credentials: true
}));

app.use(express.json());

app.use("/api", jikanRoute)
app.use("/api", anilibriaRoute)
app.use("/api", mangadexRoute)

app.get("/health", (req, res) => {
    res.status(200).json({ status: "OK", message: "API is running" });
});

const PORT = process.env.PORT || 4444;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
    console.log('CORS enabled for all origins')
})