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

  // const registerBtn = createChildNode.querySelector('#register-btn');
  // registerBtn.addEventListener('click', (event) => {
  //   event.preventDefault()
  //   register()
  // })


  

  return createChildNode;
}

// document.addEventListener('DOMContentLoaded', function() {
//   const options = {
//     data: {
//       'Gonzalo': null,
//       'Alejandra Ramirez': null,
//       'Vania': null
//     },
//     minLength: 4
//   }
//   const elems = document.querySelectorAll('.autocomplete');
//   const instances = M.Autocomplete.init(elems, options);
// });
