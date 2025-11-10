import { Tarea } from "../models/tarea";
import { mostrarDetalle } from "./mostrarDetalle";
import { editarTarea } from "./editarTarea";
import PromptSync from "prompt-sync";
import { escribirTareas } from "./leerYescribir";

const prompt = PromptSync();
export function buscarTarea(tareas: Tarea[]): void {
    const palabra = prompt("🔍 Ingrese una palabra: ").toLowerCase();
    const encontrada: Tarea[] = [];
    for(let i = 0; i < tareas.length; i++){
        const tarea = tareas[i];
        const tituloBusq = tarea.titulo.toLowerCase();
        const descripcionBusq = (tarea.descripcion || "").toLowerCase();

        if (tituloBusq.includes(palabra) || descripcionBusq.includes(palabra)) {
            encontrada[encontrada.length] = tarea;
        }
    }
    const cantidadEncontrada = encontrada.length;
    if (cantidadEncontrada === 0) {
        console.log("❌ No se encontraron tareas.");
        return;
    }
    for(let i = 0; i < cantidadEncontrada; i++) {
        const tarea = encontrada[i];
        console.log(`[${i + 1}] ${tarea.titulo}`);
    }
    const entrada = prompt("Número de tarea para ver o editar (0 para volver): ");
    const indice = Number(entrada);
    if(indice > 0 && indice <= cantidadEncontrada) {
        const seleccionada = encontrada[indice -1];
        mostrarDetalle(seleccionada);
        const accion = prompt("Presiona Enter para volver o E para editar: ");
        if (accion.toLowerCase() === "e") {
            editarTarea(seleccionada);
            escribirTareas(tareas);
        }
    }
}