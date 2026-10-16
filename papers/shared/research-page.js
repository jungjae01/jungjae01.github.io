document.querySelectorAll("[data-copy-target]").forEach((button) => {
  const target = document.getElementById(button.dataset.copyTarget);
  const status = document.getElementById(button.dataset.copyStatus);
  const label = button.textContent;
  let reset;

  const announce = (message) => {
    if (status) status.textContent = message;
  };

  const selectCitation = () => {
    if (!target) return;
    const selection = window.getSelection();
    if (!selection) return;
    const range = document.createRange();
    range.selectNodeContents(target);
    selection.removeAllRanges();
    selection.addRange(range);
    target.focus();
  };

  button.addEventListener("click", async () => {
    if (!target) return;
    window.clearTimeout(reset);

    try {
      if (!navigator.clipboard || !navigator.clipboard.writeText) {
        throw new Error("Clipboard unavailable");
      }
      await navigator.clipboard.writeText(target.textContent.trim());
      button.textContent = "Copied";
      announce("BibTeX copied to clipboard.");
      reset = window.setTimeout(() => {
        button.textContent = label;
      }, 2500);
    } catch {
      button.textContent = label;
      selectCitation();
      announce("Citation selected. Use your browser’s copy command to copy it.");
    }
  });
});

const sectionLinks = document.querySelectorAll(".section-links a[href^='#']");

if ("IntersectionObserver" in window && sectionLinks.length) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      sectionLinks.forEach((link) => {
        if (link.hash === "#" + entry.target.id) {
          link.setAttribute("aria-current", "location");
        } else {
          link.removeAttribute("aria-current");
        }
      });
    });
  }, { rootMargin: "-10% 0px -65% 0px" });

  sectionLinks.forEach((link) => {
    const section = document.querySelector(link.hash);
    if (section) observer.observe(section);
  });
}

document.addEventListener("visibilitychange", () => {
  if (document.hidden) {
    document.querySelectorAll("video").forEach((video) => video.pause());
  }
});
