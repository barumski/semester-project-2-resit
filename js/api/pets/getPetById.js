import { API_BASE_URL } from "../constants.js";

export async function getPetById(id) {
    const response = await fetch(`${API_BASE_URL}/pets/${id}`);

    if (!response.ok) {
        throw new Error("Failed to fetch pet");
    }

    return await response.json();
}