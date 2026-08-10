const TOKEN_KEY = "petpals_token";
const USER_KEY = "petpals_user";

export function saveToken(token) {
    localStorage.setItem(TOKEN_KEY, token)
}

export function getToken() {
    return localStorage.getItem(TOKEN_KEY);
}

export function saveUser(user) {
    localStorage.setItem(USER_KEY, JSON.stringify(user));
}

export function getUser() {
    const user = localStorage.getItem(USER_KEY);

    if (!user) {
        return null;
    }

    return JSON.parse(user);
}

export function clearAuth() {
    localStorage.removeItem(TOKEN_KEY);
    localStorage.removeItem(USER_KEY);
}