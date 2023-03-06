import * as user from './model.mjs';
import express from 'express';






// mongodb atlas connection file, model file-> schema, controller file-> fineAll, delete, etc...
// and then rout file for app.get(), post() or app.route() i.e. for HTTP method
// model for each collection so like User.mjs City.mjs... etc


const PORT = 5000;
const app = express();

app.use(express.json()); // middleware to parse request body i.e req.body....
app.use(express.urlencoded({extended: false}));



app.post('url', (req, res) => {
    user.createUser(req.body.firstName, req.body.lastName)
    .then(user => {
        res.status(201).json(user);
    })
    .catch(error => {
        console.error(error);
        res.status(500).json({Error: 'Request failed' });
    })
});



app.get('/', (req, res) => {
    const filter = {} 
    user.findUser(filter)
    .then(user => {
        res.status(200).json(user);
    })
    .catch(error => {
        console.error(error);
        res.status(500).json({Error: 'Request failed'});
    })
});



app.listen(PORT, () => {
    console.log(`Node app is running on ${PORT}...`)
});