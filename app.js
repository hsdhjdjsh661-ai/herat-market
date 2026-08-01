import {
auth,
addProduct,
getProducts,
createUserWithEmailAndPassword,
signInWithEmailAndPassword,
signOut,
onAuthStateChanged
} from "./firebase.js";

const loginBox = document.getElementById("loginBox");
const homeBox = document.getElementById("homeBox");
const content = document.getElementById("content");
const searchBox = document.getElementById("searchBox");
const welcome = document.getElementById("welcome");

// ثبت نام
document.getElementById("registerBtn").onclick = async ()=>{

const email=document.getElementById("email").value.trim();
const password=document.getElementById("password").value.trim();

if(email==""||password==""){

alert("ایمیل و رمز عبور را وارد کنید.");
return;

}

try{

await createUserWithEmailAndPassword(auth,email,password);
alert("ثبت نام با موفقیت انجام شد.");

}catch(error){

alert(error.message);

}

};

// ورود
document.getElementById("loginBtn").onclick = async ()=>{

const email=document.getElementById("email").value.trim();
const password=document.getElementById("password").value.trim();

try{

await signInWithEmailAndPassword(auth,email,password);

}catch(error){

alert(error.message);

}

};

// خروج
document.getElementById("logoutBtn").onclick = async ()=>{

await signOut(auth);

};

// بررسی ورود
onAuthStateChanged(auth,(user)=>{

if(user){

loginBox.style.display="none";
homeBox.style.display="block";

welcome.innerHTML="خوش آمدید<br>"+user.email;

showProducts();

}else{

loginBox.style.display="block";
homeBox.style.display="none";

}

});

// نمایش آگهی‌ها
async function showProducts(){

const products=await getProducts();

products.reverse();

const search=(searchBox.value||"").toLowerCase();

let html="";

products.forEach(item=>{

const productName=(item.name||"").toLowerCase();

if(search && !productName.includes(search)){
return;
}

html+=`
<div class="product">

<h3>${item.name}</h3>

<p>🏙️ ${item.city}</p>

<p>📂 ${item.category}</p>

<p>💰 ${item.price} افغانی</p>

<p>👤 ${item.seller}</p>

<p>📞 ${item.phone}</p>

<p>${item.description}</p>

<a href="tel:${item.phone}">
<button class="contactBtn">
تماس با فروشنده
</button>
</a>

</div>
`;

});

if(html==""){

html="<p>هنوز آگهی ثبت نشده است.</p>";

}

content.innerHTML=html;

}

// ثبت آگهی
document.getElementById("addProductBtn").onclick=async()=>{

const user=auth.currentUser;

if(!user){

alert("ابتدا وارد شوید.");
return;

}

const city=document.getElementById("city").value;
const category=document.getElementById("category").value;
const name=document.getElementById("productName").value.trim();
const price=document.getElementById("productPrice").value.trim();
const phone=document.getElementById("phone").value.trim();
const description=document.getElementById("description").value.trim();

if(name==""||price==""||phone==""||description==""){

alert("تمام اطلاعات را وارد کنید.");
return;

}

const ok=await addProduct({

seller:user.email,
uid:user.uid,
city,
category,
name,
price,
phone,
description

});

if(ok){

alert("آگهی ثبت شد.");

document.getElementById("productName").value="";
document.getElementById("productPrice").value="";
document.getElementById("phone").value="";
document.getElementById("description").value="";

showProducts();

}else{

alert("خطا در ثبت آگهی.");

}

};

searchBox.oninput=showProducts;