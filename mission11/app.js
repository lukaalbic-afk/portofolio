
const invoiceBody = document.getElementById('invoice-body');
const modelRow = invoiceBody.querySelector('.model');

const remiseInput = document.getElementById('remise');
const tauxTvaInput = document.getElementById('taux-tva');
const fraisInput = document.getElementById('frais');

const subtotalEl = document.getElementById('subtotal');
const subtotalRemiseEl = document.getElementById('subtotal-apres-remise');
const taxeTotaleEl = document.getElementById('taxe-totale');
const fraisAfficheEl = document.getElementById('frais-affiche');
const soldeEl = document.getElementById('solde-total');

document.getElementById("date-info").textContent =
  new Date().toLocaleDateString();


function fmt(n) {
  return Number(n).toFixed(2);
}


function calculate() {
  const lines = Array.from(invoiceBody.querySelectorAll("tr.line"))
    .filter(r => !r.classList.contains("model"));

  let subtotal = 0;

  lines.forEach(row => {
    const qte = parseInt(row.querySelector(".qte").value) || 0;
    const prix = parseFloat(row.querySelector(".prix").value) || 0;
    const total = qte * prix;
    row.querySelector(".total").textContent = fmt(total);
    subtotal += total;
  });

  const remise = parseFloat(remiseInput.value) || 0;
  const taux = parseFloat(tauxTvaInput.value) || 0;
  const frais = parseFloat(fraisInput.value) || 0;

  const subAfterRemise = subtotal - (subtotal * remise / 100);
  const taxe = subAfterRemise * taux / 100;
  const solde = subAfterRemise + taxe + frais;

  subtotalEl.textContent = fmt(subtotal);
  subtotalRemiseEl.textContent = fmt(subAfterRemise);
  taxeTotaleEl.textContent = fmt(taxe);
  fraisAfficheEl.textContent = fmt(frais);
  soldeEl.textContent = fmt(solde);
}


function addLine() {
  const clone = modelRow.cloneNode(true);
  clone.classList.remove("model");
  clone.style.display = "";

  invoiceBody.appendChild(clone);

  attachEvents(clone);
}


function removeLine(e) {
  const row = e.target.closest("tr");
  row.remove();
  calculate();
}


function autoFill() {
  const descriptions = [
    "Visite médicale","Produit X","Produit Y","Analyse","Kit de test",
    "Service installation","Contrat annuel","Pack A","Frais de dossier"
  ];

  const lines = invoiceBody.querySelectorAll("tr.line:not(.model)");

  lines.forEach(row => {
    row.querySelector(".desc").value =
      descriptions[Math.floor(Math.random()*descriptions.length)];

    row.querySelector(".qte").value = Math.floor(Math.random()*10)+1;
    row.querySelector(".prix").value = (Math.random()*100+1).toFixed(2);
  });

  calculate();
}


function attachEvents(row) {
  row.querySelector(".remove-line").onclick = removeLine;

  row.querySelector(".qte").oninput =
  row.querySelector(".prix").oninput = calculate;
}


document.querySelectorAll("tr.line:not(.model)").forEach(attachEvents);


document.getElementById("add-line").onclick = addLine;
document.getElementById("auto-fill").onclick = autoFill;
document.getElementById("calculate").onclick = calculate;
document.getElementById("print").onclick = () => {
  calculate();
  window.print();
};


calculate();