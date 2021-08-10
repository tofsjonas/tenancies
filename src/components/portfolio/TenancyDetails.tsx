import React, { useContext, useEffect, useState, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { TenancyContext, DELETE_TENANCY } from 'contexts/TenancyContext'
import { Tenancy as TenancyType, DB_ID } from 'types/global'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import Spinner from 'react-bootstrap/Spinner'
import { XLg } from 'react-bootstrap-icons'
import { useTranslation } from 'react-i18next'
import { useAlert } from 'react-bootstrap-hooks-alert'

import Image from 'react-bootstrap/Image'

import EditTenancy from './EditTenancy'
import styled from '@emotion/styled'
import { deleteTenancyFromStorage } from 'lib/storage'
import { AuthContext } from 'contexts/AuthContext'

const ItemContainer = styled(Container)`
  img {
    max-width: 85vw;
  }
  margin-bottom: 40px;
`

type TenancyDetailsProps = {
  item: TenancyType
}

const TenancyDetails = ({ item }: TenancyDetailsProps) => {
  const url =
    process.env.NODE_ENV === 'production'
      ? `https://maps.googleapis.com/maps/api/streetview?size=400x400&location=${item.y},${item.x}&fov=70&pitch=0&key=${process.env.REACT_APP_GOOGLE_API_KEY}`
      : `https://via.placeholder.com/500`
  const { t } = useTranslation()
  const { success } = useAlert()
  const { user } = useContext(AuthContext)

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
      deleteTenancyFromStorage(item.db_id as DB_ID, user)
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

export default TenancyDetails
