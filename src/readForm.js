export default class ReadForm{
  constructor(equation, error, method, xi, xf, iterations){
    this._equation = equation;
    this._error = error;
    this._method = method;
    this._xi = xi;
    this._xf = xf;
    this._iterations = iterations;
  }
  getEquation(){ return this._equation;}
  getMethod(){ return this._method;}
  getError(){ return this._error; }
  getXi(){ return this._xi;}
  getXf(){ return this._xf;}
  getIterations(){ return this._iterations}

  static read(){
    let inpEquation = document.querySelector('#equation');
    let inpError = document.querySelector('#error');
    let inpMethod = document.querySelector('#method');
    let inpXi = document.querySelector('#xi');
    let inpXf = document.querySelector('#xf');
    let inpIteration = document.querySelector('#iteration');
    let equation = inpEquation.value;
    let error = inpError.value;
    let method = inpMethod.value;
    let xi = inpXi.value;
    let xf = inpXf.value;
    let iterations = inpIteration.value;
    if ((equation, error, method, xi, xf, iterations)) {
      let read = new ReadForm(equation, error, method, xi, xf, iterations);
      return read;
    } else {
      Swal.fire("Error", "Faltan datos por ingresar", "error");
    }
  }
}