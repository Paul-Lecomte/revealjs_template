// Helpers Reveal.js personnalisés
(function(){
  // Ouvrir les liens externes dans un nouvel onglet
  document.addEventListener('click', function(e){
    const t = e.target.closest('a');
    if(t && t.matches('a[href^="http"]')){
      t.setAttribute('target','_blank');
      t.setAttribute('rel','noopener');
    }
  });

  // Timer simple affiché en bas à gauche
  const timer = document.createElement('div');
  timer.id = 'timer-widget';
  timer.style.position = 'fixed';
  timer.style.left = '12px';
  timer.style.bottom = '12px';
  timer.style.background = 'rgba(0,0,0,0.6)';
  timer.style.color = '#fff';
  timer.style.padding = '6px 10px';
  timer.style.borderRadius = '4px';
  timer.style.fontSize = '14px';
  timer.style.zIndex = '9999';
  document.body.appendChild(timer);

  let start = Date.now();
  function format(ms){
    const s = Math.floor(ms/1000);
    const m = Math.floor(s/60);
    const r = s%60;
    return `${m}:${String(r).padStart(2,'0')}`;
  }
  function update(){
    timer.textContent = `⏱️ ${format(Date.now()-start)}`;
  }
  setInterval(update, 1000);

  // Réinitialiser le timer à chaque changement de slide si souhaité
  Reveal.on('slidechanged', () => { start = Date.now(); update(); });

  // Raccourci clavier: T pour réinitialiser le timer
  document.addEventListener('keydown', (e) => {
    if(e.key.toLowerCase() === 't') { start = Date.now(); update(); }
  });
})();

