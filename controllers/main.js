
const jwt = require('jsonwebtoken')
const CustomAPIError = require('../errors/custom-error.js')


//post-login
const login = async(req,res)=>{
    const {username, password} = req.body
    
    if(!username || !password){
    throw new CustomAPIError('Provide: <email> & <password>',400 )
    }
    //just for demo
    const id = new Date().getDate()
    
    const token = jwt.sign({id,username},process.env.JWT_SECRET,{expiresIn:'30d'})


    res.status(200).json({msg: 'user created',token})
}

//get-dashboard
const dashBoard = async(req,res)=>{
    const authHeader = req.headers.authorization;
    
    if(!authHeader || !authHeader.startsWith('Bearer ')){
        throw new CustomAPIError('No token provided. ',401 )
    }
    
    const token = authHeader.split(' ')[1]
    console.log(token);

    try {
        const decoded = jwt.verify(token,process.env.JWT_SECRET)
        const name = decoded.username
        const luckNumber = Math.floor(Math.random()*100)
        res.status(200).json({msg:`Hello, ${name}`, secret:`Your authorized data + your number ${luckNumber}`})

    } catch (error) {
        throw new CustomAPIError('Not authorized to acces this route. ',401 )
    }

   
}




//export
module.exports = {
    login,
    dashBoard
}





/**Basic Idea
 * 1/ check username, password in post(login) request
 * 2/if exist create new JWT
 * 3/ send back to front-end
 * 
 * 4/ set-up authentication so only the request with JWT can access to dashboard.
 */