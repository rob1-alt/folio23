function showItemsMenu() {
    const items = document.querySelectorAll('.menuItem');
    let delay = 0;
  
    items.forEach(item => {
      setTimeout(() => {
        item.classList.add('visible');
      }, delay);
      delay += 100; 
    });
  }
  
  export default showItemsMenu;
  