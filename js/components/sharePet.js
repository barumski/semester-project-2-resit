export function initializeSharePet() {
    const shareButtons = document.querySelectorAll("[data-share-button]");

    if (!shareButtons.length) {
        return;
    }

    shareButtons.forEach((button) => {
        button.addEventListener("click", async () => {
            const wrapper = button.parentElement;
            const tooltip = wrapper.querySelector("[data-share-tooltip]");

            try {
                await navigator.clipboard.writeText(window.location.href);

                button.setAttribute("aria-label", "Pet link copied");

                if (tooltip) {
                    tooltip.textContent = "Link copied!";
                    tooltip.classList.remove("opacity-0");
                    tooltip.classList.add("opacity-100");

                    setTimeout(() => {
                        tooltip.textContent = "Share pet";
                        tooltip.classList.remove("opacity-100");
                        tooltip.classList.add("opacity-0");

                        button.setAttribute("aria-label", "Share pet");
                    }, 2000);
                }

            } catch (error) {
                console.error("Failed to copy pet link", error);
            }
        });
    });
}