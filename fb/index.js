const express = require("express")
const app = express()
const bodyParser = require("body-parser")
const UserProfile = require("./zod")
const CreateProfile = require("./db")
const validateProfile = require("./middleware")

app.use(express.json());
app.use(bodyParser.json());



app.post('/create-profile', async function (req, res) {
    const payload = req.body;
    const parsePayload = UserProfile.safeParse(payload);
    if (!parsePayload.success) {
        res.status(411).json({
            msg: "inputs are wrong"
        })
    }
    else {
        const newUser = await CreateProfile.create({
            username: payload.username,
            bio: payload.bio,
            age: payload.age,
            picture: payload.picture
        })
        res.json({
            msg: "Profile created!",
            id: newUser._id

        })
    }

})

app.get('/view-profile', validateProfile, async function (req, res) {
    /// this will handle the middleware 
    const id = req.body.id;
    const response = await CreateProfile.findOne({
        _id: id

    })

    res.json({
        response
    })

})


app.put('/update-profile', validateProfile, async function (req, res) {
    const id = req.headers.id;
    const data = req.body
    const response = await CreateProfile.updateOne({
        _id: id

    }, {
        data

    })
    if (response) {
        res.json({
            msg: "profile updated!"
        })
    } else {
        re.json({
            msg: "something went wrong"
        })
    }






})


app.delete('/delete-profile', validateProfile, async function (req, res) {
    const id = req.body.id;
    const response = await CreateProfile.deleteOne({
        _id: id

    })
    if (response) {
        res.json({
            msg: "user profile deleted!"
        })
    }




})





app.listen(3000);