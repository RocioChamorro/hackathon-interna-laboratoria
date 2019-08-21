export default () => {
  const div = document.createElement('div');
  const tmp3 = `
  <div class="btnsFilter">
  <button id='todos' class='btnFilter btn btn-warning' type='button' value='todos'>Todos</button>
  <button id='activos' class='btnFilter btn btn-warning' type='button' value='activos'>Activos</button>
  <button id='inactivos' class='btnFilter btn btn-warning' type='button' value='inactivos'>Inactivos</button>
  </div>
  <div id='containerRegister'></div>
  `
  div.innerHTML = tmp3;
  return div;  
};