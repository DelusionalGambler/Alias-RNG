const auras = [
  "Ash", "Dust", "Echo", "Void", "Mist",
  "Pulse", "Flicker", "Shade", "Static", "Drift",
  "Bloom", "Spark", "Gloom", "Ripple", "Flare",
  "Wisp", "Glitch", "Halo", "Orbit", "Surge",
  "Aether", "Nova", "Phantom", "Zenith", "Paradox",
  "Eclipse", "Myth", "Oracle", "Singularity", "Abyss",
  "Celestial", "Anomaly", "Chronos", "Voidborn", "Empyrean",
  "Null", "Cosmic", "Eternal", "Oblivion", "Transcendent",
  "Absolute", "Primordial", "Infinite", "Divinity", "???"
];

function getAuraWeights() {
  return auras.map((_, i) => {
    return Math.pow(0.85, i);
  });
}

let player = {
  luck: 1
};

function roll() {
  const weights = getAuraWeights();

  // appliquer la chance
  const adjusted = weights.map(w => Math.pow(w, 1 / player.luck));

  const total = adjusted.reduce((a, b) => a + b, 0);
  let r = Math.random() * total;

  for (let i = 0; i < adjusted.length; i++) {
    if (r < adjusted[i]) {
    const rarity = getRarity(i);
const rarityEl = document.getElementById("rarityText");
const auraEl = document.getElementById("auraText");

// reset classes
rarityEl.className = "";
auraEl.className = "";

rarityEl.textContent = rarity;
auraEl.textContent = auras[i];

// appliquer couleur
const rarityClass = rarity.toLowerCase().replace("é", "e");

rarityEl.classList.add(rarityClass);
auraEl.classList.add(rarityClass);

      return;
    }
    r -= adjusted[i];
  }
}
