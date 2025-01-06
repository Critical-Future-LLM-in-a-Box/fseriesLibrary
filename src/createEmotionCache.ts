import createCache from "@emotion/cache";

const createEmotionCache = () => {
  const insertionPoint =
    typeof document !== "undefined"
      ? document.querySelector('meta[name="emotion-insertion-point"]')
      : null;
  return createCache({
    key: "fseries-isolated",
    prepend: true,
    insertionPoint: insertionPoint as HTMLElement | undefined
  });
};

export default createEmotionCache;
