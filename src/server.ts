import fastify from "fastify";
import cors from "@fastify/cors"

// Cria servidor e pede pra ele passar logs
const server = fastify({logger: true})

// Todos podem consumir a API
server.register(cors, {
    origin: '*'
})

const teams = [
    {id: 1, name: 'McLaren', base: 'Woking United Kingdom'},
    {id: 2, name: 'Mercedes', base: 'Brackley, United Kingdom'},
    {id: 3, name: 'Red Bull Racing', base: 'Milton Keynes, United Kingdom'},
]

const drivers = [
    {id: 1, name: 'Max Verstappen', team: 'Red Bull Racing'},
    {id: 2, name: 'Lewis Hamilton', team: 'Ferrari'},
    {id: 3, name: 'Lando Norris', team: 'McLaren'},
]

/* Lista as equipes
    - Implementa metodo HTTP GET
    - Passando rota
    - Criando controller
*/
server.get('/teams', async (request, response) => {
    response.type('application/json').code(200)

    return {teams}
})

server.get('/drivers', async (request, response) => {
    response.type('application/json').code(200)

    return {drivers}
})

interface DriverParams {
    id: string
}

// Filtrando pelo id
server.get<{ Params: DriverParams}>('/drivers/:id', async (request, response) => {
    const id = parseInt(request.params.id)
    const driver = drivers.find((d) => d.id === id)

    if(!driver){
        response.type('application/json').code(404)
        return { message: 'Driver not found'}
    }else{
        response.type('application/json').code(200)
        return {driver}
    }
})

// Escutando porta
server.listen({port: 3333}, () => {
    console.log('Server init')
})

