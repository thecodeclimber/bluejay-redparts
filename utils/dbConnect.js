import mongoose from 'mongoose';
const connection = {};

const dbConnect = async () => {
  if (connection.isConnected) {
    return;
  }
  const db = await mongoose.connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  connection.isConnected = db.connections[0].readyState;
  connection.onConnected = new Date().toISOString();
};
module.exports = dbConnect;
