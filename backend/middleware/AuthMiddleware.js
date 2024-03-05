const jwt = require('jwtwebtoken');



exports.isLoggedin = (req,res,next)=>{

    if(!req.cookies.token){
        return res.send(401).json( {
            success:true,
            msg:"Token Not Found"
        });
    } 
}