import React from 'react'
import Spinner from 'react-bootstrap/Spinner'

type MySpinnerProps = {
  title?: string
}

const MySpinner = ({ title }: MySpinnerProps) => {
  return (
    <>
      <Spinner animation="border" role="status" /> {title}
    </>
  )
}
export default MySpinner
