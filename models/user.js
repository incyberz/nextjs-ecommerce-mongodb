import mongoose, { Schema, model, models } from "mongoose";

const userSchema = new Schema(
  {
    name: {
      type: String,
      // required: "Please enter your name",
      trim: true,
    },
    email: {
      type: String,
      unique: true,
      // required: "Please enter your email",
      trim: true,
      lowercase: true,
      validate: [
        { validator: (value) => isEmail(value), msg: "Invalid email." },
      ],
    },
  },
  { timestamps: true }
);

const User = models.User ?? mongoose.model("User", userSchema);
export default User;
