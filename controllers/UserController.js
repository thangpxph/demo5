const mongoose = require('../models/User');

const User = require('../models/User');

module.exports = {
    getUser: async (req, res) =>{
        try{
            const result = await User.find({},{__v: 0 });
            res.send(result);
        }catch (error){
            console.log(error.message);
        }
    }
}