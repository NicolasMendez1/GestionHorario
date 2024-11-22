import { Sala } from '../entities/Sala';
import salas from '../data/salas.json';

class SalaRepository {
    private salas: Sala[] = salas;
    subscribers: (() => void)[] = [];

    subscribe(callback: () => void): void {
        this.subscribers.push(callback);
    }

    private notifySubscribers(): void {
        this.subscribers.forEach(callback => {
            callback();
        });
    }

    getAll(): Sala[] {
        return this.salas;
    }

    getById(codigo: string): Sala | undefined {
        return this.salas.find(sala => sala.codigo === codigo);
    }

    create(sala: Sala): void {
        this.salas.push(sala);
        this.notifySubscribers();
    }

    update(sala: Sala): void {
        const index = this.salas.findIndex(s => s.codigo === sala.codigo);
        if (index !== -1) {
            this.salas[index] = sala;
            this.notifySubscribers();
        }
    }

    delete(codigo: string): void {
        const index = this.salas.findIndex(sala => sala.codigo === codigo);
        if (index !== -1) {
            this.salas.splice(index, 1);
            this.notifySubscribers();
        }
    }
}

const salaRepository = new SalaRepository();
export default salaRepository; 