const prefersReducedMotion = window.matchMedia(
  "(prefers-reduced-motion: reduce)"
).matches;

if (!prefersReducedMotion) {
  document.querySelectorAll("video[data-preview]").forEach((video) => {
    video.muted = true;
    video.addEventListener("mouseenter", () => video.play().catch(() => {}));
    video.addEventListener("focus", () => video.play().catch(() => {}));
    video.addEventListener("mouseleave", () => video.pause());
    video.addEventListener("blur", () => video.pause());
  });
}

const projectList = document.querySelector(".project-list");
const projectFilters = document.querySelectorAll("[data-project-filter]");
const projectFilterStatus = document.querySelector("#project-filter-status");

if (projectList && projectFilters.length) {
  const projects = Array.from(projectList.querySelectorAll(".project-card"));

  projectFilters.forEach((button) => {
    button.addEventListener("click", () => {
      const selectedSkill = button.dataset.projectFilter;
      const selectedLabel = button.textContent.trim();

      projectFilters.forEach((filterButton) => {
        const isActive = filterButton === button;
        filterButton.classList.toggle("is-active", isActive);
        filterButton.setAttribute("aria-pressed", String(isActive));
      });

      const reorderedProjects = [...projects].sort((projectA, projectB) => {
        const aMatches =
          selectedSkill === "all" ||
          projectA.dataset.projectSkills.split(" ").includes(selectedSkill);
        const bMatches =
          selectedSkill === "all" ||
          projectB.dataset.projectSkills.split(" ").includes(selectedSkill);

        if (aMatches !== bMatches) return aMatches ? -1 : 1;
        return Number(projectA.dataset.defaultOrder) -
          Number(projectB.dataset.defaultOrder);
      });

      projectList.replaceChildren(...reorderedProjects);

      if (projectFilterStatus) {
        if (selectedSkill === "all") {
          projectFilterStatus.textContent = "Newest projects first.";
        } else {
          const matchCount = projects.filter(
            (project) =>
              project.dataset.projectSkills.split(" ").includes(selectedSkill)
          ).length;
          projectFilterStatus.textContent =
            matchCount +
            " " +
            selectedLabel +
            " project" +
            (matchCount === 1 ? "" : "s") +
            " shown first. All projects remain visible.";
        }
      }
    });
  });
}
