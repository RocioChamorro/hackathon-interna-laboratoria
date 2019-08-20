const drawDataURIOnCanvas=(strDataURI, context)=> {
    "use strict";
    var img = new window.Image();
    img.addEventListener("load", function () {
        context.drawImage(img, 0, 0);
    });
    img.setAttribute("src", strDataURI);
    console.log(img)
}

export const getsessionStorage=()=>{
    const canvas = document.getElementById('canvasProfile');
    const ctx2 = canvas.getContext("2d");
    const toDrawUrl = sessionStorage.getItem('url');
    drawDataURIOnCanvas(toDrawUrl, ctx2);
    console.log(drawDataURIOnCanvas);
    ctx2.fillStyle = "rgb(200,200,0)";
    ctx2.fillRect (20, 20, 55, 50);
}


