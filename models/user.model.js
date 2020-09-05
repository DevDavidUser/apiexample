const mongoose= require("mongoose");

var user = new mongoose.Schema({
		username: String,
		email:String
});
var User = mongoose.model("User",user);

module.exports = User;