const express = require("express");
const mongoose = require("mongoose");

const app = express();
const port = process.env.PORT || 5000; //http://localhost:5000

const uri = "mongodb+srv://pagpapahinuhod:autopass@cluster0.oib0cwk.mongodb.net/?retryWrites=true&w=majority"
mongoose.connect(process.env.MONGODB_URI || uri, { useNewUrlParser: true, useUnifiedTopology: true }).catch(error => console.log(error));

const connection = mongoose.connection;
connection.once('open', () => {
  console.log("Ze MongoDB databeyz connezion haz veen establizhed zuccesfully...");

  app.use(bodyParser.urlencoded({limit: '100mb', extended: true}))
  // app.use(bodyParser.json({limit: '1000mb'}))

  app.use(express.static(path.join(__dirname, 'client/build')));

  app.get('*', (req,res) => {
    res.sendFile(path.join(__dirname, '/client/buiild/index.html'));
  });

  app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
  });
})