import React, { useState, useContext, useRef, useEffect } from 'react'
// import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Spinner from 'react-bootstrap/Spinner'
import Form from 'react-bootstrap/Form'
import { updateTenancyInStorage } from '../../lib/backend'
import { Tenancy } from '../../types/global'
import { UPDATE_TENANCY, TenancyContext } from '../../contexts/TenancyContext'
import { useForm } from 'react-hook-form'

import { useTranslation } from 'react-i18next'

type FormData = {
  size: number
  nbr_of_rooms: number
  utilities: string
  tenant_information: string
}

type EditTenancyProps = {
  tenancy: Tenancy
}

const EditTenancy = ({ tenancy }: EditTenancyProps) => {
  const { t } = useTranslation()
  const is_mounted = useRef(false)
  const { handleSubmit, register, formState } = useForm<FormData>({
    defaultValues: tenancy || {},
  })

  useEffect(() => {
    is_mounted.current = true
    return () => {
      is_mounted.current = false
    }
  }, [])

  const { dispatch } = useContext(TenancyContext)

  const [is_saving, setIsSaving] = useState(false)

  const onSubmit = (metadata: FormData) => {
    setIsSaving(true)
    const updated_tenancy: Tenancy = { ...tenancy, ...metadata }

    updateTenancyInStorage(updated_tenancy)
      .then((data) => {
        dispatch({
          type: UPDATE_TENANCY,
          payload: data,
        })
        if (is_mounted.current) {
          setIsSaving(false)
        }
      })
      .catch((err) => {
        if (is_mounted.current) {
          setIsSaving(false)
        }
        console.log(err)
      })
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Form.Group controlId="formBasicSize">
        {formState.isDirty && 'APA'}
        <Form.Label>{t('edit_tenancy_label_size')}</Form.Label>
        <Form.Control
          {...register('size')}
          type="number"
          step="0.1"
          placeholder={t('edit_tenancy_label_size_placeholder')}
        />
      </Form.Group>

      <Form.Group controlId="formBasicNbrOfRooms">
        <Form.Label>{t('edit_tenancy_label_nbr_of_rooms')}</Form.Label>
        <Form.Control
          {...register('nbr_of_rooms')}
          defaultValue={tenancy && tenancy.nbr_of_rooms}
          type="number"
          step="1"
          placeholder={t('edit_tenancy_label_nbr_of_rooms_placeholder')}
        />
      </Form.Group>

      <Form.Group controlId="formBasicUtilities">
        <Form.Label>{t('edit_tenancy_label_utilities')}</Form.Label>
        <Form.Control
          {...register('utilities')}
          defaultValue={tenancy && tenancy.utilities}
          as="textarea"
          rows={3}
          placeholder={t('edit_tenancy_label_utilities_placeholder')}
        />
      </Form.Group>

      <Form.Group controlId="formBasicTenantInformation">
        <Form.Label>{t('edit_tenancy_label_tenant_information')}</Form.Label>
        <Form.Control
          {...register('tenant_information')}
          defaultValue={tenancy && tenancy.tenant_information}
          as="textarea"
          rows={3}
          placeholder={t('edit_tenancy_label_tenant_information_placeholder')}
        />
      </Form.Group>
      <Button variant="primary" type="submit" disabled={!formState.isDirty}>
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
    </Form>
  )
}
export default EditTenancy
