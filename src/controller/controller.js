
export const register = () => {
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const identification = document.getElementById('identity').value;
  const company = document.getElementById('company').value;
  const host = document.getElementById('host').value;
  const quantity = document.getElementById("cant").textContent;

  dataBase(name, email, identification, company, host, quantity)
}

export const dataBase = (name, email, identity, company, host, quantity) => {
  const obj = {
    Nombre: name,
    Email: email,
    Documento: identity,
    Company: company,
    Host: host,
    Quantity: quantity,
  }
  sessionStorage.setItem('objInf', JSON.stringify(obj)); //guardando info al sessionStorage

  // idUser: uid,
}

