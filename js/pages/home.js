import { getAllPets } from "../api/pets/getAllPets.js";
import { createPetCard } from "../components/petCard.js";
import { createPagination } from "../components/pagination.js";

export async function initializeHome() {
    const petGrid = document.querySelector("#pet-grid");
    const petCounter = document.querySelector("#pet-counter");
    const searchInput = document.querySelector("#pet-search");

    if (!petGrid) {
        return;
    }

    try {
        const response = await getAllPets();

        const pets = response.data;
        const itemsPerPage = 12;
        let currentPage = 1;
        let filteredPets = pets;

        function renderPage(page) {
            currentPage = page;

            const startIndex = (currentPage - 1) * itemsPerPage;
            const endIndex = startIndex + itemsPerPage;

            const petToShow = filteredPets.slice(startIndex, endIndex);

            petGrid.innerHTML = "";

            petToShow.forEach((pet) => {
                const petCard = createPetCard(pet);
                petGrid.append(petCard);
            });

            createPagination(
                filteredPets.length,
                itemsPerPage,
                currentPage,
                renderPage
            );
        }

        if (searchInput) {
            searchInput.addEventListener("keydown", (event) => {
                if (event.key !== "Enter") {
                    return;
                }

                const searchTerm = searchInput.value.trim().toLowerCase();

                filteredPets = pets.filter((pet) => {
                    const name = pet.name?.toLowerCase() || "";
                    const breed = pet.breed?.toLowerCase() || "";

                    return (
                        name.includes(searchTerm) ||
                        breed.includes(searchTerm)
                    );
                });

                currentPage = 1;
                renderPage(currentPage);
            });

            searchInput.addEventListener("searchClear", () => {
                filteredPets = pets;
                currentPage = 1;
                renderPage(currentPage);
            });
        }

        renderPage(currentPage);

        if (petCounter) {
            petCounter.textContent = `${response.meta.totalCount}+`;
        }

    } catch (error) {
        console.error(error);
    }

}
    
