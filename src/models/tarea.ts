export type Estado = "pendiente" | "en curso" | "terminada" | "cancelada";
export type Dificultad = 1 | 2 | 3;

export interface Tarea {
    titulo: string;
    descripcion: string;
    estado: Estado;
    dificultad: Dificultad;
    vencimiento: string | null; 
    creacion: string;
    ultimaEdicion: string;
}
export function crearTarea (
    titulo: string,
    descripcion: string,
    estado: Estado,
    dificultad: Dificultad,
    vencimiento: string | null,
): Tarea {
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