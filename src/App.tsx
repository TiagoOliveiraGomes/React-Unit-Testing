import { useState } from "react"

function App() {
  const [list, setList] = useState<string[]>(["José", "Marcos", "Mike"])

  function addToList () {
    setList(state => [...state, 'New'])
  }

  return (
    <>
    <button onClick={addToList}>Adicionar</button>
    <ul>
      {list.map(item => {
        return (
          <li key={item}>
            {item}
          </li>
        )
      })}
    </ul>
    </>
  )
}

export default App
