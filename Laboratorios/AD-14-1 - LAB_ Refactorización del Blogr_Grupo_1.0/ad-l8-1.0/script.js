const form = document.getElementById("contactForm");

if (form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    document.getElementById("alertContainer").innerHTML = `
      <div class="alert alert-coffee alert-dismissible fade show" role="alert">
        Mensaje enviado
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Cerrar"></button>
      </div>`;
    form.reset();
  });
}