const asynHandler = require("../../middleware/async");
const bcyrpt = require("bcrypt");
const { sendResponse, CatchHistory } = require("../../helper/utilfunc");
const GlobalModel = require("../../model/Global");
const systemDate = new Date().toISOString().slice(0, 19).replace("T", " ");

exports.AccountOpening = asynHandler(async (req, res, next) => {

    let payload = req.body


    //generate hashed password
    const salt = await bcyrpt.genSalt(10);
    payload.password = await bcyrpt.hash(payload.password, salt);

    //save user details to db
    let user_account = await GlobalModel.Create(account, 'users', '');

    if (user_account.rowCount == 1) {
        return sendResponse(res, 1, 200, "You have successfully signed up to the platform", [])
    } else {
        return sendResponse(res, 0, 200, "Sorry, error saving record: contact administrator", [])
    }


})