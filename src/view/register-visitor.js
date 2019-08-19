import { register } from "../controller/controller.js";
// import { changeHash } from "../view-controller/route.js";

export default () => {
  const createChildNode = document.createElement('div');
  const content = 
  `<header>
    <p>Logo</p>
  </header>
  
  <form class="register-visitor">
    <input type="text" id="name" placeholder="Nombre completo" autocomplete="on" required>
    <input type="mail" id="email" placeholder="Correo electrónico" autocomplete="on" required>
    <input type="text" id="company" placeholder="Compañía" autocomplete="on" required>
    <input type="text" required id="host" placeholder="Host" autocomplete="on">
    <p>Acompañantes: </p> <button>+</button><button>-</button>
    <button id="register-btn">Registrarse</button>
  </form>
  
  `;
  createChildNode.innerHTML = content;







  const registerBtn = createChildNode.querySelector('#register-btn');
  registerBtn.addEventListener('click', (event) => {
    event.preventDefault()
    register()
  })

  return createChildNode;
}