import { useState } from "react"

type ListProps = {
    initialItems: string[]
}

export function List({initialItems}: ListProps) {
  const [list, setList] = useState(initialItems)
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
        <li>Tiago</li>
        <li>Lucas</li>
        <li>Pedro</li>
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
