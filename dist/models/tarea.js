"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.crearTarea = crearTarea;
function crearTarea(titulo, descripcion, estado, dificultad, vencimiento) {
    const fecha = new Date().toLocaleString();
    return {
        titulo,
        descripcion,
        estado,
        dificultad,
        vencimiento,
        creacion: fecha,
        ultimaEdicion: fecha,
    };
}
