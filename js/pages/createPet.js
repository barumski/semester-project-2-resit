import { createPet } from "../api/pets/createPet.js";
import { displayMessage } from "../components/displayMessage.js";

export function initializeCreatePet() {
    const createPetForm = document.querySelector("#create-pet-form");
    const messageContainer = document.querySelector("#message-container");

    if (!createPetForm) {
        return;
    }

    createPetForm.addEventListener("submit", async (event) => {
        event.preventDefault();

        const name = document.querySelector("#pet-name").value.trim();
        const breed = document.querySelector("#pet-breed").value.trim();
        const age = Number(document.querySelector("#pet-age").value);
        const size = document.querySelector("#pet-size").value.trim();
        const gender = document.querySelector("#pet-gender").value;
        const species = document.querySelector("#pet-species").value.trim();
        const color = document.querySelector("#pet-color").value.trim();
        const location = document.querySelector("#pet-location").value.trim();
        const description = document.querySelector("#pet-description").value.trim();
        const adoptionStatus = document.querySelector("#pet-status").value;
        const imageUrl = document.querySelector("#pet-image").value.trim();

        const petData = {
            name,
            breed,
            age,
            size,
            gender,
            species,
            color,
            location,
            description,
            adoptionStatus,
            image: {
                url: imageUrl,
                alt: `${name} the ${breed}`,
            },
        };

        try {
            const response = await createPet(petData);

            displayMessage(
                "success",
                "Pet created successfully",
                messageContainer
            );

            const petId = response.data.id;

            setTimeout(() => {
                window.location.href = `../index.html?id=${petId}`;
            }, 1200);

        } catch (error) {
            displayMessage(
                "error",
                error.message,
                messageContainer
            );
        }
    });
}