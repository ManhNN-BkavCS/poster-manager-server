const images = require("../models/images");
const BaseService = require("../utils/BaseService");

class ImageService extends BaseService {
    constructor() {
        super(images);
    }
    
}

module.exports = new ImageService();