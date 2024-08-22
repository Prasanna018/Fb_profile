const mongoose = require("mongoose")

mongoose.connect("mongodb+srv://prasannagaikwad0018:2doX0XmcSRolWdrI@cluster0.zemrf.mongodb.net/Fb")


// create profile //
const Create = new mongoose.Schema({
    username: String,
    bio: String,
    age: Number,
    picture: String


})

const CreateProfile = mongoose.model('profile', Create)

module.exports = CreateProfile;



