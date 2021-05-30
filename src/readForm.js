export default class ReadForm{
  constructor(equation, error, method, xi, xf){
    this._equation = equation;
    this._error = error;
    this._method = method;
    this._xi = xi;
    this._xf = xf;
  }
  getEquation(){ return this._equation;}
  getError(){ return this._error; }
  getMethod(){ return this._method;}
  getXi(){ return this._xi;}
  getXf(){ return this._xf;}
  static read(){
    let inpEquation = document.querySelector('#equation');
    let inpError = document.querySelector('#error');
    let inpMethod = document.querySelector('#method');
    let inpXi = document.querySelector('#xi');
    let inpXf = document.querySelector('#xf');
    let equation = inpEquation.value;
    let error = inpError.value;
    let method = inpMethod.value;
    let xi = inpXi.value;
    let xf = inpXf.value;
    if(equation, error, method, xi, xf){
      let read = new ReadForm(equation, error, method, xi, xf)
      return read
    } else {
      Swal.fire('Error', 'Faltan datos por ingresar', 'error')
    }
  }
}