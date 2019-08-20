import {changeHash} from '../view-controller/route.js'
// export const NewUsers = (email, password) => {
//   return firebase.auth().createUserWithEmailAndPassword(email, password)
//  };


export const register = () => {
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const identity = document.getElementById('identity').value;
  const company = document.getElementById('company').value;
  const host = document.getElementById('host').value;
  
  dataBase(name, email, identity, company, host)
  .then(() => {
    console.log('Registrado')
    changeHash('#/photo')
    // función para cambiar hash
  })
}


export const dataBase = (name, email, identity, company, host) => {
  return firebase.firestore().collection("users").add({
    // idUser: uid,
    Nombre : name,
    Email : email,
    Documento: identity,
    Company: company,
    Host: host,
    createdAt: firebase.firestore.FieldValue.serverTimestamp()
    // photo: userPhoto
  });
}

