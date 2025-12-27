import jwt from "jsonwebtoken";

const protect = (req, res, next) => {
  if (req.headers.authorization?.startsWith("Bearer")) {
    try {
      const token = req.headers.authorization.split(" ")[1];
      req.user = jwt.verify(token, process.env.JWT_SECRET);
      next();
    } catch {
      res.status(401).json({ message: "Invalid token" });
    }
  } else {
    res.status(401).json({ message: "No token provided" });
  }
};

export default protect;
