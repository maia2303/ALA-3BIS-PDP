"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.editarTarea = editarTarea;
const prompt_sync_1 = __importDefault(require("prompt-sync"));
const prompt = (0, prompt_sync_1.default)();
function editarTarea(tarea) {
    console.log("\n --- Editar tarea ---");
    console.log("Presiona Enter para mantener la información o espacio para borrar el campo \n");
    const nuevoTitulo = prompt(`Título [${tarea.titulo}]:`);
    if (nuevoTitulo === " ")
        tarea.titulo = " ";
    else if (nuevoTitulo.trim() !== " ")
        tarea.titulo = nuevoTitulo;
    const nuevaDescripcion = prompt(`Descripción [${tarea.descripcion || "Sin datos"}]:`);
    if (nuevaDescripcion === " ")
        tarea.descripcion = " ";
    else if (nuevaDescripcion.trim() !== "")
        tarea.descripcion = nuevaDescripcion;
    const estadoInput = prompt(`[1] Pendiente  [2] En curso  [3] Terminada  [4] Cancelada (actual: ${tarea.estado}):`);
    if (estadoInput === "1")
        tarea.estado = "pendiente";
    else if (estadoInput === "2")
        tarea.estado = "en curso";
    else if (estadoInput === "3")
        tarea.estado = "terminada";
    else if (estadoInput === "4")
        tarea.estado = "cancelada";
    const dificultadInput = prompt(`[1] Fácil  [2] Medio  [3] Difícil (actual: ${tarea.dificultad}):`);
    if (["1", "2", "3"].includes(dificultadInput)) {
        tarea.dificultad = Number(dificultadInput);
    }
    const nuevoVencimiento = prompt(`Fecha de vencimiento [${tarea.vencimiento || "Sin datos"}]:`);
    if (nuevoVencimiento === " ")
        tarea.vencimiento = " ";
    else if (nuevoVencimiento.trim() != " ")
        tarea.vencimiento = nuevoVencimiento;
    tarea.ultimaEdicion = new Date().toLocaleString();
    console.log("¡Tarea actualizada con éxito! ✅");
}
