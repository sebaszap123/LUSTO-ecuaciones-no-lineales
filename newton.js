export default class Newton {
  constructor(readForm) {
    this._classReadForm = readForm;
  }
  static read(readForm) {
    if (readForm) {
      return new Newton(readForm);
    }
  }
  // llaman a los metodos de la clase readForm
  getMethod() {
    return this._classReadForm.getMethod();
  }
  getError() {
    return this._classReadForm.getError();
  }
  getXi() {
    return this._classReadForm.getXi();
  }
  getEquation() {
    return this._classReadForm.getEquation();
  }

  // Obtiene el resultado de las fx utilizando el metodo de la clase readForm
  getFunctionX(value, equation) {
    let equationForm = this._classReadForm;
    let xn = equationForm.turnInToNormalEq(value, equation);
    return Number(xn.toFixed(6));
  }
  getFXPrime() {
    let equation = "3x**2 - 1";
    return equation;
  }

  // Obtiene el resultado Xn con el metodo de Newton
  newtonMethod(xi) {
    let result = 0;
    let fxPrime = this.getFXPrime();
    let fxResult = this.getFunctionX(xi, this.getEquation());
    let fxPrimeResult = this.getFunctionX(xi, fxPrime);
    if (fxPrimeResult === 0) {
      Swal.fire("Error", "No se puede resolver por este metodo", "error");
      return;
    }
    result = xi - fxResult / fxPrimeResult;
    return Number(result.toFixed(6));
  }
  getPorcentualError(xNew, xOld) {
    // ((valor nuevo - valor anterior) / valor nuevo) * 100
    let result = (xNew - xOld) / xNew;
    result = Math.abs(result);
    result = result * 100;
    return result.toFixed(6)
  }
}
