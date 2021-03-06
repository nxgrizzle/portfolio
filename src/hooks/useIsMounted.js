export default function useIsMounted() {
  const mountedRef = useRef(false);
  useEffect(() => {
    mountedRef.current = true;
    return () => (mountedRef.current = false);
  });
  return () => mountedRef.current;
}
