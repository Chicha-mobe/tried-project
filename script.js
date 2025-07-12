// Плавное появление
document.addEventListener("DOMContentLoaded", () => {
  const fadeElements = document.querySelectorAll(".fade-in");
  fadeElements.forEach((el, index) => {
    el.style.animationDelay = `${0.4 + index * 0.2}s`;
  });

  // Геолокация
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      () => console.log("Геолокация разрешена."),
      () => console.log("Геолокация отклонена или недоступна.")
    );
  }
  
  // Печатающий эффект
  const text = "Добро пожаловать в проект по созданию приложений!";
  const typeTarget = document.getElementById("typewriter");
  let i = 0;
  const type = () => {
    if (i < text.length) {
      typeTarget.textContent += text.charAt(i);
      i++;
      setTimeout(type, 70);
    }
  };
  setTimeout(type, 600);
});

// Смена темы
function toggleTheme() {
  document.body.classList.toggle("dark");
}
