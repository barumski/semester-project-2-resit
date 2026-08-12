import { API_BASE_URL } from "../api/constants.js";

export async function loginUser(userData) {
    const response = await fetch(`${API_BASE_URL}/auth/login`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(userData)
    });

    const result = await response.json();

    if (!response.ok) {
        throw new Error(
            result.errors?.[0]?.message || "Login failed"
        );
    }

    return result;
}