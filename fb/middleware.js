const CreateProfile = require("./db");



async function validateProfile(req, res, next) {
    const id = req.headers.id;
    const response = await CreateProfile.find({
        _id: id

    })

    if (response) {
        next();

    }
    else {
        res.json({
            msg: "you have no account plz first create account"
        })
    }

}


module.exports = validateProfile;