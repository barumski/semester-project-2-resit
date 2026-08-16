import { API_BASE_URL } from "../constants.js";
import { getAuthHeaders } from "../authHeaders.js";

export async function createPet(petData) {
    const response = await fetch (`${API_BASE_URL}/pets`, {
        method: "POST",
        headers: getAuthHeaders(),
        body: JSON.stringify(petData),
    });

    const result = await response.json();

    if (!response.ok) {
        throw new Error(
            results.errors?.[0]?.message || "Failed to create pet"
        );
    }

    return result;
}