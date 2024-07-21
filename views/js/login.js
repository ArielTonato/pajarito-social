import { alerta } from "./utils.js";
const correo = document.querySelector('#correo');
const password = document.querySelector('#password');
const form = document.querySelector('form');
const alertaDiv = document.querySelector('#alerta');

form.addEventListener('submit',login);

async function login(e) {
    e.preventDefault();
    if(correo.value.trim() === '' || password.value.trim() === '') {
        alerta('Todos los campos son obligatorios','error',alertaDiv);
        return;
    }
    const data = {
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
    const result = await fetch("http://localhost:3000/api/users/login", options);
    if(!result.ok && result.status === 400) {
        alerta('Correo o contraseña incorrectos','error',alertaDiv);
        return;
    }
    if(result.ok) {
       alerta('Login exitoso','success',alertaDiv);
         setTimeout(() => {
          window.location.href = "/principal";
         }, 2000);
    }
}