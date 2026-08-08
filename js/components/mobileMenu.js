 export function initializeMobileMenu() {

    const menuButton = document.querySelector("#menu-button");
    const mobileNavigation = document.querySelector("#mobile-navigation");
    const mobileMenuOverlay = document.querySelector("#mobile-menu-overlay");


    if (
        menuButton && 
        mobileNavigation && 
        mobileMenuOverlay
    ) {

        menuButton.addEventListener("click", openMobileMenu);
        mobileMenuOverlay.addEventListener("click", closeMobileMenu);

        function openMobileMenu() {
            mobileNavigation.classList.remove("hidden");
            mobileMenuOverlay.classList.remove("hidden");

            menuButton.classList.add("hidden");

            menuButton.setAttribute("aria-expanded", "true");
        }

        function closeMobileMenu() {
            mobileNavigation.classList.add("hidden");
            mobileMenuOverlay.classList.add("hidden");

            menuButton.classList.remove("hidden");

            menuButton.setAttribute("aria-expanded", "false");
        }

    }
 }