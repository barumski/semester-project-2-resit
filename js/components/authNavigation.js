import { getUser, clearAuth } from "../utils/storage.js";

export function initializeAuthNavigation() {
    const user = getUser();

    const loggedOutGroups = document.querySelectorAll(
        "[data-auth-logged-out]"
    );

    const loggedInGroups = document.querySelectorAll(
        "[data-auth-logged-in]"
    );

    const logoutButtons = document.querySelectorAll(
        "[data-logout-button]"
    );

    const mobileUsername = document.querySelector(
        "[data-mobile-username]"
    );

    if (user) {

        loggedOutGroups.forEach((group) => {
            group.classList.add("hidden");
            group.classList.remove("flex", "lg:flex");
        });

        loggedInGroups.forEach((group) => {
            group.classList.remove("hidden");

            if (group.closest("#mobile-navigation")) {
                group.classList.add("flex");
            } else {
                group.classList.add("lg:flex");
            }
        });

        if (mobileUsername) {
            mobileUsername.textContent = user.name;
        }
    } else {
        loggedInGroups.forEach((group) => {
            group.classList.add("hidden");
            group.classList.remove("flex", "lg:flex");
        });

        loggedOutGroups.forEach((group) => {
            group.classList.remove("hidden");

            if (group.closest("#mobile-navigation")) {
                group.classList.add("flex");
            } else {
                group.classList.add("lg:flex");
            }
        });

        if (mobileUsername) {
            mobileUsername.textContent = "";
        }
    }

    logoutButtons.forEach((button) => {
        button.addEventListener("click", () => {
            clearAuth();
            window.location.href ="/index.html";
        });        
    });
}