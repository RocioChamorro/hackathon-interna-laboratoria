
export default () => {
    const createChildNode = document.createElement('div')
    createChildNode.setAttribute('id', 'containerPhoto' )
    const content = `
    <video id="player" controls autoplay></video>
    <button id="capture">Capturar</button>
    <canvas id="snapshot" width=320 height=240></canvas>
   
    `;
    createChildNode.innerHTML=content;
    return createChildNode;
}