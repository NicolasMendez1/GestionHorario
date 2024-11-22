import './App.css'
import { ListaCursos } from './components/Curso/ListaCursos'
import { ListaProfesores } from './components/Profesor/ListaProfesores'
import { ListaSalas } from './components/Sala/ListaSalas'

function App() {

  return (
    <div style={{display: 'flex', flexDirection: 'row'}}>
      <ListaCursos />
      <ListaProfesores />
      <ListaSalas />
    </div>
  )
}

export default App
