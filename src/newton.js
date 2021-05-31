export default class Newton {
  constructor(readForm) {
    this._classReadForm = readForm;
  }
  static read(readForm) {
    if (readForm) {
      return new Newton(readForm);
    }
  }
  // obtener el metodo que se esta utilizando
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
  getFunctionX(value, equation) {
    let equationForm = this._classReadForm;
    let xn = equationForm.turnInToNormalEq(value, equation);
    return Number(xn.toFixed(6));
  }
  /*
  getFXFunction(xnValue) {
    return this._classReadForm.turnInToNormalEq(this.getXi(),this.getEquation());
  }
  getFXPrimeFunction(xnValue) {
    return this._classReadForm.turnInToNormalEq(this.getXi(),this.FXprime());
  }

  */
  getFXPrime() {
    let equation = "3x**2 - 1";
    return equation;
  }

  newtonMethod(xi) {
    let result = 0;
    let primeEquation = this.getFXPrime();
    let fxResult = this.getFunctionX(xi, this.getEquation());
    let fxPrimeResult = this.getFunctionX(xi, primeEquation);
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
  // Obtener la clase form y la clase equationForm
}

// VAS BIEN ;)
