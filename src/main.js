import ReadForm from "./ReadForm.js";
import EquationForm from "./equationForm.js";
class App {
  constructor() {
    this._calcular = document.querySelector("#calcular");
    this._calcular.addEventListener("click", this.read);
  }
  prueba = () => {
    var equation = document.querySelector("#equation").value;
    console.log(equation);
  };
  read = () => {
    // de esto puedo usar metodos para obtener los datos
    let form = ReadForm.read();
    var equation;
    var calcular;
    // por ejemplo
    // Esta forzoza va aqui
    if (form) {
      var a = 2;
      equation = new EquationForm(form.getEquation());
      console.log(equation.turnInToNormalEq()) // aki
    } else {
      Swal.fire("Error", "Faltan valores por agregar", "error");
    }
  };
}
new App();
