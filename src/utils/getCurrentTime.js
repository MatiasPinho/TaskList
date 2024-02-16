export function getCurrentTimeFormatted() {
  const now = new Date();
  console.log(now);
  const daysOfWeek = ["Dom", "Lun", "Mar", "Mie", "Jue", "Vie", "Sab"];
  const months = ["Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ago", "Set", "Oct", "Nov", "Dic"];
  const day = daysOfWeek[now.getDay()];
  const month = months[now.getMonth()];
  return `${day}, ${month} ${now.getDate()}`;
}
