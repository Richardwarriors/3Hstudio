(function () {
  const STRINGS = {
    zh: {
      launcher: "客户咨询",
      kicker: "双通道客服",
      title: "3H 客服助手",
      subtitle: "支持 AI 顾问与人工协助两种方式，先回答客户常见问题，再引导进入正式跟进。",
      connected: "Qwen 兼容接口已连接",
      pending: "Qwen3 接口待接入",
      badge: "服务模式可切换",
      botTab: "AI 顾问",
      humanTab: "人工协助",
      quickPrompts: ["我想了解预约流程", "毕业纪念拍摄怎么预约", "品牌写真大概怎么收费"],
      welcomeConnected: "你好，我是 3H-Studio 的 AI 顾问，可以先帮你解答预约、价格、档期和服务类型的问题。",
      welcomePending: "你好，我是 3H-Studio 的智能客服原型。目前页面已经预留 Qwen3 接口，正式接入前我会先用站内规则回答常见问题。",
      inputPlaceholder: "输入你的问题，例如：我想预约毕业拍摄，下周在纽约有档期吗？",
      send: "发送",
      noteConnected: "当前将请求发送到你配置的 OpenAI 兼容模型接口。",
      notePending: "等你部署 Qwen3 服务后，只需要补上接口地址和模型名即可切换为真实对话。",
      typing: "正在整理回复",
      errorReply: "当前模型接口暂时不可用，我先建议你切换到人工协助，或留下城市、时间、拍摄类型和预算范围。",
      humanTitle: "人工协助入口",
      humanIntro: "适合复杂需求、商务合作、加急沟通，或你希望由团队继续一对一跟进。",
      humanCardTitle: "推荐人工跟进方式",
      humanCardText: "你可以直接发送邮件，或者先进入预约页提交基础信息，再由平台团队继续联系你。",
      humanEmail: "发送邮件",
      humanBooking: "进入预约页",
      humanContact: "联系页面",
      formTitle: "整理给人工客服的需求",
      formIntro: "把基本信息补充完整后，可以一键复制给团队成员，或直接生成邮件内容。",
      nameLabel: "你的称呼",
      namePlaceholder: "例如：王同学 / Emma",
      contactLabel: "联系方式",
      contactPlaceholder: "邮箱 / 微信 / 手机",
      requestLabel: "需求说明",
      requestPlaceholder: "请写下城市、时间、拍摄类型、人数、预算范围和你想要的风格。",
      copyRequest: "复制需求",
      copySuccess: "需求模板已复制，可以直接发给人工客服。",
      copyFailed: "复制失败了，可以先手动复制文本内容。",
      mailButton: "生成邮件",
      fallbackBooking: "如果你已经明确拍摄类型和日期，建议直接进入预约页，平台会更快跟进。",
      fallbackHuman: "如果你希望人工协助，可以切换到“人工协助”标签页，留下需求后再联系团队。"
    },
    en: {
      launcher: "Customer Support",
      kicker: "Two Support Modes",
      title: "3H Support Assistant",
      subtitle: "Offer both AI guidance and human follow-up so visitors can get help before entering the booking flow.",
      connected: "Qwen-compatible endpoint connected",
      pending: "Qwen3 endpoint pending",
      badge: "AI and human support",
      botTab: "AI Assistant",
      humanTab: "Human Help",
      quickPrompts: ["How does booking work?", "How do I book a graduation session?", "How is pricing handled for brand portraits?"],
      welcomeConnected: "Hi, I'm the 3H-Studio AI assistant. I can help with booking flow, pricing questions, availability, and service categories.",
      welcomePending: "Hi, I'm the 3H-Studio support prototype. The widget is already prepared for a Qwen3-style endpoint, and for now I can answer common questions with built-in guidance.",
      inputPlaceholder: "Ask a question, for example: I want a graduation shoot in New York next week. Is that available?",
      send: "Send",
      noteConnected: "Requests are currently sent to the configured OpenAI-compatible model endpoint.",
      notePending: "After you deploy a Qwen3 service, you only need to fill in the endpoint and model name to enable real AI replies.",
      typing: "Preparing a reply",
      errorReply: "The model endpoint is not available right now. I recommend switching to human support or sharing your city, timing, shoot type, and budget range.",
      humanTitle: "Human support options",
      humanIntro: "Best for complex requests, brand partnerships, urgent support, or when you want one-to-one follow-up from the team.",
      humanCardTitle: "Recommended next steps",
      humanCardText: "You can send an email directly, or go to the booking page first so the platform team can continue the follow-up with more context.",
      humanEmail: "Send Email",
      humanBooking: "Open Booking",
      humanContact: "Contact Page",
      formTitle: "Prepare a handoff for human support",
      formIntro: "Complete the basic details below, then copy them for your team or open an email draft with the information included.",
      nameLabel: "Name",
      namePlaceholder: "e.g. Emma / Alex",
      contactLabel: "Contact",
      contactPlaceholder: "Email / WhatsApp / phone",
      requestLabel: "Request details",
      requestPlaceholder: "Share the city, timing, shoot type, group size, budget range, and desired style.",
      copyRequest: "Copy Request",
      copySuccess: "The support handoff has been copied and is ready to send.",
      copyFailed: "Copy failed. You can still copy the text manually.",
      mailButton: "Create Email",
      fallbackBooking: "If your shoot type and dates are already clear, going straight to the booking page will speed things up.",
      fallbackHuman: "If you prefer human support, switch to the human tab and share your request there."
    }
  };

  const SYSTEM_PROMPTS = {
    zh: "你是 3H-Studio 的客户服务助理。请用简洁、友好、专业的中文回答，优先帮助用户理解拍摄类型、预约流程、价格沟通、城市与档期安排、品牌合作、摄影师入驻等问题。如果用户需求涉及正式确认、支付、复杂商务合作或无法明确判断，请建议切换到人工协助，并提醒对方提供城市、时间、拍摄类型、人数、预算和风格偏好。",
    en: "You are the customer support assistant for 3H-Studio. Reply in concise, friendly, professional English. Prioritize helping users understand service types, booking flow, pricing discussions, cities and scheduling, brand partnerships, and photographer onboarding. If the request needs formal confirmation, payment handling, complex business follow-up, or cannot be confidently resolved, suggest switching to human support and ask for city, timing, shoot type, group size, budget, and style preferences."
  };

  function initWidget(root) {
    const locale = root.dataset.locale === "en" ? "en" : "zh";
    const copy = STRINGS[locale];
    const apiEndpoint = (root.dataset.apiEndpoint || "").trim();
    const apiModel = (root.dataset.apiModel || "").trim() || "qwen3";
    const apiKey = (root.dataset.apiKey || "").trim();
    const bookingUrl = root.dataset.bookingUrl || "booking.html";
    const contactUrl = root.dataset.contactUrl || "contact.html";
    const email = root.dataset.email || "p41197954@gmail.com";
    const siteName = root.dataset.siteName || "3H-Studio";

    const state = {
      open: false,
      mode: "bot",
      connected: Boolean(apiEndpoint),
      history: []
    };

    root.classList.add("customer-support-shell");
    root.innerHTML = [
      '<button class="support-launcher" type="button" aria-expanded="false"></button>',
      '<section class="support-widget" hidden>',
      '  <header class="support-header">',
      '    <div class="support-header-row">',
      "      <div>",
      '        <span class="support-kicker"></span>',
      '        <h2 class="support-title"></h2>',
      '        <p class="support-subtitle"></p>',
      "      </div>",
      '      <button class="support-close" type="button" aria-label="Close">×</button>',
      "    </div>",
      '    <div class="support-status-row">',
      '      <span class="support-status"></span>',
      '      <span class="support-badge"></span>',
      "    </div>",
      "  </header>",
      '  <div class="support-mode-row" role="tablist">',
      '    <button class="support-mode-button is-active" type="button" data-mode="bot"></button>',
      '    <button class="support-mode-button" type="button" data-mode="human"></button>',
      "  </div>",
      '  <div class="support-body">',
      '    <section class="support-panel support-panel-bot">',
      '      <div class="support-messages" aria-live="polite"></div>',
      '      <div class="support-quick-grid"></div>',
      '      <form class="support-input-form">',
      '        <textarea class="support-input" rows="3"></textarea>',
      '        <div class="support-form-row">',
      '          <p class="support-note"></p>',
      '          <button class="support-send" type="submit"></button>',
      "        </div>",
      "      </form>",
      "    </section>",
      '    <section class="support-panel support-panel-human" hidden>',
      '      <div class="support-human-stack">',
      '        <article class="support-human-card">',
      '          <h4 class="support-human-title"></h4>',
      '          <p class="support-human-intro"></p>',
      '          <div class="support-human-actions">',
      '            <a class="support-cta support-human-email" href="#"></a>',
      '            <a class="support-secondary support-human-booking" href="#"></a>',
      '            <a class="support-secondary support-human-contact" href="#"></a>',
      "          </div>",
      "        </article>",
      '        <article class="support-human-form">',
      '          <h4 class="support-human-form-title"></h4>',
      '          <p class="support-human-form-intro"></p>',
      '          <div class="support-human-grid">',
      '            <div class="support-human-field">',
      '              <label class="support-human-name-label"></label>',
      '              <input class="support-human-input support-human-name" type="text" />',
      "            </div>",
      '            <div class="support-human-field">',
      '              <label class="support-human-contact-label"></label>',
      '              <input class="support-human-input support-human-contact-input" type="text" />',
      "            </div>",
      '            <div class="support-human-field">',
      '              <label class="support-human-request-label"></label>',
      '              <textarea class="support-human-textarea support-human-request"></textarea>',
      "            </div>",
      "          </div>",
      '          <div class="support-human-actions">',
      '            <button class="support-copy-button" type="button"></button>',
      '            <button class="support-secondary support-mail-button" type="button"></button>',
      "          </div>",
      '          <div class="support-copy-feedback" aria-live="polite"></div>',
      "        </article>",
      "      </div>",
      "    </section>",
      "  </div>",
      "</section>"
    ].join("");

    const launcher = root.querySelector(".support-launcher");
    const widget = root.querySelector(".support-widget");
    const closeButton = root.querySelector(".support-close");
    const status = root.querySelector(".support-status");
    const badge = root.querySelector(".support-badge");
    const botButton = root.querySelector('[data-mode="bot"]');
    const humanButton = root.querySelector('[data-mode="human"]');
    const botPanel = root.querySelector(".support-panel-bot");
    const humanPanel = root.querySelector(".support-panel-human");
    const messages = root.querySelector(".support-messages");
    const quickGrid = root.querySelector(".support-quick-grid");
    const input = root.querySelector(".support-input");
    const sendButton = root.querySelector(".support-send");
    const inputForm = root.querySelector(".support-input-form");
    const inputNote = root.querySelector(".support-note");

    const humanEmailLink = root.querySelector(".support-human-email");
    const humanBookingLink = root.querySelector(".support-human-booking");
    const humanContactLink = root.querySelector(".support-human-contact");
    const humanName = root.querySelector(".support-human-name");
    const humanContact = root.querySelector(".support-human-contact-input");
    const humanRequest = root.querySelector(".support-human-request");
    const copyButton = root.querySelector(".support-copy-button");
    const mailButton = root.querySelector(".support-mail-button");
    const copyFeedback = root.querySelector(".support-copy-feedback");

    root.querySelector(".support-kicker").textContent = copy.kicker;
    root.querySelector(".support-title").textContent = copy.title;
    root.querySelector(".support-subtitle").textContent = copy.subtitle;
    launcher.textContent = copy.launcher;
    badge.textContent = copy.badge;
    botButton.textContent = copy.botTab;
    humanButton.textContent = copy.humanTab;
    input.placeholder = copy.inputPlaceholder;
    sendButton.textContent = copy.send;
    inputNote.textContent = state.connected ? copy.noteConnected : copy.notePending;

    status.textContent = state.connected ? copy.connected : copy.pending;
    status.classList.toggle("is-pending", !state.connected);

    root.querySelector(".support-human-title").textContent = copy.humanTitle;
    root.querySelector(".support-human-intro").textContent = copy.humanIntro;
    humanEmailLink.textContent = copy.humanEmail;
    humanEmailLink.href = "mailto:" + email;
    humanBookingLink.textContent = copy.humanBooking;
    humanContactLink.textContent = copy.humanContact;
    humanBookingLink.href = bookingUrl;
    humanContactLink.href = contactUrl;
    root.querySelector(".support-human-form-title").textContent = copy.formTitle;
    root.querySelector(".support-human-form-intro").textContent = copy.formIntro;
    root.querySelector(".support-human-name-label").textContent = copy.nameLabel;
    root.querySelector(".support-human-contact-label").textContent = copy.contactLabel;
    root.querySelector(".support-human-request-label").textContent = copy.requestLabel;
    humanName.placeholder = copy.namePlaceholder;
    humanContact.placeholder = copy.contactPlaceholder;
    humanRequest.placeholder = copy.requestPlaceholder;
    copyButton.textContent = copy.copyRequest;
    mailButton.textContent = copy.mailButton;

    const initialMessage = state.connected ? copy.welcomeConnected : copy.welcomePending;
    appendMessage("assistant", initialMessage);

    copy.quickPrompts.forEach(function (prompt) {
      const button = document.createElement("button");
      button.type = "button";
      button.className = "support-quick-button";
      button.textContent = prompt;
      button.addEventListener("click", function () {
        input.value = prompt;
        input.focus();
      });
      quickGrid.appendChild(button);
    });

    launcher.addEventListener("click", function () {
      state.open = !state.open;
      widget.hidden = !state.open;
      launcher.setAttribute("aria-expanded", String(state.open));
      if (state.open) {
        input.focus();
      }
    });

    closeButton.addEventListener("click", function () {
      state.open = false;
      widget.hidden = true;
      launcher.setAttribute("aria-expanded", "false");
    });

    botButton.addEventListener("click", function () {
      state.mode = "bot";
      updateMode();
    });

    humanButton.addEventListener("click", function () {
      state.mode = "human";
      updateMode();
    });

    inputForm.addEventListener("submit", async function (event) {
      event.preventDefault();
      const text = input.value.trim();
      if (!text) {
        input.focus();
        return;
      }

      input.value = "";
      appendMessage("user", text);
      setLoading(true);

      try {
        const reply = state.connected
          ? await requestModelReply({
              apiEndpoint: apiEndpoint,
              apiModel: apiModel,
              apiKey: apiKey,
              locale: locale,
              siteName: siteName,
              history: state.history,
              userMessage: text
            })
          : getFallbackReply(text, locale, copy);

        appendMessage("assistant", reply);
        state.history.push({ role: "user", content: text });
        state.history.push({ role: "assistant", content: reply });
        state.history = state.history.slice(-12);
      } catch (error) {
        appendMessage("assistant", copy.errorReply);
      } finally {
        setLoading(false);
      }
    });

    copyButton.addEventListener("click", async function () {
      const draft = buildHumanDraft({
        locale: locale,
        name: humanName.value.trim(),
        contact: humanContact.value.trim(),
        request: humanRequest.value.trim()
      });

      try {
        await navigator.clipboard.writeText(draft);
        copyFeedback.textContent = copy.copySuccess;
      } catch (error) {
        copyFeedback.textContent = copy.copyFailed;
      }
    });

    mailButton.addEventListener("click", function () {
      const subject = locale === "en" ? "3H-Studio Human Support Request" : "3H-Studio 人工客服需求";
      const draft = buildHumanDraft({
        locale: locale,
        name: humanName.value.trim(),
        contact: humanContact.value.trim(),
        request: humanRequest.value.trim()
      });

      window.location.href = "mailto:" + email + "?subject=" + encodeURIComponent(subject) + "&body=" + encodeURIComponent(draft);
    });

    humanEmailLink.addEventListener("click", function (event) {
      event.preventDefault();
      mailButton.click();
    });

    function updateMode() {
      const isBot = state.mode === "bot";
      botPanel.hidden = !isBot;
      humanPanel.hidden = isBot;
      botButton.classList.toggle("is-active", isBot);
      humanButton.classList.toggle("is-active", !isBot);
    }

    function appendMessage(role, text) {
      const message = document.createElement("div");
      message.className = "support-message " + (role === "user" ? "is-user" : "is-assistant");
      message.textContent = text;
      messages.appendChild(message);
      messages.scrollTop = messages.scrollHeight;
    }

    function setLoading(isLoading) {
      sendButton.disabled = isLoading;
      const typing = messages.querySelector(".support-message.is-typing");
      if (isLoading) {
        const typingBubble = document.createElement("div");
        typingBubble.className = "support-message is-assistant is-typing";
        typingBubble.setAttribute("aria-label", copy.typing);
        typingBubble.innerHTML = '<span class="support-dot"></span><span class="support-dot"></span><span class="support-dot"></span>';
        messages.appendChild(typingBubble);
        messages.scrollTop = messages.scrollHeight;
      } else if (typing) {
        typing.remove();
      }
    }
  }

  function buildHumanDraft(payload) {
    if (payload.locale === "en") {
      return [
        "3H-Studio human support request",
        "Name: " + (payload.name || "Not provided"),
        "Contact: " + (payload.contact || "Not provided"),
        "Request: " + (payload.request || "Not provided")
      ].join("\n");
    }

    return [
      "3H-Studio 人工客服需求",
      "称呼：" + (payload.name || "未填写"),
      "联系方式：" + (payload.contact || "未填写"),
      "需求说明：" + (payload.request || "未填写")
    ].join("\n");
  }

  function getFallbackReply(text, locale, copy) {
    const source = text.toLowerCase();

    if (/(价格|报价|收费|多少钱|price|pricing|quote|cost)/.test(source)) {
      return locale === "en"
        ? "Pricing depends on the service type, city, duration, and deliverables. Graduation, travel, and brand sessions each have different starting packages. " + copy.fallbackBooking
        : "费用会根据拍摄类型、城市、时长和交付内容不同而变化。毕业纪念、旅拍和品牌写真都有不同的起始方案。 " + copy.fallbackBooking;
    }

    if (/(预约|档期|时间|book|booking|availability|schedule)/.test(source)) {
      return locale === "en"
        ? "To check availability, please share the city, preferred date, and shoot type first. " + copy.fallbackBooking
        : "想确认档期的话，建议先告诉我们城市、期望日期和拍摄类型。 " + copy.fallbackBooking;
    }

    if (/(毕业|graduation)/.test(source)) {
      return locale === "en"
        ? "Graduation sessions are ideal for individuals, friends, and small groups. It helps to share your campus, date range, and whether you need family add-ons."
        : "毕业纪念拍摄适合个人、好友和小团队预约。你可以先告诉我们学校、时间范围，以及是否需要家庭合影等加项。";
    }

    if (/(旅拍|城市|travel|destination|city)/.test(source)) {
      return locale === "en"
        ? "Travel and destination sessions work well for city walks, outdoor stories, and destination portraits. It helps to share the city, route ideas, and preferred time slot."
        : "旅拍与目的地影像更适合城市漫游、户外叙事和目的地写真。你可以先提供城市、路线想法和偏好时段。";
    }

    if (/(品牌|写真|brand|portrait|creative|editorial)/.test(source)) {
      return locale === "en"
        ? "Brand portraits and creative sessions are best when you can describe the purpose, visual direction, and where the images will be used."
        : "品牌形象与创意写真更适合先明确用途、视觉方向和发布场景，这样平台更容易匹配合适的摄影师。";
    }

    if (/(人工|真人|联系|客服|human|agent|contact)/.test(source)) {
      return locale === "en" ? copy.fallbackHuman : copy.fallbackHuman;
    }

    return locale === "en"
      ? "I can help with booking flow, pricing logic, service types, and next steps. If you tell me your city, timing, and shoot category, I can guide you more precisely."
      : "我可以先帮助你梳理预约流程、价格逻辑、服务类型和下一步建议。你只要告诉我城市、时间和拍摄场景，我就能继续帮你整理。";
  }

  async function requestModelReply(payload) {
    const headers = {
      "Content-Type": "application/json"
    };

    if (payload.apiKey) {
      headers.Authorization = "Bearer " + payload.apiKey;
    }

    const messages = [
      {
        role: "system",
        content: SYSTEM_PROMPTS[payload.locale]
      }
    ].concat(payload.history.slice(-8)).concat([
      {
        role: "user",
        content: payload.userMessage
      }
    ]);

    const response = await fetch(payload.apiEndpoint, {
      method: "POST",
      headers: headers,
      body: JSON.stringify({
        model: payload.apiModel,
        messages: messages,
        temperature: 0.6,
        stream: false
      })
    });

    if (!response.ok) {
      throw new Error("Model request failed");
    }

    const data = await response.json();
    const content = data && data.choices && data.choices[0] && data.choices[0].message && data.choices[0].message.content;

    if (!content) {
      throw new Error("Empty model response");
    }

    return String(content).trim();
  }

  document.querySelectorAll("[data-customer-support]").forEach(initWidget);
})();
