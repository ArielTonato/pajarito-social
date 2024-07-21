export const alerta = (message, tipo = "error",referencia) => {
    document.querySelector('.mensaje')?.remove();
    const alerta = document.createElement('div');
    alerta.classList.add('mensaje');
    alerta.textContent = message;
    if(tipo === 'error') {
        alerta.classList.add('error');
    } else {
        alerta.classList.add('correcto');
    }
    referencia.insertAdjacentElement('beforebegin',alerta);
    setTimeout(() => {
        alerta.remove();
    }, 3000);
}