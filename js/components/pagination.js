export function createPagination(
    totalItems, 
    itemsPerPage, 
    currentPage, 
    onPageChange
)  {
    const pagination = document.querySelector("#pagination");

    if (!pagination) {
        return;
    }

    pagination.innerHTML ="";

    const totalPages = Math.ceil(totalItems / itemsPerPage);

    const previousButton = document.createElement("button");

    previousButton.innerHTML = `
        <img
            src="assets/icons/ui/arrow-left.svg"
            alt=""
            class="flex h-9 w-9 items-center justify-center rounded-md transition-all duration-200 hover:-translate-y-1">
    `;

    previousButton.setAttribute("aria-label", "Previous page");
    previousButton.disabled = currentPage === 1;

    previousButton.addEventListener("click", () => {
        onPageChange(currentPage - 1);
    });

    pagination.append(previousButton);

    let startPage = Math.max(1, currentPage - 1);
    let endPage = Math.min(totalPages, startPage + 2);

    if (endPage - startPage < 2) {
        startPage = Math.max(1, endPage - 2);
    }

    if (startPage > 1) {
        const ellipsis = document.createElement("span");

        ellipsis.textContent = "...";
        ellipsis.className =
            "flex h-9 w-9 items-center justify-center text-primary";

        pagination.append(ellipsis);
    }

    for (let page = startPage; page <= endPage; page++) {
        const pageButton = document.createElement("button");

        pageButton.textContent = page;

        pageButton.className =
            "flex h-9 w-9 items-center justify-center rounded-md text-sm font-medium";

        if (page === currentPage) {
            pageButton.classList.add("text-primary", "underline", "decoration-primary", "underline-offset-4");
            pageButton.setAttribute("aria-label", "page");
        } else {
            pageButton.classList.add(
                "text-primary",
                "hover:bg-disabled"
            );
        }

        pageButton.addEventListener("click", () => {
            onPageChange(page);
        });

        pagination.append(pageButton);
    }

    if (endPage < totalPages) {
        const ellipsis = document.createElement("span");

        ellipsis.textContent = "...";
        ellipsis.className =
            "flex h-9 w-9 items-center justify-center text-primary";

        pagination.append(ellipsis);
    }

    const nextButton = document.createElement("button");

    nextButton.innerHTML = `
        <img
            src="assets/icons/ui/arrow-right.svg"
            alt=""
            class="flex h-9 w-9 items-center justify-center rounded-md transition-all duration-200 hover:-translate-y-1">
    `;

    nextButton.setAttribute("aria-label", "Next page");
    nextButton.disabled = currentPage === totalPages;

    nextButton.addEventListener("click", () => {
        onPageChange(currentPage + 1);
    });

    pagination.append(nextButton);
    
}