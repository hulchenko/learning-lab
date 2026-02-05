type DateStyle = "long" | "full" | "medium" | "short" | undefined;

const locale = navigator.language;

export function formatDate(isoString: string, style: DateStyle = "medium") {
  const date = new Date(isoString);
  const intlDateFormat = new Intl.DateTimeFormat(locale, { dateStyle: style });
  return intlDateFormat.format(date);
}
