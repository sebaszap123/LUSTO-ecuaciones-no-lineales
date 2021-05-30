import ReadForm from "./ReadForm.js";
import Newton from "./newton.js";
import Resolved from "./resolved.js";
class App {
  constructor() {
    this._calcular = document.querySelector("#calcular");
    this._calcular.addEventListener("click", this.readForm);
    this._addResolve = new Resolved() // Hace visibles los resultados en el html
  }
  readForm = () => {
    // de esto puedo usar metodos para obtener los datos
    var callMethod
    let form = ReadForm.read();
    if (!form) {
      Swal.fire({
        icon: 'error',
        title:'ERROR',
        text:'Todos los valores son obligatorios'
      });
      return;
    }
    callMethod = this._callBackMethods(form, this._addResolve);
      
    
    console.log(callMethod)
    if (callMethod.getMethod() == "newton") {
      this._newton(callMethod);
    }
  };
  _callBackMethods = (form, resolved) => {
    var method
    if(form.getMethod() ==  "newton"){
      let newton = Newton.read(form, resolved)
      method = newton
    }
    return method;
  }
  // _newton(newton){
  //   console.log(newton.newtonMethod());
  //   newton.getEP()
  // }
}
new App();
