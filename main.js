// Task 1: Setup Basic HTML Structure for Product Page

// Task 2: Fetch Products from the API Using Fetch and Promises
const productStore = document.getElementById('productStore');

// Fetch data from the supplier's product API
fetch('https://www.course-api.com/javascript-store-products')
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json(); // Parse the response as JSON
    })
    .then(products => {
        products.forEach(product => {
            const storeItem = document.createElement('li');
            storeItem.textContent = `${product.title} - $${product.price}`;
            productStore.appendChild(storeItem);
        });
    })
    .catch(error => {
        console.error('Problem with the fetch operation:', error);
    });