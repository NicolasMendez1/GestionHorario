import { Profesor } from '../entities/Profesor';
import profesores from '../data/profesores.json';

export class ProfesorRepository {
    private profesores: Profesor[] = profesores;

    getAll(): Profesor[] {
        return this.profesores;
    }

    getById(codigo: number): Profesor | undefined {
        return this.profesores.find(profesor => profesor.codigo === codigo);
    }

    create(profesor: Profesor): void {
        this.profesores.push(profesor);
    }

    update(profesor: Profesor): void {
        const index = this.profesores.findIndex(p => p.codigo === profesor.codigo);
        if (index !== -1) {
            this.profesores[index] = profesor;
        }
    }

    delete(codigo: number): void {
        const index = this.profesores.findIndex(profesor => profesor.codigo === codigo);
        if (index !== -1) {
            this.profesores.splice(index, 1);
        }
    }
} 