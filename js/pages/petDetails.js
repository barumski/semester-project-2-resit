import { getPetById } from "../api/pets/getPetById.js";
import { capitalize } from "../utils/formatText.js";
import { getUser } from "../utils/storage.js";
import { deletePet } from "../api/pets/deletePet.js";
import { editPet } from "../api/pets/editPet.js";
import { displayMessage } from "../components/displayMessage.js";

export async function initializePetDetails() {
    const petName = document.querySelector("#pet-name");
    const petImage = document.querySelector("#pet-image");
    const aboutHeading = document.querySelector("#about-heading");
    const petDescription = document.querySelector("#pet-description");
    const petBreed = document.querySelector("#pet-breed");
    const petAge = document.querySelector("#pet-age");
    const petSize = document.querySelector("#pet-size");
    const petGender = document.querySelector("#pet-gender");
    const petSpecies = document.querySelector("#pet-species");
    const petColor = document.querySelector("#pet-color");
    const petLocation = document.querySelector("#pet-location");
    const petStatus = document.querySelector("#pet-status");
    const petImagePlaceholder = document.querySelector("#pet-image-placeholder");
    const publicActions = document.querySelector("#public-actions");
    const adminActions = document.querySelector("#admin-actions");
    const adoptButton = document.querySelector("#adopt-button");
    const editButton = document.querySelector("#edit-button");
    const deleteButton = document.querySelector("#delete-button");
    const messageContainer = document.querySelector("#message-container");

    const params = new URLSearchParams(window.location.search);
    const petId = params.get("id");

    if (!petId) {
        return;
    }

    try {
        const response = await getPetById(petId);
        const pet = response.data;

        editButton?.addEventListener("click", () => {
            window.location.href = `edit/index.html?id=${pet.id}`;
        });

        const user = getUser();

        const isOwner = 
            user &&
            pet.owner?.name &&
            user.name === pet.owner.name;

        if (isOwner) {
            publicActions?.classList.add("hidden");

            adminActions.classList.remove("hidden");
            adminActions.classList.add("flex");

        } else {
            publicActions?.classList.remove("hidden");
            publicActions?.classList.add("flex");

            adminActions?.classList.add("hidden");
            adminActions?.classList.remove("flex");

            if (user) {
                adoptButton?.classList.remove("hidden");
            } else {
                adoptButton?.classList.add("hidden");
            }
        }

        if (pet.image?.url) {
            petImage.src = pet.image.url;
            petImage.alt = pet.image.alt || `${pet.name} the ${pet.breed}`;

            petImage.addEventListener("error", () => {
                petImage.classList.add("hidden");
                petImagePlaceholder.classList.remove("hidden");
                petImagePlaceholder.classList.add("flex");
            });

        } else {
            petImage.classList.add("hidden");
            petImagePlaceholder.classList.remove("hidden");
            petImagePlaceholder.classList.add("flex");
        }

        petName.textContent = pet.name || "Not specified";
        aboutHeading.textContent = `About ${pet.name || "this pet"}`;

        petDescription.textContent = pet.description || "No description available";

        petBreed.textContent = pet.breed || "Not specified";
        petAge.textContent =`${pet.age} Years`;
        petSize.textContent = capitalize(pet.size);

        const normalizedGender = pet.gender?.toLowerCase();

        if (
            normalizedGender === "male" ||
            normalizedGender === "female"
        ) {
            petGender.textContent = capitalize(normalizedGender);
        } else {
            petGender.textContent = "Not specified";
        }

        petSpecies.textContent = capitalize(pet.species);
        petColor.textContent = capitalize(pet.color);
        petLocation.textContent = pet.location || "Not specified";
        petStatus.textContent = capitalize(pet.adoptionStatus);

        adoptButton?.addEventListener("click", () => {
            displayMessage(
                "success",
                `Thanks for your interest in ${pet.name}.<br>
                Please contact us to continue the adoption process.<br><br>
                Email: support@petpals.com<br>
                Phone: +47 123 45 678.`,
                messageContainer
            );
        });

        deleteButton?.addEventListener("click", async () => {
            const confirmed = window.confirm(
                `Are you sure you want to delete ${pet.name}?`
            );

            if (!confirmed) {
                return;
            }

            try {
                await deletePet(pet.id);

                window.location.href = "../index.html";

            } catch (error) {
                console.error(error);
            }
        });

    } catch (error) {
        console.error(error);
    }
}