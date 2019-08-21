import {changeHash} from '../view-controller/route.js'
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
      <button id="logInAdmin">Registrarse</button>
      <a class="waves-effect waves-light btn" href="#/photo">Siguiente</a>
    </div>
    `;
    createChildNode.innerHTML = content;
  
    const registerBtn = createChildNode.querySelector('#logInAdmin');
    registerBtn.addEventListener('click', () => {
      changeHash('#/admin')
    })

    return createChildNode;
  }
  