const cors = require("cors");
const mongoose = require("mongoose");
const express = require("express");
const bodyParser = require("body-parser");
const ContactMessage = require("./models/user");

const app = express();

app.use(bodyParser.json());
app.use(cors());

//mongoose connection

mongoose
  .connect(
    "mongodb+srv://1Gizem:Gizem123456789@cluster0.bbguj08.mongodb.net/?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
    }
  )
  .then(console.log("Connected to Database"))
  .catch((err) => console.log(err));

app.get("/contacts", (req, res) => {
  ContactMessage.find().then((contacts) => res.json(contacts));
});

app.post("/contact1", async (req, res) => {
  try {
    const newContact = new ContactMessage({
      Name: req.body.Name,
      email: req.body.email,
      message: req.body.message,
    });
    const cntc = await newContact.save();
    res.status(200).json(cntc);
  } catch (err) {}
});
app.listen(3000, () => console.log("servercalıştı"));
