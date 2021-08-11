// import React, { useState, useEffect, useContext } from 'react'
import React, { useState, useEffect, lazy, Suspense, useContext } from 'react'
import styled from '@emotion/styled'

import { Tenancy } from '../../types/global'
import Pagination from 'react-bootstrap/Pagination'
import { TenancyContext } from 'contexts/TenancyContext'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import TenancyList from './TenancyList'

import Button from 'react-bootstrap/Button'
import { PlusLg } from 'react-bootstrap-icons'
import MySpinner from '../MySpinner'
const AddTenancy = lazy(() => import('./AddTenancy'))

const FabButton = styled(Button)`
  width: 50px;
  height: 50px;
  border-radius: 50px;
  position: fixed;
  bottom: 20px;
  right: 20px;
`

const Tenancies = () => {
  const { tenancies } = useContext(TenancyContext)

  const items_per_page = parseInt(process.env.REACT_APP_NUMBER_OF_ITEMS_IN_TENANCY_LIST || '10')
  const [items, setItems] = useState<Tenancy[]>()
  const [page_count, setPageCount] = useState(1)
  const [current_page_index, setCurrentPageIndex] = useState(() => {
    return parseInt(sessionStorage.getItem('tenancy_page_index') || '1')
  })
  const [show_add_modal, setShowAddModal] = useState(false)

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

  const handlePaginationClick = (index: number) => {
    sessionStorage.setItem('tenancy_page_index', index + '')
    setCurrentPageIndex(index)
  }

  const handleCloseAddModal = () => {
    setShowAddModal(false)
  }

  const handleAddClick = () => {
    setShowAddModal(true)
  }

  const getPaginationItems = () => {
    const items = []
    for (let number = 1; number <= page_count; number++) {
      items.push(
        <Pagination.Item
          key={number}
          active={number === current_page_index}
          onClick={() => {
            handlePaginationClick(number)
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
        <Row className="mt-1" style={{ minHeight: 46 * items_per_page }}>
          <Col>
            <TenancyList tenancies={items} />
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
      <FabButton onClick={handleAddClick}>
        <PlusLg />
      </FabButton>
      <Suspense fallback={<MySpinner title="...loading modal..." />}>
        {show_add_modal && <AddTenancy hideModal={handleCloseAddModal} />}
      </Suspense>
    </Container>
  )
}

export default Tenancies
