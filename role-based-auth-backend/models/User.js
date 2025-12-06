import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    require: true,
  },
  mobile: {
    type: String,
    required: false,
  }, 
  address:{
   type: String,
   required: false,
  },
  role: {
    type: String,
    enum: ["admin", "candidate"],
    default: "candidate",
  },
});

const User = mongoose.model("User", userSchema);
export default User;
