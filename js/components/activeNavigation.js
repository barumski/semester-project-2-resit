export function initializeActiveNavigation() {
    const navLinks = document.querySelectorAll(
        "#main-navigation a, #mobile-navigation a"
    );

    if (!navLinks.length) {
        return;
    }

    const currentPath = window.location.pathname;

    navLinks.forEach((link) => {
        const linkPath = new URL(link.href).pathname;

        if (
            currentPath === linkPath ||
            (currentPath === "/" && linkPath.endsWith("/index.html"))
        ) {
            link.classList.add(
                "underline",
                "decoration-primaryHover",
                "underline-offset-4"        
            );
        }
    });
}