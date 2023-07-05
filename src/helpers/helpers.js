const URL_TAREAS = import.meta.env.VITE_API_TAREAS


export const crearTarea = async (tarea) => {
    try {
        const respuesta = await fetch(URL_TAREAS,{
            method: "POST",
            headers:{
                "Content-Type": "application/json"
            },
            body: JSON.stringify(tarea)
        })
        return respuesta
    } catch (error) {
        
    }
}

export const obtenerTareas = async () => {
    try {
        const respuesta = await fetch(URL_TAREAS)
        const listaTareas = respuesta.json()
        return listaTareas;
    } catch (error) {
        
    }
}

export const borrarTarea = async (id) => {
    try {
        const respuesta = await fetch(`${URL_TAREAS}/${id}`,{
            method: "DELETE"
        })
        return respuesta;
    } catch (error) {
        
    }
}

export const editarTarea = async (tarea,id) => {
    try {
        const respuesta = await fetch(URL_TAREAS+'/'+id,{
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(tarea)
        });
        return respuesta
    } catch (error) {
        console.log(error)
    }

}

export const obtenerTarea = async (id) => {
    try{
        const respuesta = await fetch(`${URL_TAREAS}/${id}`);
        const tarea = await respuesta.json();
        return tarea;

    }catch(error)
    {
        console.log(error)
    }
}