document.addEventListener("DOMContentLoaded", function () {
    const products = [
        { name: "+1 Fruit Storage", category: "Game Passes", price: 6.25, inStock: true },
        { name: "Kitsune (Mythical)", category: "Fruits", price: 49.46, inStock: true },
        { name: "Human: Buddha (Legendary)", category: "Fruits", price: 17.04, inStock: false },
        { name: "Portal (Legendary)", category: "Fruits", price: 20.92, inStock: true },
        { name: "Faster Boats Game Pass", category: "Game Passes", price: 5.38, inStock: true },
        { name: "2x Money Game Pass", category: "Game Passes", price: 6.32, inStock: false },
        { name: "Dark Blade Game Pass", category: "Game Passes", price: 15.68, inStock: true },
        { name: "2x Mastery Game Pass", category: "Game Passes", price: 6.25, inStock: true },
        { name: "Control (Mythical)", category: "Fruits", price: 23.14, inStock: false },
        { name: "Magma (Rare)", category: "Fruits", price: 13.06, inStock: true },
        { name: "Fruit Gas (Legendary)", category: "Fruits", price: 32.18, inStock: true },
        { name: "Yeti (Mythical)", category: "Fruits", price: 38.40, inStock: false },
        { name: "Dough (Mythical)", category: "Fruits", price: 26.75, inStock: true },
        { name: "Diamond (Uncommon)", category: "Fruits", price: 10.19, inStock: true },
        { name: "2x Drop Chance Game Pass", category: "Game Passes", price: 5.38, inStock: true },
        { name: "Exp Boosts 12 hours", category: "Exp Boosts", price: 8.82, inStock: false },
        { name: "T-Rex (Mythical)", category: "Fruits", price: 21.79, inStock: true },
        { name: "Mythical Scroll", category: "Scrolls", price: 19.37, inStock: true },
        { name: "Mammoth (Mythical)", category: "Fruits", price: 21.79, inStock: false },
        { name: "Revive (Uncommon)", category: "Fruits", price: 11.11, inStock: true },
        { name: "Spin (Common)", category: "Fruits", price: 3.25, inStock: true },
        { name: "Spike (Common)", category: "Fruits", price: 4.61, inStock: false },
        { name: "Light (Rare)", category: "Fruits", price: 13.15, inStock: true },
        { name: "Fruit Notifier", category: "Game Passes", price: 27.14, inStock: true },
        { name: "Exp Boosts 24 hours", category: "Exp Boosts", price: 17.04, inStock: true },
        { name: "Gravity (Mythical)", category: "Fruits", price: 21.39, inStock: false },
        { name: "Ice (Uncommon)", category: "Fruits", price: 8.00, inStock: true },
        { name: "Spider (Legendary)", category: "Fruits", price: 16.85, inStock: true },
        { name: "Sound (Legendary)", category: "Fruits", price: 17.90, inStock: false },
        { name: "Dark (Uncommon)", category: "Fruits", price: 9.76, inStock: true },
        { name: "Blizzard (Mythical)", category: "Fruits", price: 24.80, inStock: true },
        { name: "Bird: Falcon (Uncommon)", category: "Fruits", price: 7.10, inStock: false },
        { name: "Flame (Uncommon)", category: "Fruits", price: 6.31, inStock: true },
        { name: "Smoke (Common)", category: "Fruits", price: 3.42, inStock: true },
        { name: "Chop (Common)", category: "Fruits", price: 3.41, inStock: false },
        { name: "Sand (Uncommon)", category: "Fruits", price: 9.04, inStock: true },
        { name: "Barrier (Rare)", category: "Fruits", price: 16.36, inStock: true },
        { name: "Ghost (Rare)", category: "Fruits", price: 12.53, inStock: false },
        { name: "Bird: Phoenix (Legendary)", category: "Fruits", price: 20.92, inStock: true },
        { name: "Love (Legendary)", category: "Fruits", price: 18.97, inStock: true },
        { name: "Spirit (Mythical)", category: "Fruits", price: 23.45, inStock: false },
        { name: "Spring (Common)", category: "Fruits", price: 3.41, inStock: true },
        { name: "Bomb (Common)", category: "Fruits", price: 3.41, inStock: true },
        { name: "Dragon (Legendary)", category: "Fruits", price: 56.86, inStock: true },
        { name: "Barrier (Rare)", category: "Fruits", price: 15.09, inStock: false },
        { name: "Rubber (Rare)", category: "Fruits", price: 12.27, inStock: true },
        { name: "Pain (Legendary)", category: "Fruits", price: 20.34, inStock: true },
        { name: "Legendary Scroll", category: "Scrolls", price: 11.02, inStock: false },
        { name: "Shadow (Mythical)", category: "Fruits", price: 30.23, inStock: true },
        { name: "Venom (Mythical)", category: "Fruits", price: 24.80, inStock: true },
        { name: "Exp Boosts 6 hours", category: "Exp Boosts", price: 5.46, inStock: true },
        { name: "Leopard (Mythical)", category: "Fruits", price: 27.42, inStock: true },
        { name: "Rumble (Legendary)", category: "Fruits", price: 24.80, inStock: true },
        { name: "Quake (Legendary)", category: "Fruits", price: 17.04, inStock: true },
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
                <p class="price">CA$${product.price.toFixed(2)}</p>
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
