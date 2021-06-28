import React, { useState, useContext, useRef, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Spinner from 'react-bootstrap/Spinner'
import Form from 'react-bootstrap/Form'
import { addTenancyToStorage, getAddressInfoFromDAWA } from '../../lib/backend'
import { DAWATenancy } from '../../types/global'
import { AsyncTypeahead } from 'react-bootstrap-typeahead'
import { ADD_TENANCY, TenancyContext } from '../../contexts/TenancyContext'

import { useTranslation } from 'react-i18next'

type AddTenancyProps = {
  hideModal: () => void
}

const AddTenancy = ({ hideModal }: AddTenancyProps) => {
  const { t } = useTranslation()
  const { dispatch } = useContext(TenancyContext)
  const navigate = useNavigate()
  const is_mounted = useRef(false)
  const [is_loading, setIsLoading] = useState(false)
  const [is_saving, setIsSaving] = useState(false)
  const [picked_tenancy, setPickedTenancy] = useState<DAWATenancy>()
  const [options, setOptions] = useState<DAWATenancy[]>([])

  useEffect(() => {
    is_mounted.current = true
    return () => {
      is_mounted.current = false
    }
  }, [])

  const handleDAWASearch = (query: string) => {
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

  const handleTenancyPick = (pick: DAWATenancy[]) => {
    setPickedTenancy(pick[0])
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    event.stopPropagation()
    if (picked_tenancy) {
      setIsSaving(true)

      const new_tenancy = {
        tekst: picked_tenancy.tekst,
        ...picked_tenancy.adgangsadresse,
      }

      addTenancyToStorage(new_tenancy)
        .then(() => {
          dispatch({
            type: ADD_TENANCY,
            payload: new_tenancy,
          })
          if (is_mounted.current) {
            setIsSaving(false)
            hideModal()
            navigate(`tenancy/${new_tenancy.id}`)
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
            onSearch={handleDAWASearch}
            onChange={handleTenancyPick}
            options={options}
            placeholder={t('add_tenancy_fetch_placeholder')}
            renderMenuItemChildren={(option: DAWATenancy) => <span>{option.tekst}</span>}
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