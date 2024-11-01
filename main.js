// Task 1: Setup Basic HTML Structure for Product Page


// Task 2: Fetch Products from the API Using Fetch and Promises
const productStore = document.getElementById('productStore');

fetch('https://www.course-api.com/javascript-store-products') //sends an HTTP GET request to the product API
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json(); //Parse the response as JSON
    })
    .then(products => {
        products.forEach(product => {
            const storeItem = document.createElement('li');
            storeItem.style.listStyle = 'none';
            storeItem.style.marginBottom = '10px';

            // Access correct fields in the product object
            const name = product.fields.name;
            const company = product.fields.company;
            const price = product.fields.price;
            const imageUrl = product.fields.image[0].url;

            // Create image element
            const img = document.createElement('img');
            img.src = imageUrl;
            img.alt = name;
            img.style.width = '50px';
            img.style.height = '50px';
            img.style.marginRight = '10px';



            
            storeItem.textContent = `${product.title} - $${product.price}`;
            productStore.appendChild(storeItem);
        });


// Task 3: Display Product Details Dynamically






// Task 4: Handle Errors Gracefully
    })
    .catch(error => { //handles any errors that might occur during the request
        console.error('Problem with the fetch operation:', error);
    });
