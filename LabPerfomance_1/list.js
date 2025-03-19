// Dummy product data
const products = [
    {
        id: 1,
        name: "iPhone 14 Pro",
        description: "Latest Apple smartphone with advanced camera system",
        price: 999.99,
        quantity: 50,
        display: true
    },
    {
        id: 2,
        name: "Samsung 4K Smart TV",
        description: "65-inch QLED display with smart features",
        price: 1299.99,
        quantity: 30,
        display: true
    },
    {
        id: 3,
        name: "MacBook Pro M2",
        description: "Professional laptop with M2 chip",
        price: 1499.99,
        quantity: 25,
        display: true
    },
    {
        id: 4,
        name: "Sony WH-1000XM4",
        description: "Premium noise-canceling headphones",
        price: 349.99,
        quantity: 100,
        display: true
    },
    {
        id: 5,
        name: "iPad Air",
        description: "Versatile tablet for work and entertainment",
        price: 599.99,
        quantity: 45,
        display: false
    }
];

// Function to populate table with products
function displayProducts(products) {
    const tableBody = document.getElementById('productTableBody');
    tableBody.innerHTML = '';

    products.forEach(product => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${product.id}</td>
            <td>${product.name}</td>
            <td>${product.description}</td>
            <td>$${product.price.toFixed(2)}</td>
            <td>${product.quantity}</td>
            <td>${product.display ? 'Yes' : 'No'}</td>
            <td>
                <button class="btn-edit" onclick="editProduct(${product.id})">Edit</button>
                <button class="btn-delete" onclick="deleteProduct(${product.id})">Delete</button>
            </td>
        `;
        tableBody.appendChild(row);
    });
}

// Function to handle search
function handleSearch() {
    const searchInput = document.getElementById('searchInput');
    const searchTerm = searchInput.value.toLowerCase();

    const filteredProducts = products.filter(product => 
        product.name.toLowerCase().includes(searchTerm) ||
        product.description.toLowerCase().includes(searchTerm)
    );

    displayProducts(filteredProducts);
}

// Function to edit product (placeholder)
function editProduct(id) {
    window.location.href = `edit.html?id=${id}`;
}

// Function to delete product (placeholder)
function deleteProduct(id) {
    if (confirm('Are you sure you want to delete this product?')) {
        // Add actual delete functionality here
        console.log(`Delete product with id: ${id}`);
    }
}

// Add search event listener
document.getElementById('searchInput').addEventListener('input', handleSearch);

// Initial display of products
displayProducts(products);