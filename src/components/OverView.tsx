import React, { useState, useEffect } from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import Navbar from 'react-bootstrap/Navbar'
import Spinner from 'react-bootstrap/Spinner'

import { PlusLg, XLg } from 'react-bootstrap-icons'
import styled from '@emotion/styled'

import { Tenancy } from '../types/global'

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

  useEffect(() => {
    setTenancies([])
    setLoading(false)
    setTenancies([
      {
        tekst: 'Randlevvej 8, 8300 Odder',
        id: '0a3f5094-7659-32b8-e044-0003ba298018',
        status: 1,
        darstatus: 3,
        vejkode: '5911',
        vejnavn: 'Randlevvej',
        adresseringsvejnavn: 'Randlevvej',
        husnr: '8',
        supplerendebynavn: null,
        postnr: '8300',
        postnrnavn: 'Odder',
        stormodtagerpostnr: null,
        stormodtagerpostnrnavn: null,
        kommunekode: '0727',
        x: 10.15737503,
        y: 55.97067305,
        href: 'https://api.dataforsyningen.dk/adgangsadresser/0a3f5094-7659-32b8-e044-0003ba298018',
      },
      {
        tekst: 'Rentemestervej 7A, 2400 København NV',
        id: '0a3f507a-e175-32b8-e044-0003ba298018',
        status: 1,
        darstatus: 3,
        vejkode: '5804',
        vejnavn: 'Rentemestervej',
        adresseringsvejnavn: 'Rentemestervej',
        husnr: '7A',
        supplerendebynavn: null,
        postnr: '2400',
        postnrnavn: 'København NV',
        stormodtagerpostnr: null,
        stormodtagerpostnrnavn: null,
        kommunekode: '0101',
        x: 12.53598846,
        y: 55.70437954,
        href: 'https://api.dataforsyningen.dk/adgangsadresser/0a3f507a-e175-32b8-e044-0003ba298018',
      },
    ])
  }, [])

  const handleDeleteClick = () => {
    console.log('delete')
  }

  const handleAddClick = () => {
    console.log('add')
  }

  return (
    <>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">My Addresses</Navbar.Brand>
      </Navbar>
      <Container fluid="md">
        {loading && (
          <Spinner animation="border" role="status">
            <span className="sr-only">Loading...</span>
          </Spinner>
        )}

        {!loading &&
          tenancies &&
          tenancies.length &&
          tenancies.map((tenancy) => (
            <Row className="mt-1 align-items-center" key={tenancy.id}>
              <Col>{tenancy.tekst}</Col>
              <Col md="auto">
                <Button variant="danger" onClick={handleDeleteClick}>
                  <XLg />
                </Button>
              </Col>
            </Row>
          ))}

        {!loading && tenancies && tenancies.length === 0 && (
          <Row>
            <Col>You have no tenancies</Col>
          </Row>
        )}
      </Container>
      <FabButton onClick={handleAddClick}>
        <PlusLg />
      </FabButton>
    </>
  )
}
export default OverView
