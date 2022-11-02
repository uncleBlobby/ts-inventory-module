import axios from 'axios'
import SKU from './interfaces';

const API_URL = "http://localhost:5174/";

export class Server {
    constructor(){

    }

    ping = () => {
        console.log(`pinging server...`);
        axios.get(API_URL)
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            })
            .then(function() {
                console.log(`we made it!`)
            });
    }

    pong = (thisSku: SKU) => {
        console.log(`ponging server...`);
        axios.post(API_URL + 'addInventoryComponent', {
            sku: thisSku
        })
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            })
            .then(function() {
                console.log(`we made it!`)
            });
    }
    
    addNewInventoryComponent = (thisSku: SKU) => {
        console.log(`adding new inventory component...`);
        axios.post(API_URL + 'addInventoryComponent', {
            sku: thisSku
        })
            .then(function (response) {
                console.log(response);
                console.log(`${JSON.stringify(thisSku)} is a good sku!`)
                console.log(`adding sku!`)
            })
            .catch(function (error) {
                if (error.response.status == 400){
                    console.warn(`status 400...`)
                    console.warn(`${error.response.data}`)
                    //console.log(`you done goofed, didn't ya.`)
                } else {
                    console.log(error);
                }
            })
            .then(function() {
                console.log(`response completed.`)
            });
    }
    
}