import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let pronoun = ['the', 'our'];
let adj = ['great', 'big'];
let noun = ['jogger', 'racoon'];
let ext = ['.com', '.es', '.io', '.net']

function generarDominio(pronoun,adj,noun,ext) {
  
  let dominios = [];

  for (let p of pronoun) {
    for (let a of adj) {
      for (let n of noun) {
        for (let e of ext){
          dominios.push(`${p}${a}${n}${e}`);
        }
      }
    }
  }
  
  return dominios;
   
}



window.onload = function() {
  //write your code here
  document.getElementById("dominio").innerHTML = generarDominio(pronoun,adj,noun,ext).join('<br>');
  
  
};
