// ag-fullstack — Backend Server Entry Point

import express from 'express';

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Health check
app.get('/health', (_req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

// TODO: Register module routes
// import { authRoutes } from './modules/auth';
// import { productRoutes } from './modules/products';
// import { orderRoutes } from './modules/orders';
// import { userRoutes } from './modules/users';

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

export default app;
