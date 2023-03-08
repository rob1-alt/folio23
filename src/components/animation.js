function showItemsMenu() {
    const items = document.querySelectorAll('.menuItem');
    let delay = 0;
  
    items.forEach(item => {
      setTimeout(() => {
        item.classList.add('visible');
      }, delay);
      delay += 100; // ajustez ce chiffre pour modifier la vitesse de l'animation
    });
  }
  
  export default showItemsMenu;
  