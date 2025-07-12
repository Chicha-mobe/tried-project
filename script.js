document.addEventListener("DOMContentLoaded", () => {
  // Плавное появление fade-in элементов при скролле
  const fadeElements = document.querySelectorAll(".fade-in");
  const options = {
    threshold: 0.2,
  };
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if(entry.isIntersecting) {
        entry.target.style.animationPlayState = "running";
        entry.target.classList.add('visible');
      }
    });
  }, options);
  fadeElements.forEach(el => {
    el.style.animationPlayState = "paused";
    observer.observe(el);
  });

  // Геолокация
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      () => console.log("Геолокация разрешена."),
      () => console.log("Геолокация отклонена или недоступна.")
    );
  }

  // Печатающий эффект в приветственной секции
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

  // Меню гамбургер
  const hamburger = document.getElementById("hamburger");
  const navMenu = document.getElementById("nav-menu");

  hamburger.addEventListener("click", () => {
    navMenu.classList.toggle("active");
  });

  // Закрывать меню при клике по ссылке (для мобильных)
  document.querySelectorAll(".nav-link").forEach(link => {
    link.addEventListener("click", () => {
      if (navMenu.classList.contains("active")) {
        navMenu.classList.remove("active");
      }
    });
  });

  // Смена темы и смена иконок
  const themeToggle = document.getElementById("theme-toggle");
  const iconSun = document.getElementById("icon-sun");
  const iconMoon = document.getElementById("icon-moon");

  // Проверка сохранённой темы в localStorage
  const savedTheme = localStorage.getItem("theme");
  if(savedTheme === "dark") {
    document.body.classList.add("dark");
    iconSun.style.display = "block";
    iconMoon.style.display = "none";
  } else {
    iconSun.style.display = "none";
    iconMoon.style.display = "block";
  }

  themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    const isDark = document.body.classList.contains("dark");
    if(isDark) {
      iconSun.style.display = "block";
      iconMoon.style.display = "none";
      localStorage.setItem("theme", "dark");
    } else {
      iconSun.style.display = "none";
      iconMoon.style.display = "block";
      localStorage.setItem("theme", "light");
    }
  });
});
