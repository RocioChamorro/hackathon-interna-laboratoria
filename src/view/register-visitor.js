import { register, dataBase } from "../controller/controller.js";
// import { dataVisitors } from "../controller/controller.js";
// import { changeHash } from "../view-controller/route.js";

export default () => {
  const createChildNode = document.createElement('div');
  const content = 
  `<header>
    <p>Logo</p>
  </header>

  <div class="row register-visitor">
    <form class="col s12 register-visitor">
      <div class="row">
        <div class="input-field col s6">
          <input id="name" type="text" autocomplete="off">
          <label for="name" id="name-label">Nombre completo</label>
        </div>
      </div>
      <div class="row">
        <div class="input-field col s6">
          <input id="email" type="email" class="validate" autocomplete="off">
          <label for="email" id="email-label">Correo electrónico</label>
          <span class="helper-text" data-error="Correo inválido" data-success="Correo válido"></span>
        </div>
      </div>
      <div class="row">
        <select id="identification">
          <option value="dni">DNI</option>
          <option value="ce">CE</option>
          <option value="pas">PAS</option>
          <option value="ptp">PTP</option>
        </select>
      </div>
      <div class="row">
        <div class="input-field col s6">
          <input id="identity" type="text" autocomplete="off">
          <label for="identity">Documento de Identidad</label>
        </div>
      </div>
      <div class="row">
        <div class="input-field col s6">
          <input id="company" type="text" autocomplete="off">
          <label for="company">Compañía</label>
        </div>
      </div>
      <div class="row">
        <div class="input-field col s6">
          <input type="text" id="host" class="autocomplete" autocomplete="off">
          <label for="host">Host</label>
        </div>
      </div>
    </form>
    <p>Acompañantes: <button id="mas">+</button>
    <button id="menos">-</button>
    <p id="cant"></p>
    <button id="register-btn">Registrarse</button>
    <a class="waves-effect waves-light btn" href="#/photo">Siguiente</a>
  </div>
  `;
  createChildNode.innerHTML = content;


  let a = 0;
  const aumenta = createChildNode.querySelector("#mas");
  aumenta.addEventListener('click', () => {
    a = a + 1;
    document.getElementById("cant").textContent = a;
    console.log(a)
  })

  const disminuye = createChildNode.querySelector("#menos");
  disminuye.addEventListener('click', () => {
    a = a - 1;
    document.getElementById("cant").textContent = a;
    console.log(a)
  })

  const registerBtn = createChildNode.querySelector('#register-btn');
  registerBtn.addEventListener('click', (event) => {
    event.preventDefault()
    register()
  })
  
  const dataVisitors = {
    Nombre : 'Franciree Arellan',
    Email : 'arellan@gmail.com',
    TipoDocumento: 'ptp',
    Documento: '123'
  }
  

  const changeValueDocument = createChildNode.querySelector('#identity');
  changeValueDocument.addEventListener('change', (event) => {
    event.preventDefault()

    const name = createChildNode.querySelector('#name');
    const email = createChildNode.querySelector('#email');
    const identification = createChildNode.querySelector('#identification');
    const identityNumber = createChildNode.querySelector('#identity');
    const nameLabel = createChildNode.querySelector('#name-label');
    const emailLabel = createChildNode.querySelector('#email-label');

    if(dataVisitors.Documento === changeValueDocument.value) {
      name.value = dataVisitors.Nombre;
      email.value = dataVisitors.Email;
      identification.value = dataVisitors.TipoDocumento;
      identityNumber.value = dataVisitors.Documento;
      nameLabel.classList.add('active')
      emailLabel.classList.add("active")
    }

    console.log(changeValueDocument.value)
    console.log('database', dataVisitors.Documento)
  })


  

  return createChildNode;
}
