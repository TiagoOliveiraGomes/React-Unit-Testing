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
            <h1>
              {item}
            </h1>
          </li>
        )
      })}
    </ul>
    </>
  )
}

export default App
