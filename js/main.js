function mostrarSeccion(seccion) {
  // Ocultar todas las cards
  const todasLasCards = document.querySelectorAll(".card");
  todasLasCards.forEach((card) => {
    card.classList.remove("visible");
  });

  // Mostrar la card correspondiente
  const cardActiva = document.getElementById(`card${seccion}`);
  cardActiva.classList.add("visible");
}
