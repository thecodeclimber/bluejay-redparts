import mongoose from 'mongoose';

const connectDB = (handler) => async (req, res) => {
  if (mongoose.connections[0].readyState) {
    // Use current db connection
    return handler(req, res);
  }
  // Use new db connection
  await mongoose
    .connect(process.env.DATABASE_URL, {
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true,
      useNewUrlParser: true,
    })
    .then((req) => {
      console.log('mongo is connected');
    })
    .catch((err) => {
      console.log('err', err);
    });
  return handler(req, res);
};

export default connectDB;
