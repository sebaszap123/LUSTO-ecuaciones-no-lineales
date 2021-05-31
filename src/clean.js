export default class Clean {
  static clean(){
    let staticTable = "<tr><th>Xr</th><th>% de errores</th></tr>"
    let table = document.querySelector('#table');
    let error = document.querySelector('#error');
    let xi = document.querySelector("#xi");
    table.innerHTML = staticTable;
    error.value = "";
    xi.value = "";
  }
}