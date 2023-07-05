import { Button, ListGroup, Modal } from "react-bootstrap";
import { borrarTarea, obtenerTareas } from "../helpers/helpers";
import { useState } from "react";
const ItemTarea = ({ tarea, setTareas }) => {
  const eliminarTarea = () => {
    borrarTarea(tarea._id).then((respuesta) => {
      if (respuesta.status === 200) {
        obtenerTareas().then((respuesta) => {
          setTareas(respuesta);
        });
      }
    });
  };
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <ListGroup.Item className="d-flex my-3 justify-content-between">
      <h6>{tarea.tarea}</h6>
      <div>
        <Button variant="danger" onClick={eliminarTarea}>
          Borrar
        </Button>
        <Button className="ms-md-3" variant="warning">
          Editar
        </Button>
      </div>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          I will not close if you click outside me. Don not even try to press
          escape key.
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary">Understood</Button>
        </Modal.Footer>
      </Modal>
    </ListGroup.Item>
  );
};

export default ItemTarea;
