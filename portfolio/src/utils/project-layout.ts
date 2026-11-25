// A full-width selection starts at the beginning of its existing grid row.
// The other cards in that row follow beneath it in their original order.
export function projectCardOrder(index: number, expandedIndex: number, columns: number) {
  if (expandedIndex < 0) return index;
  const rowStart = Math.floor(expandedIndex / columns) * columns;
  if (index === expandedIndex) return rowStart;
  if (index >= rowStart && index < expandedIndex) return index + 1;
  return index;
}
