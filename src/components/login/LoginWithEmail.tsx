import React from 'react'
import Form from 'react-bootstrap/Form'

type LoginWithEmailProps = {
  title?: string
  paragraph?: string
}

const LoginWithEmail = ({ title, paragraph }: LoginWithEmailProps) => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    event.stopPropagation()
  }

  return <Form onSubmit={handleSubmit}></Form>
}
export default LoginWithEmail
