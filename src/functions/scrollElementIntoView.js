export default function scrollElementIntoView(el) {
  el.scrollIntoView({ behavior: "smooth", block: "start" });
  return;
}
