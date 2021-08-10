import React from 'react' //  useState, useEffect
import { Tenancy } from '../../types/global'
// import Pagination from 'react-bootstrap/Pagination'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'

import Container from 'react-bootstrap/Container'
import { useNavigate } from 'react-router-dom'

import styled from '@emotion/styled'
import { CaretRightFill } from 'react-bootstrap-icons'

const MyContainer = styled(Container)``
const MyRow = styled(Row)`
  line-height: 40px;

  &:hover {
    color: white;
    background-color: rgba(26, 10, 168, 0.6);
    cursor: pointer;
  }
`
type TenancyListProps = {
  tenancies: Tenancy[]
}

const TenancyList = ({ tenancies }: TenancyListProps) => {
  const navigate = useNavigate()
  return (
    <MyContainer>
      {tenancies.map((item) => (
        <MyRow
          className="mt-1 align-items-center"
          key={item.tekst}
          onClick={() => {
            navigate(`/tenancy/${item.id}`)
          }}
        >
          <Col xs="auto">
            <Image
              crossOrigin={process.env.NODE_ENV === 'production' ? 'anonymous' : undefined}
              width="40"
              src={
                process.env.NODE_ENV === 'production'
                  ? `https://maps.googleapis.com/maps/api/streetview?size=40x40&location=${item.y},${item.x}&fov=70&pitch=0&key=${process.env.REACT_APP_GOOGLE_API_KEY}`
                  : `https://via.placeholder.com/40`
              }
              roundedCircle
            />
          </Col>
          <Col className="d-sm-none">
            {item.adresseringsvejnavn} {item.husnr}, {item.postnrnavn}
          </Col>
          <Col className="d-none d-sm-block">{item.tekst}</Col>
          <Col xs="auto">
            <CaretRightFill />
          </Col>
        </MyRow>
      ))}
      <Row>
        <Col>{/* <TenancyItemList tenancies={tenancies} /> */}</Col>
      </Row>
    </MyContainer>
  )
}

export default TenancyList
