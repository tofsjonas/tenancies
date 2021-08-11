import React, { useState, useEffect, lazy, Suspense, useRef, useContext } from 'react'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Navbar from 'react-bootstrap/Navbar'

import { Search as SearchIcon } from 'react-bootstrap-icons'
import { useAlert } from 'react-bootstrap-hooks-alert'

import { useTranslation } from 'react-i18next'
import { getTenanciesFromStorage } from '../../lib/storage'
import { TenancyContext, SET_TENANCIES } from '../../contexts/TenancyContext'
import { Routes, Route } from 'react-router-dom'
import Search from './Search'
import MySpinner from '../MySpinner'
import { AuthContext } from 'contexts/AuthContext'

const Tenancy = lazy(() => import('./Tenancy'))
const Tenancies = lazy(() => import('./Tenancies'))

const Portfolio = () => {
  const { user } = useContext(AuthContext)

  const { t } = useTranslation()
  const { tenancies, dispatch } = useContext(TenancyContext)
  const [loading, setLoading] = useState(true)

  const { warning } = useAlert()

  const is_mounted = useRef(false)

  useEffect(() => {
    is_mounted.current = true
    getTenanciesFromStorage(user)
      .then((data) => {
        if (is_mounted.current) {
          dispatch({
            type: SET_TENANCIES,
            payload: data,
          })
          setLoading(false)
        }
      })
      .catch((err) => {
        setLoading(false)
        warning(err.message)
        console.log(err)
      })

    return () => {
      is_mounted.current = false
    }
  }, [dispatch, warning, user])

  return (
    <>
      <Navbar bg="primary" expand="sm">
        <Container>
          <Navbar.Brand className="me-auto">{t('overview_navbar_brand')}</Navbar.Brand>
          <Navbar.Toggle aria-controls="tenancy-navbar" style={{ color: 'silver', borderColor: 'silver' }}>
            <SearchIcon />
          </Navbar.Toggle>

          <Navbar.Collapse id="tenancy-navbar" className="justify-content-end">
            <Search tenancies={tenancies} />
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {loading && <MySpinner title="...fetching tenancies..." />}
      {!loading && tenancies && tenancies.length === 0 && (
        <Container>
          <Row>
            <Col>{t('overview_you_have_no_tenancies')}</Col>
          </Row>
        </Container>
      )}
      {!loading && tenancies && tenancies.length > 0 && (
        <Suspense fallback={<MySpinner title="...loading page..." />}>
          <Routes>
            <Route path="tenancy/:id" element={<Tenancy />} />
            <Route path="*" element={<Tenancies />} />
          </Routes>
        </Suspense>
      )}
    </>
  )
}
export default Portfolio
