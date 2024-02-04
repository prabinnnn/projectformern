const { Schema, model } = require("mongoose");
const blogschema = new Schema({
  title: {
    title: { type: String, required: true },
    author: { type: Array, required: true },
  },
});
module.exports = new model("blog", blogschema);
