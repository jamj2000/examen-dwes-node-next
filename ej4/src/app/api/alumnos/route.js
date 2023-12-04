import getAlumnos from "@/lib/alumnos";

export function GET() {
    let alumnos = getAlumnos();
    return Response.json(alumnos)
}


export async function POST(request) {
    const content = request.headers.get('content-type')

    if (content != 'application/json')
        return Response.json({ message: 'Debes proporcionar datos JSON' })

    let alumnos = getAlumnos();
    let sig = Math.max(...alumnos.map(u => u.id)) + 1

    const alumnoNuevo = await request.json()
    alumnoNuevo.edad = Number(alumnoNuevo.edad)
    alumnoNuevo.domicilio.num = Number(alumnoNuevo.domicilio.num)
    alumnos.push({ id: sig, ...alumnoNuevo })
    return Response.json(alumnos)
}

