import React from "react"
import ReactDOM from "react-dom"
import ServerStatus from "./src/index"

let isStatusOn = false
const mountNode = document.getElementById("app")

ReactDOM.render( <ServerStatus
  backgroundColor={
    isStatusOn ?
      '#14f1b9'
      : '#FF0000'
  }
/>, mountNode)
