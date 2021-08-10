import React, { useState, useEffect } from 'react'
import { Tenancy } from '../../types/global'
import Pagination from 'react-bootstrap/Pagination'
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

const ItemList = ({ tenancies }: TenancyListProps) => {
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
          <Col className="d-sm-none">{item.adresseringsvejnavn}</Col>
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

const TenancyList = ({ tenancies }: TenancyListProps) => {
  const items_per_page = parseInt(process.env.REACT_APP_NUMBER_OF_ITEMS_IN_TENANCY_LIST || '10')
  const [items, setItems] = useState<Tenancy[]>()
  const [page_count, setPageCount] = useState(1)
  const [current_page_index, setCurrentPageIndex] = useState(1)

  const handleClick = (index: number) => {
    setCurrentPageIndex(index)
  }

  useEffect(() => {
    if (current_page_index > 1 && current_page_index > page_count) {
      setCurrentPageIndex(current_page_index - 1)
    }
  }, [current_page_index, page_count])

  useEffect(() => {
    const start = (current_page_index - 1) * items_per_page
    const end = current_page_index * items_per_page
    setItems(tenancies.slice(start, end))
  }, [current_page_index, tenancies, items_per_page])

  useEffect(() => {
    const count = Math.ceil(tenancies.length / items_per_page)
    if (count > 0) {
      setPageCount(count)
    }
  }, [tenancies, items_per_page])

  const getPaginationItems = () => {
    const items = []
    for (let number = 1; number <= page_count; number++) {
      items.push(
        <Pagination.Item
          key={number}
          active={number === current_page_index}
          onClick={() => {
            handleClick(number)
          }}
        >
          {number}
        </Pagination.Item>,
      )
    }
    return items
  }

  return (
    <Container>
      {items && items.length === 0 && (
        <Row className="mt-1 align-items-center">
          <Col>
            <br />
            Search result empty :(
          </Col>
        </Row>
      )}
      {items && items.length > 0 && (
        <Row className="mt-1" style={{ minHeight: 460 }}>
          <Col>
            <ItemList tenancies={items} />
          </Col>
        </Row>
      )}

      {page_count > 1 && (
        <Row className="mt-1">
          <Col>
            <hr />
            <Pagination className="d-flex justify-content-center">{getPaginationItems()}</Pagination>
          </Col>
        </Row>
      )}
    </Container>
  )
}

export default TenancyList
