import React, { useState, useContext, useRef, useEffect } from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Spinner from 'react-bootstrap/Spinner'
import Form from 'react-bootstrap/Form'
import { addTenancyToStorage, getAddressInfoFromDAWA } from '../lib/backend'
import { Tenancy } from '../types/global'
import { AsyncTypeahead } from 'react-bootstrap-typeahead'
import { ADD_TENANCY, TenancyContext } from '../contexts/TenancyContext'

import { useTranslation } from 'react-i18next'

type AddTenancyProps = {
  hideModal: () => void
}

const AddTenancy = ({ hideModal }: AddTenancyProps) => {
  const { t } = useTranslation()
  const { dispatch } = useContext(TenancyContext)

  const is_mounted = useRef(false)

  useEffect(() => {
    is_mounted.current = true
    return () => {
      is_mounted.current = false
    }
  }, [])

  const [is_loading, setIsLoading] = useState(false)
  const [is_saving, setIsSaving] = useState(false)

  const [picked_tenancy, setPickedTenancy] = useState<Tenancy>()
  const [options, setOptions] = useState<Tenancy[]>([])

  const handleSearch = (query: string) => {
    setIsLoading(true)
    getAddressInfoFromDAWA({
      query,
      success: (data) => {
        setOptions(data)
        setIsLoading(false)
      },
      fail: (err) => {
        setIsLoading(false)
        console.log(err)
      },
    })
  }

  const handleTenancyPick = (pick: Tenancy[]) => {
    setPickedTenancy(pick[0])
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault()
    event.stopPropagation()
    if (picked_tenancy) {
      setIsSaving(true)
      addTenancyToStorage(picked_tenancy)
        .then((data) => {
          dispatch({
            type: ADD_TENANCY,
            payload: data,
          })
          if (is_mounted.current) {
            setIsSaving(false)
            hideModal()
          }
        })
        .catch((err) => {
          if (is_mounted.current) {
            setIsSaving(false)
          }
          console.log(err)
        })
    }
  }

  const filterBy = () => true

  return (
    <Modal show={true} onHide={hideModal}>
      <Form onSubmit={handleSubmit}>
        <Modal.Header closeButton>
          <Modal.Title>{t('add_tenancy_modal_title')}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {t('add_tenancy_start_typing_to_fetch')}
          <AsyncTypeahead
            filterBy={filterBy}
            id="async-tenancies"
            isLoading={is_loading}
            labelKey="tekst"
            minLength={3}
            onSearch={handleSearch}
            onChange={handleTenancyPick}
            options={options}
            placeholder={t('add_tenancy_fetch_placeholder')}
            renderMenuItemChildren={(option: Tenancy) => <span>{option.tekst}</span>}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={hideModal}>
            {t('add_tenancy_cancel_button')}
          </Button>
          <Button
            variant={picked_tenancy ? 'primary' : 'secondary'}
            type="submit"
            disabled={!picked_tenancy || is_saving}
          >
            {is_saving && (
              <>
                <Spinner animation="border" role="status" size="sm">
                  <span className="sr-only">Loading...</span>
                </Spinner>{' '}
                {t('add_tenancy_save_button_is_saving')}
              </>
            )}
            {!is_saving && t('add_tenancy_save_button')}
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  )
}
export default AddTenancy
