import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  //   apiKey: "AIzaSyCO1tyN5SrqAwbf3NT9Y8AOkcGxbRzbZio",
//   authDomain: "coder-ecommerce-52c4f.firebaseapp.com",
//   projectId: "coder-ecommerce-52c4f",
//   storageBucket: "coder-ecommerce-52c4f.appspot.com",
//   messagingSenderId: "12833419320",
//   appId: "1:12833419320:web:b65d4c44ac658b6d9db6cd"
apiKey: "AIzaSyA8lpwqyewQTfs62UZYJUKkzQ6ZNSzWZd0",
authDomain: "coderecommercemac.firebaseapp.com",
projectId: "coderecommercemac",
storageBucket: "coderecommercemac.appspot.com",
messagingSenderId: "711577805516",
appId: "1:711577805516:web:7a1a3b65a7b9ed02649869"
};

const app = initializeApp(firebaseConfig);

export const getFirebase = () => app;

export { getFirestore };
