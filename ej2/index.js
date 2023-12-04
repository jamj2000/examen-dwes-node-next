import express from "express";
const app = express()

let alumnos = [
    { id: 0, nombre: "Jose", edad: 20, domicilio: { calle: "Nueva", num: 1, localidad: 'Moriles' } },
    { id: 1, nombre: "Juan", edad: 21, domicilio: { calle: "Ancha", num: 2, localidad: 'Montilla' } },
    { id: 2, nombre: "Eva", edad: 22, domicilio: { calle: "Antigua", num: 3, localidad: 'Lucena' } },
    { id: 3, nombre: "Ana", edad: 23, domicilio: { calle: "Europa", num: 4, localidad: 'Lucena' } }
]

app.use(express.json())  // IMPORTANTE

// GET
app.get('/api/alumnos', (request, response) => response.json(alumnos))

// POST 
app.post('/api/alumnos', (request, response) => {
    if (!request.is('json'))
        return response.json({ message: 'Debes proporcionar datos JSON' })

    let sig = Math.max(...alumnos.map(u => u.id)) + 1

    let { nombre, edad, domicilio } = request.body
    edad = Number(edad)
    domicilio.num = Number(domicilio.num)

    alumnos.push({ id: sig, nombre, edad, domicilio })
    return response.json(alumnos)
})

// GET 
app.get('/api/alumnos/:id', (request, response) => {
    let usuario = alumnos.find(user => user.id == request.params.id)

    if (usuario !== undefined) { // Si es encontrado    
        return response.json(usuario)
    } else {
        response.json({ message: 'El elemento no ha sido encontrado' })
    }
})

// PUT
app.put('/api/alumnos/:id', (request, response) => {
    if (!request.is('json'))
        return response.json({ message: 'Debes proporcionar datos JSON' })

    const { id } = request.params
    let   { nombre, edad, domicilio } = request.body
    edad = Number(edad)
    domicilio.num = Number(domicilio.num)

    // Obtenemos posición    
    const pos = alumnos.findIndex(user => user.id == id)

    if (pos != -1) { // Si es encontrado
        alumnos.splice(pos, 1, { id, nombre, edad, domicilio })
        return response.json(alumnos)
    } else { // Sino
        response.json({ message: 'El elemento no ha sido encontrado' })
    }
})

// DELETE
app.delete('/api/alumnos/:id', (request, response) => {
    // Obtenemos posición    
    const pos = alumnos.findIndex(user => user.id == request.params.id)

    if (pos != -1) { // Si es encontrado
        alumnos.splice(pos, 1)
        return response.json(alumnos)
    } else { // Sino
        response.json({ message: 'El elemento no ha sido encontrado' })
    }
})


app.listen(3000)

