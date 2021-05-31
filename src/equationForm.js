export default class EquationForm {

  constructor(xValue,equation) {
    this._value = xValue;
    this._equation = equation;
  }

  // Separa la ecuacion en partes
  _divide(equation) {
    let divide = equation.split(" ");
    return divide;
  }
  // Cambia las X de toda la ecuacion y deja solo el resultado final
  turnInToNormalEq() {
    let dividedEq = this._divide(this._equation);
    let fullEq = "";

    dividedEq.forEach((pE) => {
      fullEq = fullEq + this.numberInstead(pE, this._value);
    });
    let valuate = eval(fullEq);
    return valuate;
  }

  // Quita las X y pone en su lugar el valor designado
  numberInstead(equation, newValue) {
    var change;
    if (equation.charAt(0) == "x") {
      change = equation.replace("x", newValue);
    } else {
      change = equation.replace("x", `*${newValue}`);
    }
    return change;
  }
}
