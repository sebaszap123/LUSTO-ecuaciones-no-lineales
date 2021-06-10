import Resolved from "./resolved.js";
import Resolved2 from "./resolved2.js";
import ReadForm from "./readForm.js";
import ReadForm2 from "./readForm2.js";
import Newton from "./newton.js";
import Bisection from "./bisection.js";
import Clean from "./clean.js";
class Data {
  constructor() {
    this._method = document.querySelector("#method");
    this._method.addEventListener("change", this.cleanAndCall);
  }
  cleanAndCall = () => {
    document.querySelector("#data").innerHTML = "";
    Resolved.clean();
    Clean.clean();
    this.createMethod();
  };
  createMethod = () => {
    var valueEquation = "x ** 3 - x + 1";
    var table = document.querySelector("#data");
    let method = document.querySelector("#method").value;
    if (method) {
      document.querySelector("#selection").innerHTML = `Método: ${method}`;
    }
    if (method == "Newton") {
      this._newtonTable(method, valueEquation, table);
    } else if (method == "Bisection") {
      this._bisectionTable(method, valueEquation, table);
    }
  };
  _newtonTable(method, valueEquation, table) {
    const DATA = ["Ecuación", "Error Porcentual", "Valor Xi"];
    const METADATA = ["Equation", "Error", "Xi"];
    for (let i = 0; i < DATA.length; i++) {
      var hilera = document.createElement("th");
      hilera.setAttribute("id", `${method}${METADATA[i]}`);
      let texto = document.createTextNode(DATA[i]);
      hilera.appendChild(texto);
      table.appendChild(hilera);
    }
    let row = table.insertRow(-1);
    let equation = row.insertCell(0);
    let error = row.insertCell(1);
    let xi = row.insertCell(2);
    let inpEquation = document.createElement("input");
    let inpError = document.createElement("input");
    let inpXi = document.createElement("input");
    inpEquation.setAttribute("id", `equation${method}`);
    inpEquation.setAttribute("type", "text");
    inpEquation.setAttribute("value", valueEquation);
    inpEquation.setAttribute("disabled", "disabled");
    inpError.setAttribute("id", `error${method}`);
    inpError.setAttribute("type", "number");
    inpXi.setAttribute("id", `xi${method}`);
    inpXi.setAttribute("type", "number");
    equation.appendChild(inpEquation);
    error.appendChild(inpError);
    xi.appendChild(inpXi);

    let btnCal = document.createElement("input");
    let div = document.querySelector("#addCalculate");
    let divTable = document.createElement("table");
    btnCal.setAttribute("id", `btnCal${method}`);
    btnCal.setAttribute("type", "button");
    btnCal.setAttribute("class", "afterEffect");
    btnCal.setAttribute("value", "CALCULAR");
    divTable.appendChild(btnCal);
    div.appendChild(divTable);
    new AppNewton();
  }
  _bisectionTable(method, valueEquation, table) {
    const DATA = ["Ecuación", "Error Porcentual", "Valor Xi", "Valor Xu"];
    const METADATA = ["Equation", "Error", "Xi", "Xu"];
    for (let i = 0; i < DATA.length; i++) {
      var hilera = document.createElement("th");
      hilera.setAttribute("id", `${method}${METADATA[i]}`);
      let texto = document.createTextNode(DATA[i]);
      hilera.appendChild(texto);
      table.appendChild(hilera);
    }
    let row = table.insertRow(-1);
    let equation = row.insertCell(0);
    let error = row.insertCell(1);
    let xi = row.insertCell(2);
    let xu = row.insertCell(3);
    let inpEquation = document.createElement("input");
    let inpError = document.createElement("input");
    let inpXi = document.createElement("input");
    let inpXu = document.createElement("input");
    inpEquation.setAttribute("id", `equation${method}`);
    inpEquation.setAttribute("type", "text");
    inpEquation.setAttribute("value", valueEquation);
    inpEquation.setAttribute("disabled", "disabled");

    inpError.setAttribute("id", `error${method}`);
    inpError.setAttribute("type", "number");

    inpXi.setAttribute("id", `xi${method}`);
    inpXi.setAttribute("type", "number");

    inpXu.setAttribute("id", `xu${method}`);
    inpXu.setAttribute("type", "number");

    equation.appendChild(inpEquation);
    error.appendChild(inpError);
    xi.appendChild(inpXi);
    xu.appendChild(inpXu);

    let btnCal = document.createElement("input");
    let div = document.querySelector("#addCalculate");
    let divTable = document.createElement('table');
    btnCal.setAttribute("id", `btnCal${method}`);
    btnCal.setAttribute("type", "button");
    btnCal.setAttribute("class", "afterEffect");
    btnCal.setAttribute("value", "CALCULAR");
    divTable.appendChild(btnCal);
    div.appendChild(divTable);
    new AppBisection();
  }
}
new Data();
// Clase para calcular por el metodo de bisección (manda a llamar)
// a las otras respectivas clases para hacer los calculoss
class AppBisection {
  constructor() {
    this._addResolve = new Resolved2();
    this._calculate = document.querySelector("#btnCalBisection");
    this._calculate.addEventListener("click", this.readForm);
  }
  readForm = () => {
    // de esto puedo usar metodos para obtener los datos
    let form = ReadForm2.read();
    if (form === false) {
      // Si no esta completos los datos del form
      Swal.fire({
        icon: "error",
        title: "ERROR",
        text: "Todos los valores son obligatorios",
      });
      return;
    } else if (form === null) {
      Swal.fire(
        "error",
        " No se puede cumplir la siguiente condición: xi >= xu ",
        "error"
      );
      return;
    }
    var callMethod = new Bisection(form); // Llamamos el método correspondiente
    this._bisection(callMethod); // Llamamos la función del metodo correspondiente
    // Ademas añadimos callMethod para que esta pueda realizar las operaciones
  };
  _bisection(callMethod) {
    let xa = Number(callMethod.getXi());
    let xb = Number(callMethod.getXu());
    let iterationsStop = Number(callMethod.getError());
    var porcentualError = 100;
    var xr;
    var evaluate;
    var FXr;
    var FXa;
    var sign;
    // formula xr = obtainXr
    // FunctionXr = ObtainFXr
    // Condiciones
    do {
      if (!xr) {
        this._addResolve.setInterval(xa, xb);
        xr = callMethod.obtainXr(xa, xb);
        FXa = callMethod.obtainFXn(xa);
        FXr = callMethod.obtainFXn(xr);
        evaluate = FXa * FXr; // -5
        sign = this._addResolve.evaluateSign(evaluate);
        this._addResolve.pushXr(xr);
        this._addResolve.pushPorcentual("Primer valor (Sin iterar)");
        console.log(this._methodSign(sign, xa, xb, xr));
        console.log(porcentualError);
      }
      if (xr) {
        xa = this._addResolve.getIntervalXa();
        xb = this._addResolve.getIntervalXb();
        xr = callMethod.obtainXr(xa, xb);
        let xOld = this._addResolve.getXrOld();
        let xNew = xr;
        FXa = callMethod.obtainFXn(xa);
        FXr = callMethod.obtainFXn(xr);
        evaluate = FXa * FXr;
        sign = this._addResolve.evaluateSign(evaluate);
        this._addResolve.pushXr(xr);
        this._methodSign(sign, xa, xb, xr);
        porcentualError = Number(callMethod.getPorcentualError(xNew, xOld));
        porcentualError = porcentualError.toFixed(2)
        this._addResolve.pushPorcentual(porcentualError);
      }
    } while (iterationsStop <= porcentualError);
    console.log(iterationsStop);
    console.log(porcentualError);
    if (iterationsStop >= porcentualError) {
      this._addResolve.browseData();
    }
  }
  _methodSign(sign, xa, xb, xr) {
    if (sign === "negative") {
      // reemplazar el nuevo valor en xb
      this._addResolve.replaceInterval(xb, xr);
      return true;
    } else if (sign === "positive") {
      this._addResolve.replaceInterval(xa, xr);
      return true;
    }
  }
}
class AppNewton {
  constructor() {
    this._addResolve = new Resolved();
    this._calculate = document.querySelector("#btnCalNewton");
    this._calculate.addEventListener("click", this.readForm);
  }
  readForm = () => {
    // de esto puedo usar metodos para obtener los datos
    let form = ReadForm.read();
    console.log(form);
    if (!form) {
      // Si no esta completos los datos del form
      Swal.fire({
        icon: "error",
        title: "ERROR",
        text: "Todos los valores son obligatorios",
      });
      return;
    }
    var callMethod = new Newton(form); // Llamamos el método correspondiente
    this._newton(callMethod); // Llamamos la función del metodo correspondiente
    // Ademas añadimos callMethod para que esta pueda realizar las operaciones
  };
  _newton(callMethod) {
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
      this._addResolve.pushXr(xNew);
      this._addResolve.pushPorcentual(porcentualError);
    } while (iterationsStop <= porcentualError);
    if (iterationsStop >= porcentualError && !this._addResolve.getDidIt()) {
      this._addResolve.browseData();
      this._addResolve.setDidIt();
    }
  }
}
