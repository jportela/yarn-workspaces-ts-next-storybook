import React from 'react'

type OnClickHandler = () => void

interface ButtonProps {
  children: React.ReactNode;
  onClick: OnClickHandler;
}

export default function Button(props: ButtonProps) {
  const { onClick, children } = props
  return (<button onClick={onClick}>{children}</button>)
}
