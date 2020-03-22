import React from 'react'
import { Header, Button } from 'ui'

export default function HomePage()/*: React.ReactElement*/ {

  const onClick = () => console.log('Hello')

  return (
    <div>
      <Header>Yarn Worskpaces TS Next Storybook</Header>
      <p>Welcome to Next.js!</p>
      <Button onClick={onClick}></Button>
    </div>
  )
}
