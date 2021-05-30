export default class Newton {
  constructor(readForm, equationForm, registry) {
    this._classReadForm = readForm;
    this._classEquationForm = equationForm;
    this._registry = registry;
  }
  // obtener el metodo que se esta utilizando
  getMethod() {
    return this._classReadForm.getMethod();
  }
  getIterations() {
    return this._classReadForm.getIterations();
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
    let equationForm = this._classEquationForm;
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
  newtonMethod() {
    var calcular = 0;
    let iterations = this.getIterations();
    let i = 0;
    let xn = this.getXi()
    let result = 0;
    result += this.calculate(xn)
    // do {
    //   i++
    // } while (i <= iterations);
    return result
  }
  calculate(xn){
    let result = 0;
    let primeEquation = this.getEquationPrime();
    let fx = this.getFunctionX(xn, this.getEquation())
    let fxPrime = this.getFunctionX(xn, primeEquation);
    console.log(fxPrime);
    console.log(fx)
    if(fxPrime === 0) {
      Swal.fire('Error', 'No se puede resolver por este metodo', 'error')
    } else {
      result = xn - fx / fxPrime;
    }
    return result
  }
  getPorcentualError(){}
  // Obtener la clase form y la clase equationForm
  static read(readForm, equationForm, registry) {
    if (readForm && equationForm) {
      return new Newton(readForm, equationForm, registry);
    }
  }
}
