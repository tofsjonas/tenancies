import React from 'react'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import OverView from './components/OverView'

function App() {
  return (
    <Container>
      <Row>
        <Col>
          <OverView />
        </Col>
      </Row>
    </Container>
  )
}

export default App
