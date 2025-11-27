import { Usuario } from "../models/Usuario";
import DataBaseService from "../DataBase/DataBaseService";

export class UsuarioController {
    constructor() {
        this.listeners = [];
    }
    async initialize() {
        await DataBaseService.initialize();
    }
    async obtenerUsuarios() {
        try {
            const data = await DataBaseService.getAll();
            return data.map(u => new Usuario(u.id, u.nombre, u.fecha_creacion));
        } catch (error) {
            console.error("Error al obtener usuarios:", error)
            throw new Error("No se pudieron cargar los usuarios")
        }
    }

    async crearUsuario(nombre) {
        try {
            Usuario.validar(nombre);
            const nuevoUsuario = await DataBaseService.add(nombre.trim())
            this.notifyListeners();
            return new Usuario(
                nuevoUsuario.id,
                nuevoUsuario.nombre,
                nuevoUsuario.fecha_creacion
            );
        } catch (error) {
            console.error("Error al crear usuario:", error);
        }
    }
    addListener(callback) {
        this.listeners.push(callback);
    }
    removeListener(callback) {
        this.listeners = this.listeners.filter(l => l !== callback);
    }
    notifyListeners() {
        this.listeners.forEach(callback => callback());
    }
}