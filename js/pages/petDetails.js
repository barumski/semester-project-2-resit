import { getPetById } from "../api/pets/getPetById.js";
import { capitalize } from "../utils/formatText.js";

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
    const petStatus = document.querySelector("#pet-status");
    const petImagePlaceholder = document.querySelector("#pet-image-placeholder");

    const params = new URLSearchParams(window.location.search);
    const petId = params.get("id");

    if (!petId) {
        return;
    }

    try {
        const response = await getPetById(petId);
        const pet = response.data;

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
        petStatus.textContent = capitalize(pet.adoptionStatus);

    } catch (error) {
        console.error(error);
    }
}