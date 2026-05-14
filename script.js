function openEnv() {
  document.getElementById('env-flap').classList.add('open');
  setTimeout(() => {
    document.getElementById('envelope-screen').classList.add('hiding');
    setTimeout(() => {
      document.getElementById('envelope-screen').style.display = 'none';
      document.getElementById('invitation').style.display = 'block';
      startHearts();
      startPetals();
      startCountdown();
      setTimeout(() => {
        document.getElementById('card').classList.add('visible');
        document.querySelectorAll('.s').forEach(el => {
          const d = parseInt(el.dataset.d) || 0;
          setTimeout(() => el.classList.add('show'), d);
        });
      }, 100);
    }, 900);
  }, 800);
}

// *** تاريخ الفرح — غيّر هنا فقط ***
const WEDDING_DATE = '2026-05-30T18:00:00';

function startCountdown() {
  const target = new Date(WEDDING_DATE);

  function toAr(n) {
    return String(n).replace(/\d/g, d => '٠١٢٣٤٥٦٧٨٩'[d]);
  }

  function tick() {
    const diff = target - new Date();
    if (diff <= 0) {
      ['cdd','cdh','cdm','cds'].forEach(id =>
        document.getElementById(id).textContent = '٠٠'
      );
      return;
    }
    document.getElementById('cdd').textContent = toAr(Math.floor(diff / 86400000));
    document.getElementById('cdh').textContent = toAr(String(Math.floor((diff % 86400000) / 3600000)).padStart(2,'0'));
    document.getElementById('cdm').textContent = toAr(String(Math.floor((diff % 3600000) / 60000)).padStart(2,'0'));
    document.getElementById('cds').textContent = toAr(String(Math.floor((diff % 60000) / 1000)).padStart(2,'0'));
  }

  tick();
  setInterval(tick, 1000);
}

function startHearts() {
  const c = document.getElementById('hearts-bg');
  const items = ['💕','💗','🌹','✨','💖','🌸','💝'];

  function spawn() {
    const el = document.createElement('div');
    el.className = 'heart-float';
    const dur = 14 + Math.random() * 12;
    el.textContent = items[Math.floor(Math.random() * items.length)];
    el.style.cssText = `left:${Math.random()*100}%;bottom:-20px;font-size:${10+Math.random()*12}px;animation-duration:${dur}s;animation-delay:${Math.random()*4}s;`;
    c.appendChild(el);
    setTimeout(() => el.remove(), (dur + 5) * 1000);
  }

  for (let i = 0; i < 8; i++) setTimeout(spawn, i * 400);
  setInterval(spawn, 1600);
}

function startPetals() {
  const c = document.getElementById('petals');
  const items = ['🌹','🌸','🌺','✨','💗','🍃'];

  function spawn() {
    const el = document.createElement('div');
    el.className = 'petal';
    const dur = 11 + Math.random() * 10;
    el.textContent = items[Math.floor(Math.random() * items.length)];
    el.style.cssText = `left:${Math.random()*100}%;bottom:-30px;font-size:${10+Math.random()*10}px;animation-duration:${dur}s;animation-delay:${Math.random()*3}s;`;
    c.appendChild(el);
    setTimeout(() => el.remove(), (dur + 4) * 1000);
  }

  for (let i = 0; i < 5; i++) setTimeout(spawn, i * 500);
  setInterval(spawn, 1800);
}