import ReadForm from "./readForm.js";
import Newton from "./newton.js";
import Resolved from "./resolved.js";
import Clean from "./clean.js";
class App {
  constructor() {
    this._calcular = document.querySelector("#calcular");
    this._addResolve = new Resolved(); // Hace visibles los resultados en el html
    this._calcular.addEventListener("click", this.readForm);
    this._clean = document.querySelector("#clean");
    this._clean.addEventListener("click", this.clean);
  }
  clean = () => {
    Clean.clean();
    this._addResolve.clean();
  };
  readForm = () => {
    // de esto puedo usar metodos para obtener los datos
    let form = ReadForm.read();
    if (!form) {
      Swal.fire({
        icon: "error",
        title: "ERROR",
        text: "Todos los valores son obligatorios",
      });
      return;
    }
    var callMethod = this._callBackMethods(form);
    if (callMethod.getMethod() == "newton") {
      // console.log(callMethod.newtonMethod(callMethod.getXi()))
      let iterationsStop = Number(callMethod.getError());
      var porcentualError = 100;
      const X0 = callMethod.getXi();
      let count = 0;
      let xNew;
      let result;
      do {
        if (count == 0) {
          result = callMethod.newtonMethod(X0);
          this._addResolve.pushXr(result);
          this._addResolve.pushPorcentual("Primer valor (Sin iterar)");
          count++;
          xNew = result;
        }
        result = callMethod.newtonMethod(xNew);
        xNew = result;
        let xOld = this._addResolve.getValuesXr(count - 1);
        count++;
        porcentualError = callMethod.getPorcentualError(xNew, xOld);
        if (porcentualError > iterationsStop) {
          this._addResolve.pushXr(xNew);
          this._addResolve.pushPorcentual(porcentualError);
        }
      } while (iterationsStop <= porcentualError);
      if (iterationsStop >= porcentualError && !this._addResolve.getDidIt()) {
        this._addResolve.browseData();
        this._addResolve.setDidIt();
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
}
new App();
