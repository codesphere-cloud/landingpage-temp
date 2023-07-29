document.addEventListener("DOMContentLoaded", function() {
    var mobileMenuOpen = false; // Initial state
  
    // Getting references to the elements we'll need
    var openButton = document.querySelector("#menu-open");
    console.log(openButton);
    var closeButton = document.querySelector("#menu-close");
    console.log(closeButton);
    var mobileMenu = document.querySelector("#mobile-menu");
    console.log(mobileMenu);
  
    // Add event listener for the open button
    openButton.addEventListener("click", function() {
      mobileMenuOpen = true; // Update state
      // Add class to show the menu
      mobileMenu.classList.add("block");
      mobileMenu.classList.remove("hidden");
    });
  
    // Add event listener for the close button
    closeButton.addEventListener("click", function() {
      mobileMenuOpen = false; // Update state
      // Add class to hide the menu
      mobileMenu.classList.add("hidden");
      mobileMenu.classList.remove("block");
    });
  });
  