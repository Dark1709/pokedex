import { ref, onMounted, onUnmounted } from "vue";

export default function useNearScreen({
  distance = "100px",
  externalRef,
  once = true,
} = {}) {
  const isNearScreen = ref(false);
  const fromRef = ref(null);
  let observer;

  const onChange = (entries, observer) => {
    const el = entries[0];
    if (el.isIntersecting) {
      isNearScreen.value = true;
      once && observer.disconnect();
    } else {
      !once && (isNearScreen.value = false);
    }
  };

  onMounted(() => {
    const element = externalRef ? externalRef.value : fromRef.value;

    Promise.resolve(
      typeof IntersectionObserver !== "undefined"
        ? IntersectionObserver
        : import("intersection-observer")
    ).then(() => {
      observer = new IntersectionObserver(onChange, {
        rootMargin: distance,
      });

      if (element) observer.observe(element);
    });
  });

  onUnmounted(() => {
    observer && observer.disconnect();
  });

  return { isNearScreen, fromRef };
}
