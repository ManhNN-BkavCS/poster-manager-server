const DataTypes = require("sequelize").DataTypes;
const _comments = require("./comments");
const _images = require("./images");
const _posters = require("./posters");
const _users = require("./users");

function initModels(sequelize) {
  const comments = _comments(sequelize, DataTypes);
  const images = _images(sequelize, DataTypes);
  const posters = _posters(sequelize, DataTypes);
  const users = _users(sequelize, DataTypes);

  comments.belongsTo(posters, { as: "poster", foreignKey: "poster_id"});
  posters.hasMany(comments, { as: "comments", foreignKey: "poster_id"});
  images.belongsTo(posters, { as: "poster", foreignKey: "poster_id"});
  posters.hasMany(images, { as: "images", foreignKey: "poster_id"});
  comments.belongsTo(users, { as: "user", foreignKey: "user_id"});
  users.hasMany(comments, { as: "comments", foreignKey: "user_id"});
  posters.belongsTo(users, { as: "user", foreignKey: "user_id"});
  users.hasMany(posters, { as: "posters", foreignKey: "user_id"});

  return {
    comments,
    images,
    posters,
    users,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
