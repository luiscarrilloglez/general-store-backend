const mongoose = require("mongoose");
const app = require("./index");

const PORT = process.env.PORT || 4000;

const connectDb = async () => {
  try {
    await mongoose.connect(process.env.DB_URI);
    console.log("Database connected");
  } catch (error) {
    console.error(error);
  }
};

app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
  connectDb();
});
