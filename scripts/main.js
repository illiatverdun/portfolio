// Live local time in header: [data-clock] -> "Wed" + "10:11 PM"
const day = document.querySelector("[data-clock-day]");
const time = document.querySelector("[data-clock-time]");
const tz = document.documentElement.dataset.timezone || "Europe/Kyiv";

function tick() {
  const now = new Date();
  if (day) day.textContent = now.toLocaleDateString("en-US", { weekday: "short", timeZone: tz });
  if (time) time.textContent = now.toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit", timeZone: tz });
}
tick();
setInterval(tick, 30_000);

// Copy email buttons: <button class="copy-btn" data-copy="hey@site.com">
document.querySelectorAll("[data-copy]").forEach((btn) => {
  btn.addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText(btn.dataset.copy);
    } catch {
      return;
    }
    btn.setAttribute("data-copied", "");
    setTimeout(() => btn.removeAttribute("data-copied"), 1500);
  });
});
