export default class Resolved {
  constructor() {
    this._valuesXr = new Array();
    this._errorPorcentual = new Array();
    this._done = false;
  }
  static clean() {
    this._valuesXr = new Array();
    this._errorPorcentual = new Array();
    this._done = false;
  }
  getDidIt() {
    return this._done;
  }
  setDidIt() {
    this._done = true;
  }
  pushXr(value) {
    this._valuesXr.push(value);
  }
  pushPorcentual(value) {
    this._errorPorcentual.push(value);
  }
  getValuesXr(value) {
    return this._valuesXr[value];
  }
  getValues() {
    return this._valuesXr;
  }
  getPorcentual() {
    return this._errorPorcentual;
  }
  browseData() {
    var i = this._valuesXr.length;
    var count = 0;
    do {
      let Xr = this._valuesXr[count];
      let Porcentual = this._errorPorcentual[count];
      this.addToTable(count, Xr, Porcentual);
      count++;
    } while (count < i);
  }
  addToTable(value, Xr, Porcentual) {
    value = value + 1;
    let table = document.querySelector("#table");
    let row = table.insertRow(value);
    let insertXr = row.insertCell(0);
    let insertErrorPorcentual = row.insertCell(1);
    insertXr.innerHTML = Xr;
    insertErrorPorcentual.innerHTML = Porcentual;
  }
}
