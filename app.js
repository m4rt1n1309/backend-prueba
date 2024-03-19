const express = require('express');

const app = express();
const { dbConnetion } = require('./database/config');
const cors = require('cors');

require('dotenv').config();

app.use(express.json());

app.use(cors());

dbConnetion();

app.use('/auth' , require('./router/authRouter'));

app.listen(process.env.PORT,() =>{
    console.log(`ejecutandose en puerto ${process.env.PORT}`);
});