import { API_BASE_URL } from "../constants.js";

export async function getAllPets() {
    const response = await fetch(`${API_BASE_URL}/pets`);

    if (!response.ok) {
        throw new Error("Failed to fetch pets");
    }

    return await response.json();
}