export function formatDateRange(date?: string): string | undefined {
  return date?.replace(' - ', ' — ');
}
