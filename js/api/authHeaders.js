import { getToken } from "../utils/storage.js";
import { API_KEY } from "./apiKey.js";

export function getAuthHeaders() {
    const token = getToken();

    return {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
        "X-Noroff-API-Key": API_KEY,
    };
}