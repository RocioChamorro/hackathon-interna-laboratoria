import {changeHash} from '../view-controller/route.js'
// export const NewUsers = (email, password) => {
//   return firebase.auth().createUserWithEmailAndPassword(email, password)
//  };


export const register = () => {
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const identification = document.getElementById('identification').value;
  const identityNumber = document.getElementById('identity').value;
  const company = document.getElementById('company').value;
  const host = document.getElementById('host').value;
  const cant = document.getElementById('cant').textContent;
  
  dataBase(name, email, identification, identityNumber, company, host, cant, identification)
  .then(() => {
    console.log('Registrado')
    console.log('identification')
    console.log('identityNumber')
    changeHash('#/photo')
    // función para cambiar hash
  })
}



export const dataBase = (name, email, identification, identityNumber, company, host, cant) => {

  return firebase.firestore().collection("users").add({
    // idUser: uid,
    Nombre : name,
    Email : email,
    TipoDocumento: identification,
    Documento: identityNumber,
    Company: company,
    Host: host,
    Acompañante: cant,
    createdAt: firebase.firestore.FieldValue.serverTimestamp()
    // photo: userPhoto
  });
};




