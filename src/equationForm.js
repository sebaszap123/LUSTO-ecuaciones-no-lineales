export default class EquationForm {
  constructor(equation) {
    this._equation = String(equation);
    this._newEquation = new Array();
  }

// Separa la ecuacion en partes   
  _divide() {
    let divide = this._equation.split(" ");
    return divide;
  }
  // Cambia las X de toda la ecuacion y deja solo el resultado final
  turnInToNormalEq() {
    let dividedEq = this._divide(this._equation);
    let fullEq = "";

    dividedEq.forEach((pE) => {
      fullEq = fullEq + this.numberInsteadXV2(pE, 3);
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
