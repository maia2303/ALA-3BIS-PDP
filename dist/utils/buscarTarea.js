"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.buscarTarea = buscarTarea;
const mostrarDetalle_1 = require("./mostrarDetalle");
const editarTarea_1 = require("./editarTarea");
const prompt_sync_1 = __importDefault(require("prompt-sync"));
const leerYescribir_1 = require("./leerYescribir");
const prompt = (0, prompt_sync_1.default)();
function buscarTarea(tareas) {
    const palabra = prompt("🔍 Ingrese una palabra: ").toLowerCase();
    const encontrada = [];
    for (let i = 0; i < tareas.length; i++) {
        const tarea = tareas[i];
        const tituloBusq = tarea.titulo.toLowerCase();
        const descripcionBusq = tarea.descripcion.toLowerCase();
        if (tituloBusq.includes(palabra) || descripcionBusq.includes(palabra)) {
            encontrada[encontrada.length] = tarea;
        }
    }
    const cantidadEncontrada = encontrada.length;
    if (cantidadEncontrada === 0) {
        console.log("❌ No se encontraron tareas.");
        return;
    }
    for (let i = 0; i < tareas.length; i++) {
        const tarea = encontrada[i];
        console.log(`[${i + 1}] ${tarea.titulo}`);
    }
    const entrada = prompt("Número de tarea para ver o editar (0 para volver): ");
    const indice = Number(entrada);
    if (indice > 0 && indice <= cantidadEncontrada) {
        const seleccionada = encontrada[indice - 1];
        (0, mostrarDetalle_1.mostrarDetalle)(seleccionada);
        const accion = prompt("Presiona Enter para volver o E para editar: ");
        if (accion.toLowerCase() === "e") {
            (0, editarTarea_1.editarTarea)(seleccionada);
            (0, leerYescribir_1.escribirTareas)(tareas);
        }
    }
}
