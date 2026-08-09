import { getPetById } from "../api/pets/getPetById.js";

export async function initializePetDetails() {
    const params = new URLSearchParams(window.location.search);
    const petId = params.get("id");

    if (!petId) {
        return;
    }

    try {
        const response = await getPetById(petId);

        console.log(response);
        console.log(response.data);
    } catch (error) {
        console.error(error);
    }
}