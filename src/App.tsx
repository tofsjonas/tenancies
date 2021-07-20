import React from 'react'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import TenancyProvider from './contexts/TenancyContext'
import { HashRouter as Router } from 'react-router-dom'
// import Portfolio from './components/portfolio/Portfolio'
import { AlertProvider, AlertOutlet } from 'react-bootstrap-hooks-alert'
import 'react-bootstrap-hooks-alert/dist/Alert.css'
// import 'lib/react-bootstrap-hooks-alert/Alert.css'

// import Login from './components/login/Login'
import MyRoutes from './components/MyRoutes'
import AuthProvider from './contexts/AuthContext'
import MyNavbar from './components/MyNavbar'

function App() {
  return (
    <Router>
      <AlertProvider
        timeouts={{ warning: 5000, danger: 10000, success: 2000 }}
        // timeouts={{ success: 1000 }}
      >
        <AuthProvider>
          <TenancyProvider>
            <Container fluid className="bg-light">
              <Row>
                <Col>
                  <MyNavbar />
                </Col>
              </Row>
            </Container>
            <Container>
              <Row>
                <Col>
                  <AlertOutlet className="alert-outlet" />
                  <MyRoutes />
                </Col>
              </Row>
            </Container>
          </TenancyProvider>
        </AuthProvider>
      </AlertProvider>
    </Router>
  )
}

export default App
