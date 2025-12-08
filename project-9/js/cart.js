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
                    <button class="btn btn-dark" onclick="addCart(id)">Add to Cart</button>
                    <button class="btn btn-outline-dark" onclick="viewDetail(id)">View</button>
                </div>
            </div>
            </div>
        `;
    });

    document.getElementById("p-container").innerHTML = box;
}



function emptyCart(){
    localStorage.clear();
}



