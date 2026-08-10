export function displayMessage(type, message, container) {
    if (!container) {
        return;
    }

    const styles = {
        success: {
            text: "text-success",
            background: "bg-successBg",
            border: "border-success",
            icon: "/assets/icons/ui/success.svg",
        },
        warning: {
            text: "text-warning",
            background: "bg-warningBg",
            border: "border-warning",
            icon:"/assets/icons/ui/warning.svg",
        },
        error: {
            text: "text-danger",
            background: "bg-dangerBg",
            border: "border-danger",
            icon:"/assets/icons/ui/error.svg",
        },
    };

    const style = styles[type] || styles.error;

    container.innerHTML = `
        <div class="flex items-center gap-3 rounded-lg border ${style.border} ${style.background} px-4 py-3 ${style.text}">
            <img
                src="${style.icon}"
                alt=""
                class="h-5 w-5">   
        
            <p class="text-base font-medium">
                ${message}
            </p>
        </div>
    `;
    
}