import { useState, useEffect } from 'react';
import { Sala } from '../../entities/Sala';
import salaRepository from '../../repositories/SalaRepository';
import { TarjetaSala } from './TarjetaSala';
import './Sala.css';

export const ListaSalas = () => {
    const [salas, setSalas] = useState<Sala[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        cargarSalas();
    }, []);

    useEffect(() => {
        salaRepository.subscribe(cargarSalas);
    }, []);

    const cargarSalas = () => {
        try {
            const salasData = salaRepository.getAll();
            setSalas([...salasData]);
        } catch (error) {
            console.error('Error al cargar las salas:', error);
        } finally {
            setLoading(false);
        }
    };

    const agregarSala = () => {
        salaRepository.create({
            codigo: `S${Math.floor(Math.random() * 1000)}`,
            nombre: 'Nueva Sala',
            capacidad: 30,
            esLaboratorio: false
        });
    }

    if (loading) {
        return <div>Cargando salas...</div>;
    }

    return (
        <div className="salas-container">
            <h2>Salas Disponibles</h2>
            <button onClick={agregarSala}>Agregar Sala</button>
            <div className="salas-grid">
                {salas.map((sala) => (
                    <TarjetaSala key={sala.codigo} sala={sala} />
                ))}
            </div>
        </div>
    );
}; 