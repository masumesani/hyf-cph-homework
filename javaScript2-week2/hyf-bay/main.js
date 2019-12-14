console.log('Script loaded');



const products = getAvailableProducts();
const productsUl = document.querySelector('section.products ul');
console.log(productsUl);

///// beginin of week2 code

//user wants to search for some product that only ships to his country.

// .addEventListener on an element
// .filter on the products array
// renderProducts with the filtered array












/////// end of week2 code

function renderProducts(products) {
    products.forEach(product => {
        const li = document.createElement('li');

        let shipsToHTML = '';
        product.shipsTo.forEach(country => shipsToHTML += `<li>${country}</li>`);

        li.innerHTML = `
            <ul>
                <li>${product.name}</li>
                <li>${product.price}</li>
                <li>${product.rating}</li>
                <ul class="ships-to">${shipsToHTML}</ul>
            </ul>
        `;
        productsUl.appendChild(li);
    });
}

renderProducts(products);

console.log([1,2,3].value)

function cb(){
    //get product list
    const products = getAvailableProducts();
    //get filter string
    let searchedItem = products.value;
    //filter products baseds onstring
    let result =products.filter(value => value. searchedItem )
    //render products
    renderProducts(result);
}