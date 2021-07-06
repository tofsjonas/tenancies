import React, { useContext, useEffect, useState, useRef } from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom'
import { TenancyContext, DELETE_TENANCY } from '../../contexts/TenancyContext'
import { Tenancy } from '../../types/global'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import Breadcrumb from 'react-bootstrap/Breadcrumb'
import Spinner from 'react-bootstrap/Spinner'
import { XLg } from 'react-bootstrap-icons'
import { useTranslation } from 'react-i18next'
import { useAlert } from 'react-bootstrap-hooks-alert'

import Image from 'react-bootstrap/Image'

import EditTenancy from './EditTenancy'
import styled from '@emotion/styled'
import { deleteTenancyFromStorage } from '../../lib/backend'

const MyCrumb = styled(Breadcrumb)`
  ol {
    background-color: transparent;
  }
`
const ItemContainer = styled(Container)`
  img {
    max-width: 85vw;
  }
  margin-bottom: 40px;
`
type TheItemProps = {
  item: Tenancy
}

const TheItem = ({ item }: TheItemProps) => {
  const url =
    process.env.NODE_ENV === 'production'
      ? `https://maps.googleapis.com/maps/api/streetview?size=400x400&location=${item.y},${item.x}&fov=70&pitch=0&key=${process.env.REACT_APP_GOOGLE_API_KEY}`
      : `https://via.placeholder.com/500`
  const { t } = useTranslation()
  const { success } = useAlert()

  const [is_deleting, setIsDeleting] = useState(false)

  const { dispatch } = useContext(TenancyContext)
  const navigate = useNavigate()

  const is_mounted = useRef(false)

  useEffect(() => {
    is_mounted.current = true
    return () => {
      is_mounted.current = false
    }
  }, [])

  /**
   * @todo make it purdier than window.confirm
   */
  const handleDeleteClick = () => {
    setIsDeleting(true)
    if (window.confirm('Are you sure?')) {
      deleteTenancyFromStorage(item.id)
        .then(() => {
          dispatch({
            type: DELETE_TENANCY,
            payload: item.id,
          })
          success(t('tenancy_was_deleted_confirmation'))
          navigate('tenancies')

          if (is_mounted.current) {
            setIsDeleting(false)
          }
        })
        .catch((err) => {
          setIsDeleting(false)
          console.log(err)
        })
    } else {
      setIsDeleting(false)
    }
  }

  return (
    <ItemContainer>
      <Row>
        <Col>
          <h1>{item.tekst}</h1>
        </Col>
      </Row>
      <Row>
        <Col lg>
          <Image
            crossOrigin={process.env.NODE_ENV === 'production' ? 'anonymous' : undefined}
            width="500"
            src={url}
            rounded
          />
        </Col>
        <Col lg>
          <EditTenancy tenancy={item} />
        </Col>
      </Row>
      <Row>
        <Col>
          <br />
          <Button variant="danger" onClick={handleDeleteClick}>
            {is_deleting && (
              <>
                <Spinner animation="border" role="status" size="sm"></Spinner>{' '}
                {t('edit_tenancy_delete_button_is_deleting')}
              </>
            )}
            {!is_deleting && (
              <>
                <XLg /> {t('edit_tenancy_delete_button')}
              </>
            )}
          </Button>
        </Col>
      </Row>
    </ItemContainer>
  )
}

const TenancyItem = () => {
  const { id } = useParams()
  const { t } = useTranslation()
  const { tenancies } = useContext(TenancyContext)

  const [item, setItem] = useState<Tenancy | null>(null)
  const [error, setError] = useState('')

  useEffect(() => {
    const item = tenancies.filter((obj) => obj.id === id)[0]
    if (item) {
      setError('')
      setItem(item)
    } else {
      setItem(null)
      setError('Item not found :(')
    }
  }, [tenancies, id])

  return (
    <>
      <MyCrumb>
        <Breadcrumb.Item linkAs={Link} linkProps={{ to: '/' }}>
          {t('tenancy_item_breadcrumb_back_to_list')}
        </Breadcrumb.Item>
        <Breadcrumb.Item active>
          {error && 'ERROR'}
          {item && item.tekst}
        </Breadcrumb.Item>
      </MyCrumb>
      {error && (
        <Container>
          <Row>
            <Col>{error}</Col>
          </Row>
        </Container>
      )}
      {item && <TheItem item={item} />}
    </>
  )
}
export default TenancyItem
