import express from 'express';
import dotenv from 'dotenv';
import apiRoutes from './routes/api';

dotenv.config(); // Load environment variables from .env

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware to parse JSON
app.use(express.json());
app.use('/api', apiRoutes);

// Sample route
app.get('/', (req, res) => {
  res.json({ message: 'Backend with TypeScript is running!' });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
