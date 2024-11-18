import { Sala } from '../../entities/Sala';
import salaRepository from '../../repositories/SalaRepository';
import './Sala.css';

interface TarjetaSalaProps {
    sala: Sala;
}

export const TarjetaSala: React.FC<TarjetaSalaProps> = ({ sala }) => {
    const handleEliminar = () => {
        salaRepository.delete(sala.codigo);
    };

    return (
        <div className="sala-card">
            <h3>{sala.nombre}</h3>
            <div className="sala-details">
                <p><strong>Código:</strong> {sala.codigo}</p>
                <p><strong>Capacidad:</strong> {sala.capacidad} estudiantes</p>
                <p><strong>Tipo:</strong> {sala.esLaboratorio ? 'Laboratorio' : 'Sala Regular'}</p>
                <button onClick={handleEliminar}>Eliminar</button>
            </div>
        </div>
    );
}; 