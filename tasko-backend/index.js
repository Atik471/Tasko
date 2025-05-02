import app from './src/app.js';
import connectDB from './src/config/db.config.js';

const PORT = process.env.PORT || 3000;

connectDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error('❌ Server startup error:', err.message);
    process.exit(1);
  });