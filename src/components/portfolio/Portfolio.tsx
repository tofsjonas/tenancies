import React, { useState, useEffect, lazy, Suspense, useRef, useContext } from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Navbar from 'react-bootstrap/Navbar'
import Spinner from 'react-bootstrap/Spinner'
import { useTranslation } from 'react-i18next'
import { getTenanciesFromStorage } from '../../lib/backend'
import { TenancyContext, SET_TENANCIES } from '../../contexts/TenancyContext'
import { Routes, Route } from 'react-router-dom'
import LanguageToggler from '../LanguageToggler'
import Search from './Search'

const TenancyItem = lazy(() => import('./TenancyItem'))
const TenancyList = lazy(() => import('./TenancyList'))

const Portfolio = () => {
  const { t } = useTranslation()

  const { tenancies, dispatch } = useContext(TenancyContext)
  const [loading, setLoading] = useState(true)
  const is_mounted = useRef(false)

  useEffect(() => {
    is_mounted.current = true
    getTenanciesFromStorage()
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
        console.log(err)
      })

    return () => {
      is_mounted.current = false
    }
  }, [dispatch])

  return (
    <>
      {loading && (
        <Spinner animation="border" role="status">
          <span className="sr-only">Loading...</span>
        </Spinner>
      )}
      {!loading && tenancies && tenancies.length === 0 && (
        <Container>
          <Row>
            <Col>{t('overview_you_have_no_tenancies')}</Col>
          </Row>
        </Container>
      )}
      {!loading && tenancies && tenancies.length > 0 && (
        <Suspense fallback="">
          <Navbar bg="light" expand="lg">
            <Navbar.Brand className="mr-auto">{t('overview_navbar_brand')}</Navbar.Brand>
            <LanguageToggler />
            <Search tenancies={tenancies} />
          </Navbar>

          <Routes>
            <Route path="tenancy/:id" element={<TenancyItem />} />
            <Route path="*" element={<TenancyList tenancies={tenancies} />} />
          </Routes>
        </Suspense>
      )}
    </>
  )
}
export default Portfolio
