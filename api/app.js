import express from "express"
import cors from "cors"
import dotenv from "dotenv"
import jikanRoute from "./routes/jikan.route.js"
import anilibriaRoute from './routes/anilibria.route.js'
import mangadexRoute from "./routes/mangadex.route.js"
import myanimelist from "./routes/myAnimeList.route.js"

dotenv.config()

const app = express()


const isProduction = process.env.NODE_ENV === 'production';
const clientUrl = process.env.CLIENT_URL?.replace(/['";]/g, '').trim();

const corsOptions = {
    origin: isProduction
        ? ['https://kiroku-pet-project.vercel.app', clientUrl]
        : ['http://localhost:5173', clientUrl],
    credentials: true
};

app.use(cors(corsOptions));
app.use(express.json());


app.use("/api/jikan", jikanRoute)
app.use("/api/anilibria", anilibriaRoute)
app.use("/api/mangadex", mangadexRoute)
app.use("/api/myAnimeList", myanimelist)


app.get('/api/health', (req, res) => {
    res.json({
        status: 'OK',
        environment: process.env.NODE_ENV || 'development',
        clientUrl: clientUrl,
        timestamp: new Date().toISOString()
    });
});


app.get('/api', (req, res) => {
    res.json({
        message: 'Kiroku API Server',
        version: '1.0.0',
        environment: process.env.NODE_ENV || 'development'
    });
});

const PORT = process.env.PORT || 4444;


if (process.env.NODE_ENV !== 'production') {
    app.listen(PORT, () => {
        console.log(` API Server running on port ${PORT}`)
        console.log(` Local: http://localhost:${PORT}`)
        console.log(` CORS enabled for:`, corsOptions.origin)
    });
}

export default app; 