import React, { useContext } from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
// import Row from 'react-bootstrap/Row'
import { useAlert } from 'react-bootstrap-hooks-alert'
import { signOut } from 'lib/auth'

import LanguageToggler from './LanguageToggler'
import { AuthContext } from '../contexts/AuthContext'
import { Link } from 'react-router-dom'

const MyNavbar = () => {
  const { user } = useContext(AuthContext)
  // const { user, dispatch } = useContext(AuthContext)
  const { success } = useAlert()
  // const changeLanguage = (e: React.MouseEvent<HTMLButtonElement>) => {

  const handleLogout = (e: React.MouseEvent) => {
    e.preventDefault()
    signOut()
      .then(() => {
        success('You have been successfully logged out')
      })
      .catch(alert)
  }
  console.log(user)

  return (
    <Navbar
      expand="sm"
      className="container"
      // style={{ background: 'green' }}
    >
      <Navbar.Brand className="mr-auto">Tenancy Stuff</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse
        id="basic-navbar-nav"
        className="justify-content-end"
        // style={{ background: 'red' }}
      >
        {user && user.uid && (
          <>
            {/* <Navbar.Text className="mr-2">User:</Navbar.Text> */}
            <NavDropdown title={user.name} id="collapsible-nav-dropdown">
              {/* <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <hr /> */}
              {user.is_anonymous && (
                <NavDropdown.Item as={Link} to="login">
                  Login
                </NavDropdown.Item>
              )}
              <NavDropdown.Item href="#" onClick={handleLogout}>
                Logout
              </NavDropdown.Item>
            </NavDropdown>
          </>
        )}
        {/* {(!user || !user.uid || user.is_anonymous) && (
          <Nav>
            <Nav.Link as={Link} to="login">
              Login
            </Nav.Link>
          </Nav>
        )} */}

        {/* <Nav>
          <Nav.Link as={Link} to="login">
            Tenancies
          </Nav.Link>
        </Nav> */}

        <LanguageToggler />

        <Nav
          //  fill={true}
          className=""
          style={{ background: 'red' }}
        >
          <Nav.Item></Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}
export default MyNavbar
