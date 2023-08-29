import { connectMongo } from "../../utils/connectMongo";
import { NextRequest, NextResponse } from "next/server";
import User from "../../../models/user";
import mongoose from "mongoose";

export  async function POST(req:NextRequest) {
  const { name, email } = await req.json();
  console.log(name, email);

  console.log("conecting to mongo...");
  await mongoose.connect(
    "mongodb+srv://isholihin87:NextJS2023@cluster0.81vqtzq.mongodb.net/"
  );
  console.log("conected to mongo.");

  console.log("Creating document...");
  const user = await User.create({name,email});
  console.log("Document created.");

  return NextResponse.json(
    {
      message: "User Registered",
    },
    {
      status: 201,
    }
  );
}
