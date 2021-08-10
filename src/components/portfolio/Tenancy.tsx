import React, { useContext, useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { TenancyContext } from 'contexts/TenancyContext'
import { Tenancy as TenancyType } from 'types/global'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Breadcrumb from 'react-bootstrap/Breadcrumb'
import { useTranslation } from 'react-i18next'

import styled from '@emotion/styled'
import TenancyDetails from './TenancyDetails'

const MyCrumb = styled(Breadcrumb)`
  ol {
    background-color: transparent;
  }
`

const Tenancy = () => {
  const { id } = useParams()
  const { t } = useTranslation()
  const { tenancies } = useContext(TenancyContext)

  const [item, setItem] = useState<TenancyType | null>(null)
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
      {item && <TenancyDetails item={item} />}
    </>
  )
}
export default Tenancy
