import React, { useState, useContext } from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Spinner from 'react-bootstrap/Spinner'
import Form from 'react-bootstrap/Form'
import { addTenancyToStorage, getAddressInfoFromDAWA } from '../lib/backend'
import { Tenancy } from '../types/global'
import { AsyncTypeahead } from 'react-bootstrap-typeahead'
import { ADD_TENANCY, TenancyContext } from '../contexts/TenancyContext'

type AddTenancyProps = {
  hideModal: () => void
}

const AddTenancy = ({ hideModal }: AddTenancyProps) => {
  const { dispatch } = useContext(TenancyContext)

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

          setIsSaving(false)
          hideModal()
        })
        .catch((err) => {
          setIsSaving(false)
          console.log(err)
        })
    }
  }

  const filterBy = () => true

  return (
    <Modal show={true} onHide={hideModal}>
      <Form onSubmit={handleSubmit}>
        <Modal.Header>
          <Modal.Title>Add new Tenancy</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Start typing to fetch address info:
          <AsyncTypeahead
            filterBy={filterBy}
            id="async-tenancies"
            isLoading={is_loading}
            labelKey="tekst"
            minLength={3}
            onSearch={handleSearch}
            onChange={handleTenancyPick}
            options={options}
            placeholder="Search for an address..."
            renderMenuItemChildren={(option: Tenancy) => <span>{option.tekst}</span>}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={hideModal}>
            Close
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
                ...saving
              </>
            )}
            {!is_saving && 'Save Changes'}
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  )
}
export default AddTenancy
