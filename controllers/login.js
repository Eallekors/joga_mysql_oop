const bcrypt = require('bcrypt')
const loginDbModel = require('../models/user')
const LoginModel = new loginDbModel()


class loginController {
 
    async login(req, res){
        const check = await LoginModel.findOne(req.body.username);
        if(check){
            
            const pass = await bcrypt.compare(req.body.password,check.password)
            if(pass){
                req.session.user = {
                    username: check.username,
                    user_id: check.id
                };
                console.log("Logged in");
                // Respond with success message
                /*res.json({
                    message: 'Login successful',
                    user_session: req.session.user   
                });*/
                res.redirect('/')
            }else{
                return res.json({ message: "Wrong password" });
            }
        }else{
            return res.json({ message: "Username doesn't exists" });
       
        }
    }
}

module.exports = new loginController()