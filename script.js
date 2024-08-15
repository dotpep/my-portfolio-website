function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

/* TODO complete for opening Certificate img in popup */

//document.addEventListener('DOMContentLoaded', function() {
//  // Function to open the modal
//  function openModal(imgSrc) {
//    const modal = document.getElementById('certification-modal');
//    const modalImg = document.getElementById('modal-img');
//    modal.style.display = 'flex';
//    modalImg.src = `./assets/${imgSrc}`;
//  }

//  // Function to close the modal
//  function closeModal() {
//    const modal = document.getElementById('certification-modal');
//    modal.style.display = 'none';
//  }

//  // Attach event listeners to functions
//  window.openModal = openModal;
//  window.closeModal = closeModal;

//  // Close modal when clicking outside the image
//  window.onclick = function(event) {
//    const modal = document.getElementById('certification-modal');
//    if (event.target === modal) {
//      modal.style.display = 'none';
//    }
//  }
//});

