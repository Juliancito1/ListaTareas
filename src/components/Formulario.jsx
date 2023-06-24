import {Form, Button} from 'react-bootstrap';
import ListaTareas from './ListaTareas';
import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { crearTarea } from '../helpers/helpers';

const Formulario = () => {
    const{register,handleSubmit,formState: {errors},reset} = useForm()

    const onSubmit = (tarea) => {
      console.log('submit')
      crearTarea(tarea).then((respuesta)=>{
        if(respuesta.status===201)
        {
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
    <ListaTareas></ListaTareas>
        </section>
    );
};

export default Formulario;