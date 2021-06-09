import React, { useState, useContext } from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Spinner from 'react-bootstrap/Spinner'
import Form from 'react-bootstrap/Form'
import { updateTenancyInStorage } from '../lib/backend'
import { Tenancy } from '../types/global'
import { UPDATE_TENANCY, TenancyContext } from '../contexts/TenancyContext'

import { useTranslation } from 'react-i18next'

type tplotOptions = {
  [key: string]: string | number
}

type EditTenancyProps = {
  hideModal: () => void
  tenancy: Tenancy
}

const EditTenancy = ({ hideModal, tenancy }: EditTenancyProps) => {
  const { t } = useTranslation()

  const { dispatch } = useContext(TenancyContext)

  // const [is_loading, setIsLoading] = useState(false)
  const [is_saving, setIsSaving] = useState(false)

  // const [picked_tenancy, setPickedTenancy] = useState<Tenancy>()

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault()
    e.stopPropagation()

    const metadata: tplotOptions = {}
    const elements = (e.target as HTMLFormElement).querySelectorAll('input, textarea')

    let found = false

    for (let i = 0; i < elements.length; i++) {
      const element = elements[i] as HTMLInputElement
      const val = element.value.trim()
      if (val.length) {
        metadata[element.name] = val
        found = true
      }
    }

    const updated_tenancy: Tenancy = { ...tenancy, metadata }
    if (!found) {
      delete updated_tenancy.metadata
    }
    setIsSaving(true)

    updateTenancyInStorage(updated_tenancy)
      .then((data) => {
        dispatch({
          type: UPDATE_TENANCY,
          payload: data,
        })
        setIsSaving(false)
        hideModal()
      })
      .catch((err) => {
        setIsSaving(false)
        console.log(err)
      })

    console.log(updated_tenancy)
  }

  return (
    <Modal show={true} onHide={hideModal}>
      <Form onSubmit={handleSubmit}>
        <Modal.Header>
          <Modal.Title>{tenancy.tekst}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group controlId="formBasicSize">
            <Form.Label>{t('edit_tenancy_label_size')}</Form.Label>
            <Form.Control
              defaultValue={tenancy.metadata && tenancy.metadata.size}
              name="size"
              type="number"
              step="0.1"
              placeholder={t('edit_tenancy_label_size_placeholder')}
            />
          </Form.Group>

          <Form.Group controlId="formBasicNbrOfRooms">
            <Form.Label>{t('edit_tenancy_label_nbr_of_rooms')}</Form.Label>
            <Form.Control
              defaultValue={tenancy.metadata && tenancy.metadata.nbr_of_rooms}
              name="nbr_of_rooms"
              type="number"
              step="1"
              placeholder={t('edit_tenancy_label_nbr_of_rooms_placeholder')}
            />
          </Form.Group>

          <Form.Group controlId="formBasicUtilities">
            <Form.Label>{t('edit_tenancy_label_utilities')}</Form.Label>
            <Form.Control
              name="utilities"
              defaultValue={tenancy.metadata && tenancy.metadata.utilities}
              as="textarea"
              rows={3}
              placeholder={t('edit_tenancy_label_utilities_placeholder')}
            />
          </Form.Group>

          <Form.Group controlId="formBasicTenantInformation">
            <Form.Label>{t('edit_tenancy_label_tenant_information')}</Form.Label>
            <Form.Control
              defaultValue={tenancy.metadata && tenancy.metadata.tenant_information}
              name="tenant_information"
              as="textarea"
              rows={3}
              placeholder={t('edit_tenancy_label_tenant_information_placeholder')}
            />
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={hideModal}>
            {t('edit_tenancy_cancel_button')}
          </Button>
          <Button variant="primary" type="submit">
            {is_saving && (
              <>
                <Spinner animation="border" role="status" size="sm">
                  <span className="sr-only">Loading...</span>
                </Spinner>{' '}
                {t('edit_tenancy_save_button_is_saving')}
              </>
            )}
            {!is_saving && t('edit_tenancy_save_button')}
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  )
}
export default EditTenancy
