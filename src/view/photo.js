
export default () => {
    const createChildNode = document.createElement('div')
    createChildNode.setAttribute('id', 'containerPhoto' )
    const content = `
    <video id="player" controls autoplay width=768px height=1024px></video>
    <button id="capture">Capturar</button>
    <canvas id="snapshot" width=100px></canvas>
   
    `;
    createChildNode.innerHTML=content;
    return createChildNode;
}