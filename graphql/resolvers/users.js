const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const {UserInputError} = require("apollo-server")

const User = require("../../models/User")
const {SECRET_KEY} = require("../../config")
const validation = require("../../utils/validation")

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

        async login(_, {username, password}) {
            const {errors, valid} = validation.validateUserLogin(username, password)
            if (!valid) {
                throw new UserInputError("Errors", {errors}) 
            }   
            const user = await User.findOne({username})

            if (!user) {
               errors.general = "User not found!"
               throw new UserInputError("User not found", {errors}) 
            }

            const match = await bcrypt.compare(password, user.password)
            if (!match) {
                errors.general = "Wrong credentials!"
                throw new UserInputError("Wrong credentials!", {errors})
            }
            const token = createToken(user)

            return {
                ...user._doc,
                id: user._id,
                token

            }
        },



       async register(_, {registerInput: {username, email, password, confirmPassword}}, context, info) {

           
            const existingEmail = await User.findOne({email});
            if (existingEmail) {
                throw new UserInputError("An account already exists with this email!"), {
                    errors: {
                        email: "An account already exists with this email!"
                    }
                }
            } else { 
            const existingUsername = await User.findOne( {username});
            if (existingUsername) {
                throw new UserInputError("Username is taken!"), {
                    errors: {
                        username: "This username is taken!"
                    }
                }
            }  
        }
            const {errors, valid} = validation.validateUserRegistration(username, email, password, confirmPassword);
            if (!valid) {
                throw new UserInputError("Errors", {errors}) 
            }   

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