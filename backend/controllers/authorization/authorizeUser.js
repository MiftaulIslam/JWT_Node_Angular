
const UserScheme = require('../../models/UserScheme');
const AuthorizeUser = async (req, res) => {
    if(!req.auth)return res.status(401).json({error:'Unauthorized', auth:false})
    try{
        const user = await UserScheme.findOne({email:req.email})
        if(!user)return res.status(404).json({error:'User not found', auth:false})
        res.status(200).json({auth:true, message:"User authorized", user:user})
    }catch(err){
        res.status(500).json({error:"Internal servsdadasdwadadwaasder error", auth: false})
    }
}
module.exports = {AuthorizeUser}