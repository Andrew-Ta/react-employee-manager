import React from 'react';
import firebaseApp from './../../../firebase/firebaseConfig'

const ViewAllPanel = () => {

    console.log(firebaseApp.auth().currentUser.uid)

    //this part is just a path to the document(aka. row)     collection(aka.table).
    const docRef = firebaseApp.firestore().collection('users').doc(firebaseApp.auth().currentUser.uid)
    // const clientRef = docRef.collection('employees').doc('a1')
    

    docRef.get()
    .then(doc =>{
        console.log(doc.data())
    })
    .catch(error =>{
        console.log(error)
    })

    // clientRef.get()
    // .then(doc =>{
    //     console.log(doc.data())
    // })
    // .catch(error =>{
    //     console.log(error)
    // })

    return ( 
        <header><h2>View All Panel</h2></header>
     );
}
 
export default ViewAllPanel;