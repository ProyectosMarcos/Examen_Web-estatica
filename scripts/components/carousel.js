export function carousel() {
  const radios = document.querySelectorAll('input[name="slider"]');
  const container = document.querySelector('.carousel__container');

  radios.forEach((radio, index) => {
    radio.addEventListener('change', () => {
      const percent = index * -100;
      container.style.transform = `translateX(${percent}%)`;
    });
  });

  let currentIndex = 0;

  const nextSlide = () => {
    currentIndex = (currentIndex + 1) % radios.length;
    radios[currentIndex].checked = true;
    const percent = currentIndex * -100;
    container.style.transform = `translateX(${percent}%)`;
  };

  let interval = setInterval(nextSlide, 10000);

  radios.forEach((radio, index) => {
    radio.addEventListener('change', () => {
      currentIndex = index;
      clearInterval(interval);
      interval = setInterval(nextSlide, 3000);
    });
  });
}
