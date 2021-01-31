const config = {
  env: process.env.NODE_ENV || "development",
  port: process.env.PORT || 8000,
  jwtSecret: process.env.JWT_SECRET || "your_secret_key",
  mongoUri:
    process.env.MONGODB_URI ||
    "mongodb+srv://pankaj:Bodygaurd@2013@seoblog.inb3x.mongodb.net/SEOBlog?retryWrites=true&w=majority",
};

module.exports = config;
