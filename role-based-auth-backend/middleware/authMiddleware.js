import jwt from "jsonwebtoken";

export const protect = (roles = []) => {
  return (req, res, next) => {
    const token = req.headers.authorization?.split(" ")[1];

    if (!token) {
      return res.status(401).json({ message: "No token provided" });
    }

    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      // Agar roles specified hain aur user ka role match nahi karta
      if (roles.length && !roles.includes(decoded.role)) {
        return res.status(403).json({ message: "Access Denied" });
      }

      req.user = decoded;
      next();
    } catch (error) {
      res.status(401).json({ message: "Invalid or Expired Token" });
    }
  };
};
