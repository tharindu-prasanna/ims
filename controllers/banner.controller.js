const {Banner} = require("../models/banner");

const getBanner = async (req, res, next) => {
    const banner = await Banner.findOne()

    if (!banner) res.status(404).json({status: false, message: 'Banner not found'})

    return res.status(200).json({status: true, message: banner})
}

module.exports = {getBanner};