import { alerta } from "./utils.js";
const username = document.querySelector('#username');
const correo = document.querySelector('#correo');
const password = document.querySelector('#password');
const form = document.querySelector('form');
const alertaDiv = document.querySelector('#alerta');

form.addEventListener('submit',register);


async function register(e) {
    e.preventDefault();
    if(username.value.trim() === '' || correo.value.trim() === '' || password.value.trim() === '') {
        alerta('Todos los campos son obligatorios','error',alertaDiv);
        return;
    }
    const data ={
        username: username.value,
        email: correo.value,
        password: password.value
    }

    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }

    const result = await fetch("http://localhost:3000/api/users/register", options);
    if(!result.ok && result.status === 400) {
        const response = await result.json();
        alerta(`${response.error}`,'error',alertaDiv);
        return;
    }
    if(result.ok) {
        alerta('Registro exitoso','success',alertaDiv);
        setTimeout(() => {
            window.location.href = "/";
        }, 2000);
    }
}