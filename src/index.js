const express=require('express');
const {ServerConfig}=require('./config');
const apiRoutes=require('./routes');
const app=express();

// console.log(process.env);
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/api',apiRoutes);
app.listen(ServerConfig.PORT,()=>{
    console.log(`Successfully started the server on Port: ${ServerConfig.PORT}`);
    // bad code alert
    const { City, Airport } = require('./models');
    
});
