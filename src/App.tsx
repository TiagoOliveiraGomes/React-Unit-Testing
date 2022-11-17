import { useState } from "react"


function App() {
  const [list, setList] = useState(['Tiago', 'Lucas', 'Pedro'])

  const addToList = () => setList(state => [...state, 'New'])

  return (
    <>
      <button onClick={addToList}>Add</button>
      <ul>
        {list.map(item=> <li key={item}>{item}</li>)}
      </ul>
    </>
  )
}

export default App
