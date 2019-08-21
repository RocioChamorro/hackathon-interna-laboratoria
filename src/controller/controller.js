
export const register = () => {
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const identification = document.getElementById('identification').value;
  const identityNumber = document.getElementById('identity').value;
  const company = document.getElementById('company').value;
  const host = document.getElementById('host').value;

  dataBase(name, email, identity, company, host)
}


export const dataBase = (name, email, identity, company, host) => {
  const obj = {
    Nombre: name,
    Email: email,
    Documento: identity,
    Company: company,
    Host: host,
    createdAt: firebase.firestore.FieldValue.serverTimestamp(),
  }
  sessionStorage.setItem('objInf', JSON.stringify(obj)); //guardando info al sessionStorage

  // idUser: uid,
}

