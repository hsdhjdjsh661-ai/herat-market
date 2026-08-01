import { app } from "./firebase.js";

import {
getFirestore,
collection,
addDoc,
getDocs
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";


export const db = getFirestore(app);



export async function addProduct(product){

await addDoc(
collection(db,"products"),
product
);


}



export async function getProducts(){

let products=[];


let data =
await getDocs(collection(db,"products"));


data.forEach((doc)=>{

products.push(doc.data());

});


return products;


}