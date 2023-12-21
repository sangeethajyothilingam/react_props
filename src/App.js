import { Header } from './Header';
import {Content} from './Content';
import { Footer } from './Footer';
import { useState } from 'react';

function App() {
   const [items, setItems] = useState([
    {id:1,
      checked: true,
      product: "practice coding"
   },
   {id:2,
      checked: false,
      product: "understand concept"
   },
   {id:3,
      checked: true,
      product: "prepare interview q&a"
   },
  ])
  const handleChange = (id) =>{
    const listItems = items.map ((item) =>
    item.id ===id? {...item,checked:!item.checked}: item)
    setItems(listItems)
    localStorage.setItem("todo_list", JSON.stringify(listItems))
  }

  const handleDelete = (id) =>{
    const listItems = items.filter ((item) =>
    item.id!==id)
    setItems(listItems)
    localStorage.setItem("todo_list", JSON.stringify(listItems))
  }
  

  return (
    <div className="App">
      
      <Header title ="REACT-CODING-PRACTICE"/>
      <Content 
      items ={items}
      setItems ={setItems}
      handleChange ={handleChange}
      handleDelete ={handleDelete}
      />
      <Footer
      length ={items.length}/>
      
    </div>
  );
}

export default App;
