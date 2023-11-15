import { memo, useEffect } from 'react'

const Welcome = memo(function Welcome(props) {
  console.log('Hello from Welcome component')

  useEffect(() => {
    console.log(props.sayHello())
  }, [props])

  return (
    <h1>Welcome {props.firstname} {props.lastname}!</h1>
  )
})

export default Welcome