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

    async actualizarUsuario(id, nombre) {
        try {
            Usuario.validar(nombre);
            const actualizado = await DataBaseService.update(id, nombre.trim());
            this.notifyListeners();
            return new Usuario(
                actualizado.id,
                actualizado.nombre,
                actualizado.fecha_creacion
            );
        } catch (error) {
            console.error("Error al actualizar usuario:", error);
            throw new Error("No se pudo actualizar el usuario");
        }
    }

    async eliminarUsuario(id) {
        try {
            await DataBaseService.remove(id);
            this.notifyListeners();
            return true;
        } catch (error) {
            console.error("Error al eliminar usuario:", error);
            throw new Error("No se pudo eliminar el usuario");
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