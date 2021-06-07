import React, { useState, useEffect, lazy, Suspense, useRef, useContext } from 'react'
import styled from '@emotion/styled'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import Navbar from 'react-bootstrap/Navbar'
import Spinner from 'react-bootstrap/Spinner'
import Pagination from 'react-bootstrap/Pagination'
import { PlusLg, XLg } from 'react-bootstrap-icons'
import { deleteTenancyFromStorage, getTenanciesFromStorage } from '../lib/backend'
import { TenancyContext, SET_TENANCIES, DELETE_TENANCY } from '../contexts/TenancyContext'
import { Tenancy } from '../types/global'

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
  const items_per_page = parseInt(process.env.REACT_APP_NUMBER_OF_ITEMS_IN_TENANCY_LIST || '10')
  const { tenancies, dispatch } = useContext(TenancyContext)
  const [items, setItems] = useState<Tenancy[]>()

  const [loading, setLoading] = useState(true)
  const [page_count, setPageCount] = useState(1)
  const [current_page_index, setCurrentPageIndex] = useState(1)

  const [show_add_modal, setShowAddModal] = useState(false)
  const is_mounted = useRef(false)

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

  const getItems = () => {
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
        <Navbar.Brand>My Tenancies</Navbar.Brand>
      </Navbar>
      <Container fluid="md">
        {loading && (
          <Spinner animation="border" role="status">
            <span className="sr-only">Loading...</span>
          </Spinner>
        )}

        {!loading && items && items.length > 0 && (
          <>
            {items.map((tenancy) => (
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
            {page_count > 1 && (
              <>
                <br />
                <Pagination>{getItems()}</Pagination>
              </>
            )}
          </>
        )}

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
