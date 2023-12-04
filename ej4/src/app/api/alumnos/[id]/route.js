import getAlumnos from "@/lib/alumnos";

export function GET(request, { params }) {
    let alumnos = getAlumnos();
    let alumno = alumnos.find(user => user.id == params.id)

    return Response.json(alumno)
}

export async function PUT(request, { params }) {
    const content = request.headers.get('content-type')

    if (content != 'application/json')
        return Response.json({ message: 'Debes proporcionar datos JSON' })

    let alumnos = getAlumnos();
    // Obtenemos posición    
    const pos = alumnos.findIndex(user => user.id == params.id)

    // Modificamos alumno
    const alumnoNuevo = await request.json()
    alumnoNuevo.edad = Number(alumnoNuevo.edad)
    alumnoNuevo.domicilio.num = Number(alumnoNuevo.domicilio.num)
    alumnos.splice(pos, 1, { id: Number(params.id), ...alumnoNuevo })

    return Response.json(alumnos)
}


export function DELETE(request, { params }) {
    let alumnos = getAlumnos();
    // Obtenemos posición    
    const pos = alumnos.findIndex(user => user.id == Number(params.id))

    // Eliminamos alumno
    if (pos != -1)  // Si es encontrado
        alumnos.splice(pos, 1)

    return Response.json(alumnos)
}