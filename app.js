const express = require('express')
const bodyParser = require('body-parser')
const cors= require('cors')
const app = express()
const PORT= process.env.PORT ||3003
require ('./utils/database')

// Configure CORS
const corsOptions = {
    'Access-Control-Allow-Origin': 'http://localhost:3003', // Replace with the origin(s) you want to allow
    methods: ['GET', 'PUT', 'POST', 'DELETE'], // Add the methods you want to allow
    allowedHeaders: ['Content-Type', 'Authorization'], // Add the headers you want to allow
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200
};
  
app.use(cors(corsOptions)); // Enable CORS with the specified options

app.use(bodyParser.json());
app.use(function(req, res, next) {
    res.setHeader("Access-Control-Allow-Origin", "*")
    res.setHeader("Access-Control-Allow-Credentials", "true");
    res.setHeader("Access-Control-Max-Age", "1800");
    res.setHeader("Access-Control-Allow-Headers", "content-type");
    res.setHeader( "Access-Control-Allow-Methods", "PUT, POST, GET, DELETE, PATCH, OPTIONS" ); 
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });   

const routes = require('./routes')
app.use(express.urlencoded({extended:true}))
app.use(express.json())

app.use(express.static("public"))

app.use((err, req, res, next)=> {
    console.error(err.stack)
    res.status(500).json({message:"Internal server error"})
})

app.use("/api", routes)
// Start the server

app.listen(PORT, () => {
    console.log(`server running on port http://localhost:${PORT}`)
})




