//backend/server.jsf

 // Your server code here
 require("dotenv").config()
 const express = require("express");
 const cors = require('cors');
 
 
 const app = express();
 const port = process.env.PORT || 4000;
 
 
 
 //middleware to parse json bodies
 app.use(express.json());
 app.use(express.urlencoded({extended: true,}))
 app.use(cors())



 /////////////////////////////////////////////////////
 //Routes
 ////////////////////////////////////////////////////
 
 // Register and Login routes
 
 app.use("/auth", require("./routes/userRoutes"));
 app.use("/auth", require("./routes/lenderRoutes"));
 app.use("/gauth", require("./routes/googleLogin"))
 
 
 // dashboard route
 app.use("/dashboard", require("./routes/dashboard"));

 //upload files route

 app.use("/upload", require("./routes/fileUploadRoutes"))
 
 //start the server
 app.listen(port, () => {
   console.log(`Backend running on port ${port}`)
 })

