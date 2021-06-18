import React from 'react'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
// import OverView from './components/OverView'
import TenancyProvider from './contexts/TenancyContext'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
// import Tenancy from './components/portfolio/TenancyItem'
import Portfolio from './components/portfolio/Portfolio'

function App() {
  return (
    <BrowserRouter>
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
    </BrowserRouter>
  )
}

export default App
