import {Form, Button} from 'react-bootstrap';
import ListaTareas from './ListaTareas';
import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { crearTarea, obtenerTareas } from '../helpers/helpers';
import Swal from 'sweetalert2';

const Formulario = () => {
    const{register,handleSubmit,formState: {errors},reset} = useForm()
    const [tareas,setTareas] = useState([])
    useEffect(() => {
      obtenerTareas().then((respuesta)=>{
        if(respuesta)
        {
          console.log(respuesta)
          setTareas(respuesta)
        }
        else{
          Swal.fire(
            'Se produjo un error al intentar cargar los datos',
            `Intente realizar esta operacion mas tarde`,
            'error');
        }
          //todo: resolver la situacion cuando no puedo realizar la conexion a la API
      })
  },[])
    const onSubmit = (tarea) => {
      console.log(tarea)
      crearTarea(tarea).then((respuesta)=>{
        if(respuesta.status===201)
        {
          Swal.fire(
            "Tarea Agregada",
            "La tarea fue agregada con éxito",
            "success"
            )
            obtenerTareas().then((respuesta) => {
              setTareas(respuesta)
            })
          reset()
        }
        else{
          console.log("error")
        }
      })
    }

    return (
        <section>
            <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Group className="mb-3" controlId="tarea">
        <Form.Control type="text" placeholder="Ingrese una tarea"{...register('tarea',{
          required: 'Ingrese una tarea'
        })} />
        <Form.Text className="text-danger">
                {errors.tarea?.message}
        </Form.Text>
      </Form.Group>
      <Button variant="success" type="submit">
        Enviar
      </Button>
    </Form>
    <ListaTareas tareas={tareas} setTareas={setTareas}></ListaTareas>
        </section>
    );
};

export default Formulario;