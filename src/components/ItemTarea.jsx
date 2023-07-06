import { Button, Form, ListGroup, Modal } from "react-bootstrap";
import { borrarTarea, editarTarea, obtenerTarea, obtenerTareas } from "../helpers/helpers";
import { useState , useEffect} from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
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

  const{register,handleSubmit,formState: {errors},reset,setValue} = useForm()

   const editar = (id) => {
    useEffect(()=>{
      obtenerTarea(id).then((respuesta) => {
        if(respuesta)
        {
          setValue("tarea",respuesta.tarea)
        }
    })
    })
  }

  const onSubmit = (tareaEditada) => {
    editarTarea(tareaEditada,tarea._id).then((respuesta) => {
      if(respuesta && respuesta.status === 200)
      {
        Swal.fire(
          'Tarea actualizada',
          'La Tarea fue actualizada',
          'success'
        )
        obtenerTareas().then((respuesta) => {
          if(respuesta)
          {
            setTareas(respuesta)
          }
        })
      }else{
        Swal.fire(
          'Se produjo un error al intentar actualizar los datos',
          'error');
      }
    })
  };
  
  return (
    <ListGroup.Item className="d-flex my-3 justify-content-between">
      <h6>{tarea.tarea}</h6>
      <div>
        <Button variant="danger" onClick={eliminarTarea}>
          Borrar
        </Button>
        <Button className="ms-md-3" onClick={editar(tarea._id)} onClickCapture={handleShow}  variant="warning">
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
          <Modal.Title>Editar Tarea</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit(onSubmit)}>
          <Form.Group className="mb-3" controlId="tarea">
        <Form.Control type="text" placeholder="Ingrese una tarea" {...register('tarea',{
          required: 'Ingrese una tarea'
        })}/>
        <Form.Text className="text-danger">
          {errors.tarea?.message}
        </Form.Text>
      </Form.Group>
      <div className="d-flex justify-content-end">
      <Button variant="warning" type="submit" onClick={handleClose}>Editar</Button>
      </div>
          </Form>
        </Modal.Body>
      </Modal>
    </ListGroup.Item>
  );
};

export default ItemTarea;
