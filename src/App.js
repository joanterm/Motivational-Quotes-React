import './App.css';
import React, {useState} from "react"

const colorArray = 
  {
    green: '#d3fcc9',
    yellow: '#ffffa8',
    orange: "#ffffa8",
    pink: "#ffc0cb",
    blue: "#ffc0cb",
    red: "#ffa4a4",
    violet: "#eeb0f7",
    sea: "#aad9dd",
    brown: "#e0c8b1"
  };

  const quoteArray = [
    "You are beautiful",
    "You are doing your best at any given moment",
    "You are worthy of great things",
    "You are braver than you think",
    "You are enough just as you are",
    "You deserve to be loved and to be happy",
    "You deserve to be successful",
    "You are smart",
    "You can become anything you desire",
    "You are unique and special because you are you",
    "You have all the power to face any challenges that come your way",
    "You are strong"
  ]

const App = () => {
  const [color, setColor] = useState(colorArray.yellow)
  const [quote, setQuote] = useState(quoteArray[0])

  const changeColor = () => {
    const colorArrayValues = Object.values(colorArray)
    const newColor = colorArrayValues[Math.floor(Math.random() * colorArrayValues.length)]
    console.log(newColor)
    setColor(newColor)
  }

  const changeQuote = () => {
    const mapQuote = quoteArray.map(x => x)
    const newQuote = mapQuote[Math.floor(Math.random() * quoteArray.length)]
    setQuote(newQuote)
  }
  
  return(
    <div>
      <h1 style={{background: color, color: "#4d4d4d"}}>{quote}</h1>
      <button onClick={changeQuote}>Click</button>
      <button onClick={changeColor}>Change Color</button>
    </div>
  )
}

export default App;
