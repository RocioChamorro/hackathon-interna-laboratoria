import {changeHash} from '../view-controller/route.js'
// export const NewUsers = (email, password) => {
//   return firebase.auth().createUserWithEmailAndPassword(email, password)
//  };


export const register = () => {
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const company = document.getElementById('company').value;
  const host = document.getElementById('host').value;
  
  dataBase(name, email, company, host)
  .then(() => {
    console.log('Registrado')
    changeHash('#/photo')
    // función para cambiar hash
  })
}


export const dataBase = (name, email, company, host) => {
  return firebase.firestore().collection("users").add({
    // idUser: uid,
    Nombre : name,
    Email : email,
    Company: company,
    Host: host
    // photo: userPhoto
  });
}