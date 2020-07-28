//Jaime Andrés Montemayor Molina
//A01176573
//Primera parte de exámen parcial : Express

const express = require('express'); 
const app = express(); 
app.use(express.json());

const PORT = process.env.PORT || 5000; 

app.listen(PORT,() => {
  console.log("Server on port: ", PORT);
})


//Ejercicio 1
app.get("/", (req,res) => {
	res.send("You are in the homepage");
})

//Ejercicio 2
app.post("/post", (req,res) => {
  console.log(req.body.username);
  console.log(req.body.password);
  res.send(`Welcome ${req.body.username}`);
})

//Ejercicio 3
app.delete("/delete", (req,res) => {
	res.send("delete: true");
})

//Ejercicio 4
app.put("/put/:ID", (req,res) =>{
	console.log(req.params)
	console.log(req.body);
	res.send(`Task ${req.params.ID} has been updated`);
})
