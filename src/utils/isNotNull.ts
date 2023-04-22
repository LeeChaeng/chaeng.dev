export function isNotNull<T>(val: T | undefined | null): val is T {
  return val != null;
}
