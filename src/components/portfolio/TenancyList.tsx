import React, { useState, useEffect } from 'react'
import { Tenancy } from '../../types/global'
import Pagination from 'react-bootstrap/Pagination'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'

import { useNavigate } from 'react-router-dom'

import styled from '@emotion/styled'
import { CaretRightFill } from 'react-bootstrap-icons'

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
      {items && items.length > 0 && (
        <>
          {items.map((tenancy) => (
            <MyRow
              className="mt-1 align-items-center"
              key={tenancy.tekst}
              onClick={() => {
                navigate(`/tenancy/${tenancy.adgangsadresse.id}`)
              }}
            >
              <Col>{tenancy.tekst}</Col>
              <Col md="auto">
                <CaretRightFill />
              </Col>
            </MyRow>
          ))}
          {page_count > 1 && (
            <>
              <br />
              <Pagination>{getPaginationItems()}</Pagination>
            </>
          )}
        </>
      )}
      {items && items.length === 0 && (
        <Row className="mt-1 align-items-center">
          <Col>
            <br />
            Search result empty :(
          </Col>
        </Row>
      )}
    </Container>
  )
}
export default TenancyList