export function size(value: number, raw?: boolean) {
  return !raw ? `${value * 4}px` : value * 4
}
