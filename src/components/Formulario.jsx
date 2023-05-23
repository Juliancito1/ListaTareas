import {Form, Button} from 'react-bootstrap';
import ListaTareas from './ListaTareas';
import { useState, useEffect } from 'react';

const Formulario = () => {
    const [tarea, setTarea] = useState('');
    let tareasLocalstorage = JSON.parse(localStorage.getItem('listaTareas')) || []
    const [listadoTareas, setListadoTareas] = useState(tareasLocalstorage);

useEffect(() => {
  localStorage.setItem('listaTareas', JSON.stringify(listadoTareas))
}, [listadoTareas])

const handleSubmit = (e) => {
  e.preventDefault();
  setListadoTareas([...listadoTareas,tarea])
  setTarea('');
}

const borrarTarea = (nombreTarea) => {
  let arregloFiltrado = listadoTareas.filter((itemTarea) => itemTarea !== nombreTarea);
  setListadoTareas(arregloFiltrado);
}

    return (
        <section>
            <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3 d-flex" controlId="tarea">
        <Form.Control type="text" placeholder="Ingrese una tarea" onChange={(e) => setTarea(e.target.value)} 
        value= {tarea}/>
      <Button variant="success" type="submit">
        Enviar
      </Button>
      </Form.Group>
    </Form>
    <ListaTareas listadoTareas={listadoTareas} borrarTarea={borrarTarea}></ListaTareas>
        </section>
    );
};

export default Formulario;