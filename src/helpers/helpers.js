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