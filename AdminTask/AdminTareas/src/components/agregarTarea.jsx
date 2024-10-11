export default function Agregar(){
    return(
        <>
            <section>
                <label htmlFor="tarea">Agregar una tarea</label>
                <br />
                <input type="text" id="tarea"/>
            </section>
            <section>
                <button className="">+</button>
            </section>
        </>
    )
}