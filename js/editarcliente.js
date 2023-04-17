import {obtenerCliente, editarCliente} from './API.js'
import {mostrarAlerta, validar} from './funciones.js'

(function(){
    const nombreInput = document.querySelector('#nombre')
    const emailInput = document.querySelector('#email')
    const telefonoInput = document.querySelector('#telefono')
    const empresaInput = document.querySelector('#empresa')
    const idInput = document.querySelector('#id')

    document.addEventListener('DOMContentLoaded', async () => {
        const parametroUrl = new URLSearchParams(window.location.search)
        const idCliente = parseInt(parametroUrl.get('id'))
        const cliente = await obtenerCliente(idCliente)
        mostrarCliente(cliente)
        const formulario = document.querySelector('#formulario').addEventListener('submit', validarCliente)
    })

    function mostrarCliente(cliente){
        const {nombre, email, telefono, empresa, id} = cliente

        nombreInput.value = nombre
        emailInput.value = email
        telefonoInput.value = telefono
        empresaInput.value = empresa
        idInput.value = id
    }

    function validarCliente(e){
        e.preventDefault()
        const cliente = {
            nombre: nombreInput.value,
            email: emailInput.value,
            telefono: telefonoInput.value,
            empresa: empresaInput.value, 
            id: parseInt(idInput.value)
        }

        return validar(cliente) ? editarCliente(cliente) : mostrarAlerta('Todos los campos son obligatorios')
    }
})()