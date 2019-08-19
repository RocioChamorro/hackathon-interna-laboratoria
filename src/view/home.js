import { changeHash } from "../view-controller/route.js";

export default () => {
  const createChildNode = document.createElement('div');
  const content = 
  `<button id="sign-in">Sign In</button>
  `;
  createChildNode.innerHTML = content;

  const signIn = createChildNode.querySelector('#sign-in');
  signIn.addEventListener('click', () => {
    changeHash("#/register");
  })

  return createChildNode;
}

