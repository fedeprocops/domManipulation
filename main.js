let nome = document.getElementById("nome");
let cognome = document.getElementById("cognome");
let data = document.getElementById("data");
let citta = document.getElementById("citta");
let genereF = document.getElementById("F");
let genereM = document.getElementById("M");

let options = citta.innerHTML;

//document.getElementById('form').checkValidity()

province.forEach((value, key) => {
  options += `<option value="${value}">${key}</option>`;
});

citta.innerHTML = options;

function formValidation(){
    
}

function showCode() {
  let genere;
  if (genereF.checked == true) {
    genere = genereF.value;
  } else if (genereM.checked == true) {
    genere = genereM.value;
  }

  let codicefiscale = ShowInput(nome.value,cognome.value,citta.value,new Date(data.value),genere);
  document.getElementById("codicefiscale").innerText = codicefiscale;
  console.log("Codice Fiscale: ", ShowInput(nome, cognome, citta, new Date(data), genere)
  );
}