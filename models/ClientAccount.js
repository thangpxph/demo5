const mongoose = require('mongoose');

const ClientAccountSchema = mongoose.Schema({
    username: {type: String},
    password: {type: String},
    email: {type: String},
    phone: {type: Number},
    numberOfMeals: {type: Number},
    evaluate: {type: String}
});
const ClientAccount = mongoose.model('clientAccount', ClientAccountSchema);
module.exports = ClientAccount;