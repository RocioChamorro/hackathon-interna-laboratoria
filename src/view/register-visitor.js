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
    <p>Acompañantes: <button id="mas">+</button>
    <button id="menos">-</button>
    <p id="demo"></p>
    <button id="register-btn">Registrarse</button>
  </form>
  
  `;
  createChildNode.innerHTML = content;


  let a = 0;
  const aumenta = createChildNode.querySelector("#mas");
  aumenta.addEventListener('click', () => {
    a = a + 1;
    document.getElementById("demo").textContent = a;
  })

  const disminuye = createChildNode.querySelector("#menos");
  disminuye.addEventListener('click', () => {
    a = a - 1;
    document.getElementById("demo").textContent = a;
  })

  const registerBtn = createChildNode.querySelector('#register-btn');
  registerBtn.addEventListener('click', (event) => {
    event.preventDefault()
    register()
  })

  return createChildNode;
}