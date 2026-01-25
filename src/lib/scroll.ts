type ScrollOptions = {
  behavior?: ScrollBehavior;
  updateHash?: boolean;
};

export const SECTION_IDS = [
  "home",
  "about",
  "projects",
  "experience",
  "skills",
  "education",
  "contact",
] as const;

export const scrollToSection = (
  sectionId: string,
  { behavior = "smooth", updateHash = true }: ScrollOptions = {},
) => {
  const target = document.getElementById(sectionId);
  if (!target) {
    return;
  }

  target.scrollIntoView({ behavior, block: "start" });

  if (updateHash) {
    window.history.pushState(null, "", `#${sectionId}`);
  }
};
