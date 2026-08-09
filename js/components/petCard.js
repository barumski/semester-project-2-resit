function getGenderTag(gender) {
    const normalizedGender = gender?.toLowerCase();

    if (normalizedGender === "male") {
        return {
            label: "Male",
            textClass: "text-male",
            bgClass: "bg-maleBg",
            icon: "assets/icons/ui/male.svg"
        };
    }

    if (normalizedGender === "female") {
        return {
            label: "Female",
            textClass: "text-female",
            bgClass: "bg-femaleBg",
            icon: "assets/icons/ui/female.svg"
        };
    }

    return null;
}



export function createPetCard(pet) {
    const article = document.createElement("article");
    const genderTag = getGenderTag(pet.gender);

    article.className = 
        "group flex h-[470px] w-full max-w-[320px] cursor-pointer flex-col overflow-hidden rounded-2xl bg-surface shadow-card transition-all duration-200 ease-in-out hover:-translate-y-1 hover:shadow-cardHover";

    article.innerHTML = `
        <div class="relative h-[245px] w-full shrink-0 bg-disabled">
            <img
                src="${pet.image?.url || ""}"
                alt="${pet.image?.alt || `${pet.name} the ${pet.breed}`}"
                class="h-full w-full object-cover"
                data-pet-image>

            <div
                class="absolute inset-0 hidden items-center justify-center bg-disabled text-sm text-text"
                data-image-placeholder>

                No image available

            </div>
        
        </div>

        <div class="flex flex-1 flex-col gap-2 p-5">
        
            <div>
                <h3 class="text-2xl font-semibold text-primary">
                    ${pet.name}
                </h3>
                    
                <p class="mt-1 text-lg text-text">
                    ${pet.breed}
                </p>
            </div>
            
            <div class="mt-3 flex flex-col items-start gap-2">

                <div class="flex flex-wrap gap-2">
            
                    <span class="inline-flex items-center gap-2 rounded-md bg-ageBg px-2 py-1 text-sm font-medium text-primary">
                        <img
                            src="assets/icons/ui/paw.svg"
                            alt=""
                            class="h-4 w-4">
                        
                        ${pet.age} Years
                    </span>
                
                    <span class="inline-flex items-center gap-2 rounded-md bg-sizeBg px-2 py-1 text-sm font-medium text-size">
                        <img
                            src="assets/icons/ui/size.svg"
                            alt=""
                            class="h-4 w-4">
                            
                        ${pet.size}
                    </span>

                </div>

                ${genderTag ? `
                    <span class="inline-flex items-center gap-2 rounded-md ${genderTag.bgClass} px-2 py-1 text-sm font-medium ${genderTag.textClass}">
                        <img
                            src="${genderTag.icon}"
                            alt=""
                            class="h-4 w-4">
                        
                        ${genderTag.label}
                    </span>
                ` : ""}

            </div>    
            
            <a
                href="pets/index.html?id=${pet.id}"
                class="group mt-auto inline-flex items-center gap-2 font-medium text-primary transition-all duration-200 hover:text-primaryHover hover:underline">
                
                View details

                <img
                    src="assets/icons/ui/arrow-right.svg"
                    alt=""
                    class="h-4 w-4 transition-transform duration-200 group-hover:-rotate-45">
            </a>

        </div>
    `;

    article.addEventListener("click", () => {
        window.location.href = `pets/index.html?id=${pet.id}`;
    });

    const image = article.querySelector("[data-pet-image]");
    const placeholder = article.querySelector("[data-image-placeholder]");

    if (!pet.image?.url) {
        image.classList.add("hidden");
        placeholder.classList.remove("hidden");
        placeholder.classList.add("flex");
    } else {
        image.addEventListener("error", () => {
            image.classList.add("hidden");
            placeholder.classList.remove("hidden");
            placeholder.classList.add("flex");
        });
    }

    return article;
}