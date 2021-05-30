export default class EquationForm {
  constructor(equation) {
    this._equation = String(equation);
  }
  // Cambia las X de toda la ecuacion y deja solo el resultado final
  turnInToNormalEq(x) {
    let dividedEq = this._divide(this._equation);
    let fullEq = "";

    dividedEq.forEach((pE) => {
      fullEq = fullEq + this.numberInsteadXV2(pE, x);
    });
    let valuate = eval(fullEq);
    return valuate;
  }

  // numberInsteadX(equation, newValue) {
  //   let change = equation.replace("x", newValue);
  //   return change;
  // }
  // Quita las X y pone en su lugar el valor designado
  numberInsteadXV2(equation, newValue) {
    var change;
    if (equation.charAt(0) == "x") {
      change = equation.replace("x", newValue);
    } else {
      change = equation.replace("x", `*${newValue}`);
    }
    return change;
  }
}
