export function initializeSearch() {

    const searchInput = document.querySelector("#pet-search");
    const searchIconButton = document.querySelector("#search-icon-button");
    const searchIcon = document.querySelector("#search-icon");

    if (
        searchInput && 
        searchIconButton && 
        searchIcon
    )  {

        searchInput.addEventListener("input", updateSearchIcon);

        searchIconButton.addEventListener("click", clearSearch);

        function updateSearchIcon() {

            const hasValue = searchInput.value.trim() !== "";

            if (hasValue) {
                searchIcon.src = "assets/icons/ui/close.svg";
                searchIcon.className = "h-4 w-4"
                searchIconButton.setAttribute("aria-label", "Clear search");
            } else {
                searchIcon.src = "assets/icons/ui/search.svg";
                searchIcon.className = "h-5 w-5"
                searchIconButton.setAttribute("aria-label", "Search");
            }

        }

        function clearSearch() {
            if (!searchInput.value.trim()) {
                return;
            }

            searchInput.value = "";

            updateSearchIcon();

            searchInput.dispatchEvent(new CustomEvent("searchClear"));

            searchInput.focus();
        }
    }
}