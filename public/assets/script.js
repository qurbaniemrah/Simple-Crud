let category = document.querySelector('.nav-category');
let products = document.querySelector('.nav-products');
let categoryScreen = document.querySelector('.category-screen');
let productScreen = document.querySelector('.product-screen');



category.addEventListener('click',(e)=> {
    categoryScreen.style.display = "block"
    productScreen.style.display = "none"
    if ( category.dataset.clicked == "false") {
        categoryScreen.style.display = "none"
        productScreen.style.display = "none"
    }
    
})

products.addEventListener('click',(e)=> {
    categoryScreen.style.display = "none"
    productScreen.style.display = "block"
    if ( products.dataset.clicked == "false") {
        categoryScreen.style.display = "none"
        productScreen.style.display = "none"
    }
})
console.log(products);
