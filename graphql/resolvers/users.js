const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")

const User = require("../../models/User")
const {SECRET_KEY} = require("../../config")

function createToken(user) {
    return jwt.sign(
        {
            id: user.id,
            email: user.email,
            username: user.username
        }, SECRET_KEY, {expiresIn: "1h"}
    );
}

module.exports = {
    Mutation: {
       async register(_, {registerInput: {username, email, password, confirmPassword}}, context, info) {
            password = await bcrypt.hash(password, 12);

            const newUser = new User({
                username,
                password,
                email,
                createdAt: new Date().toISOString()
            })

            const result = await newUser.save();
            
            const token = createToken(result);

            return {
                ...result._doc,
                id: result._id,
                token

            }
        
        }
    }
}