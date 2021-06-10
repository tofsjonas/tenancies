import React from 'react'
import { Tenancy } from '../types/global'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Image from 'react-bootstrap/Image'

type StreetViewProps = {
  hideModal: () => void
  tenancy: Tenancy
}

const StreetView = ({ hideModal, tenancy }: StreetViewProps) => {
  const url = `https://maps.googleapis.com/maps/api/streetview?size=400x400&location=${tenancy.adgangsadresse.y},${tenancy.adgangsadresse.x}&fov=70&pitch=0&key=${process.env.REACT_APP_GOOGLE_API_KEY}`
  return (
    <Modal show={true} onHide={hideModal}>
      <Modal.Header closeButton>
        <Modal.Title>{tenancy.tekst}</Modal.Title>
      </Modal.Header>
      <Modal.Body className="text-center">
        <Image width="400" height="400" src={url} rounded />
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={hideModal}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  )
}
export default StreetView
