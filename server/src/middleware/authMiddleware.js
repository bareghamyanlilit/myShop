const jwt = require('jsonwebtoken');
const authMiddleware = (req, res, next) => {
  
  const [, token] = req.header('Authorization')?.split('Bearer ');
  if (!token) return res.status(401).json({ error: 'Access denied.' });
  try {
    console.log(token);
    const verified = jwt.verify(token, process.env.JWT_SECRET);
    req.user = verified;
    console.log(verified);
    next();
  } catch {
    res.status(400).json({ error: 'Invalid token.' })
    // window.location.replace('/login')
  }
};

module.exports = authMiddleware;