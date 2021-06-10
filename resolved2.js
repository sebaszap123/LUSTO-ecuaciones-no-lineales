export default class Resolved2 {
  constructor() {
    this._fXrValues = new Array();
    this._xrValues = new Array();
    this._interval = new Array();
    this._errorPorcentual = new Array();
  }
  pushfXr(fXr) {
    this._fXrValues.push(fXr);
  }
  getXrOld() {
    return this._xrValues[this._xrValues.length - 1];
  }
  pushXr(xr) {
    this._xrValues.push(xr);
  }
  getIntervalXa() {
    return this._interval[0];
  }
  getIntervalXb() {
    return this._interval[1];
  }
  setInterval(xI, xU) {
    this._interval.push(xI, xU);
  }
  // Remplaza el valor de X recibido para utilizarlo en la formula
  replaceInterval(xn, newXn) {
    let index = this._interval.indexOf(xn);
    this._interval[index] = newXn;
    return index;
  }
  evaluateSign(number) {
    if (number > 0) {
      return "positive";
    } else if (number < 0) {
      return "negative";
    } else if (number == 0) {
      return "cero";
    }
  }
  addToTable(value, Xr, Porcentual) {
    value = value + 1; // mas uno porque ya existe un elemento en el espacio (0) de la tabla
    let table = document.querySelector("#table");
    let row = table.insertRow(value);
    let insertXr = row.insertCell(0);
    let insertErrorPorcentual = row.insertCell(1);
    insertXr.innerHTML = Xr;
    insertErrorPorcentual.innerHTML = Porcentual;
  }
  // Pasa los valores de Xr y Porcentaje hacia la funcion addToTable
  browseData() {
    var i = this._xrValues.length;
    var count = 0;
    do {
      let Xr = this._xrValues[count];
      let Porcentual = this._errorPorcentual[count];
      this.addToTable(count, Xr, Porcentual);
      count++;
    } while (count < i);
  }
  pushPorcentual(value) {
    this._errorPorcentual.push(value);
  }
}
