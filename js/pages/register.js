import  { registerUser } from "../auth/register.js";
import { displayMessage } from "../components/displayMessage.js";

export function initializeRegister() {
    const registerForm = document.querySelector("#register-form");
    const messageContainer = document.querySelector("#message-container");

    if (!registerForm) {
        return;
    }

    registerForm.addEventListener("submit", async (event) => {
        event.preventDefault();

        const nameInput = document.querySelector("#name");
        const emailInput = document.querySelector("#email");
        const passwordInput = document.querySelector("#password");

        const userData = {
            name: nameInput.value.trim(),
            email: emailInput.value.trim(),
            password: passwordInput.value.trim()
        };

        try {
            await registerUser(userData);

            displayMessage(
                "success",
                "Account created successfully",
                messageContainer
            );

        } catch (error) {
            displayMessage(
                "error",
                error.message,
                messageContainer
            );
        }
    });
}