const express = require("express");
const upload = require("express-fileupload");
const app = express();

const port = 3000;

app.use(upload())


app.get("/upload", (req, res) => {
	res.sendFile(__dirname+ "/index.html");
});



app.post("/upload", (req, res) => {
	if(req.files){
		console.log(req.files)
	}
})


app.listen(port, () =>{
	console.log("service working");
})
