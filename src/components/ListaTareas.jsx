import { ListGroup } from "react-bootstrap";
import ItemTarea from "./ItemTarea";
import { useEffect, useState } from "react";
import { obtenerTareas } from "../helpers/helpers";

const ListaTareas = () => {
  const [tareas,setTareas] = useState([])

  useEffect(()=>{
    obtenerTareas().then((respuesta) =>{
      if(respuesta)
      {
        setTareas(respuesta)
      }
    })
  },[])
    return (
    <ListGroup>
      {
        tareas.map((tarea) => <ItemTarea tarea={tarea} key={tarea.id} setTareas={setTareas}></ItemTarea>)
      }
    </ListGroup>
    );
};

export default ListaTareas;