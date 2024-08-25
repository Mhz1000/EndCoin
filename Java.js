let score = 0;
let weaponDamage = 1;
let weaponLevel = 1;

const tapButton = document.getElementById('tap-button');
const scoreDisplay = document.getElementById('score-display');
const weaponDamageDisplay = document.getElementById('weapon-damage');
const weaponLevelDisplay = document.getElementById('weapon-level');

tapButton.addEventListener('click', () => {
    score += weaponDamage;
    scoreDisplay.textContent = `Punteggio: ${score}`;
});

document.getElementById('upgrade-weapon').addEventListener('click', () => {
    const upgradeCost = weaponLevel * 100;
    if (score >= upgradeCost) {
        score -= upgradeCost;
        weaponLevel++;
        weaponDamage++;
        scoreDisplay.textContent = `Punteggio: ${score}`;
        weaponDamageDisplay.textContent = weaponDamage;
        weaponLevelDisplay.textContent = weaponLevel;
    } else {
        alert("Non hai abbastanza punti per migliorare l'arma!");
    }
});