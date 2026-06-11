const temporizador = document.querySelector('#input-numeros');
const botonEnviar = document.querySelector('#btn-enviar');
const cajaTiempoVacio = document.querySelector('#cajaTiempoVacio');
const cajaOculta = document.querySelector('.cajaOculta');
const cajaVisible = document.querySelector('.cajaVisible');
const btnAceptar = document.querySelectorAll('.aceptar');
const cajaSobreTiempo = document.querySelector('#cajaSobreTiempo');
const cajaPrincipal = document.querySelector('#tiempo');

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
                    <div class="cancha">
                    <div class="arco"></div>
                    <div class="arquero">🧤</div>
                    <div class="pelota">⚽</div>
                    </div>
                `;

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
