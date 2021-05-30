import ReadForm from "./ReadForm.js";
import EquationForm from "./equationForm.js";
import Newton from "./newton.js";
import Registry from "./registry.js";
class App {
  constructor() {
    this._calcular = document.querySelector("#calcular");
    this._calcular.addEventListener("click", this.readForm);
    this._registry = new Registry()
  }
  readForm = () => {
    // de esto puedo usar metodos para obtener los datos
    var callMethod
    let form = ReadForm.read();
    if (form) {
      let equationForm = new EquationForm(form.getEquation())
      callMethod = this._callBackMethods(form, equationForm, this._registry)
    } else {
      Swal.fire("Error", "Faltan valores por agregar", "error");
    }
    console.log(callMethod)
    if (callMethod.getMethod() == "newton") {
      this._newton(callMethod);
    }
  };
  _callBackMethods = (form, equationForm, registry) => {
    var method
    if(form.getMethod() ==  "newton"){
      let newton = Newton.read(form, equationForm, registry)
      method = newton
    }
    return method;
  }
  _newton(newton){
    console.log(newton.newtonMethod());
    newton.getEP()
  }
}
new App();
