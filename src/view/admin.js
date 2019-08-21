export default () => {
  const div = document.createElement('div');
  const tmp3 = `
  <button id='dia' class='btnFilter btn btn-warning' type='button' value='todos'>Día<br>j</button>
  <button id='mes' class='btnFilter btn btn-warning' type='button' value='activos'>Mes<br>m</button>
  <button id='año' class='btnFilter btn btn-warning' type='button' value='inactivos'>Año<br>l</button>
  <div>
    <div class="btnsFilter">
      <button id='todos' class='btnFilter btn btn-warning' type='button' value=''>Todos</button>
      <button id='activos' class='btnFilter btn btn-warning' type='button' value='on'>Activos</button>
      <button id='inactivos' class='btnFilter btn btn-warning' type='button' value='of'>Inactivos</button>
    </div>
    <div id='containerRegister'></div>
  </div>
  `
  div.innerHTML = tmp3;
  return div;  
};