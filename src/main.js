import ReadForm from "./readForm.js";
import Newton from "./newton.js";
import Resolved from "./resolved.js";
class App {
  constructor() {
    this._calcular = document.querySelector("#calcular");
    this._addResolve = new Resolved(); // Hace visibles los resultados en el html
    this._calcular.addEventListener("click", this.readForm);
  }
  readForm = () => {
    // de esto puedo usar metodos para obtener los datos
    var callMethod;
    let form = ReadForm.read();
    if (!form) {
      Swal.fire({
        icon: "error",
        title: "ERROR",
        text: "Todos los valores son obligatorios",
      });
      return;
    }
    callMethod = this._callBackMethods(form);
    console.log(callMethod);
    if (callMethod.getMethod() == "newton") {
      // console.log(callMethod.newtonMethod(callMethod.getXi()))
      let iterationsStop = callMethod.getError();
      let i = callMethod.getXi();
      const X0 = callMethod.getXi();
      let count = 0;
      this._addResolve.pushXr(X0);
      while (i > iterationsStop) {
        let result = callMethod.newtonMethod(i);
        i = result;
        let xOld = this._addResolve.getValuesXr(count)
        this._addResolve.pushXr(result);
        console.log(callMethod.getPorcentualError(i,xOld));
        count++;
      }
    }
  };
  _callBackMethods = (form) => {
    var method;
    if (form.getMethod() == "newton") {
      method = new Newton(form);
    }
    return method;
  };
  // _newton(newton){
  //   console.log(newton.newtonMethod());
  //   newton.getEP()
  // }
}
new App();
