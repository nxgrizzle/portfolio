export default function useOffsetFromTop(
  el,
  pos = document.body.getBoundingClientRect()
) {
  if (el != null) {
    const elRect = el.getBoundingClientRect();
    const offsetTop = elRect.top - pos.top;
    return offsetTop;
  } else {
    return;
  }
}
