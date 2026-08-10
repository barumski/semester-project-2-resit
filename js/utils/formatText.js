export function capitalize(value) {
    if (!value) {
        return "Not specified";
    }

    return value.charAt(0).toUpperCase() + value.slice(1);
}