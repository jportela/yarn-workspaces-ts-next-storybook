import React from 'react'
import { Header, Button } from '@example/ui'

export default function HomePage() {

  const [counter, setCounter] = React.useState(0)

  const onClick = () => setCounter(c => c + 1)

  return (
    <div>
      <Header>Yarn Worskpaces TS Next Storybook</Header>
      <p>Welcome to Next.js!</p>
      <Button onClick={onClick}>Click Me!</Button>
      { counter > 0 ?
        (<p>I've been clicked {counter} times!</p>) :
        null
      }
    </div>
  )
}
