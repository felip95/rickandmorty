const user = require('../utils/Users')

const login = (req, res)=> {
   const {email, password} = req.query;
   let access = false

   user.forEach((user)=>{
    if(user.email === email && user.password === password) access = true
   })
   return res.status(200).json({access})    

}

module.exports = {login}