import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

import SKU from './interfaces.ts'

function App() {
  const [count, setCount] = useState(0)

  const [skuInput, setSkuInput] = useState("");
  const [nameInput, setNameInput] = useState("");
  const [descInput, setDescInput] = useState("");
  const [qtyOnHandInput, setQtyOnHandInput] = useState(0);
  const [supplierInput, setSupplierInput] = useState("");
  const [costInput, setCostInput] = useState("");

  const [inventory, setInventory] = useState<SKU>([]);

  const logInputState = () => {
    console.log(`SKU: ${skuInput}`)
    createNewInventoryComponent();
  }

  const createNewInventoryComponent = () => {
    let temp: SKU = new SKU(skuInput, nameInput, descInput, qtyOnHandInput);
    console.log(`new SKU: ${JSON.stringify(temp)}`)

    setInventory([...inventory, temp]);

    //console.log(inventory);
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
        <input onChange={(evt)=> setSkuInput(evt.target.value)} placeHolder="SKU"></input>
        <input onChange={(evt)=> setNameInput(evt.target.value)} placeHolder="Name"></input>
        <input onChange={(evt)=> setDescInput(evt.target.value)} placeHolder="Description"></input>
        <input onChange={(evt)=> setQtyOnHandInput(evt.target.value)} placeHolder="Quantity on Hand"></input>
        <input onChange={(evt)=> setSupplierInput(evt.target.value)} placeHolder="Supplier"></input>
        <input onChange={(evt)=> setCostInput(evt.target.value)} placeHolder="Cost"></input>
        <button onClick={() => logInputState()}>Add new Inventory Item</button>
        <button onClick={() => {console.log({inventory})}}> debug inventory</button>
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
