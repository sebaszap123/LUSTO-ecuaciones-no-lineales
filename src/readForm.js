export default class ReadForm {
  constructor(equation, error, method, xi, xf) {
    this._equation = equation;
    this._error = error;
    this._method = method;
    this._xi = xi;
    this._xf = xf;
  }
  getEquation() {
    return this._equation;
  }
  getMethod() {
    return this._method;
  }
  getError() {
    return this._error;
  }
  getXi() {
    return this._xi;
  }
  getXf() {
    return this._xf;
  }

  static read() {
    let inpEquation = document.querySelector("#equation");
    let inpError = document.querySelector("#error");
    let inpMethod = document.querySelector("#method");
    let inpXi = document.querySelector("#xi");
    // let inpXf = document.querySelector("#xf");
    let equation = inpEquation.value;
    let error = inpError.value;
    let method = inpMethod.value;
    let xi = inpXi.value;
    // let xf = inpXf.value;
    if ((equation, error, method, xi)) {
      let read = new ReadForm(equation, error, method, xi);
      return read;
    } else {
      return false;
    }
  }
  _divide(equation) {
    let divide = equation.split(" ");
    return divide;
  }
  // Cambia las X de toda la ecuacion y deja solo el resultado final
  turnInToNormalEq(x, equation) {
    equation = String(equation);
    let dividedEq = this._divide(equation);
    let fullEq = "";

    dividedEq.forEach((pE) => {
      fullEq = fullEq + this.numberInstead(pE, x);
    });
    let valuate = eval(fullEq);
    return valuate;
  }

  // Quita las X y pone en su lugar el valor designado
  numberInstead(equation, newValue) {
    var change;
    if (equation.charAt(0) == "x") {
      change = equation.replace("x", `(${newValue})`);
    } else {
      change = equation.replace("x", `*(${newValue})`);
    }
    return change;
  }
}