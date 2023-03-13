import { useState, useEffect } from 'react';
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, doc, increment, getDoc } from 'firebase/firestore';

// // Initialise Firebase
// const firebaseConfig = {
//   // Ta configuration Firebase ici
//   apiKey: "AIzaSyB82vm6eJYWOC4sumaQ1FUd13dVP9cVhu4",
//   authDomain: "portfolio2023-16924.firebaseapp.com",
//   projectId: "portfolio2023-16924",
//   storageBucket: "portfolio2023-16924.appspot.com",
//   messagingSenderId: "22486830687",
//   appId: "1:22486830687:web:185f26f92242a5cb0815ea",
//   measurementId: "G-23SPVR0N2N"
// };
// const app = initializeApp(firebaseConfig);
// const db = getFirestore(app);

function Views(props) {
  // const [nbVues, setNbVues] = useState(0);

  // useEffect(() => {
  //   const incrementViews = async () => {
  //     const docRef = doc(collection(db, 'views'), props.xFJ7HCqwH2DFi37HXtRQ); // Changez "props.documentId" par le nom de votre variable contenant l'ID du document que vous souhaitez accéder
  //     await getDoc(docRef, { count: increment(1) }, { merge: true });
  //     const docSnapshot = await getDoc(docRef);
  //     setNbVues(docSnapshot.data().count);
  //   };
  //   incrementViews();
  // }, [props.documentId]);

  return (
    <div>
       vues.
    </div>
  );
}

export default Views;
