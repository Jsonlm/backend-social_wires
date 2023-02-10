require('dotenv').config()

const config = {
  server: {
    hots: "localhost",
    port: process.env.SERVERPORT || 9011,
  },
  secret: process.env.SECRET,
};

module.exports = config;