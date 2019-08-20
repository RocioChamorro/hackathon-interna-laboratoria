export default () => {
    const createChildNode = document.createElement('div')
    createChildNode.setAttribute('id', 'containerProfile' )
    const content = `
    <canvas id="canvasProfile" width=320 height=240></canvas>
    `;
    createChildNode.innerHTML=content;
    return createChildNode;
}