import { changeHash } from "../view-controller/route.js";

export default () => {
  const createChildNode = document.createElement('div');
  const content = 
  `
  <button id="sign-in">Visitante</button>
  <button id="administrador">Administrador</button>
  `;
  createChildNode.innerHTML = content;

  const signIn = createChildNode.querySelector('#sign-in');
  signIn.addEventListener('click', () => {
    changeHash("#/register");
  })
  const administrador = createChildNode.querySelector('#administrador');
  administrador.addEventListener('click', () => {
    changeHash("#/admin");
  })


  return createChildNode;
}

