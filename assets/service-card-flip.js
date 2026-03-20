(function () {
  const cards = Array.from(document.querySelectorAll("[data-flip-card]"));

  if (!cards.length) {
    return;
  }

  function closeAll(exceptCard) {
    cards.forEach(function (card) {
      if (card !== exceptCard) {
        card.classList.remove("is-flipped");
      }
    });
  }

  cards.forEach(function (card) {
    card.querySelectorAll("[data-flip-open]").forEach(function (button) {
      button.addEventListener("click", function (event) {
        event.preventDefault();
        closeAll(card);
        card.classList.add("is-flipped");
      });
    });

    card.querySelectorAll("[data-flip-close]").forEach(function (button) {
      button.addEventListener("click", function (event) {
        event.preventDefault();
        card.classList.remove("is-flipped");
      });
    });
  });

  document.addEventListener("click", function (event) {
    if (!event.target.closest("[data-flip-card]")) {
      closeAll();
    }
  });

  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
      closeAll();
    }
  });
})();
