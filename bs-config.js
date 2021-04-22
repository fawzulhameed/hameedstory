module.exports = {
  port: process.env.PORT,
  files: ["./**/*.{html,htm,css,js,hbs}"],
  server: {
    baseDir: ["app.js"],
  },
};
