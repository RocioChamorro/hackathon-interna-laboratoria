import { changeHash } from '../view-controller/route.js'
export default () => {
  const createChildNode = document.createElement('div');
  const content =
    `<header>
      <p>Logo</p>
    </header>
  
    <div class="row register-visitor">
      <form class="col s12 register-visitor">
        <h1>Hola!</h1>
        <div class="row">
          <div class="input-field col s6">
            <input id="emailAdmin" type="email" class="validate autocomplete="off">
            <label for="email" id="emailAdmin-label">Correo electrónico</label>
            <span class="helper-text" data-error="Correo inválido" data-success="Correo válido"></span>
          </div>
        </div>
        <div class="row">
          <div class="input-field col s6">
            <input id="password" type="password" class="validate" autocomplete="off">
            <label for="password" id="password-label">Contraseña</label>
          </div>
        </div>
      </form>
      <button id="logIn" class="waves-effect waves-light btn">Empecemos</button>
      <p>¿Olvidaste tu  contraseña?</p>
    </div>
    `;
  createChildNode.innerHTML = content;

  const registerbtn = createChildNode.querySelector("#logIn");

  registerbtn.addEventListener('click', () => {
    changeHash('#/admin')
  })
  return createChildNode;
}