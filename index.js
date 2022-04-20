const TOTAL_COEFF = 15;

let inputs = document.querySelectorAll("input");
let moy = 0;

let disp_text = document.querySelector("#moy_cont");

let coeffs = {
  Analyse: 1.5,
  Algebre: 1.5,
  ASD: 2,
  ProgC: 1.5,
  LF: 1.5,
  TechMul: 1.5,
  Anglais: 1,
  TechCom: 1,
  SL: 2,
  SE: 1.5
};

function calculate() {
  moy = 0;
  for (let i = 0; i < inputs.length; i++) {
    let c_name = inputs[i].name;
    let m_mark = inputs[i].value;
    moy += parseFloat(m_mark) * coeffs[c_name];
  }
  moy /= TOTAL_COEFF;
  disp_text.innerText = moy.toFixed(2);
}
