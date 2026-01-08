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

function getRarity(index) {
  if (index < 10) return "Common";
  if (index < 20) return "Uncommon";
  if (index < 30) return "Rare";
  if (index < 38) return "Epic";
  if (index < 43) return "Legendary";
  return "Divine";
}


function roll() {

  
const rarity = getRarity(i);



  
  const weights = getAuraWeights();

  // appliquer la chance
  const adjusted = weights.map(w => Math.pow(w, 1 / player.luck));

  const total = adjusted.reduce((a, b) => a + b, 0);
  let r = Math.random() * total;

  for (let i = 0; i < adjusted.length; i++) {
    if (r < adjusted[i]) {
    const rarity = getRarity(i);
      if (rarity === "Uncommon") {
  triggerUncommonFlash();
}
      if (rarity === "Rare") {
  triggerRareShock();
}
      if (rarity === "Epic") {
  triggerEpicEffect();
}
      if (rarity === "Legendary") {
  triggerLegendaryEffect(aura.name);
}




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
function triggerUncommonFlash() {
  const body = document.body;

  body.classList.remove("flash-uncommon");
  void body.offsetWidth; // force le reset de l'animation
  body.classList.add("flash-uncommon");
}

function triggerRareShock() {
  const shock = document.createElement("div");
  shock.classList.add("shock-rare");

  document.body.appendChild(shock);

  // Supprime le div après l'animation pour ne pas polluer le DOM
  setTimeout(() => {
    shock.remove();
  }, 1000); // durée = 1s, doit correspondre à l'animation CSS
}

function triggerEpicEffect() {
  spawnEpicLines(18);
  spawnEpicShocks();
}

function spawnEpicLines(count) {
  for (let i = 0; i < count; i++) {
    const line = document.createElement("div");
    line.classList.add("epic-line");

    const y = Math.random() * window.innerHeight;
    const rotation = Math.random() * 360;
    const width = 100 + Math.random() * 300;

    line.style.top = `${y}px`;
    line.style.left = `${Math.random() * window.innerWidth}px`;
    line.style.width = `${width}px`;
    line.style.transform = `rotate(${rotation}deg) scaleX(0)`;

    document.body.appendChild(line);

    setTimeout(() => line.remove(), 600);
  }
}

function spawnEpicShocks() {
  for (let i = 0; i < 3; i++) {
    setTimeout(() => {
      const shock = document.createElement("div");
      shock.classList.add("epic-shock");
      document.body.appendChild(shock);

      setTimeout(() => shock.remove(), 600);
    }, i * 180);
  }
}

function triggerLegendaryEffect(auraName) {
  const body = document.body;

  body.classList.add("legendary-dark");

  setTimeout(() => {
    showLegendaryText(auraName);
    body.classList.remove("legendary-dark");
    body.classList.add("shake");
    spawnLegendaryShocks();
  }, 400);

  setTimeout(() => {
    body.classList.remove("shake");
  }, 900);
}

function showLegendaryText(text) {
  const el = document.createElement("div");
  el.classList.add("legendary-text");
  el.textContent = text;

  document.body.appendChild(el);

  setTimeout(() => el.remove(), 1600);
}

function spawnLegendaryShocks() {
  for (let i = 0; i < 10; i++) {
    setTimeout(() => {
      const shock = document.createElement("div");
      shock.classList.add("legendary-shock");
      document.body.appendChild(shock);

      setTimeout(() => shock.remove(), 450);
    }, i * 60);
  }
}


