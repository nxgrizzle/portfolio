import useOffsetFromTop from "./useOffsetFromTop";
import useElementDimensions from "./useElementDimensions";
export default function useIsScrollWithinElement(scrollPosition, el) {
  const offset = useOffsetFromTop(el);
  const dimensions = useElementDimensions(el);
  const height = dimensions ? dimensions[0] : undefined;
  if (el == null) return;
  const withinBoundaries =
    scrollPosition >= offset && scrollPosition <= offset + height;
  return withinBoundaries;
}
