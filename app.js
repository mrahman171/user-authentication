const express =require('express');
const mongoose= require('mongoose');
const bodyParser= require('body-parser');
const app = express();
const userRouter = require('./route/users.ruter');
const UserInf= require('./route/user');

app.use("/", userRouter);
app.use("/app/user",UserInf);
const url_l='mongodb+srv://mrahman171:JWPPA39fupqJgJOJ@cluster0.wjdbx8q.mongodb.net/test';
//const url_l='mongodb+srv://abdur171:test123@cluster1.4iz19.mongodb.net/school?retryWrites=true&w=majority';
const config= { useNewUrlParser: true, useUnifiedTopology: true};



mongoose.connect(url_l,config);
const port = 3000;

app.get('/',(req,res)=>{
    res.sendFile('./views/index.html', {root: __dirname });
});

app.use(function (req, res, next) {
    res.status(404).send('<h1>404 page not found!!!!!!!!!!!!!!!!!!!!!</h1>')
  })

app.listen(port,()=>{
    console.log(`server is running at http://localhost:${port}`);
});

 

 

