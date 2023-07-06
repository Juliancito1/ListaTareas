import { ListGroup } from "react-bootstrap";
import ItemTarea from "./ItemTarea";
import { useEffect, useState } from "react";
import { obtenerTareas } from "../helpers/helpers";

const ListaTareas = ({tareas,setTareas}) => {

  
    return (
    <ListGroup>
      {
        tareas.map((tarea) => <ItemTarea tarea={tarea} key={tarea._id} setTareas={setTareas}></ItemTarea>)
      }
    </ListGroup>
    );
};

export default ListaTareas;