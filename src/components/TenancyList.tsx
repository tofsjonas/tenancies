import React, { useContext, useState, useEffect, Suspense, lazy } from 'react'
import { Tenancy } from '../types/global'
// import { deleteTenancyFromStorage } from '../lib/backend'
// import { TenancyContext, DELETE_TENANCY } from '../contexts/TenancyContext'
import Pagination from 'react-bootstrap/Pagination'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
// import Button from 'react-bootstrap/Button'
// import { Image, FileEarmarkPlus, FileEarmarkTextFill, XLg } from 'react-bootstrap-icons'
// import StreetView from './StreetView'
import { useNavigate } from 'react-router-dom'

// const EditTenancy = lazy(() => import('./EditTenancy'))

type TenancyListProps = {
  tenancies: Tenancy[]
}

const TenancyList = ({ tenancies }: TenancyListProps) => {
  const navigate = useNavigate()

  const items_per_page = parseInt(process.env.REACT_APP_NUMBER_OF_ITEMS_IN_TENANCY_LIST || '10')
  // const { dispatch } = useContext(TenancyContext)
  const [items, setItems] = useState<Tenancy[]>()
  const [page_count, setPageCount] = useState(1)
  const [current_page_index, setCurrentPageIndex] = useState(1)
  // const [edit_tenancy, setEditTenancy] = useState<Tenancy | null>(null)
  // const [street_view_tenancy, setStreetViewTenancy] = useState<Tenancy | null>(null)

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
  // const handleDeleteClick = (id: string) => {
  //   if (window.confirm('Are you sure?')) {
  //     deleteTenancyFromStorage(id)
  //       .then(() => {
  //         dispatch({
  //           type: DELETE_TENANCY,
  //           payload: id,
  //         })
  //       })
  //       .catch((err) => {
  //         console.log(err)
  //       })
  //   }
  // }

  // const handleCloseStreetViewModal = () => {
  //   setStreetViewTenancy(null)
  // }

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
    <>
      {items && items.length > 0 && (
        <>
          {items.map((tenancy) => (
            <Row
              className="mt-1 align-items-center"
              key={tenancy.tekst}
              onClick={() => {
                navigate(`/tenancy/${tenancy.adgangsadresse.id}`)
              }}
            >
              <Col>{tenancy.tekst}</Col>
              {/* <Col md="auto">
                <Button
                  variant="primary"
                  onClick={() => {
                    setStreetViewTenancy(tenancy)
                  }}
                >
                  <Image />
                </Button>
                <Button
                  variant="primary"
                  onClick={() => {
                    setEditTenancy(tenancy)
                  }}
                >
                  {tenancy.metadata ? <FileEarmarkTextFill /> : <FileEarmarkPlus />}
                </Button>
                <Button
                  variant="danger"
                  onClick={() => {
                    handleDeleteClick(tenancy.adgangsadresse.id)
                  }}
                >
                  <XLg />
                </Button>
              </Col> */}
            </Row>
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

      {/* <Suspense fallback="loading...">
        {edit_tenancy && <EditTenancy tenancy={edit_tenancy} />}
        {street_view_tenancy && <StreetView tenancy={street_view_tenancy} hideModal={handleCloseStreetViewModal} />}
      </Suspense> */}
    </>
  )
}
export default TenancyList
