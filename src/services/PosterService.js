const posters = require("../models/posters");
const BaseService = require("../utils/BaseService");

class PosterService extends BaseService {
    constructor() {
        super(posters);
    }

}

module.exports = new PosterService();