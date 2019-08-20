// export const NewUsers = (email, password) => {
//   return firebase.auth().createUserWithEmailAndPassword(email, password)
//  };


export const register = () => {
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const company = document.getElementById('company').value;
  const host = document.getElementById('host').value;
  const cant = document.getElementById('cant').textContent;
  
  dataBase(name, email, company, host, cant)
  .then(() => {
    console.log('Registrado')
    // función para cambiar hash
  })
}


export const dataBase = (name, email, company, host, cant) => {
  return firebase.firestore().collection("users").add({
    // idUser: uid,
    Nombre : name,
    Email : email,
    Company: company,
    Host: host,
    Acompañante: cant,
    createdAt: firebase.firestore.FieldValue.serverTimestamp()
    // photo: userPhoto
  });
}



