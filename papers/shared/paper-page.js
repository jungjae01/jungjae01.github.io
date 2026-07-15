document.querySelectorAll('[data-copy-target]').forEach((button) => {
  button.addEventListener('click', async () => {
    const target = document.getElementById(button.getAttribute('data-copy-target'));
    if (!target) return;
    try {
      await navigator.clipboard.writeText(target.textContent.trim());
      button.textContent = 'Copied';
      window.setTimeout(() => {
        button.textContent = 'Copy BibTeX';
      }, 1600);
    } catch {
      button.textContent = 'Copy unavailable';
    }
  });
});
