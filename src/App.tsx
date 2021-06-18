import React from 'react'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import TenancyProvider from './contexts/TenancyContext'
import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import Portfolio from './components/portfolio/Portfolio'

function App() {
  return (
    <Router>
      <TenancyProvider>
        <Container>
          <Row>
            <Col>
              <Routes>
                {/* <Route path="/tenancies/:id" element={<Tenancy />} /> */}
                <Route path="*" element={<Portfolio />} />
              </Routes>
            </Col>
          </Row>
        </Container>
      </TenancyProvider>
    </Router>
  )
}

export default App
