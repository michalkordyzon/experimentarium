(function(){
  const input = document.getElementById('search');
  if(!input) return;
  const filter = () => {
    const q = input.value.toLowerCase().trim();
    document.querySelectorAll('.card').forEach(card => {
      const idx = card.getAttribute('data-index');
      const show = !q || (idx && idx.includes(q));
      card.style.display = show ? '' : 'none';
    });
  };
  input.addEventListener('input', filter);
})();