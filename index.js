const temporizador = document.querySelector('#input-numeros');
const botonEnviar = document.querySelector('#btn-enviar');
const cajaTiempoVacio = document.querySelector('#cajaTiempoVacio');
const cajaOculta = document.querySelector('.cajaOculta');
const cajaVisible = document.querySelector('.cajaVisible');
const btnAceptar = document.querySelectorAll('.aceptar');
const cajaSobreTiempo = document.querySelector('#cajaSobreTiempo');
const cajaPrincipal = document.querySelector('#tiempo');
// const videoCochete = document.querySelector('.video');
// videoCochete.classList.add('cajaOculta');

botonEnviar.addEventListener('click', (evento) => {
    evento.preventDefault();
    const tiempo = temporizador.value;

    if(tiempo == ''){
        cajaTiempoVacio.classList.remove('cajaOculta');
        cajaTiempoVacio.classList.add('cajaVisible');
    }else if(tiempo > 60){
        cajaSobreTiempo.classList.remove('cajaOculta');
        cajaSobreTiempo.classList.add('cajaVisible');
    }else{
      
      const contador = document.getElementById('contador');
      contador.classList.remove('cajaOculta');
      contador.classList.add('cajaVisible');
      let tiempoRestante = Number(tiempo);
      contador.innerHTML = `<p>${tiempoRestante}</p>`;
      const cuentaRegresiva = setInterval(() => {
        tiempoRestante--;
        contador.innerHTML = `<p>${tiempoRestante}</p>`;
        if (tiempoRestante <= 0) {
            clearInterval(cuentaRegresiva);
            contador.classList.add('cajaOculta');
            temporizador.value = '';
            document.body.innerHTML = `
            <div class="video">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/qg9escpGDIU?si=zBnVAVrvmO6Ey1jU&amp;controls=0&amp;start=7&autoplay=1&mute=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay *; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen style="border: none;"></iframe>
            </div>
                `;
            // videoCochete.classList.remove('cajaOculta');
            // videoCochete.classList.add('cajaVisible');

        }
    }, 1000);
    }
    console.log(tiempo);
});


btnAceptar.forEach((boton) => {
    boton.addEventListener('click', ()=>{
        cajaTiempoVacio.classList.remove('cajaVisible');
        cajaTiempoVacio.classList.add('cajaOculta');
        cajaSobreTiempo.classList.remove('cajaVisible');
        cajaSobreTiempo.classList.add('cajaOculta');
    })
});
