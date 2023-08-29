import mongoose from "mongoose";

export const connectMongo = async () =>
  mongoose.connect(
    "mongodb+srv://isholihin87:1jKVDN1HYx6VVECg@cluster0.81vqtzq.mongodb.net/google_auth_test"
  );
