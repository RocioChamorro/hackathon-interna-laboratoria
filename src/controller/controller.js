// export const NewUsers = (email, password) => {
//   return firebase.auth().createUserWithEmailAndPassword(email, password)
//  };


export const register = () => {
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const company = document.getElementById('company').value;
  const host = document.getElementById('host').value;
  
  console.log(name, email, company, host);
  
  
  
  // dataBase(name, email, company, host);
  console.log(dataBase(name, email, company, host))
}


export const dataBase = (uid, name, email, company, host) => {
  return firebase.firestore().collection("users").doc(uid).set({
    idUser: uid,
    Nombre : name,
    Email : email,
    Company: company,
    Host: host
    // photo: userPhoto
  });
}