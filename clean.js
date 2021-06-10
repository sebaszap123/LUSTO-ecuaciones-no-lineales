export default class Clean {
  static clean(){
    let staticTable = "<tr><th>Xr</th><th>% de errores</th></tr>"
    let table = document.querySelector('#table');
    let div = document.querySelector("#addCalculate");
    table.innerHTML = staticTable;
    div.innerHTML = ""
  }
}