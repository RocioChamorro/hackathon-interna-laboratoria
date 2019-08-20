import { register } from "../controller/controller.js";
// import { changeHash } from "../view-controller/route.js";

export default () => {
  const createChildNode = document.createElement('div');
  const content = 
  `<header>
    <p>Logo</p>
  </header>

  <div class="row">
    <form class="col s12 register-visitor">
      <div class="row">
        <div class="input-field col s6">
          <input id="name" type="text">
          <label for="name">Nombre completo</label>
        </div>
      </div>
      <div class="row">
        <div class="input-field col s6">
          <input id="email" type="email" class="validate">
          <label for="email">Correo electrónico</label>
          <span class="helper-text" data-error="Correo inválido" data-success="Correo válido"></span>
        </div>
      </div>
      <div class="row">
        <div class="input-field col s6">
          <input id="identity" type="text">
          <label for="identity">Documento de Identidad</label>
        </div>
      </div>
      <div class="row">
        <div class="input-field col s6">
          <input id="company" type="text">
          <label for="company">Compañía</label>
        </div>
      </div>
      <div class="row">
        <div class="input-field col s6">
          <input type="text" id="host" class="autocomplete">
          <label for="host">Host</label>
        </div>
      </div>
    </form>
    <button id="register-btn">Registrarse</button>
  </div>
  `;
  createChildNode.innerHTML = content;



  const registerBtn = createChildNode.querySelector('#register-btn');
  registerBtn.addEventListener('click', (event) => {
    event.preventDefault()
    register()
  })


  document.addEventListener('DOMContentLoaded', function() {
    const options = {
      data: {
        'Gonzalo': null,
        'Alejandra Ramirez': null,
        'Vania': null
      },
      minLength: 4
    }
    const elems = document.querySelectorAll('.autocomplete');
    const instances = M.Autocomplete.init(elems, options);
  });

  return createChildNode;
}



{/* <form class="register-visitor">
    <div class="row">
      <div class="col s12">
        <div class="row">
          <div class="input-field col 16">
            <input type="text" id="name">
            <label for="autocomplete-input">Nombre</label>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="input-field col 16">
        <input id="email" type="mail" class="validate">
        <label for="email">Correo electrónico</label>
      </div>
    </div>
    <div class="row">
      <div class="col s12">
        <div class="row">
          <div class="input-field col 16">
            <input type="text" id="company">
            <label for="autocomplete-input">Compañía</label>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col s12">
        <div class="row">
          <div class="input-field col 16">
            <input type="text" id="autocomplete-input" class="autocomplete host">
            <label for="autocomplete-input">Host</label>
          </div>
        </div>
      </div>
    </div>
    <p>Acompañantes: </p> <button>+</button><button>-</button>
    <button id="register-btn">Registrarse</button>
  </form> */}