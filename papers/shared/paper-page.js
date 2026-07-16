document.querySelectorAll('[data-copy-target]').forEach((button) => {
  const statusId = button.getAttribute('data-copy-status');
  const status = statusId ? document.getElementById(statusId) : null;
  const originalLabel = button.textContent;

  const announce = (message) => {
    if (status) status.textContent = message;
    button.textContent = message === 'Citation copied to clipboard.' ? 'Copied' : originalLabel;
    window.setTimeout(() => {
      button.textContent = originalLabel;
      if (status) status.textContent = '';
    }, 1800);
  };

  button.addEventListener('click', async () => {
    const target = document.getElementById(button.getAttribute('data-copy-target'));
    if (!target) {
      announce('Citation text was not found.');
      return;
    }

    const text = target.textContent.trim();
    if (!navigator.clipboard || !navigator.clipboard.writeText) {
      announce('Copy unavailable. Select the citation text manually.');
      return;
    }

    try {
      await navigator.clipboard.writeText(text);
      announce('Citation copied to clipboard.');
    } catch {
      announce('Copy unavailable. Select the citation text manually.');
    }
  });
});
