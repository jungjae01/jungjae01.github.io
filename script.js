const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

if (!prefersReducedMotion) {
  document.querySelectorAll("video[data-preview]").forEach((video) => {
    video.muted = true;
    video.addEventListener("mouseenter", () => video.play().catch(() => {}));
    video.addEventListener("focus", () => video.play().catch(() => {}));
    video.addEventListener("mouseleave", () => video.pause());
    video.addEventListener("blur", () => video.pause());
  });
}
