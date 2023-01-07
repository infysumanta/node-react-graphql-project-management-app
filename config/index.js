module.exports = {
  PORT: process.env.PORT || 5000,
  MONGO_URI:
    process.env.MONGO_URI ||
    "mongodb://localhost/mern-graphql-project-management-app",
  NODE_ENV: process.env.NODE_ENV || "development",
};
