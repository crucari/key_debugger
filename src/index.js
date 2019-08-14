import React from "react"
import ReactDOM from "react-dom"
import useKeyDebugger from "use-key-debugger"
// import useKeyDebugger from "./dev"

import "./styles.css"

function App() {
  const Key = useKeyDebugger()
  return (
    <div className="App">
      <Key />
      <h2>Hit any key to see debugger</h2>
    </div>
  )
}

const rootElement = document.getElementById("root")
ReactDOM.render(<App />, rootElement)
