import { API_BASE_URL } from "../constants.js";
import { getAuthHeaders } from "../authHeaders.js";

export async function editPet(id, petData) {
    const response = await fetch(`${API_BASE_URL}/pets/${id}`, {
        method: "PUT",
        headers: getAuthHeaders(),
        body: JSON.stringify(petData),
    });

    const result = await response.json();

    if (!response.ok) {
        throw new Error(
            result.errors?.[0]?.message || "Failed to update pet"
        );
    }

    return result;
}