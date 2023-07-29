const $form = document.querySelector('#formulario');
const $buttonWasa = document.querySelector('#buttonWa');

$form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
    event.preventDefault();
    const form = new FormData(this);
    const telefono = '573148589936'; 
    const nombre = form.get('nombre');
    const email = form.get('email');
    const mensaje = form.get('msj');

    
    const whatsappLink = `https://api.whatsapp.com/send?phone=${telefono}&text=Hola,%20soy%20${nombre}.%20Mi%20correo%20es:%20${email}.%20${mensaje}`;
    $buttonWasa.setAttribute('href', whatsappLink);
    $buttonWasa.click();
}