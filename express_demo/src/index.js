import 'dotenv/config'; // Loads environment variables
import express from 'express'; // Imports Express
import cors from 'cors'; // Imports CORS
import todoRoutes from './routes/todo.js'; // Imports Todo routes

const app = express(); // Creates the Express app
const port = process.env.PORT || 3000; // Sets the server port

// Enable CORS for the Next.js frontend
app.use(
  cors({
    origin: 'http://localhost:3000',
  })
);

// Middleware to parse JSON request bodies
app.use(express.json());

// Logs every incoming request
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});

// Home route
app.get('/', (req, res) => {
  res.send('Wowexpress!');
});

// Todo routes
app.use('/todo', todoRoutes);

// Starts the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
