import { getPetById } from "../api/pets/getPetById.js";
import { editPet } from "../api/pets/editPet.js";
import { displayMessage } from "../components/displayMessage.js";

export async function initializeEditPet() {
    const editPetForm = document.querySelector("#edit-pet-form");
    const messageContainer = document.querySelector("#message-container");

    if (!editPetForm) {
        return;
    }

    const params = new URLSearchParams(window.location.search);
    const petId = params.get("id");

    if (!petId) {
        return;
    }

    try {
        const response = await getPetById(petId);
        const pet = response.data;

        document.querySelector("#pet-name").value = pet.name || "";
        document.querySelector("#pet-breed").value = pet.breed || "";
        document.querySelector("#pet-age").value = pet.age ?? "";
        document.querySelector("#pet-size").value = pet.size || "";
        document.querySelector("#pet-gender").value = pet.gender?.toLowerCase() || "";
        document.querySelector("#pet-species").value = pet.species || "";
        document.querySelector("#pet-color").value = pet.color || "";
        document.querySelector("#pet-location").value = pet.location || "";
        document.querySelector("#pet-status").value = pet.adoptionStatus || "Available";
        document.querySelector("#pet-image").value = pet.image?.url || "";
        document.querySelector("#pet-description").value = pet.description || "";

    } catch (error) {
        displayMessage(
            "error",
            error.message,
            messageContainer
        );

        return;
    }

    editPetForm.addEventListener("submit", async (event) => {
        event.preventDefault();

        const name = document.querySelector("#pet-name").value.trim();
        const breed = document.querySelector("#pet-breed").value.trim();
        const age = Number(document.querySelector("#pet-age").value);
        const size = document.querySelector("#pet-size").value.trim();
        const gender = document.querySelector("#pet-gender").value;
        const species = document.querySelector("#pet-species").value.trim();
        const color = document.querySelector("#pet-color").value.trim();
        const location = document.querySelector("#pet-location").value.trim();
        const adoptionStatus = document.querySelector("#pet-status").value;
        const imageUrl = document.querySelector("#pet-image").value.trim();
        const description = document.querySelector("#pet-description").value.trim();

        const petData = {
            name,
            breed,
            age,
            size,
            gender,
            species,
            color,
            location,
            adoptionStatus,
            description,
            image: {
                url: imageUrl,
                alt: `${name} the ${breed}`,
            },
        };

        try {
            await editPet(petId, petData);

            displayMessage(
                "success",
                "Pet updated successfully",
                messageContainer
            );

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