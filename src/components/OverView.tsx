import React, { useState, useEffect, lazy, Suspense, useRef, useContext } from 'react'
import { Tenancy } from '../types/global'
import styled from '@emotion/styled'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import Navbar from 'react-bootstrap/Navbar'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import Spinner from 'react-bootstrap/Spinner'

import { PlusLg } from 'react-bootstrap-icons'
import { getTenanciesFromStorage } from '../lib/backend'
import { TenancyContext, SET_TENANCIES } from '../contexts/TenancyContext'
import TenancyList from './TenancyList'

const AddTenancy = lazy(() => import('./AddTenancy'))

const FabButton = styled(Button)`
  width: 50px;
  height: 50px;
  border-radius: 50px;
  position: fixed;
  bottom: 20px;
  right: 20px;
`

const OverView = () => {
  const { tenancies, dispatch } = useContext(TenancyContext)
  const [loading, setLoading] = useState(true)
  const [filter, setFilter] = useState('')
  const [filtered_list, setFilteredList] = useState<Tenancy[]>([])

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

  useEffect(() => {
    const list = tenancies.filter((obj) => new RegExp(filter, 'i').test(obj.tekst))
    setFilteredList(list)
  }, [tenancies, filter])

  const handleCloseAddModal = () => {
    setShowAddModal(false)
  }

  const handleAddClick = () => {
    setShowAddModal(true)
  }

  const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilter(e.target.value)
  }

  return (
    <>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand>My Tenancies</Navbar.Brand>
        <Form inline>
          <FormControl
            type="search"
            placeholder="Search"
            value={filter}
            onChange={handleFilterChange}
            className="mr-sm-2"
          />
        </Form>
      </Navbar>
      <Container>
        {loading && (
          <Spinner animation="border" role="status">
            <span className="sr-only">Loading...</span>
          </Spinner>
        )}
        {!loading && tenancies && tenancies.length === 0 && (
          <Row>
            <Col>You have no tenancies, go ahead and add one!</Col>
          </Row>
        )}
        {!loading && tenancies && tenancies.length > 0 && <TenancyList tenancies={filtered_list} />}
      </Container>
      <FabButton onClick={handleAddClick}>
        <PlusLg />
      </FabButton>
      <Suspense fallback="loading...">{show_add_modal && <AddTenancy hideModal={handleCloseAddModal} />}</Suspense>
    </>
  )
}
export default OverView
