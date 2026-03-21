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

  function openCard(card) {
    closeAll(card);
    card.classList.add("is-flipped");
  }

  cards.forEach(function (card) {
    const frontFace = card.querySelector(".service-face-front");

    if (frontFace) {
      frontFace.addEventListener("click", function (event) {
        if (event.target.closest("a, button")) {
          return;
        }

        openCard(card);
      });
    }

    card.querySelectorAll("[data-flip-open]").forEach(function (button) {
      button.addEventListener("click", function (event) {
        event.preventDefault();
        event.stopPropagation();
        openCard(card);
      });
    });

    card.querySelectorAll("[data-flip-close]").forEach(function (button) {
      button.addEventListener("click", function (event) {
        event.preventDefault();
        event.stopPropagation();
        card.classList.remove("is-flipped");
      });
    });

    card.querySelectorAll(".service-enter-link").forEach(function (link) {
      link.addEventListener("click", function (event) {
        event.stopPropagation();
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
