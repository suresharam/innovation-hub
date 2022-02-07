const mongoose = require("mongoose");

const connect = async () => {
  const { DB_SERVER, DB_PORT, DATABASE } = process.env;
  try {
    const uri = `mongodb://${DB_SERVER}:${DB_PORT}/${DATABASE}`;
    const options = {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    };

    await mongoose.connect(uri, options);
  } catch (error) {
    throw error;
  }
};

module.exports = { connect };
