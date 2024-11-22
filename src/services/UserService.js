const users = require("../models/users");
const BaseService = require("../utils/BaseService");

class UserService extends BaseService {
    constructor() {
        super(users);
    }

    async getAll() {
        return users.findAll();
    }

}

module.exports = new UserService(); 