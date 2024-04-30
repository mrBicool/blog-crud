export function useSleep<T>(ms: number) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}
