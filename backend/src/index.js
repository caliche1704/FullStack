import app from './app.js';

import { connectDB } from './database.js';

connectDB();
app.listen(5001, () => console.log(`servidor on Port 5001`));
