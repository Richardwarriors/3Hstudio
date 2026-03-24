(function () {
  var STORAGE_KEYS = {
    users: "3h-community-users",
    currentUser: "3h-community-current-user"
  };

  var COPY = {
    zh: {
      loginRequired: "请输入 Username 和 Password。",
      signupRequired: "请完整填写 Username、昵称、邮箱、身份、城市和密码信息。",
      invalidEmail: "请输入有效的邮箱地址。",
      passwordShort: "密码至少需要 8 位。",
      passwordMismatch: "两次输入的密码不一致。",
      usernameTaken: "这个 Username 已被使用，请更换一个。",
      emailTaken: "这个邮箱已经注册过，请直接登录。",
      loginInvalid: "账号或密码不正确，请重新输入。",
      loginSuccess: "已登录成功。",
      signupSuccess: "注册成功，当前设备已自动登录。",
      logoutSuccess: "已退出当前账号。"
    },
    en: {
      loginRequired: "Please enter both your username and password.",
      signupRequired: "Please complete your username, display name, email, role, city, and password.",
      invalidEmail: "Please enter a valid email address.",
      passwordShort: "Your password must be at least 8 characters.",
      passwordMismatch: "The two password entries do not match.",
      usernameTaken: "This username is already in use. Please choose another one.",
      emailTaken: "This email is already registered. Please log in instead.",
      loginInvalid: "The username or password is incorrect.",
      loginSuccess: "Logged in successfully.",
      signupSuccess: "Sign up complete. This device is now logged in.",
      logoutSuccess: "You have been logged out."
    }
  };

  function initAuth(root) {
    var locale = root.dataset.locale === "en" ? "en" : "zh";
    var copy = COPY[locale];
    var actions = root.querySelector("[data-auth-actions]");
    var session = root.querySelector("[data-auth-session]");
    var sessionName = root.querySelector("[data-auth-name]");
    var openButtons = root.querySelectorAll("[data-auth-open]");
    var logoutButton = root.querySelector("[data-auth-logout]");
    var modal = root.querySelector("[data-auth-modal]");
    var backdrop = root.querySelector("[data-auth-backdrop]");
    var closeButton = root.querySelector("[data-auth-close]");
    var tabs = root.querySelectorAll("[data-auth-tab]");
    var panes = root.querySelectorAll("[data-auth-pane]");
    var loginForm = root.querySelector("[data-login-form]");
    var signupForm = root.querySelector("[data-signup-form]");
    var loginStatus = root.querySelector("[data-login-status]");
    var signupStatus = root.querySelector("[data-signup-status]");
    var currentUser = loadCurrentUser();

    function setStatus(target, value) {
      if (target) {
        target.textContent = value;
      }
    }

    function clearStatuses() {
      setStatus(loginStatus, "");
      setStatus(signupStatus, "");
    }

    function setTab(name) {
      tabs.forEach(function (tab) {
        tab.classList.toggle("is-active", tab.dataset.authTab === name);
      });

      panes.forEach(function (pane) {
        pane.hidden = pane.dataset.authPane !== name;
      });
    }

    function openModal(name) {
      clearStatuses();
      setTab(name === "signup" ? "signup" : "login");
      modal.hidden = false;
      backdrop.hidden = false;
      root.classList.add("is-open");
      document.body.style.overflow = "hidden";
    }

    function closeModal() {
      modal.hidden = true;
      backdrop.hidden = true;
      root.classList.remove("is-open");
      document.body.style.overflow = "";
    }

    function updateSession() {
      currentUser = loadCurrentUser();

      if (currentUser) {
        actions.hidden = true;
        session.hidden = false;
        sessionName.textContent = currentUser.name || currentUser.username || currentUser.email || "3H Member";
      } else {
        actions.hidden = false;
        session.hidden = true;
        sessionName.textContent = "";
      }
    }

    openButtons.forEach(function (button) {
      button.addEventListener("click", function () {
        openModal(button.dataset.authOpen);
      });
    });

    tabs.forEach(function (tab) {
      tab.addEventListener("click", function () {
        setTab(tab.dataset.authTab);
      });
    });

    closeButton.addEventListener("click", closeModal);
    backdrop.addEventListener("click", closeModal);

    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape" && !modal.hidden) {
        closeModal();
      }
    });

    logoutButton.addEventListener("click", function () {
      localStorage.removeItem(STORAGE_KEYS.currentUser);
      updateSession();
      clearStatuses();
      setStatus(loginStatus, copy.logoutSuccess);
      openModal("login");
    });

    loginForm.addEventListener("submit", async function (event) {
      var identifier;
      var password;
      var users;
      var user;
      var passwordHash;

      event.preventDefault();
      identifier = loginForm.querySelector("[data-login-identifier]").value.trim();
      password = loginForm.querySelector("[data-login-password]").value;

      if (!identifier || !password) {
        setStatus(loginStatus, copy.loginRequired);
        return;
      }

      users = normalizeUsers(loadStoredJson(STORAGE_KEYS.users, []));
      user = findUserForLogin(users, identifier);

      if (!user) {
        setStatus(loginStatus, copy.loginInvalid);
        return;
      }

      passwordHash = await hashSecret(password);

      if (!user.passwordHash || user.passwordHash !== passwordHash) {
        setStatus(loginStatus, copy.loginInvalid);
        return;
      }

      saveStoredJson(STORAGE_KEYS.currentUser, getPublicUser(user));
      updateSession();
      setStatus(loginStatus, copy.loginSuccess);
      loginForm.reset();
      window.setTimeout(closeModal, 220);
    });

    signupForm.addEventListener("submit", async function (event) {
      var username;
      var name;
      var email;
      var role;
      var city;
      var password;
      var confirmPassword;
      var users;
      var passwordHash;
      var user;

      event.preventDefault();
      username = signupForm.querySelector("[data-signup-username]").value.trim();
      name = signupForm.querySelector("[data-signup-name]").value.trim();
      email = signupForm.querySelector("[data-signup-email]").value.trim();
      role = signupForm.querySelector("[data-signup-role]").value;
      city = signupForm.querySelector("[data-signup-city]").value.trim();
      password = signupForm.querySelector("[data-signup-password]").value;
      confirmPassword = signupForm.querySelector("[data-signup-confirm]").value;

      if (!username || !name || !email || !role || !city || !password || !confirmPassword) {
        setStatus(signupStatus, copy.signupRequired);
        return;
      }

      if (!isValidEmail(email)) {
        setStatus(signupStatus, copy.invalidEmail);
        return;
      }

      if (password.length < 8) {
        setStatus(signupStatus, copy.passwordShort);
        return;
      }

      if (password !== confirmPassword) {
        setStatus(signupStatus, copy.passwordMismatch);
        return;
      }

      users = normalizeUsers(loadStoredJson(STORAGE_KEYS.users, []));

      if (findUserByUsername(users, username)) {
        setStatus(signupStatus, copy.usernameTaken);
        return;
      }

      if (findUserByEmail(users, email)) {
        setStatus(signupStatus, copy.emailTaken);
        return;
      }

      passwordHash = await hashSecret(password);
      user = normalizeUserRecord({
        id: createId("user"),
        username: username,
        name: name,
        email: email,
        role: role,
        city: city,
        passwordHash: passwordHash,
        createdAt: Date.now(),
        updatedAt: Date.now()
      });

      users = upsertUser(users, user);
      saveStoredJson(STORAGE_KEYS.users, users);
      saveStoredJson(STORAGE_KEYS.currentUser, getPublicUser(user));
      updateSession();
      setStatus(signupStatus, copy.signupSuccess);
      signupForm.reset();
      window.setTimeout(closeModal, 220);
    });

    updateSession();

    if (!currentUser && window.location.hash === "#site-auth") {
      openModal("signup");
    }
  }

  function loadStoredJson(key, fallback) {
    try {
      var raw = localStorage.getItem(key);
      return raw ? JSON.parse(raw) : fallback;
    } catch (error) {
      return fallback;
    }
  }

  function saveStoredJson(key, value) {
    try {
      localStorage.setItem(key, JSON.stringify(value));
      return true;
    } catch (error) {
      return false;
    }
  }

  function loadCurrentUser() {
    return normalizeCurrentUser(loadStoredJson(STORAGE_KEYS.currentUser, null));
  }

  function normalizeUsers(users) {
    return ensureArray(users).map(normalizeUserRecord);
  }

  function normalizeCurrentUser(user) {
    return user ? getPublicUser(normalizeUserRecord(user)) : null;
  }

  function normalizeUserRecord(user) {
    var normalized = Object.assign({}, user || {});

    normalized.id = String(normalized.id || createId("user"));
    normalized.username = String(normalized.username || "").trim();
    normalized.name = String(normalized.name || "").trim();
    normalized.role = normalized.role === "photographer" ? "photographer" : "user";
    normalized.city = String(normalized.city || "").trim();
    normalized.email = String(normalized.email || "").trim();
    normalized.passwordHash = String(normalized.passwordHash || "");
    normalized.createdAt = Number(normalized.createdAt) || Date.now();
    normalized.updatedAt = Number(normalized.updatedAt) || normalized.createdAt;

    return normalized;
  }

  function getPublicUser(user) {
    var normalized = normalizeUserRecord(user);

    return {
      id: normalized.id,
      username: normalized.username,
      name: normalized.name,
      role: normalized.role,
      city: normalized.city,
      email: normalized.email,
      createdAt: normalized.createdAt,
      updatedAt: normalized.updatedAt
    };
  }

  function upsertUser(users, nextUser) {
    var normalizedNextUser = normalizeUserRecord(nextUser);
    var replaced = false;
    var nextUsers = ensureArray(users).map(function (user) {
      var normalizedUser = normalizeUserRecord(user);

      if (normalizedUser.id === normalizedNextUser.id) {
        replaced = true;
        return normalizedNextUser;
      }

      return normalizedUser;
    });

    if (!replaced) {
      nextUsers.push(normalizedNextUser);
    }

    return dedupeUsers(nextUsers);
  }

  function dedupeUsers(users) {
    var seen = new Map();

    ensureArray(users).forEach(function (user) {
      var normalizedUser = normalizeUserRecord(user);
      seen.set(normalizedUser.id, normalizedUser);
    });

    return Array.from(seen.values());
  }

  function findUserForLogin(users, identifier) {
    var normalizedIdentifier = normalizeValue(identifier);

    return ensureArray(users).find(function (user) {
      return normalizeValue(user.username) === normalizedIdentifier
        || normalizeValue(user.email) === normalizedIdentifier
        || normalizeValue(user.name) === normalizedIdentifier;
    }) || null;
  }

  function findUserByUsername(users, username) {
    var normalizedUsername = normalizeValue(username);

    return ensureArray(users).find(function (user) {
      return normalizeValue(user.username) === normalizedUsername;
    }) || null;
  }

  function findUserByEmail(users, email) {
    var normalizedEmail = normalizeValue(email);

    return ensureArray(users).find(function (user) {
      return normalizeValue(user.email) === normalizedEmail;
    }) || null;
  }

  function normalizeValue(value) {
    return String(value || "").trim().toLowerCase();
  }

  function isValidEmail(value) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(value || "").trim());
  }

  async function hashSecret(value) {
    var text = String(value || "");

    if (window.crypto && window.crypto.subtle && window.TextEncoder) {
      try {
        var buffer = await window.crypto.subtle.digest("SHA-256", new TextEncoder().encode(text));
        return "sha256:" + bufferToHex(buffer);
      } catch (error) {
        return "plain:" + text;
      }
    }

    return "plain:" + text;
  }

  function bufferToHex(buffer) {
    return Array.from(new Uint8Array(buffer)).map(function (item) {
      return item.toString(16).padStart(2, "0");
    }).join("");
  }

  function createId(prefix) {
    return prefix + "-" + Date.now().toString(36) + "-" + Math.random().toString(36).slice(2, 8);
  }

  function ensureArray(value) {
    return Array.isArray(value) ? value : [];
  }

  document.querySelectorAll("[data-site-auth]").forEach(initAuth);
})();
