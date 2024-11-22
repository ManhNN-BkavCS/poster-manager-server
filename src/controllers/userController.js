const UserService = require("../services/UserService")

exports.getAllUsers = async (req, res) => {
    const users = await UserService.getAll();
    res.json(users);
}
