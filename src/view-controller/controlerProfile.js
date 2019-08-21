import { databaseRegister} from '../firestore.js'
const drawDataURIOnCanvas=(strDataURI, context)=> {
    "use strict";
    var img = new window.Image();
    img.addEventListener("load", function () {
        context.drawImage(img, 0, 0);
    });
    img.setAttribute("src", strDataURI);
}

export const getsessionStorage=()=>{
    const canvas = document.getElementById('canvasProfile');
    const ctx2 = canvas.getContext("2d");
    const toDrawUrl = sessionStorage.getItem('url');
    drawDataURIOnCanvas(toDrawUrl, ctx2);
    ctx2.fillStyle = "rgb(200,200,0)";
    ctx2.fillRect (20, 20, 55, 50);
}

export const submitFirebase = () => {
    const objInf= JSON.parse(sessionStorage.getItem('objInf'));
    console.log(objInf);
    const toDrawUrl = sessionStorage.getItem('url');
    console.log(toDrawUrl)
    const submit= document.getElementById('register');
    submit.addEventListener('click', () => {
        const obj = {
            Nombre: objInf.Nombre,
            Email: objInf.Email,
            Documento: objInf.Document,
            Company: objInf.Company,
            Host: objInf.Host,
            CreatedAt: objInf.createdAt,
            photo: toDrawUrl
        }
        console.log(obj)
        databaseRegister(obj);
    }) 

}