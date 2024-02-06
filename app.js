const express = require('express')
const app = express()
const collection = require('./mongo.js')
const cors = require('cors')

app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(cors())


app.get('/', async (req, res) => {
    try {
      const users = await collection.find().exec();
      res.status(200).json(users);
  
    } catch (error) {
      console.error('Error reading docs:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });

app.post('/create', async (req, res) => {
    try {
      const userData = req.body; // Access form data from the request body
  
      // Insert the user data into the database
      await collection.insertMany({
        title: userData.title,
        message: userData.message,
      });   
  
      res.status(200).send('User saved successfully');
    } catch (error) {
      console.error('Error saving user:', error);
      res.status(500).send('Internal Server Error');
    }
  });

app.listen(4000)