import { loginUser } from "../auth/login.js";
import { saveToken, saveUser } from "../utils/storage.js";
import { displayMessage } from "../components/displayMessage.js";

export function initializeLogin() {
    const loginForm = document.querySelector("#login-form");
    const messageContainer = document.querySelector("#message-container");

    if (!loginForm) {
        return;
    }

    loginForm.addEventListener("submit", async (event) => {
        event.preventDefault();

        const emailInput = document.querySelector("#email");
        const passwordInput = document.querySelector("#password");

        const userData = {
            email: emailInput.value.trim(),
            password: passwordInput.value
        };

        try {
            const response = await loginUser(userData);
            const user = response.data;

            saveToken(user.accessToken);
            saveUser(user);

            window.location.href = "../../index.html";

        } catch (error) {
            displayMessage(
                "error",
                error.message,
                messageContainer
            );
        }
    });
}