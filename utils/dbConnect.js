import mongoose from 'mongoose';

const dbConnect = (handler) => async (req, res) => {
  if (mongoose.connections[0].readyState) {
    // Use current db connection
    return handler(req, res);
  }
  // Use new db connection
  try {
    await mongoose.connect(process.env.DATABASE_URL, {
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true,
      useNewUrlParser: true,
    });
  } catch (errr) {
    res.status(500).json({ message: 'connection failed!' });
    return;
  }

  return handler(req, res);
};

module.exports = dbConnect;
