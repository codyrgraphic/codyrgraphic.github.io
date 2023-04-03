(() => {
  const menuButton = document.getElementById('menu-button');
  const dropdownMenu = document.querySelector('.dropdown-menu');
  const dropdownWrapper = document.querySelector('#dropdown-wrapper');
  const headerEffect1 = document.querySelector(".header-effect");
  const headerEffect2 = document.querySelector(".container-header");

  console.log(menuButton);
  console.log(dropdownMenu);

  function redrawElement(element) {
    const display = element.style.display;
    element.style.display = "none";
    void element.offsetWidth; // Trigger a reflow, flushing the CSS changes
    element.style.display = display;
  }

  menuButton.addEventListener('click', () => {
    menuButton.classList.toggle('open');
    dropdownWrapper.classList.toggle('open');
  });



  window.addEventListener("resize", () => {
    redrawElement(headerEffect1);
    redrawElement(headerEffect2);
  });
})()
