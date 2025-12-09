// blueprint 
let products = [];

function getData() {

    let product = {
        id: document.getElementById("pid").value,
        name: document.getElementById("pname").value,
        price: document.getElementById("price").value,
        color: document.getElementById("pcolor").value,
        qty: document.getElementById("qty").value,
        img: document.getElementById("img").value,
        desc: document.getElementById("pdesc").value
    };

    return product;
}

function saveData() {
    let p = getData();
    let products = JSON.parse(localStorage.getItem("products")) || [];

    products.push(p);
    localStorage.setItem("products", JSON.stringify(products));
    alert("Product Added!");

    viewData();
}

function viewData() {
    let products = JSON.parse(localStorage.getItem("products")) || [];
    let box = "";

    products.forEach(p => {
        box += `
            <div class="col-3 ">
                <div class="card" style="width: 16rem; ">
                <img src="${p.img}" class="card-img-top" alt="Img" style="width: auto; height: 20rem " >
                <div class="card-body">
                    <h5 class="card-title">${p.name}</h5>
                    <p class="card-text">${p.desc}</p>
                    <p>₹${p.price}</p>
                    <button class="btn btn-dark" onclick="addCart(${p.id})">Add to Cart</button>
                    <button class="btn btn-outline-dark" onclick="viewDetail(p.id)">View</button>
                </div>
            </div>
            </div>
        `;
    });

    document.getElementById("p-container").innerHTML = box;
}

let productCart = [];

function addCart(id) {


    let products = JSON.parse(localStorage.getItem("products")) || [];
    let item = products.find(p => p.id == id);
    let exist = productCart.find(p => p.id == id);

    if (exist) {
        alert("Already in cart");
        return;
    }

    productCart.push(item);
    localStorage.setItem("cart", JSON.stringify(productCart));
    console.log(productCart);
    alert("Added to cart!");
    viewCart();
}



function viewCart() {
    let productCart = JSON.parse(localStorage.getItem("cart")) || [];
    let section = `
        <table class="table">
            <tr>
                <th>Image</th>
                <th>Product Name</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total</th>
                <th>Action</th>
            </tr>
    `;

    productCart.forEach(p => {
        section += `
            <tr>
                <td><img src="${p.img}" style="width:50px;height:50px;"></td>
                <td>${p.name}</td>
                <td>₹${p.price}</td>
                <td>${p.qty}</td>
                <td>₹${p.price * p.qty}</td>
                <td><button onclick="deleteItem('${p.id}')">Delete</button></td>
            </tr>
        `;
    });

    section += `</table>`;
    document.getElementById("displayCart").innerHTML = section;
}

function deleteItem(id) {
    let productCart = JSON.parse(localStorage.getItem("cart")) || [];
    productCart = productCart.filter(p => p.id != id);
    localStorage.setItem("cart", JSON.stringify(productCart));
    viewCart();
}



function emptyCart() {
    localStorage.removeItem("cart");
    viewCart();
}



