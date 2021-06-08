import React, { useContext, useState, useEffect } from 'react'
import { Tenancy } from '../types/global'
import { deleteTenancyFromStorage } from '../lib/backend'
import { TenancyContext, DELETE_TENANCY } from '../contexts/TenancyContext'
import Pagination from 'react-bootstrap/Pagination'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import { XLg } from 'react-bootstrap-icons'

type TenancyListProps = {
  tenancies: Tenancy[]
}

const TenancyList = ({ tenancies }: TenancyListProps) => {
  const items_per_page = parseInt(process.env.REACT_APP_NUMBER_OF_ITEMS_IN_TENANCY_LIST || '10')
  const { dispatch } = useContext(TenancyContext)
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

  return (
    <div className="TenancyList">
      {items && items.length > 0 && (
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
      {items && items.length === 0 && (
        <Row className="mt-1 align-items-center">
          <Col>
            <br />
            Search result empty :(
          </Col>
        </Row>
      )}
    </div>
  )
}
export default TenancyList
