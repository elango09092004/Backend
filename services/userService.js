const userModel = require('../models/userModel');

class userService {
    static async userRegistration(username, email, password,phoneno,city) {
        try {
            
            if (!username || !email ||  !phoneno || !city) {
                
               return false;
            }

        
            const emailRegex = /@./;
            if (!emailRegex.test(email)) {
                
                return false;
            }

            if (password.length < 6) {
                return false;
            }

           
            const existingUser = await userModel.findOne({ $or: [{ username }, { email }] });
            if (existingUser) {
               
                return false;
            }

        
            const createUser = new userModel({ username, email, password,phoneno,city });

  
            await createUser.save();
            
            return true;
           
        } catch (err) {
            console.error("Error during user registration:", err.message);
           
        }
    }

    static async userLogin(Username, Pass) {
        try {
            let user;
          
            user = await userModel.find({ username: Username, password: Pass });
            if (user.length === 0) {
                user = await userModel.find({ email: Username, password: Pass });
            }
           
            return user.length > 0 ? user[0] : null;
            
        } catch (err) {
            throw err;
        }
    }
}

module.exports = userService;

