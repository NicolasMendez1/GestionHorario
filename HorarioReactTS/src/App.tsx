import './App.css'
import { ListaCursos } from './components/Curso/ListaCursos'
import { ListaProfesores } from './components/Profesor/ListaProfesores'

function App() {

  return (
    <div style={{display: 'flex', flexDirection: 'row'}}>
      <ListaCursos />
      <ListaProfesores />
    </div>
  )
}

export default App
