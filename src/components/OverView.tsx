import React, { useState, useEffect, lazy, Suspense, useRef, useContext } from 'react'
import styled from '@emotion/styled'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import Navbar from 'react-bootstrap/Navbar'
import Spinner from 'react-bootstrap/Spinner'
import { PlusLg, XLg } from 'react-bootstrap-icons'
import { deleteTenancyFromStorage, getTenanciesFromStorage } from '../lib/backend'
import { TenancyContext, SET_TENANCIES, DELETE_TENANCY } from '../contexts/TenancyContext'

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
  }, [])

  /**
   * @todo make it purdier than window.confirm
   */
  const handleDeleteClick = (id: string) => {
    if (window.confirm('Are you sure?')) {
      deleteTenancyFromStorage(id)
        .then(() => {
          dispatch({
            type: DELETE_TENANCY,
            payload: id,
          })
        })
        .catch((err) => {
          console.log(err)
        })
    }
  }

  const handleCloseAddModal = () => {
    setShowAddModal(false)
  }

  const handleAddClick = () => {
    setShowAddModal(true)
  }

  return (
    <>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand>My Addresses</Navbar.Brand>
      </Navbar>
      <Container fluid="md">
        {loading && (
          <Spinner animation="border" role="status">
            <span className="sr-only">Loading...</span>
          </Spinner>
        )}

        {!loading &&
          tenancies &&
          tenancies.length > 0 &&
          tenancies.map((tenancy) => (
            <Row className="mt-1 align-items-center" key={tenancy.tekst}>
              <Col>{tenancy.tekst}</Col>
              <Col md="auto">
                <Button
                  variant="danger"
                  onClick={() => {
                    handleDeleteClick(tenancy.adgangsadresse.id)
                  }}
                >
                  <XLg />
                </Button>
              </Col>
            </Row>
          ))}

        {!loading && tenancies && tenancies.length === 0 && (
          <Row>
            <Col>You have no tenancies, go ahead and add one!</Col>
          </Row>
        )}
      </Container>
      <FabButton onClick={handleAddClick}>
        <PlusLg />
      </FabButton>
      <Suspense fallback="loading...">{show_add_modal && <AddTenancy hideModal={handleCloseAddModal} />}</Suspense>
    </>
  )
}
export default OverView
