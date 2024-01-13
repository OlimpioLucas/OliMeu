// ==============SIDEBAR_CODE================
const open = document.querySelector('nav .hamburger i')
const cross = document.querySelector('#cross')
const sidebar = document.querySelector('nav ul')

// ========SIDEBAR========
open.addEventListener('click',function(){
    sidebar.classList.add('active')
    cross.style.top = "10px"
})

cross.addEventListener('click',function(){
    sidebar.classList.remove('active')
})

//search Filter based on selected
document.addEventListener("DOMContentLoaded", function () {
    // Sample product data
    const products = [
        {
            name:"DAF CF",
            category:"CF",
            img:"./imgs/DAF Viana - 33.jpg",
            price:"R$ xxx-xxx"
        },
        {
            name:"DAF CF - SEMIPESADO  ",
            category:"CF-SEMIPESADO",
            img:"./imgs/DAF Viana - 24.jpg",
            price:"R$ xxx-xxx"
        },
        {
            name:"DAF XF",
            category:"XF",
            img:"./imgs/62753429088c4989621939.jpg",
            price:"R$ xxx-xxx"
        }
     ]

    const categoryDropdown = document.getElementById("category");
    const productsContainer = document.getElementById("productContainer");

    // Initialize product list
    displayProducts(products);

    // Event listener for dropdown change
    categoryDropdown.addEventListener("change", function () {
        const selectedCategory = categoryDropdown.value;
        const filteredProducts = filterProducts(products, selectedCategory);
        displayProducts(filteredProducts);
    });

    // Function to filter products based on category
    function filterProducts(products, category) {
        if (category === "all") {
            return products;
        } else {
            return products.filter(product => product.category === category);
        }
    }

    // Function to display products in the container
    function displayProducts(products) {
        productsContainer.innerHTML = "";

        
        products.forEach(product => {
            const list = document.createElement("div")
            list.classList.add("swiper-slide")
            const product1 =  `
            <div class="col">
            <img src="${product.img}" alt="" >
            <h2 class="black">${product.name}</h2>
            <div class="flex">
                <div class="item"><i class="fa-solid fa-calendar-days"></i><span>24/24</span></div>
                <div class="item"><i class="fa-solid fa-circle-info"></i><span>xxx-xxx</span></div>
            </div>
            <h3>${product.price}</h3>
            <button>Mais Detalhes</button>
        </div>
            `
            list.innerHTML =product1
            productsContainer.appendChild(list)
        })     
    }
});

//Range functionality
const value = document.querySelector(".value")
function sliderChange(val){
    let range = val * 190 / 2
    value.innerHTML = range;
}
