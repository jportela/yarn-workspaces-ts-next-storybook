import React from 'react'

type OnClickHandler = () => void

interface ButtonProps {
  children?: React.ReactChild | React.ReactChild[];
  onClick: OnClickHandler;
}

export default function Button(props: ButtonProps): React.ReactElement {
  const { onClick, children } = props
  return (<button onClick={onClick}>{children}</button>)
}
