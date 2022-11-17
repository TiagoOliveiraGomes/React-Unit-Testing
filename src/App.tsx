import { useState } from "react"


function App() {
  const [list, setList] = useState(['Tiago', 'Lucas', 'Pedro'])
  const [newItem, setNewItem] = useState('')

  const addToList = () =>{
    setTimeout(() => {
      setList(state => [...state, newItem])
    }, 500);
  } 
  const removeFromList = (item: string) =>{
    setTimeout(() => {
      setList(state => state.filter(item => item !== item))
    }, 500);
  } 

  return (
    <>
    <input placeholder="New Item" value={newItem} onChange={e => setNewItem(e.target.value)}/>
      <button onClick={addToList}>Add</button>
      <ul>
        {list.map(item=> (
          <li key={item}>
            {item}
            <button onClick={()=> removeFromList(item)}>Remove</button>
          </li>))
        }
      </ul>
    </>
  )
}

export default App
