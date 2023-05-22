import { ListGroup } from "react-bootstrap";
import ItemTarea from "./ItemTarea";

const ListaTareas = ({listadoTareas, borrarTarea}) => {
    return (
    <ListGroup>
      {
        listadoTareas.map((tarea,indice) => <ItemTarea key={indice} tarea={tarea} borrarTarea={borrarTarea}></ItemTarea>)
      }
    </ListGroup>
    );
};

export default ListaTareas;