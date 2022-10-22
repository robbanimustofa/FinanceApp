import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    profilPict: {
      type: String,
      default: "",
    },
  },
  { timestamps: true }
);

const UserMessage = mongoose.model("User", UserSchema);
export default UserMessage;
