function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

function scrollCertifications(direction) {
  const container = document.querySelector('.certifications-container');
  const scrollAmount = container.clientWidth / 2;
  container.scrollBy({ left: scrollAmount * direction, behavior: 'smooth' });
}
