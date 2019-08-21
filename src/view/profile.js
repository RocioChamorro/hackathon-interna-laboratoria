export default () => {
    const createChildNode = document.createElement('div')
    createChildNode.setAttribute('id', 'containerProfile' )
    const content = `
    <div class="col s12 m7">
    <div class="card horizontal">
      <div class="card-image">
      <canvas id="canvasProfile" width=320 height=240></canvas>
      </div>
      <div class="card-stacked">
        <div class="card-content">
          <p id="info"></p>
        </div>
      </div>
    </div>
  </div>
  </br>
  </br>
  </br>
  <div class="row">
  <div class="col s12 m6">
    <div class="card grey darken-1">
      <div class="card-content white-text">
        <span class="card-title">Recordemos nuestras reglas</span>
        <p>1. Mantener los ambientes limpios</p>
        <p>2. Respetar a todas las personas</p>
      </div>
      <div class="card-action">
      <button id='register' type='button'>Aceptar</button>
      </div>
    </div>
  </div>
</div>
    `;
    createChildNode.innerHTML=content;
    
    const objInf= JSON.parse(sessionStorage.getItem('objInf'));
    console.log(objInf.Nombre)

    const nom = createChildNode.querySelector('#info')
    nom.innerHTML =
    `${objInf.Nombre}</br>
     ${objInf.Company}</br>
     ${objInf.Host} `;
 

    return createChildNode;
}
