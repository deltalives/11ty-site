require('dotenv').config()
module.exports = function() {
  return {
    env: {
      app_url: process.env.APP_URL
    }
  };
};