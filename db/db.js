import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

mongoose.connect(process.env.URI)
  .then(() => {
    console.log('Conexión exitosa a MongoDB 💪');
  })
  .catch(err => {
    console.error('Error al conectar a MongoDB:', err);
  });
