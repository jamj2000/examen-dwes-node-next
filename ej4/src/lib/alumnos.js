let seed = [
    { id: 0, nombre: "Jose", edad: 20, domicilio: { calle: "Nueva", num: 1, localidad: 'Moriles' } },
    { id: 1, nombre: "Juan", edad: 21, domicilio: { calle: "Ancha", num: 2, localidad: 'Montilla' } },
    { id: 2, nombre: "Eva", edad: 22, domicilio: { calle: "Antigua", num: 3, localidad: 'Lucena' } },
    { id: 3, nombre: "Ana", edad: 23, domicilio: { calle: "Europa", num: 4, localidad: 'Lucena' } }
]

let alumnos = null;

export default function getAlumnos() {
    // if (alumnos)
    //     return alumnos;
    // if (!global._alumnos) {
    //     alumnos = seed;
    //     global._alumnos = alumnos;
    // } else {
    //     alumnos = global._alumnos;
    // }

    // Sólo cargamos valores iniciales una sóla vez
    if (!alumnos) 
        alumnos = seed;
    
    return alumnos;
}

