export default function useElementDimensions(el) {
  if (el != null) return [el.offsetHeight, el.offsetWidth];
}
