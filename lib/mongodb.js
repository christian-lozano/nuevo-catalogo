import mongoose from "mongoose";

export const connectMongoDB = async () => {
  try {
    // await mongoose.connect(process.env.MONGODB_URI);
    await mongoose.connect("mongodb+srv://admin:12345@test-crud.kqme1xd.mongodb.net/users?retryWrites=true&w=majority");

    console.log("Connected to MongoDB");
  } catch (error) {
    console.log("Error connecting to MongoDB: ", error.message);
  }
};
