const url = 'http://localhost:4000/clientes'

// crear cliente
export const nuevoCliente = async cliente => {
    try {
        await fetch(url, {
            method: 'POST',
            body: JSON.stringify(cliente),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        window.location.href = 'index.html'
    } catch (error) {
        console.log(error)
    }
}

// obtener todos los clientes
export const cargarClientes = async () => {
    try {
        const resultado  = await fetch(url)
        const clientes = await resultado.json()
        return clientes
    } catch (error) {
        console.log(error)
    }
}

// eliminar cliente por id
export const eliminarCliente = async id => {
    try {
        await fetch(`${url}/${id}`, {
            method: 'DELETE'
        })
    } catch (error) {
        console.log(error)
    }
}

// obtener cliente por id
export const obtenerCliente = async id => {
    try {
        const resultado = await fetch(`${url}/${id}`)
        const cliente = await resultado.json()
        return cliente
    } catch (error) {
        console.log(error)
    }
}

// actualizar cliente
export const editarCliente = async cliente => {
    try {
        await fetch(`${url}/${cliente.id}`, {
            method: 'PUT',
            body: JSON.stringify(cliente),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        window.location.href = 'index.html'
    } catch (error) {
        console.log(error)
    }
}