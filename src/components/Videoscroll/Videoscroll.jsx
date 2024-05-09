
import './Videoscroll.css';


import React, { useState } from 'react';
import { Modal, Button } from 'bootstrap';

const VideoScroll = () => {
  const [showModal, setShowModal] = useState(false);

  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Abrir modal
      </Button>

      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal de ejemplo</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Este es un modal de ejemplo creado con Bootstrap 5 y React.
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cerrar
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Guardar cambios
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default VideoScroll;