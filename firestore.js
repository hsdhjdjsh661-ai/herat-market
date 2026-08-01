
import { getFirestore, collection, addDoc, getDocs } 
from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

import { initializeApp } 
from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";


const firebaseConfig = {

apiKey: "AIzaSyB694sgm3LdTT-yNGzPlQXJohx6bcsva5k",

authDomain: "herat-market-71b42.firebaseapp.com",

projectId: "herat-market-71b42",

storageBucket: "herat-market-71b42.appspot.com",

messagingSenderId: "153130693078",

appId: "1:153130693078:web:220f4d8631e24e4d6b7477"

};


const app = initializeApp(firebaseConfig);

const db = getFirestore(app);



export async function addProduct(product){

await addDoc(collection(db,"products"),product);

}



export async function getProducts(){

let result = [];

const querySnapshot = await getDocs(collection(db,"products"));

querySnapshot.forEach((doc)=>{

result.push(doc.data());

});


return result;

}
