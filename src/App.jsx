import { useEffect, useMemo, useState } from "react"
import Welcome from "./components/Welcome"

const App = () => {
  const [count, setCount] = useState(0)
  const [number, setNumber] = useState(1)

  const slowFunction = (num) => {
    console.log("slow function ran!")
    let startTime = performance.now()
    while (performance.now() - startTime < 5000) {
      //
    }
    return Math.random() * num
  }

  const result = useMemo(() => {
    return slowFunction(number)
  }, [number])

  return (
    <div>
      <div>Hello!</div>
      <Welcome firstname="Joe" lastname="Mo" />
      <h2>Count: {count}</h2>
      <h2>Number: {number}</h2>
      <h2>Random: {result}</h2>
      <button onClick={() => setCount(count + 1)}>Count</button>
      <button onClick={() => setNumber(number + 1)}>Number</button>
    </div>
  )
}

export default App