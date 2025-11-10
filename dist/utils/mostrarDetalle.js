"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mostrarDetalle = mostrarDetalle;
function mostrarDetalle(t) {
    console.log("\n--- Detalles de mi tarea --- ");
    console.log("Título: ", t.titulo || "Sin datos");
    console.log("Descripción: ", t.descripcion || "Sin datos");
    console.log("Estado: ", t.estado);
    console.log("Dificultad", "★".repeat(t.dificultad) + "☆".repeat(3 - t.dificultad));
    console.log("Vencimiento: ", t.vencimiento || "Sin datos");
    console.log("Creación: ", t.creacion);
    console.log("Última edición: ", t.ultimaEdicion);
    console.log("___________________________________");
}
