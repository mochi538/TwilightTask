/* import { useState } from 'react';

    const Tarea = ({})=>{
        const [tareaEdit, setTareaEdit] = useState(task.task);
        
        const editTsk = (e) =>{
            e.stopPropagation();
            
        }
        const completeTsk = ()=>{
           
        }
        const updateTsk = ()=>{
            ( tareaEdit);
        }
        const cambio = (e)=>{
            setTareaEdit(e.target.value);
        }
        const deleteTsk = (e) =>{
            e.stopPropagation();
            
        }
    
    
    return(
        
            <section className={`${task.completed ? "completed": ""}`} onClick={completeTsk}>
                {task.isEditing ? (
                    <form onSubmit={updateTsk}>
                        <input type="text" value={tareaEdit} onChange={cambio} />
                        <button type='submit'>Guardar</button>
                    </form>
                ):(
                    <p>{task.task}</p>
                )}
                <section className='icons'>
                    <p onClick={editTsk}>icon 1</p>
                    <p onClick={deleteTsk}>icon2</p>
                </section>
            </section>
        
    )
};
 */