import express from 'express';
import mongoose, { ConnectOptions } from 'mongoose';
import bodyParser from 'body-parser';
import productRoutes from './routes/productRoutes';

const app = express();
const PORT = 3001;

app.use(bodyParser.json());
app.use('/api/products', productRoutes);

mongoose.connect('mongodb://localhost:27017/kabra', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
} as ConnectOptions);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${3000}`);
});
