import React, { useContext } from 'react'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'
import { useAlert } from 'react-bootstrap-hooks-alert'
import { signOut } from 'lib/auth'

import LanguageToggler from './LanguageToggler'
import { AuthContext } from '../contexts/AuthContext'
import { useTranslation } from 'react-i18next'

const MyNavbar = () => {
  const { t } = useTranslation()
  const { user } = useContext(AuthContext)
  const { success } = useAlert()

  const handleLogout = (e: React.MouseEvent) => {
    e.preventDefault()
    signOut()
      .then(() => {
        success('You have been successfully logged out')
      })
      .catch(alert)
  }

  return (
    <Navbar expand="sm" className="container">
      <Navbar.Brand className="mr-auto">{t('navbar-header')}</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
        {user && user.uid && (
          <>
            {/* <Navbar.Text className="mr-2">User:</Navbar.Text> */}
            <NavDropdown title={user.name} id="collapsible-nav-dropdown">
              {/* <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <hr /> */}
              {/* {user.is_anonymous && (
                <NavDropdown.Item as={Link} to="login">
                  Login
                </NavDropdown.Item>
              )} */}
              <NavDropdown.Item href="#" onClick={handleLogout}>
                {t('navbar-logout')}
              </NavDropdown.Item>
            </NavDropdown>
          </>
        )}

        <LanguageToggler />
      </Navbar.Collapse>
    </Navbar>
  )
}
export default MyNavbar
