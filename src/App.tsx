import React from 'react'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import TenancyProvider from './contexts/TenancyContext'
import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import Portfolio from './components/portfolio/Portfolio'
import { AlertProvider, AlertOutlet } from 'react-bootstrap-hooks-alert'
import 'react-bootstrap-hooks-alert/dist/Alert.css'

function App() {
  return (
    <Router>
      <AlertProvider
        //  timeouts={{ warning: 2000, danger: 3000, success: 3000 }}
        timeouts={{ success: 1000 }}
      >
        <TenancyProvider>
          <Container>
            <Row>
              <Col>
                <AlertOutlet className="alert-outlet" />
                <Routes>
                  {/* <Route path="/tenancies/:id" element={<Tenancy />} /> */}
                  <Route path="*" element={<Portfolio />} />
                </Routes>
              </Col>
            </Row>
          </Container>
        </TenancyProvider>
      </AlertProvider>
    </Router>
  )
}

export default App
