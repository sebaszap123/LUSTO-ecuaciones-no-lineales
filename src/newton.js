export default class Newton {
  constructor(readForm, resolve) {
    this._classReadForm = readForm;
    this._resolve = resolve;
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
  getXf() {
    return this._classReadForm.getXf();
  }
  getEquation() {
    return this._classReadForm.getEquation();
  }
  getFunctionX(value, equation) {
    let equationForm = this._classReadForm;
    let xn = equationForm.turnInToNormalEq(value, equation);
    return xn;
  }
  getEquationPrime(){
    let equation = "3x**2 - 1"
    return equation
  }
  getEP(){
    let ep = this.getEquationPrime()
    console.log(this.getFunctionX(1, ep))
  }
  static newtonMethod() {
    let iterations = this.getError()
    let i = 0;
    let xi = this.getXi()
    let result = 0;
    result += this.calculate(xi)
    do {
      i++

    } while (i <= iterations);
    return result
  }
  calculate(xi){
    let result = 0;
    let primeEquation = this.getEquationPrime();
    let fx = this.getFunctionX(xi, this.getEquation())
    let fxPrime = this.getFunctionX(xi, primeEquation);
    if(fxPrime === 0) {
      Swal.fire('Error', 'No se puede resolver por este metodo', 'error')
      return;
    }
    result = xi - fx / fxPrime;
    return result
  }
  getPorcentualError(){}
  // Obtener la clase form y la clase equationForm
  static read(readForm, resolve) {
    if (readForm && equationForm) {
      return new Newton(readForm, resolve);
    }
  }
}

// VAS BIEN ;)