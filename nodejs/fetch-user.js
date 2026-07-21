const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// mongodb connection
mongoose.connect('url');
const UserSchema = new mongoose.Schema({
  name: String,
  email: String,
});

const UserModel = mongoose.model('users', UserSchema);

app.get('/users', async (req, res) => {
  try {
    const users = await UserModel.find();
    res.json(users);
  } catch (err) {
    res.status(500).send(err);
  }
});

app.listen(8080, () => {
  console.log('server is running...');
});
