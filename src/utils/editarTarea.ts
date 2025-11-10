import { Tarea } from "../models/tarea";
import PromptSync from "prompt-sync";

const prompt = PromptSync();

export function editarTarea(tarea: Tarea): void{
    console.log("\n --- Editar tarea ---");
    console.log("Presiona Enter para mantener la información o espacio para borrar el campo \n");

    const nuevoTitulo = prompt(`Título [${tarea.titulo}]:`);
    if (nuevoTitulo === " ") tarea.titulo = " ";
    else if (nuevoTitulo.trim() !== " ") tarea.titulo = nuevoTitulo;

    const nuevaDescripcion = prompt(`Descripción [${tarea.descripcion || "Sin datos"}]:`);
    if (nuevaDescripcion === " ") tarea.descripcion = " ";
    else if (nuevaDescripcion.trim() !== "") tarea.descripcion = nuevaDescripcion;

    const estadoInput = prompt(`[1] Pendiente  [2] En curso  [3] Terminada  [4] Cancelada (actual: ${tarea.estado}):`);
    if (estadoInput === "1") tarea.estado = "pendiente";
    else if (estadoInput === "2") tarea.estado = "en curso";
    else if (estadoInput === "3") tarea.estado = "terminada";
    else if (estadoInput === "4") tarea.estado = "cancelada";
    

    const dificultadInput = prompt(`[1] Fácil  [2] Medio  [3] Difícil (actual: ${tarea.dificultad}):`);
    if (["1", "2", "3"].includes(dificultadInput)) {
        tarea.dificultad = Number(dificultadInput) as 1 | 2 | 3;
    }

    const nuevoVencimiento = prompt(`Fecha de vencimiento [${tarea.vencimiento || "Sin datos"}]:`);
    if (nuevoVencimiento === " ") tarea.vencimiento = " ";
    else if (nuevoVencimiento.trim() != " ") tarea.vencimiento = nuevoVencimiento;

    tarea.ultimaEdicion = new Date().toLocaleString();

    console.log("¡Tarea actualizada con éxito! ✅");
}