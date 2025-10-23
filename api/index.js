import app from './app.js';


export default async function handler(req, res) {
    console.log(`📨 [Vercel] ${req.method} ${req.url}`);

    return app(req, res);
}