import { API_BASE_URL } from "../constants.js";
import { getAuthHeaders } from "../authHeaders.js";

export async function deletePet(id) {
    const response = await fetch(`${API_BASE_URL}/pets/${id}`, {
        method: "DELETE",
        headers: getAuthHeaders(),
    });

    if (!response.ok) {
        let message = "Failed to delete pet";

        try {
            const result = await response.json();
            message = result.errors?.[0]?.message || message;
        } catch {

        }

        throw new Error(message);
    }
}