const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const blogRoute = require('./routes/blog.routes')


const app = express();

// Connect to MongoDB
mongoose
.connect("mongodb+srv://adelga289:delgadojunior0306@cluster0.qrrrtmh.mongodb.net/foodBlog")
    .then(x => console.log(`MongoDB Connected Database name: "${x.connections[0].name}"`))
    .catch(err =>{
        console.error('Error connecting', err.reason)
    })

const PORT = 5000;


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
  extended : true
}))
app.use(cors())
app.use("/blogs", blogRoute)
app.use((req, res, next) => {
  next(createError(404))
})
app.use((err, req, res, next) => {
  if(!err.statusCode) err.statusCode = 500;
  res.status(err.statusCode).send(err.message)
})







app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
