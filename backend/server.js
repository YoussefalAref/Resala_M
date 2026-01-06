import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import authRoutes from './routes/auth.js';
import eventRoutes from './routes/events.js';
import materialRoutes from './routes/materials.js';
import receiptRoutes from './routes/receipts.js';

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/events', eventRoutes);
app.use('/api/materials', materialRoutes);
app.use('/api/receipts', receiptRoutes);

app.listen(process.env.PORT || 5000, () => console.log('Server running...'));
