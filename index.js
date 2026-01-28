// Efecto simple de escritura para el subtitulo
const text = "Desarrollo Web";
let index = 0;

function typeWriter() {
    // Aquí podrías añadir lógica si quieres que el texto cambie 
    // pero por ahora mantengámoslo simple.
}

// Suavizado de scroll para los enlaces
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

const typed = new Typed('#typed', {
  strings: [
    'Desarrollo Web',
    'Frontend',
    'Backend',
    'UX/UI'
  ],
  typeSpeed: 50,    // Velocidad al escribir
  backSpeed: 30,    // Velocidad al borrar
  backDelay: 1500,  // Tiempo de espera antes de borrar
  loop: true,       // Para que sea infinito
  showCursor: true, // Muestra el palito parpadeante
  cursorChar: '|'
});