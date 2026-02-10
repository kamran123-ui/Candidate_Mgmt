// Is function ka use hum login ke time karenge —
// jab user sahi password dalega, to uske liye JWT token banega.
import jwt from "jsonwebtoken";

const generateToken = (id, role) => {
  return jwt.sign({ id, role }, process.env.JWT_SECRET, {
    expiresIn: "1h",
  });
};

export default generateToken;
