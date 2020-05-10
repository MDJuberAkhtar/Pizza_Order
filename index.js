const express = require('express');
const connectDB = require('./config/db');
const userRoute = require('./routes/api/users');
const authRoute = require('./routes/api/auth');


const app = express();
app.use(express.json({extended: false}));
connectDB();

const PORT = process.env.PORT||5000;

app.get('/', (req, res)=> res.send(`API running`));
app.use('/api/users', userRoute);
app.use('/api/auth', authRoute);


app.listen(PORT,()=> console.log(`Server started on ${PORT}`));
