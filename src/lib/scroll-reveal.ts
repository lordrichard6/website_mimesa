export function initScrollReveal() {
  if (typeof window === "undefined") return () => {};

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
  );

  function observeAll() {
    document
      .querySelectorAll(".reveal:not(.visible)")
      .forEach((el) => observer.observe(el));
  }

  observeAll();

  const mutation = new MutationObserver(() => {
    observeAll();
  });
  mutation.observe(document.body, { childList: true, subtree: true });

  return () => {
    observer.disconnect();
    mutation.disconnect();
  };
}
