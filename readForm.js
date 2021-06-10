export default class ReadForm {
  constructor(equation, error, method, xi) {
    this._equation = equation;
    this._error = error;
    this._method = method;
    this._xi = xi;
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

  // Lee los valores de los input del html y los guarda en un objeto de la clase
  static read() {
    let inpEquation = document.querySelector("#equationNewton");
    let inpError = document.querySelector("#errorNewton");
    let inpMethod = document.querySelector("#method");
    let inpXi = document.querySelector("#xiNewton");
    let equation = inpEquation.value;
    let error = Number(inpError.value);
    let method = inpMethod.value;
    let xi = Number(inpXi.value);
    if (equation && error && method && xi) {
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