(function () {
  var messages = {
    zh: {
      incomplete: "请先完整填写 User ID、Subject 和 Content。",
      opening: "正在打开你的邮箱应用..."
    },
    en: {
      incomplete: "Please complete User ID, Subject, and Content first.",
      opening: "Opening your email app..."
    }
  };

  document.querySelectorAll("[data-mailto-form]").forEach(function (form) {
    if (form.dataset.mailtoReady === "true") {
      return;
    }

    form.dataset.mailtoReady = "true";

    var locale = form.dataset.locale === "en" ? "en" : "zh";
    var recipient = form.dataset.recipient || "p41197954@gmail.com";
    var userIdInput = form.querySelector("[data-mailto-userid]");
    var subjectInput = form.querySelector("[data-mailto-subject]");
    var contentInput = form.querySelector("[data-mailto-content]");
    var status = form.querySelector("[data-mailto-status]");

    if (!userIdInput || !subjectInput || !contentInput || !status) {
      return;
    }

    form.addEventListener("submit", function (event) {
      var userId;
      var subject;
      var content;
      var body;

      event.preventDefault();

      userId = userIdInput.value.trim();
      subject = subjectInput.value.trim();
      content = contentInput.value.trim();

      if (!userId || !subject || !content) {
        status.textContent = messages[locale].incomplete;
        return;
      }

      body = "User ID: " + userId + "\n\nContent:\n" + content;
      status.textContent = messages[locale].opening;

      window.location.href = "mailto:" + recipient
        + "?subject=" + encodeURIComponent(subject)
        + "&body=" + encodeURIComponent(body);
    });
  });
})();
