import React, { useState, useEffect, lazy, Suspense } from 'react'
import styled from '@emotion/styled'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import Navbar from 'react-bootstrap/Navbar'
import Spinner from 'react-bootstrap/Spinner'
import { PlusLg, XLg } from 'react-bootstrap-icons'

import { Tenancy } from '../types/global'
import { deleteTenancyFromStorage, getTenanciesFromStorage } from '../lib/backend'

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
  const [tenancies, setTenancies] = useState<Tenancy[]>()
  const [loading, setLoading] = useState(true)
  const [show_add_modal, setShowAddModal] = useState(false)

  useEffect(() => {
    setLoading(false)
    let is_mounted = true

    getTenanciesFromStorage()
      .then((data) => {
        if (is_mounted) setTenancies(data)
      })
      .catch((err) => {
        console.log(err)
      })

    return () => {
      is_mounted = false
    }
  }, [])

  /**
   * @todo make it purdier than window.confirm
   */
  const handleDeleteClick = (id: string) => {
    if (window.confirm('Are you sure?')) {
      deleteTenancyFromStorage(id)
        .then(() => {
          console.log('success')
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
