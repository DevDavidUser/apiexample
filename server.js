const express = require('express');
const cors = require('cors');
const app = express();
require('dotenv').config();

app.use(cors());
app.use(express.json());

const mongoose= require("mongoose");
const uri = process.env.db_uri;
mongoose
    .connect(uri, {
        useNewUrlParser: true, 
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true})
    .then(() => {
        console.log(`Connected to DB ${uri}`)
	})
    .catch((err) => {
        console.log(`Error: ${err.message}`)
    });

const usersRoute = require("./routes/users");

app.use("/users",usersRoute);
app.get("/",(req,res) =>{
		res.send("Access to server side");
});

const port = process.env.PORT || 9000;
app.listen(port, () => { 
  console.log('Server listening on port 9000'); 
});