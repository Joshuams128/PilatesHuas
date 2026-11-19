// Last day of the current month in studio time (e.g. "November 30"),
// used for limited-time packages that run until month end.
export function endOfMonthLabel(): string {
  const [y, m] = new Intl.DateTimeFormat("en-CA", {
    timeZone: "America/Toronto",
    year: "numeric",
    month: "numeric",
  })
    .format(new Date())
    .split("-")
    .map(Number);
  const last = new Date(Date.UTC(y, m, 0, 12));
  return last.toLocaleDateString("en-CA", { timeZone: "UTC", month: "long", day: "numeric" });
}
