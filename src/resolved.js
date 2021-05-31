export default class Resolved {
  constructor() {
    this._valuesXr = ["20", "21", "22", "23", "24"];
    this._errorPorcentual = ["%10", "%11", "%12"];
  }
  pushXr(value) {
    this._valuesXr.push(value);
  }
  pushPorcentual(value) {
    this._errorPorcentual.push(value);
  }
  getValuesXr(value) {
    return this._valuesXr[value]
  }
  addToTable() {
    let table = document.querySelector("#table");
    let row = table.insertRow(1);
    let insertXr = row.insertCell(0);
    let insertErrorPorcentual = row.insertCell(1);
    this._valuesXr.forEach((xr) => {
      insertXr.innerHTML = xr;
    });
    this._errorPorcentual.forEach((errorPorcentual) => {
      insertErrorPorcentual.innerHTML = errorPorcentual;
    });
  }
}
