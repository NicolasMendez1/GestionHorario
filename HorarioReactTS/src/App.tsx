import './App.css'
import { ListaCursos } from './components/Curso/ListaCursos'

function App() {

  return (
    <div style={{display: 'flex', flexDirection: 'row'}}>
      <ListaCursos />
      <ListaCursos />
    </div>
  )
}

export default App
