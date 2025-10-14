import express from "express"
import cors from "cors"
import dotenv from "dotenv"
import jikanRoute from "./routes/jikan.route.js"
import anilibriaRoute from './routes/anilibria.route.js'
import mangadexRoute from "./routes/mangadex.route.js"

dotenv.config()

const app = express()

const allowedOrigins = [
    'http://localhost:5173',
    'http://localhost:3000',
    'https://kiroku-pet-project.vercel.app',
    'https://kiroku-pet-project-*.vercel.app'
].filter(Boolean)

app.use(cors({
    origin: function (origin, callback) {
        if (!origin) return callback(null, true);

        if (allowedOrigins.some(allowedOrigin => {

            if (allowedOrigin.includes('*')) {
                const pattern = new RegExp(allowedOrigin.replace('*', '.*'));
                return pattern.test(origin);
            }
            return allowedOrigin === origin;
        })) {
            callback(null, true);
        } else {
            console.log('CORS blocked for origin:', origin);
            callback(null, false);
        }
    },
    credentials: true
}));

console.log(process.env.CLIENT_URL)

app.use("/api", jikanRoute)
app.use("/api", anilibriaRoute)
app.use("/api", mangadexRoute)
// app.use("/api")

const PORT = process.env.PORT || 4444;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})