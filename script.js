// Плавное появление блоков
document.addEventListener("DOMContentLoaded", () => {
  const fadeElements = document.querySelectorAll('.fade-in');
  fadeElements.forEach((el, i) => {
    el.style.animationDelay = `${0.5 + i * 0.3}s`;
    el.classList.add('visible');
  });

  // Запрос разрешения устройства
  if (navigator.permissions) {
    navigator.permissions.query({ name: 'geolocation' }).then(result => {
      console.log('Разрешение на геолокацию:', result.state);
    });
  } else {
    console.warn('Permissions API не поддерживается');
  }
});
