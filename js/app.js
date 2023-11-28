const numAleatorio = Math.floor(Math.random() * 10) + 1
const btnEmpezar = document.querySelector('.btn-warning')

const empezarJuego = () =>{
    const p = document.createElement('p')
  p.classList.add('lead', 'my-2')
  p.innerText = `El juego comenzo ! Debe adivinar el número aleatorio que se generó entre el 1 y el 10`
  btnEmpezar.insertAdjacentElement("afterend", p)
}

const coincidenNumeros = () =>{
    let numUsuario = document.getElementById('numUsuario')
    if(numAleatorio > numUsuario.value){
      alert('El número al azar es mayor al que usted ingresó');
    } else if(numAleatorio < numUsuario.value){
      alert('El número al azar es menor al que usted ingresó');
    } else{
      alert('Bien Hecho!!! Acertaste el numero secreto');
    }
  }

  const numUsuario = document.getElementById('btn-enviar')
numUsuario.addEventListener('click', coincidenNumeros)