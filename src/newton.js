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

  getFunctionXi() {
    let equationForm = this._classEquationForm;
    let xi = equationForm.turnInToNormalEq(this.getXi());
    return xi;
  }
  getFunctionXf() {
    let equationForm = this._classEquationForm;
    let xf = equationForm.turnInToNormalEq(this.getXf());
    return xf;
  }
  newtonMethod() {
    var calcular = 0;
    let iterations = this.getIterations();
    let i = 0;
    do {
      
    } while (i <= iterations);
  }
  getPorcentualError(){}
  // Obtener la clase form y la clase equationForm
  static read(readForm, equationForm, registry) {
    if (readForm && equationForm) {
      return new Newton(readForm, equationForm, registry);
    }
  }
}
