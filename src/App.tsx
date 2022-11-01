import { useState } from 'react'
import './App.css'

import SKU from './interfaces'
import { Server } from './api'

import axios from 'axios'

const server = new Server();

function App() {
  const [count, setCount] = useState(0)

  const [skuInput, setSkuInput] = useState("");
  const [nameInput, setNameInput] = useState("");
  const [descInput, setDescInput] = useState("");
  const [qtyOnHandInput, setQtyOnHandInput] = useState(0);
  const [supplierInput, setSupplierInput] = useState("");
  const [costInput, setCostInput] = useState("");

  const [inventory, setInventory] = useState<SKU[]>([]);

  const logInputState = () => {
    console.log(`SKU: ${skuInput}`)
    createNewInventoryComponent();
  }

  const createNewInventoryComponent = () => {
    let temp: SKU = new SKU(skuInput, nameInput, descInput, qtyOnHandInput);
    console.log(`new SKU: ${JSON.stringify(temp)}`)

    setInventory([...inventory, temp]);

    server.addNewInventoryComponent(temp);

    //console.log(inventory);
  }

  const clickDebugButton = () => {
    console.log(inventory);
    server.ping();
    //server.pong();
  }

  return (
    <div className="App">
      Inventory Module
      <div>
      New Inventory component:
      {/* 
      <select>
        
        <option value="box">Box</option>
        <option value="bottle">Bottle</option>
        <option value="closure">Closure</option>
        <option value="label">Label</option>
        
      </select>
      */} 
      <div className="generalInformation">
        <input onChange={(evt)=> setSkuInput(evt.target.value)} placeholder="SKU"></input>
        <input onChange={(evt)=> setNameInput(evt.target.value)} placeholder="Name"></input>
        <input onChange={(evt)=> setDescInput(evt.target.value)} placeholder="Description"></input>
        <input onChange={(evt)=> setQtyOnHandInput(parseInt(evt.target.value))} placeholder="Quantity on Hand"></input>
        <input onChange={(evt)=> setSupplierInput(evt.target.value)} placeholder="Supplier"></input>
        <input onChange={(evt)=> setCostInput(evt.target.value)} placeholder="Cost"></input>
        <button onClick={() => logInputState()}>Add new Inventory Item</button>
        <button onClick={() => {clickDebugButton()}}> debug inventory</button>
      </div>
      </div>
      <table className='inventoryTable'>
        <thead>
          <tr>
          <th>SKU</th><th>Product</th><th>Description</th><th>Quantity</th><th>Supplier</th><th>Cost</th>
          </tr>
        </thead>
        <tbody>
          {inventory.map((entry, index) => {
            return (
              
              <tr key={entry.id}>
                <td>{entry.id}</td>
                <td>{entry.name}</td>
                <td>{entry.description}</td>
                <td>{entry.qtyOnHand}</td>

                <td>x</td>
              </tr>
            )
        })}
        </tbody>
      </table>
    </div>
  )
}

export default App
