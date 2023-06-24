import { Button, ListGroup } from "react-bootstrap";
import { borrarTarea, obtenerTareas } from "../helpers/helpers";

const ItemTarea = ({tarea,setTareas}) => {
    const eliminarTarea = () => {
        borrarTarea(tarea.id).then(respuesta => {
            if(respuesta.status===200)
            {
                obtenerTareas().then((respuesta)=>{
                    setTareas(respuesta)
                })
            }
        })
    }
    return (
        <ListGroup.Item className="d-flex my-3 justify-content-between">
            <h6>{tarea.tarea}</h6>
            <Button variant="danger" onClick={eliminarTarea}>Borrar</Button>
        </ListGroup.Item>
    );
};

export default ItemTarea;