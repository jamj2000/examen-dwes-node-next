// DWES - Ejercicio: Consumir API de Rick y Morty (Personajes)
// Máx personajes: 826
import express from 'express'

const app = express()

app.use(express.urlencoded());  // IMPORTANTE

const cabecera = `
<h1>Personajes de Rick and Morty</h1>

<form action='/' method='post'>
  <label for="num">Personaje </label><span id="num"></span><br/>
  <input type="range" id="personajeId" name="personajeId" min="1" max="826" /><br/>
  <input type="submit" id="submit" value="Consultar" />
</form>
<div id="resultado"></div>
<hr>

<script>
    const value = document.querySelector("#num");
    const input = document.querySelector("#personajeId");
    const resultado = document.querySelector("#resultado");
       
    input.addEventListener("input", (event) => {
        value.innerHTML = event.target.value;
    });
    
    /* 
     ACTUALIZACIÓN DE INFORMACIÓN EN EL LADO CLIENTE
     Usando fetch desde el lado cliente
    */

    // window.onload = () => document.getElementById('submit').style.display = "none"    
    
    // input.addEventListener("change", async (event) => {
    //    const personaje = await getPersonaje (event.target.value);
    //    resultado.innerHTML  =  "<hr>"
    //    resultado.innerHTML +=  "<h2>Datos del personaje " + personaje.id + " </h2>"
    //    resultado.innerHTML +=  "<p>Nombre: <strong>" + personaje.name + "</strong></p>"
    //    resultado.innerHTML +=  "<p>Especie: <strong>" + personaje.species + "</strong></p>"
    //    resultado.innerHTML +=  "<p>Imágen: </p>"
    //    resultado.innerHTML +=  "<img src=" + personaje.image + " />"
    // });
   
    // async function getPersonaje() {
    //    const res  = await fetch ('https://rickandmortyapi.com/api/character/' + value.innerHTML)
    //    const data = await res.json()
    //    return data
    // }

</script>
`

const pagInicio = `
    ${cabecera}
`
// const personaje = null;

function pagPersonaje (personaje) {
    return `
    ${cabecera}
    <h2>Datos del personaje ${personaje.id}</h2>
    <p>Nombre: <strong>${personaje.name}</strong></p>
    <p>Especie: <strong>${personaje.species}</strong></p>
    <p>Imágen: </p>
    <img src="${personaje.image}" />
`
}

app.get('/', (request, response) => {
    response.send(pagInicio)
})

app.post('/', async (request, response) => {
    async function getPersonaje() {
       const res  = await fetch ('https://rickandmortyapi.com/api/character/' + request.body.personajeId)
       const data = await res.json()
       return data
    }
    const personaje = await getPersonaje();
    response.send(pagPersonaje(personaje))
})


app.listen(3000, () => console.log('Aplicación iniciada en http://localhost:3000'))
