// blueprint 
// let products = [];

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

                    <!-- FIX: open page with id -->
                    <button class="btn btn-outline-dark" onclick="window.location.href='viewDetail.html?id=${p.id}'">View</button>
                </div>
            </div>
            </div>
        `;
    });

    document.getElementById("p-container").innerHTML = box;
}


function viewDetail(id) {

    let all = JSON.parse(localStorage.getItem("products")) || [];
    let p = all.find(pr => pr.id == id);

    let box = `
        <div class="row mt-4">

            <!-- LEFT : IMAGE -->
            <div class="col-6 d-flex justify-content-center">
                <img src="${p.img}" 
                     style="width:100%; max-width:350px; border-radius:12px; box-shadow:0 4px 10px rgba(0,0,0,0.15);">
            </div>

            <!-- RIGHT : DETAILS -->
            <div class="col-6">
                <h2 class="mb-3">${p.name}</h2>
                <p style="color:#666; font-size:15px;">${p.desc}</p>

                <p class="mt-3"><strong>Price:</strong> ₹${p.price}</p>
                <p><strong>Color:</strong> ${p.color}</p>
                <p><strong>Qty:</strong> ${p.qty}</p>

                <button 
                    class="btn w-100 mt-4"
                    style="
                        background:#111;
                        color:#fff;
                        border:none;
                        padding:12px 0;
                        font-size:16px;
                        border-radius:8px;
                        transition:0.2s ease;
                        box-shadow:0 3px 8px rgba(0,0,0,0.2);
                    "
                    onmouseover="this.style.background='#000'"
                    onmouseout="this.style.background='#111'"
                    onclick="addCart('${p.id}')">
                    Add to Cart
                </button>
            </div>

        </div>
    `;

    document.getElementById("productDetail").innerHTML = box;
}

function addCart(id) {

    let allProducts = JSON.parse(localStorage.getItem("products")) || [];
    let productCart = JSON.parse(localStorage.getItem("cart")) || [];

    let item = allProducts.find(p => p.id == id);
    if (!item) {
        alert("Ow! We run out out of stock!");
        return;
    }

    let exist = productCart.find(p => p.id == id);
    if (exist) {
        alert("oh! Product is already in Cart.");
        return;
    }

    productCart.push(item);
    localStorage.setItem("cart", JSON.stringify(productCart));

    alert("Yay! Item added to cart!");
}



function viewCart() {
    let productCart = JSON.parse(localStorage.getItem("cart")) || [];
    let section = "";

    productCart.forEach(p => {
        section += `
        <tr>
            <td><img src="${p.img}"></td>
            <td>${p.name}</td>
            <td>₹${p.price}</td>

            <td>
                <button class="qty-btn" onclick="decrease('${p.id}')">-</button>
                ${p.qty}
                <button class="qty-btn" onclick="increase('${p.id}')">+</button>
            </td>

            <td>₹${p.price * p.qty}</td>

            <td>
                <button class="delete-btn" onclick="deleteItem('${p.id}')">Delete</button>
            </td>
        </tr>`;
    });

    document.getElementById("displayCart").innerHTML = section;
}






function increase(id) {
    let productCart = JSON.parse(localStorage.getItem("cart")) || [];
    let item = productCart.find(p => p.id == id);

    item.qty++;
    localStorage.setItem("cart", JSON.stringify(productCart));
    viewCart();
}

function decrease(id) {
    let productCart = JSON.parse(localStorage.getItem("cart")) || [];
    let item = productCart.find(p => p.id == id);

    if (item.qty > 1) {
        item.qty--;
    }

    localStorage.setItem("cart", JSON.stringify(productCart));
    viewCart();
}

function GrandTotal() {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    let total = 0;

    cart.forEach(p => {
        total += p.price * p.qty;
    });

    document.getElementById("grandTotal").innerText = total;
}

function continueShopping() {
    window.location.href = "index.html";
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

function viewAllProducts() {
    let allProducts = JSON.parse(localStorage.getItem("products")) || [];
    let table = document.getElementById("viewallItem");

    table.querySelectorAll("tbody").forEach(e => e.remove());

    let tbody = document.createElement("tbody");

    allProducts.forEach(p => {
        let tr = document.createElement("tr");

        tr.innerHTML = `
            <td>${p.id}</td>
            <td><img src="${p.img}" style="width:50px;height:50px;object-fit:cover;"></td>
            <td class="name">${p.name}</td>
            <td class="price">₹${p.price}</td>
            <td class="qty">${p.qty}</td>
            <td>
                <button class="edit-btn" onclick="editRow(this, '${p.id}')">Edit</button>
                <button class="delete-btn" onclick="deleteProduct('${p.id}')">Delete</button>
            </td>
        `;
        tbody.appendChild(tr);
    });

    table.appendChild(tbody);
}

function editRow(button, id) {
    let row = button.parentElement.parentElement;
    let nameCell = row.querySelector(".name");
    let priceCell = row.querySelector(".price");
    let qtyCell = row.querySelector(".qty");

    if (button.textContent === "Save") {
        let allProducts = JSON.parse(localStorage.getItem("products")) || [];
        let product = allProducts.find(p => p.id == id);

        product.name = nameCell.querySelector("input").value;
        product.price = parseFloat(priceCell.querySelector("input").value);
        product.qty = parseInt(qtyCell.querySelector("input").value);

        localStorage.setItem("products", JSON.stringify(allProducts));
        button.textContent = "Edit";
        viewAllProducts();
        return;
    }

    nameCell.innerHTML = `<input type="text" value="${nameCell.textContent}" style="width:100%">`;
    priceCell.innerHTML = `<input type="number" value="${priceCell.textContent.replace('₹', '')}" style="width:80px">`;
    qtyCell.innerHTML = `<input type="number" value="${qtyCell.textContent}" style="width:60px">`;

    button.textContent = "Save";
}

function deleteProduct(id) {
    let allProducts = JSON.parse(localStorage.getItem("products")) || [];
    allProducts = allProducts.filter(p => p.id != id);
    localStorage.setItem("products", JSON.stringify(allProducts));
    viewAllProducts();
}

viewAllProducts();



