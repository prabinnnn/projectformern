const blogmodel = require("./blog.model");
const create = (payload) => {
  return blogmodel.create(payload);
};
const get = () => {
  return blogmodel.find();
};
const getById = (id) => {
  return blogmodel.findOne(id);
};
const updateById = (payload, id) => {
  return blogmodel.updateOne(payload, id);
};
const remove = (id) => {
  return blogmodel.deleteOne(id);
};
module.exports = { create, get, getById, updateById, remove };
