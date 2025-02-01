document.addEventListener("DOMContentLoaded", function () {
    const products = [
        { name: "+1 Fruit Storage", category: "Game Passes", price: 3.96, inStock: true },
        { name: "Kitsune (Mythical)", category: "Fruits", price: 39.97, inStock: true },
        { name: "Human: Buddha (Legendary)", category: "Fruits", price: 12.95, inStock: false },
        { name: "Portal (Legendary)", category: "Fruits", price: 16.18, inStock: true },
        { name: "Faster Boats Game Pass", category: "Game Passes", price: 3.24, inStock: true },
        { name: "2x Money Game Pass", category: "Game Passes", price: 4.02, inStock: false },
        { name: "Dark Blade Game Pass", category: "Game Passes", price: 11.82, inStock: true },
        { name: "2x Mastery Game Pass", category: "Game Passes", price: 3.96, inStock: true },
        { name: "Control (Mythical)", category: "Fruits", price: 18.04, inStock: false },
        { name: "Magma (Rare)", category: "Fruits", price: 9.63, inStock: true },
        { name: "Fruit Gas (Legendary)", category: "Fruits", price: 25.56, inStock: true },
        { name: "Yeti (Mythical)", category: "Fruits", price: 30.75, inStock: false },
        { name: "Dough (Mythical)", category: "Fruits", price: 21.04, inStock: true },
        { name: "Diamond (Uncommon)", category: "Fruits", price: 7.24, inStock: true },
        { name: "2x Drop Chance Game Pass", category: "Game Passes", price: 3.24, inStock: true },
        { name: "Exp Boosts 12 hours", category: "Exp Boosts", price: 6.10, inStock: false },
        { name: "T-Rex (Mythical)", category: "Fruits", price: 16.91, inStock: true },
        { name: "Mythical Scroll", category: "Scrolls", price: 14.89, inStock: true },
        { name: "Mammoth (Mythical)", category: "Fruits", price: 16.91, inStock: false },
        { name: "Revive (Uncommon)", category: "Fruits", price: 8.01, inStock: true },
        { name: "Spin (Common)", category: "Fruits", price: 1.46, inStock: true },
        { name: "Spike (Common)", category: "Fruits", price: 2.59, inStock: false },
        { name: "Light (Rare)", category: "Fruits", price: 9.71, inStock: true },
        { name: "Fruit Notifier", category: "Game Passes", price: 21.37, inStock: true },
        { name: "Exp Boosts 24 hours", category: "Exp Boosts", price: 12.95, inStock: true },
        { name: "Gravity (Mythical)", category: "Fruits", price: 16.58, inStock: false },
        { name: "Ice (Uncommon)", category: "Fruits", price: 5.42, inStock: true },
        { name: "Spider (Legendary)", category: "Fruits", price: 12.79, inStock: true },
        { name: "Sound (Legendary)", category: "Fruits", price: 13.67, inStock: false },
        { name: "Dark (Uncommon)", category: "Fruits", price: 6.88, inStock: true },
        { name: "Blizzard (Mythical)", category: "Fruits", price: 19.42, inStock: true },
        { name: "Bird: Falcon (Uncommon)", category: "Fruits", price: 4.67, inStock: false },
        { name: "Flame (Uncommon)", category: "Fruits", price: 4.01, inStock: true },
        { name: "Smoke (Common)", category: "Fruits", price: 1.60, inStock: true },
        { name: "Chop (Common)", category: "Fruits", price: 1.59, inStock: false },
        { name: "Sand (Uncommon)", category: "Fruits", price: 6.28, inStock: true },
        { name: "Barrier (Rare)", category: "Fruits", price: 12.38, inStock: true },
        { name: "Ghost (Rare)", category: "Fruits", price: 9.19, inStock: false },
        { name: "Bird: Phoenix (Legendary)", category: "Fruits", price: 16.18, inStock: true },
        { name: "Love (Legendary)", category: "Fruits", price: 14.56, inStock: true },
        { name: "Spirit (Mythical)", category: "Fruits", price: 18.29, inStock: false },
        { name: "Spring (Common)", category: "Fruits", price: 1.59, inStock: true },
        { name: "Bomb (Common)", category: "Fruits", price: 1.59, inStock: true },
        { name: "Dragon (Legendary)", category: "Fruits", price: 46.13, inStock: true },
        { name: "Barrier (Rare)", category: "Fruits", price: 11.33, inStock: false },
        { name: "Rubber (Rare)", category: "Fruits", price: 8.97, inStock: true },
        { name: "Pain (Legendary)", category: "Fruits", price: 15.70, inStock: true },
        { name: "Legendary Scroll", category: "Scrolls", price: 7.93, inStock: false },
        { name: "Shadow (Mythical)", category: "Fruits", price: 23.94, inStock: true },
        { name: "Venom (Mythical)", category: "Fruits", price: 25.56 * 1.3, inStock: true }, // Adjusted price
    ];

    const productList = document.querySelector(".product-list");
    const hideOutOfStockButton = document.getElementById("hide-out-of-stock");
    const resetFiltersButton = document.getElementById("reset-filters");

    // Render products
    function renderProducts(filterOutOfStock = false) {
        productList.innerHTML = "";
        products.forEach(product => {
            if (filterOutOfStock && !product.inStock) return;

            const productElement = document.createElement("div");
            productElement.classList.add("product");
            productElement.innerHTML = `
                <h2>${product.name}</h2>
                <p class="price">CA$${(product.price * 1.3).toFixed(2)}</p>
                ${!product.inStock ? '<p class="out-of-stock">Out of Stock</p>' : ''}
            `;
            productList.appendChild(productElement);
        });
    }

    // Initial render
    renderProducts();

    // Hide out of stock
    hideOutOfStockButton.addEventListener("click", () => {
        renderProducts(true);
    });

    // Reset filters
    resetFiltersButton.addEventListener("click", () => {
        renderProducts();
    });
});
