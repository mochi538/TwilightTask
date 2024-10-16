/* import Tarea from './components/tarea.jsx' */
import './App.css'
import Agregar from './components/agregarTarea.jsx'

function App() {
  return (
    <>
    <section className='TasksList'>
      <h1>Lista de Tareas</h1>
      <section className=''>
        {/* <Tarea/> */}
      </section>
    </section>

    <section>
      <Agregar/>
    </section>
    <img src="https://derpicdn.net/img/2022/6/24/2893693/full.gif" alt="" />
    </>
    
  )
}

export default App
