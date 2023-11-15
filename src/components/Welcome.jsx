import { memo } from 'react'

const Welcome = memo(function Welcome(props) {
  console.log('Hello from Welcome component')

  return (
    <h1>Welcome {props.firstname} {props.lastname}!</h1>
  )
})

export default Welcome