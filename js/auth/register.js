import { API_BASE_URL } from "../api/constants.js";

export async function registerUser(userData) {
    const response = await fetch(`${API_BASE_URL}/auth/register`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(userData)
    });

    const result = await response.json();

    if (!response.ok) {
        throw new Error(
            result.errors?.[0]?.message || "Registration failed"
        );
    }

    return result;
}