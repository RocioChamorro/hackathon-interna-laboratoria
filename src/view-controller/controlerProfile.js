import { databaseRegister} from '../firestore.js'
import { changeHash } from './route.js'

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
    const url = sessionStorage.getItem('url');
    const submit= document.getElementById('register');
   /*  var item_image = url.replace(/^data:image\/(png|jpeg);base64,/, ""); */ //transformar una imagen a base 64 para subir al sessionStorage

    let bannerImg = new Image();
    bannerImg.setAttribute('id','tableBanner')
    bannerImg.src="data:image/png;base64," + `${item_image}`;
    console.log(bannerImg)
    /* const bannerImg = document.createElement('img')
    bannerImg.setAttribute('id','tableBanner')
    bannerImg.src="data:image/png;base64," + `${toDrawUrl}`;
    console.log(bannerImg) */
   
    submit.addEventListener('click', () => {
       
        const fecha = new Date();

        const options = {
           year: 'numeric', month: 'short', day: 'numeric', hour: 'numeric', minute: 'numeric'
       };
     
        const obj = {
            Nombre: objInf.Nombre,
            Email: objInf.Email,
            Documento: objInf.Documento,
            Company: objInf.Company,
            Host: objInf.Host,
            CreatedAt: firebase.firestore.FieldValue.serverTimestamp(),
            photo: url,
            estado: 'on',
            fechaInicial: `${fecha.toLocaleDateString("es-ES", options)}`,
            fechaSalida: ''
        }
        databaseRegister(obj);
        changeHash('#/home')
    }) 

}
//
