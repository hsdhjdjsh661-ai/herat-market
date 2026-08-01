import {
auth,
getProducts,
deleteProduct,
updateProduct
} from "./firebase.js";

// مدیران برنامه
const ADMINS = [
"abbashosseini217@gmail.com",
"mohammdomarrahmani@gmail.com"
];

export async function loadAdmin(){

const user = auth.currentUser;

if(!user || !ADMINS.includes(user.email)){
alert("شما دسترسی مدیر ندارید.");
return;
}

const products = await getProducts();

let html = "";

products.forEach(item=>{

html += `
<div class="product">

<h3>${item.name}</h3>

<p><b>👤 فروشنده:</b> ${item.seller}</p>

<p><b>🏙️ شهر:</b> ${item.city}</p>

<p><b>📂 دسته‌بندی:</b> ${item.category}</p>

<p><b>💰 قیمت:</b> ${item.price} افغانی</p>

<p><b>📞 شماره:</b> ${item.phone}</p>

<p><b>📝 توضیحات:</b><br>${item.description}</p>

<button class="deleteBtn" onclick="deleteAd('${item.id}')">
🗑 حذف آگهی
</button>

<button class="editBtn" onclick="featureAd('${item.id}')">
⭐ تبلیغ ویژه
</button>

<button onclick="editAd('${item.id}')">
✏ ویرایش آگهی
</button>

</div>
`;

});

document.getElementById("content").innerHTML = html;

}

// حذف آگهی
window.deleteAd = async function(id){

if(confirm("آیا از حذف این آگهی مطمئن هستید؟")){

await deleteProduct(id);

alert("آگهی حذف شد.");

loadAdmin();

}

}

// ویژه کردن آگهی
window.featureAd = async function(id){

await updateProduct(id,{
featured:true
});

alert("آگهی ویژه شد.");

loadAdmin();

}

// ویرایش آگهی
window.editAd = async function(id){

const name = prompt("نام جدید کالا:");

if(!name) return;

await updateProduct(id,{
name:name
});

alert("آگهی ویرایش شد.");

loadAdmin();

}