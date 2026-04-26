import "dotenv/config";
import app from "./src/app.js";
import connectDB from "./src/config/db.config.js";
import dotenv from 'dotenv';
dotenv.config();

const PORT = process.env.PORT || 5000;

app.use(cors({
  origin: [
    'http://localhost:5173',
    'ai-powered-web-app-builder-six.vercel.app'
  ],
  credentials: true
}));

const startServer = async () => {
  try {
    await connectDB();
    app.listen(PORT, () => {
      console.log(`\n Server is running on port ${PORT}`);
      console.log(` Environment: ${process.env.NODE_ENV || "development"}`);
      console.log(` URL: http://localhost:${PORT}\n`);
    });
  } catch (error) {
    console.error("Failed to start server:", error.message);
    process.exit(1);
  }
};

startServer();
