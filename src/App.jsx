import { useCallback, useMemo, useState } from "react"
import Welcome from "./components/Welcome"

const App = () => {
  const [count, setCount] = useState(0)
  const [number, setNumber] = useState(1)

  const slowFunction = (num) => {
    console.log("slow function ran!")
    let startTime = performance.now()
    while (performance.now() - startTime < 500) {
      //
    }
    return Math.random() * num
  }

  const result = useMemo(() => {
    return slowFunction(number) // Caches the return/result of a function
  }, [number])

  const sayHello = useCallback(() => {
    return `Hello! Number is ${number}` // Caches the whole function
  }, [number])

  return (
    <div>
      <div>Hello!</div>
      <Welcome firstname="Joe" lastname="Smith" sayHello={sayHello} />
      <h2>Count: {count}</h2>
      <h2>Number: {number}</h2>
      <h2>Random: {result}</h2>
      <button onClick={() => setCount(count + 1)}>Count</button>
      <button onClick={() => setNumber(number + 1)}>Number</button>
    </div>
  )
}

export default App