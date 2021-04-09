import express from 'express';
import bodyParser from 'body-parser';

import usersRoutes from './routes/users.js'

const app = express();

app.use(bodyParser.json());

const PORT = process.env.PORT || 5000;

// create Routes
app.use('/users', usersRoutes);

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.listen(PORT, () => {
    console.log(`Server Running on port: ${PORT}`);
} )