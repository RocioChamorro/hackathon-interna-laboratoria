import { changeHash } from "../view-controller/route.js";

export default () => {
    const createChildNode = document.createElement('div')
    createChildNode.setAttribute('id', 'containerProfile' )
    const content = `
    <canvas id="canvasProfile" width=320 height=240></canvas>
    <button id='register' type='button'>Aceptar</button>
    `;
    createChildNode.innerHTML=content;
    const registrar = createChildNode.querySelector('#register');
    registrar.addEventListener('click', ()=>{
        changeHash('#/home');
    })
    return createChildNode;
}
