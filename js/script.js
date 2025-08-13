document.addEventListener("DOMContentLoaded", function () {
  const container = document.getElementById("petals-container");
  createPetals(container, 12);

  function createPetals(container, count) {
    for (let i = 0; i < count; i++) {
      setTimeout(() => {
        createPetal(container);
      }, i * 1000);
    }
  }

  function createPetal(container) {
    const petal = document.createElement("div");
    petal.className = "petal";

    const size = 16 + Math.random() * 10;
    petal.style.width = ${size}px;
    petal.style.height = ${size * 1.1}px;
    petal.style.borderRadius = `${50 + Math.random() * 30}% ${
      30 + Math.random() * 40
    }%`;

    petal.style.left = ${Math.random() * 100}%;
    petal.style.top = -${size}px;
    petal.style.setProperty("--random-x", Math.random());

    const duration = 15 + Math.random() * 15;
    petal.style.animationDuration = ${duration}s;
    petal.style.animationDelay = ${Math.random() * 3}s;

    container.appendChild(petal);

    setTimeout(() => {
      petal.remove();
      createPetal(container);
    }, duration * 1000);
  }
});