const distanceSlider = document.getElementById('distance');
const distanceValue = document.getElementById('distanceValue');
const departementSelect = document.getElementById('departement');
const habitantsInput = document.getElementById('habitants');
const emissionsOutput = document.getElementById('emissions');
const coutOutput = document.getElementById('cout');

function updateCalcul() {
  const distance = parseFloat(distanceSlider.value);
  const consommation = parseFloat(departementSelect.value);
  const habitants = parseFloat(habitantsInput.value);
  const trajetsParAn = 220; // Nombre de jours travaillés par an

  // Calcul des émissions (en kg CO2)
  const emissions = distance * consommation * trajetsParAn * habitants / 1000;
  emissionsOutput.textContent = `${emissions.toLocaleString('fr-FR')} kg CO2`;

  // Calcul du coût social annuel (en euros)
  const cout = emissions * 172 / 1000; // Conversion en tonnes
  coutOutput.textContent = `${cout.toLocaleString('fr-FR')} €`;

  // Calcul du coût social sur 10 ans
  const cout10ans = cout * 10;
  document.getElementById('cout10ans').textContent = `${cout10ans.toLocaleString('fr-FR')} €`;
  
   // Calcul du coût social sur 50 ans
  const cout50ans = cout * 50;
  document.getElementById('cout50ans').textContent = `${cout50ans.toLocaleString('fr-FR')} €`;
}

distanceSlider.addEventListener('input', () => {
  distanceValue.textContent = `${distanceSlider.value} km`;
  updateCalcul();
});

departementSelect.addEventListener('change', updateCalcul);
habitantsInput.addEventListener('input', updateCalcul);

// Initialisation
updateCalcul();
