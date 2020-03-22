import React from 'react'

interface HeaderProps {
  children: React.ReactNode;
}

export default function Header(props: HeaderProps) {
  return (<h1>{props.children}</h1>)
}
