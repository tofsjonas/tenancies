import React, { useState } from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import { getAddressInfoFromDawa } from '../lib/backend'
import { Tenancy } from '../types/global'
import { AsyncTypeahead } from 'react-bootstrap-typeahead'

type AddTenancyProps = {
  hideModal: () => void
}

const AddTenancy = ({ hideModal }: AddTenancyProps) => {
  const [isLoading, setIsLoading] = useState(false)
  const [picked_tenancy, setPickedTenancy] = useState<Tenancy>()
  const [options, setOptions] = useState<Tenancy[]>([])

  const handleSearch = (query: string) => {
    setIsLoading(true)
    getAddressInfoFromDawa({
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

  const filterBy = () => true

  return (
    <Modal show={true} onHide={hideModal}>
      <Form>
        <Modal.Header>
          <Modal.Title>Add new Tenancy</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Start typing to fetch address info:
          <AsyncTypeahead
            filterBy={filterBy}
            id="async-tenancies"
            isLoading={isLoading}
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
            disabled={!picked_tenancy}
            onClick={hideModal}
          >
            Save Changes
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  )
}
export default AddTenancy
