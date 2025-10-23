import express from "express"
import cors from "cors"
import dotenv from "dotenv"
import jikanRoute from "./routes/jikan.route.js"
import anilibriaRoute from './routes/anilibria.route.js'
import mangadexRoute from "./routes/mangadex.route.js"
import myanimelist from "./routes/myAnimeList.route.js"

dotenv.config()

const app = express()

// Универсальная настройка CORS
const isProduction = process.env.NODE_ENV === 'production';
const clientUrl = process.env.CLIENT_URL;

app.use(cors({
    origin: isProduction
        ? ['https://kiroku-pet-project.vercel.app', clientUrl]
        : ['http://localhost:5173', clientUrl],
    credentials: true
}));

app.use(express.json());

// API routes
app.use("/api/jikan", jikanRoute)
app.use("/api/anilibria", anilibriaRoute)
app.use("/api/mangadex", mangadexRoute)
app.use("/api/myAnimeList", myanimelist)

// Health check для Vercel
app.get('/api/health', (req, res) => {
    res.json({
        status: 'OK',
        environment: process.env.NODE_ENV || 'development',
        timestamp: new Date().toISOString(),
        platform: isProduction ? 'Vercel' : 'Local',
        message: 'API Server is running!'
    });
});

// Test endpoint
app.get('/api/test', (req, res) => {
    res.json({
        message: 'Test endpoint works!',
        clientUrl: clientUrl,
        nodeEnv: process.env.NODE_ENV
    });
});

// Root API endpoint
app.get('/api', (req, res) => {
    res.json({
        message: 'Kiroku API Server',
        version: '1.0.0',
        environment: process.env.NODE_ENV || 'development',
        endpoints: [
            '/api/health',
            '/api/jikan',
            '/api/anilibria',
            '/api/mangadex',
            '/api/myAnimeList'
        ]
    });
});

// Для локальной разработки - запускаем сервер
if (process.env.NODE_ENV !== 'production') {
    const PORT = process.env.PORT || 4444;
    app.listen(PORT, () => {
        console.log(`🚀 API Server running on port ${PORT}`)
        console.log(`📍 Local: http://localhost:${PORT}`)
        console.log(`🔗 Health check: http://localhost:${PORT}/api/health`)
    });
}

// Экспорт для Vercel (без запуска сервера)
export default app;