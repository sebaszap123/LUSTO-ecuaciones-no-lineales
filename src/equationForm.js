export default class EquationForm {
  // Separa la ecuacion en partes
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
      fullEq = fullEq + this.numberInsteadXV2(pE, x);
    });
    let valuate = eval(fullEq);
    return valuate;
  }

  // Quita las X y pone en su lugar el valor designado
  numberInsteadX(equation, newValue) {
    let change = equation.replace("x", newValue);
    return change;
  }
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
