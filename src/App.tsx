import React from 'react'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import OverView from './components/OverView'
import TenancyProvider from './contexts/TenancyContext'

function App() {
  return (
    <TenancyProvider>
      <Container>
        <Row>
          <Col>
            <OverView />
          </Col>
        </Row>
      </Container>
    </TenancyProvider>
  )
}

export default App
