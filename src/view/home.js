import { changeHash } from "../view-controller/route.js";

export default () => {
  const createChildNode = document.createElement('div');
  const content = 
  `<div class="container-home">
    <img class="logo-home" src="./assets/Logo-Comunal.svg"/>
    <div class="btn-home">
      <a id="sign-in" class="visitante-btn"><img src="./assets/visitante-btn.jpeg" class="visitante-img"></a>
      <a id="administrador" class="admin-btn"><img src="./assets/admin-btn.jpeg" class="admin-img"></a>
    </div>
    
  </div>
  `;
  createChildNode.innerHTML = content;

  const signIn = createChildNode.querySelector('#sign-in');
  signIn.addEventListener('click', () => {
    changeHash("#/register");
  })
  const administrador = createChildNode.querySelector('#administrador');
  administrador.addEventListener('click', () => {
    changeHash('#/loginAdmin');
  })


  return createChildNode;
}

