import React from "react"
import {useState} from "react"

export default function App () {

  const [listValue, setListValue] = useState([])

  const [nameValue, setNameValue] = useState("")

  const onChangeName = (event) => {
    setNameValue(event.target.value)
  }

  const sendName = (event) => {
    const newList = [...listValue, nameValue]
    setListValue(newList)
  }

    return(
      <div>
        <h1>Lista</h1>
        <input placeholder="Nome" value={nameValue} onChange={onChangeName}></input>
        <button onClick={sendName}>Add</button>
        <br></br>
        <ol>{listValue}</ol>
      </div>
    )
}