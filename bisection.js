export default class Bisection {
  constructor(readForm) {
    this._classReadForm = readForm;
  }
  getError() {
    return this._classReadForm.getError();
  }
  getXi() {
    return this._classReadForm.getXiB();
  }
  getXu() {
    return this._classReadForm.getXuB();
  }
  getEquation() {
    return this._classReadForm.getEquation();
  }
  //Formula de Biseccion
  obtainXr(xi, xu) {
    xi = Number(xi)
    xu = Number(xu)
    let xr = (xi + xu) / 2;
    return xr;
  }
  //Se obtiene el fx de las X
  obtainFXn(xn) {
    let equation = this.getEquation();
    let result = this._classReadForm.turnInToNormalEq(xn, equation);
    return result;
  }
  getPorcentualError(xNew, xOld) {
    // ((valor nuevo - valor anterior) / valor nuevo) * 100
    let result = (xNew - xOld) / xNew;
    result = Math.abs(result);
    result = result * 100;
    return result.toFixed(6);
  }
  bisectionMethod(xr) {}
}
