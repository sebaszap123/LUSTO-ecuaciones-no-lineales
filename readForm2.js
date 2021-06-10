export default class ReadForm {
  constructor(equation, error, method, xi, xu) {
    this._equation = equation;
    this._error = error;
    this._method = method;
    this._xi = xi;
    this._xu = xu;
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
  getXiB() {
    return this._xi;
  }
  getXuB() {
    return this._xu;
  }

  // Lee los valores de los input del html y los guarda en un objeto de la clase
  static read() {
    let inpMethod = document.querySelector("#method");
    let method = inpMethod.value;

    let inpEquation = document.querySelector(`#equation${method}`);
    let inpError = document.querySelector(`#error${method}`);

    let inpXi = document.querySelector(`#xi${method}`);
    let inpXu = document.querySelector(`#xu${method}`);
    // let inpXf = document.querySelector("#xf");
    let equation = inpEquation.value;
    let error = Number(inpError.value);

    let xi = Number(inpXi.value);
    let xu = Number(inpXu.value);
    if(xi  >= xu){
      return null;
    } 
    if (equation && error && method && xi && xu) {
      let read = new ReadForm(equation, error, method, xi, xu);
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
