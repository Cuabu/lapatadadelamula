document.getElementById('testimonyForm').addEventListener('submit', function(e) {
  e.preventDefault();

  const name = document.getElementById('name').value;
  const testimonial = document.getElementById('testimonial').value;

  // Enviar los datos al backend para almacenarlos en la base de datos
  sendTestimonyToBackend(name, testimonial);

  // Limpiar el formulario después de enviar
  document.getElementById('name').value = '';
  document.getElementById('testimonial').value = '';
});

function sendTestimonyToBackend(name, testimonial) {
  // Realizar una solicitud HTTP (por ejemplo, utilizando fetch o XMLHttpRequest) para enviar los datos al backend
  // Aquí deberías enviar estos datos al backend para almacenarlos en la base de datos
  // Ejemplo usando fetch:
  fetch('backend.php', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ name, testimonial })
  })
  .then(response => response.json())
  .then(data => {
    console.log('Testimonio enviado con éxito:', data);
    // Agregar el testimonio a la página
    addTestimonialToDOM(name, testimonial);
  })
  .catch((error) => {
    console.error('Error:', error);
  });
}

function addTestimonialToDOM(name, testimonial) {
  const testimonialDiv = document.createElement('div');
  testimonialDiv.innerHTML = `
    <h3>${name}</h3>
    <p>${testimonial}</p>
    <hr>
  `;

  const testimoniesContainer = document.getElementById('testimoniesContainer');
  testimoniesContainer.appendChild(testimonialDiv);
}
