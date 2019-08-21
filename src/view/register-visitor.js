import { register } from "../controller/controller.js";
import { changeHash } from "../view-controller/route.js";
// import { changeHash } from "../view-controller/route.js";

export default () => {
  const createChildNode = document.createElement('div');
  const content = 
  `
  <div class="stepper-img">
    <img class="stepper1-img" src="./assets/stepper11.jpeg"/>
  </div>
  <div class="container-register">
    <p class="visitor-header">VISITANTE</p>
    <div class="row container-form">
      <form class="col s12 register-visitor">
        <div class="row">
          <select id="identification">
            <option value="dni">DNI</option>
            <option value="ce">CE</option>
            <option value="pas">PAS</option>
            <option value="ptp">PTP</option>
          </select>
        </div>
        <div class="row">
          <div class="input-field col s12">
            <input id="identity" type="text" autocomplete="off">
            <label for="identity">Documento de Identidad</label>
          </div>
        </div>

        <div class="row">
          <div class="input-field col s12">
            <input id="name" type="text" autocomplete="off">
            <label for="name" id="name-label">Nombre completo</label>
          </div>
        </div>
        <div class="row">
          <div class="input-field col s12">
            <input id="email" type="email" class="validate" autocomplete="off">
            <label for="email" id="email-label">Correo electrónico</label>
            <span class="helper-text" data-error="Correo inválido" data-success="Correo válido"></span>
          </div>
        </div>

        <div class="row">
          <div class="input-field col s12">
            <input id="company" type="text" autocomplete="off">
            <label for="company">Compañía</label>
          </div>
        </div>
        <div class="row">
          <div class="input-field col s12">
            <input type="text" id="host" class="autocomplete" autocomplete="off">
            <label for="host">Host</label>
          </div>
        </div>
      </form>
      <p class="plus-one">Añadir un acompañante: <span id="cant" class="plus-one-number"></span></p>
      <a id="mas" class="btn-floating btn-small waves-effect waves-light sum-btn"><i class="material-icons">+</i></a>
      <a id="menos" class="btn-floating btn-small waves-effect waves-light minus-btn"><i class="material-icons">-</i></a>
      <button class="waves-effect waves-light btn" id="register-btn">Registrarse</button>
    </div>
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
  registerBtn.addEventListener('click', () => {
    register()
    changeHash('#/photo')
  })
  
  const dataVisitors = {
    Nombre : 'Gaby Moreno',
    Email : 'gaby@gmail.com',
    TipoDocumento: 'ce',
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
