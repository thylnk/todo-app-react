import React, { useState } from 'react';
// import ReactDOM from 'react-dom';
import List from "./Components/List";

const list = [
    {itemName: 'Must Do 1', isCompleted: false},
    {itemName: 'Must Do 2', isCompleted: false},
  ];

function App(){

  // TODO: Item (itemID, itemName, isCompleted) -> setItemID, setItemName, removeItem, chooseItem
  // TODO: ListItem

  const [itemName, setItemName] = useState("");
  const [listItem, setListItem] = useState(list);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!itemName) {
      alert("Please enter an item");
    }
    else {
      const newItem = {itemName: itemName, isCompleted: false}
      setListItem([...listItem, newItem]);
      setItemName("");
    }
  }

  const removeItem = (index) => {
    let copyItem = [...listItem];
    copyItem.splice(index, 1);
    setListItem(copyItem);
  }

  const chooseItem = (idx) => {
    const updated = listItem.filter((item, index) => {
      if (index === idx) {
        item.isCompleted = !item.isCompleted;
      }
      return item;
    })
    setListItem(updated);
  }
  
  return (
    <div className="container-todo">
      <div className="wrapper"> 
        <form className="form-add-todo" onSubmit={handleSubmit}>
          <div >
            <input className="input-item" type="text" placeholder="Input your to-do item" value={itemName} onChange={(e) => setItemName(e.target.value)} />
            <i class="fas fa-plus icon-submit" onClick={handleSubmit}></i>
          </div>
        </form>
        <div className="container-list">
          {listItem.length > 0 && (
          <List listItem = {listItem} removeItem = {removeItem} chooseItem = {chooseItem}/>
        )}
        </div>
      </div>
    </div>
  );
}


export default App;
