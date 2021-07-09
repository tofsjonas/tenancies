import React, { useState, useEffect, lazy, Suspense, useRef, useContext } from 'react'
import styled from '@emotion/styled'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Navbar from 'react-bootstrap/Navbar'
import Spinner from 'react-bootstrap/Spinner'
import Button from 'react-bootstrap/Button'
import { PlusLg } from 'react-bootstrap-icons'

import { useTranslation } from 'react-i18next'
import { getTenanciesFromStorage } from '../../lib/storage'
import { TenancyContext, SET_TENANCIES } from '../../contexts/TenancyContext'
import { Routes, Route } from 'react-router-dom'
import LanguageToggler from '../LanguageToggler'
import Search from './Search'

const AddTenancy = lazy(() => import('./AddTenancy'))
const TenancyItem = lazy(() => import('./TenancyItem'))
const TenancyList = lazy(() => import('./TenancyList'))

const FabButton = styled(Button)`
  width: 50px;
  height: 50px;
  border-radius: 50px;
  position: fixed;
  bottom: 20px;
  right: 20px;
`

const Portfolio = () => {
  const { t } = useTranslation()
  const { tenancies, dispatch } = useContext(TenancyContext)
  const [loading, setLoading] = useState(true)
  const [show_add_modal, setShowAddModal] = useState(false)

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

  const handleCloseAddModal = () => {
    setShowAddModal(false)
  }

  const handleAddClick = () => {
    setShowAddModal(true)
  }

  return (
    <>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand className="mr-auto">{t('overview_navbar_brand')}</Navbar.Brand>
        <LanguageToggler />
        <Search tenancies={tenancies} />
      </Navbar>
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
          <Routes>
            <Route path="tenancy/:id" element={<TenancyItem />} />
            <Route path="*" element={<TenancyList tenancies={tenancies} />} />
          </Routes>
        </Suspense>
      )}
      <FabButton onClick={handleAddClick}>
        <PlusLg />
      </FabButton>
      <Suspense fallback="loading...">{show_add_modal && <AddTenancy hideModal={handleCloseAddModal} />}</Suspense>
    </>
  )
}
export default Portfolio
