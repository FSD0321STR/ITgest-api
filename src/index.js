const express = require('express');
require('express-async-errors');
const cors = require('cors');

const app = express();
const port = 8000;
// const port = process.env.PORT || 8000;

const AuthRouter = require('./controllers/AuthRouter');
const UserRouter = require('./controllers/UserRouter');
const ItemRouter = require('./controllers/ItemRouter');
const OrderRouter = require('./controllers/OrderRouter')


app.use(cors({
    origin: '*',
    optionsSuccessStatus: 200,
}));

app.use(express.json());
app.use(AuthRouter);
app.use('/user', UserRouter);
app.use('/item', ItemRouter);
app.use('/order', OrderRouter);


app.listen(port, () => console.log(`Listening on http://localhost:${port}`));