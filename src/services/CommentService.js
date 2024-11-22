const comments = require("../models/comments");
const BaseService = require("../utils/BaseService");

class CommentService extends BaseService {
    constructor() {
        super(comments);
    }

}

module.exports = new CommentService();