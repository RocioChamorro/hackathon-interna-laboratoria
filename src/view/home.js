import { changeHash } from "../view-controller/route.js";

export default () => {
  const createChildNode = document.createElement('div');
  const content = 
  `<div class="container-home">
    <img class="logo-home" src="./assets/Logo-Comunal.svg"/>
    <div class="btn-home">
      <a id="sign-in"><img src="./assets/visitante-btn.jpeg" class="visitante-btn"></a>
      <a id=""><img src="./assets/admin-btn.jpeg" class="admin-btn"></a>
    </div>
    
  </div>
  `;
  createChildNode.innerHTML = content;

  const signIn = createChildNode.querySelector('#sign-in');
  signIn.addEventListener('click', () => {
    changeHash("#/register");
  })

  return createChildNode;
}

