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

export const db = getFirestore(app);



// ذخیره آگهی

export async function addProduct(product){

try {

await addDoc(
collection(db,"products"),
product
);

return true;

}

catch(error){

console.log("خطای ثبت کالا:", error);

return false;

}

}




// دریافت آگهی‌ها

export async function getProducts(){

let products = [];

try {

const snapshot = await getDocs(
collection(db,"products")
);


snapshot.forEach((doc)=>{

products.push({

id: doc.id,

...doc.data()

});

});


}

catch(error){

console.log("خطای دریافت کالا:", error);

}


return products;

}
