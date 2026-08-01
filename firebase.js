import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";

import {
getAuth,
createUserWithEmailAndPassword,
signInWithEmailAndPassword,
signOut,
onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

import {
getFirestore,
collection,
addDoc,
getDocs,
deleteDoc,
updateDoc,
doc,
serverTimestamp
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const firebaseConfig = {
apiKey: "AIzaSyB694sgm3LdTT-yNGzPlQXJohx6bcsva5k",
authDomain: "herat-market-71b42.firebaseapp.com",
projectId: "herat-market-71b42",
storageBucket: "herat-market-71b42.appspot.com",
messagingSenderId: "153130693078",
appId: "1:153130693078:web:220f4d8631e24e4d6b7477"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);

// ثبت آگهی
export async function addProduct(product){

try{

await addDoc(collection(db,"products"),{

...product,

featured:false,

createdAt:serverTimestamp()

});

return true;

}catch(error){

console.error(error);

return false;

}

}

// دریافت آگهی‌ها
export async function getProducts(){

try{

const products=[];

const snapshot=await getDocs(collection(db,"products"));

snapshot.forEach((docItem)=>{

products.push({

id:docItem.id,

...docItem.data()

});

});

// آگهی‌های ویژه در ابتدا نمایش داده شوند
products.sort((a,b)=>{

if(a.featured===b.featured){

return 0;

}

return a.featured ? -1 : 1;

});

return products;

}catch(error){

console.error(error);

return [];

}

}

// حذف آگهی
export async function deleteProduct(id){

try{

await deleteDoc(doc(db,"products",id));

return true;

}catch(error){

console.error(error);

return false;

}

}

// ویرایش آگهی
export async function updateProduct(id,data){

try{

await updateDoc(doc(db,"products",id),data);

return true;

}catch(error){

console.error(error);

return false;

}

}

// ویژه کردن آگهی
export async function featureProduct(id){

try{

await updateProduct(id,{
featured:true
});

return true;

}catch(error){

console.error(error);

return false;

}

}

// لغو تبلیغ ویژه
export async function unfeatureProduct(id){

try{

await updateProduct(id,{
featured:false
});

return true;

}catch(error){

console.error(error);

return false;

}

}

// توابع احراز هویت
export {

createUserWithEmailAndPassword,
signInWithEmailAndPassword,
signOut,
onAuthStateChanged

};