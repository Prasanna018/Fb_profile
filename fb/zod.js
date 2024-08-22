const zod = require("zod")

const UserProfile = zod.object({
    username: zod.string(),
    bio: zod.string(),
    age: zod.number(),
    picture: zod.string()

})


module.exports = UserProfile;