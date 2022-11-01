const express = require("express");
const cors = require('cors');

const app = express();
const port = 5174;


app.use(cors());

app.use(express.json());

app.get('/', (req, res) => {
    console.log(req.body);
    res.send(`Hello, expressJS!, the current date/time is: ${Date()}`);
})

app.post('/addInventoryComponent', (req, res) => {
    let errors = false;
    console.log(`received request on /addInventoryComponent route...`);
    console.log(`checking for errors...`);
    if (req.body.sku.id == ""){
        console.log(`We cannot add that SKU -- it has no id!`)
        res.status(400).send(`We cannot add that SKU -- it has no id!`);
        errors = true;
    } else if (req.body.sku.name == ""){
        console.log(`We cannot add that SKU -- it has no name!`)
        res.status(400).send(`We cannot add that SKU -- it has no name!`);
        errors = true;
    } else if (req.body.sku.description == ""){
        console.log(`We cannot add that SKU -- it has no description!`)
        res.status(400).send(`We cannot add that SKU -- it has no description!`);
        errors = true;
    } else if (req.body.sku.qtyOnHand == 0){
        console.warn(`We can add this sku, but you normally want some on hand...`);
        res.send(`We can add this sku, but you normally want some on hand...`)
    } else {
        res.send(`Hello, we see a request on the /addInventoryComponent route...`);   
    }
    if (!errors){
        console.log(`looks like a good sku!`);
        console.log(req.body);

        // perform databse write function to add sku to database...
        
    }
    
})

app.listen(port, () => {
    console.log(`Server listening on port ${port}`)
})


