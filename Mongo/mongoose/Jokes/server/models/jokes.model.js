const mongoose = require("mongoose");

const JokeSchema = new mongoose.Schema({
	setup:{
		type: String,
		minlength:[10,"setup must br at least 10 char"]
	} ,
	punchline:{
		type: String,
		minlength:[3,"punchline must br at least 3 char"]
	} 
});

const Joke = mongoose.model("Joke", JokeSchema);

module.exports = Joke;