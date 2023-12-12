const {Investigation} = require("../models/investigation");

const getStatus = async (req, res) => {
    const results = await Investigation.aggregate([
        {
            $group: {
                _id: '$investigationStatus',
                count: {$sum: 1}
            }
        }
    ]).exec();

    // Extract counts into separate variables
    const pending = results.find(item => item._id === 'Pending')?.count || 0;
    const processing = results.find(item => item._id === 'Processing')?.count || 0;
    const feedbackPending = results.find(item => item._id === 'Feedback pending')?.count || 0;
    const reviewing = results.find(item => item._id === 'Reviewing')?.count || 0;
    const completed = results.find(item => item._id === 'Completed')?.count || 0;

    const status = {pending, processing, feedbackPending, reviewing, completed}

    return res.status(200).json({status: true, message: status})
}

module.exports = {getStatus};