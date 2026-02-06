let products = [
{id:1,name:"Black Hoodie",price:799,img:"https://plus.unsplash.com/premium_photo-1673356302125-c77491af8735"},
{id:2,name:"Denim Jacket",price:1299,img:"https://images.unsplash.com/photo-1614699745279-2c61bd9d46b5"},
{id:3,name:"White T-Shirt",price:399,img:"https://plus.unsplash.com/premium_photo-1756085509463-59d0110430ba"},
{id:4,name:"Sneakers",price:1599,img:"https://images.unsplash.com/photo-1600269452121-4f2416e55c28"},
{id:5,name:"Jeans",price:999,img:"https://images.unsplash.com/photo-1602293589930-45aad59ba3ab"},
{id:6,name:"Cap",price:299,img:"https://plus.unsplash.com/premium_photo-1739801197686-0a0e3684f1f4"},
{id:7,name:"Shirt",price:699,img:"https://images.unsplash.com/photo-1596755094514-f87e34085b2c"},
{id:8,name:"Watch",price:1899,img:"https://images.unsplash.com/photo-1523170335258-f5ed11844a49"},
{id:9,name:"Sunglasses",price:499,img:"https://images.unsplash.com/photo-1511499767150-a48a237f0083"},
{id:10,name:"Shoes",price:1499,img:"https://images.unsplash.com/photo-1542291026-7eec264c27ff"},
{id:11,name:"Sweatshirt",price:899,img:"https://images.unsplash.com/photo-1614975059251-992f11792b9f"},
{id:12,name:"Backpack",price:1199,img:"https://images.unsplash.com/photo-1553062407-98eeb64c6a62"},
];


let cart = JSON.parse(localStorage.getItem("cart")) || [];

function displayProducts(){
let box = document.getElementById("products");
if(!box) return;

box.innerHTML="";

products.forEach(p=>{
box.innerHTML += `
<div class="col-md-3 mb-4">
<div class="card p-2 text-center">
<img src="${p.img}">
<h6 class="mt-2">${p.name}</h6>
<p>₹${p.price}</p>
<button onclick="addToCart(${p.id})" class="btn btn-primary btn-sm">Add to Cart</button>
</div>
</div>
`;
});

updateCount();
}

function addToCart(id){
let item = products.find(p=>p.id==id);
cart.push(item);
localStorage.setItem("cart",JSON.stringify(cart));
updateCount();
alert("Added to cart");
}

function updateCount(){
let c = document.getElementById("count");
if(c) c.innerText = cart.length;
}

function showCart(){
let box = document.getElementById("cart");
if(!box) return;

box.innerHTML="";
let total=0;

cart.forEach((c,i)=>{
total+=c.price;
box.innerHTML+=`
<div class="card p-3 mb-2">
${c.name} - ₹${c.price}
<button onclick="removeItem(${i})" class="btn btn-danger btn-sm float-end">Remove</button>
</div>`;
});

box.innerHTML+=`<h4 class="mt-3">Total: ₹${total}</h4>`;
}

function removeItem(i){
cart.splice(i,1);
localStorage.setItem("cart",JSON.stringify(cart));
location.reload();
}

displayProducts();
showCart();
