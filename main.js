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
            storeItem.textContent = `${product.title} - $${product.price}`;
            productStore.appendChild(storeItem);
    


// Task 3: Display Product Details Dynamically
 // Access the fields in the product object
 const name = product.fields.name;
 const company = product.fields.company;
 const price = product.fields.price;
 const imageUrl = product.fields.image[0].url;

 storeItem.innerHTML = `
                <img src="${imageUrl}" alt="${name}" style="width: 50px; height: 50px; margin-right: 10px;">
                <strong>${name}</strong> by ${company} - $${price}`;
       // Append the product item to the product store list
       productStore.appendChild(storeItem);
    });
})
    

// Task 4: Handle Errors Gracefully
    .catch(error => { //handles any errors that might occur during the request
        console.error('Problem with the fetch operation:', error);
    });
