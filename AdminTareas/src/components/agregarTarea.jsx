import { useState } from "react"


export default function Agregar(){

    const [tarea, setTarea]= useState("");
    const tomarTarea = (evento)=>{
        
        const tomar = evento.target.value;
        setTarea(tomar)

    }

    const agregarTarea = (e)=>{
        e.preventDefault();
        AudioDestinationNode(tarea)
        setTarea("")

    }
    return(
        <>
            <section>
                <label htmlFor="tarea">Agregar una tarea</label>
                <br />
                <input type="text" value={tarea} onChange={evento=>tomarTarea(evento)} id="tarea"/>
            </section>
            <section>
                <button onClick={agregarTarea}>+</button>
            </section>
            <p>{tarea}</p>
        </>
    )
}
