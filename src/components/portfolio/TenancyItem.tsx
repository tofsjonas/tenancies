import React, { useContext, useEffect, useState } from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom'
import { TenancyContext, DELETE_TENANCY } from '../../contexts/TenancyContext'
import { Tenancy } from '../../types/global'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import Breadcrumb from 'react-bootstrap/Breadcrumb'
import { XLg } from 'react-bootstrap-icons'
import { useTranslation } from 'react-i18next'

import Image from 'react-bootstrap/Image'

import EditTenancy from '../EditTenancy'
import styled from '@emotion/styled'
import { deleteTenancyFromStorage } from '../../lib/backend'

const MyCrumb = styled(Breadcrumb)`
  ol {
    background-color: transparent;
  }
`
type TheItemProps = {
  item: Tenancy
}

const TheItem = ({ item }: TheItemProps) => {
  // const url = `https://maps.googleapis.com/maps/api/streetview?size=400x400&location=${item.adgangsadresse.y},${item.adgangsadresse.x}&fov=70&pitch=0&key=${process.env.REACT_APP_GOOGLE_API_KEY}`
  const url = `https://via.placeholder.com/500`
  const { dispatch } = useContext(TenancyContext)
  const navigate = useNavigate()

  /**
   * @todo make it purdier than window.confirm
   */
  const handleDeleteClick = () => {
    if (window.confirm('Are you sure?')) {
      deleteTenancyFromStorage(item.adgangsadresse.id)
        .then(() => {
          dispatch({
            type: DELETE_TENANCY,
            payload: item.adgangsadresse.id,
          })
          navigate('tenancies')
        })
        .catch((err) => {
          console.log(err)
        })
    }
  }

  return (
    <Container>
      <Row>
        <Col>
          <h1>{item.tekst}</h1>
        </Col>
      </Row>
      <Row>
        <Col lg>
          <Image
            // crossOrigin="anonymous"
            width="500"
            height="500"
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
            <XLg /> Delete Tenancy
          </Button>
        </Col>
      </Row>
    </Container>
  )
}

const TenancyItem = () => {
  const { id } = useParams()
  const { t } = useTranslation()
  const { tenancies } = useContext(TenancyContext)

  const [item, setItem] = useState<Tenancy | null>(null)
  const [error, setError] = useState('')

  useEffect(() => {
    const item = tenancies.filter((obj) => obj.adgangsadresse.id === id)[0]
    // console.log(item)
    if (item) {
      setItem(item)
    } else {
      setError('Item not found :(')
    }

    // console.log(id, item, tenancies)
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
