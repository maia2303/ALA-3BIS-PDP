import PromptSync from "prompt-sync";
import { Tarea } from "../models/tarea";
import { mostrarDetalle } from "./mostrarDetalle";
import { editarTarea } from "./editarTarea";
import { escribirTareas } from "./leerYescribir";

const prompt = PromptSync();

export function verTarea(tareas: Tarea[]): void {
    const cantidadEncontrada = tareas.length;
    let opcionVer = -1;
    
    while (opcionVer !== 0) {
        console.log("\n ¿Qué tareas deseas ver?");
        console.log("[1] Todas");
        console.log("[2] Pendientes");
        console.log("[3] En curso");
        console.log("[4] Terminadas");
        console.log("[5] Canceladas");
        console.log("[0] Volver");
        opcionVer = Number(prompt(">> "));
        
        let filtro = " ";
        if(opcionVer === 1) filtro = "todas";
        else if (opcionVer === 2) filtro = "pendiente"; //poner en singular para que coincidan los filtros y muestre las tareas en cada estado correspondiente
        else if (opcionVer === 3) filtro = "en curso";
        else if (opcionVer === 4) filtro = "terminada";
        else if (opcionVer === 5) filtro = "cancelada";
        else if (opcionVer === 0) {
            console.log("⬅️ Volviendo al menú principal...");
            continue;
        } else {
            console.log("⚠️ Opción inválida.");
            continue;
        }

        let tareasFiltradas = [];
        let cantidadFiltradas = 0;

        console.log("~Listado de tareas~");

        for (let i = 0; i < cantidadEncontrada; i++) {
            const tarea = tareas[i];
            if (filtro === "todas" || tarea.estado === filtro){
                tareasFiltradas[cantidadFiltradas] = tarea;
                cantidadFiltradas++
            }
        }

        if (cantidadFiltradas === 0) {
            console.log("❌ No hay tareas para mostrar en esta categoría. \n");
            continue;
        }

        console.log(`\nEstas son tus tareas ${filtro === 'todas' ? '' : `(${filtro})`}: \n`);
        for (let index = 0; index < cantidadFiltradas; index++){
            let t = tareasFiltradas[index];
            console.log(`[${index + 1}] ${t.titulo}`);
        }

        const verDetalle = Number(prompt("¿Deseas ver los detalles de alguna tarea? "));
        if (verDetalle === 0) continue;
        if (verDetalle > 0 && verDetalle <= cantidadFiltradas) {
            const t = tareasFiltradas[verDetalle - 1];
            mostrarDetalle(t);

            let accion = prompt("Presiona Enter para volver o E para editar: ");
            if (accion.toLowerCase() === "e") {
                editarTarea(t);
                escribirTareas(tareas);
            } 
        } else {
            console.log("⚠️ Número inválido. Intente de nuevo. ");
        }
    }
}