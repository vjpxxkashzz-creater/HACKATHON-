/* ==========================================
   CYBER SECURITY HUB
   Frontend-only GitHub Pages version
========================================== */


/* ==========================================
   INTRO / MATRIX
========================================== */

const intro = document.getElementById("intro");
const app = document.getElementById("app");
const canvas = document.getElementById("matrix");
const ctx = canvas.getContext("2d");

let matrixWidth;
let matrixHeight;
let drops = [];

function resizeCanvas() {
  matrixWidth = canvas.width = window.innerWidth;
  matrixHeight = canvas.height = window.innerHeight;

  const columns = Math.floor(matrixWidth / 16);
  drops = Array(columns).fill(1);
}

function drawMatrix() {

  ctx.fillStyle = "rgba(1,3,2,0.08)";
  ctx.fillRect(0, 0, matrixWidth, matrixHeight);

  ctx.fillStyle = "#5cff94";
  ctx.font = "14px monospace";

  const chars = "01ABCDEFGHIJKLMNOPQRSTUVWXYZ<>/{}[]";

  for (let i = 0; i < drops.length; i++) {

    const char =
      chars[Math.floor(Math.random() * chars.length)];

    ctx.fillText(
      char,
      i * 16,
      drops[i] * 16
    );

    if (
      drops[i] * 16 > matrixHeight &&
      Math.random() > 0.975
    ) {
      drops[i] = 0;
    }

    drops[i]++;
  }
}

resizeCanvas();
window.addEventListener("resize", resizeCanvas);

setInterval(drawMatrix, 45);


/* ==========================================
   BOOT ANIMATION
========================================== */

const bootLines = [
  "CORE SYSTEM ........ ONLINE",
  "SECURITY ENGINE .... INITIALIZING",
  "VISUAL SYSTEM ...... LOADING",
  "NETWORK STATUS ..... CONNECTING",
  "CYBER INTERFACE .... READY"
];

const bootContainer =
  document.getElementById("bootLines");

bootLines.forEach((text, index) => {

  const div = document.createElement("div");

  div.textContent = text;

  div.style.animationDelay =
    `${1.9 + index * 0.45}s`;

  bootContainer.appendChild(div);
});


const loadingBar =
  document.getElementById("loadingBar");

const percent =
  document.getElementById("percent");

let progress = 0;

const loader = setInterval(() => {

  progress++;

  loadingBar.style.width = `${progress}%`;
  percent.textContent = `${progress}%`;

  if (progress >= 100) {

    clearInterval(loader);

    setTimeout(() => {

      intro.classList.add("hide");
      app.classList.add("show");

    }, 900);
  }

}, 45);


/* ==========================================
   NAVIGATION
========================================== */

const navButtons =
  document.querySelectorAll(".nav");

const pages =
  document.querySelectorAll(".page");

function showPage(pageId) {

  pages.forEach(page => {
    page.classList.remove("active");
  });

  navButtons.forEach(button => {
    button.classList.remove("active");
  });

  const page =
    document.getElementById(pageId);

  const button =
    document.querySelector(
      `.nav[data-page="${pageId}"]`
    );

  if (page) {
    page.classList.add("active");
  }

  if (button) {
    button.classList.add("active");
  }

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });

  document.getElementById("navigation")
    .classList.remove("open");
}

document.addEventListener("click", event => {

  const target =
    event.target.closest("[data-page]");

  if (!target) return;

  showPage(target.dataset.page);
});


/* ==========================================
   MOBILE MENU
========================================== */

const menuButton =
  document.getElementById("menuButton");

const navigation =
  document.getElementById("navigation");

menuButton.addEventListener("click", () => {

  navigation.classList.toggle("open");

});


/* ==========================================
   TOPICS
========================================== */

const topics = [

  [
    "Instagram Account Restrictions & Recovery",
    "◎",
    "Understand official recovery and account-safety basics.",
    [
      "Use official recovery channels.",
      "Keep recovery information current.",
      "Avoid suspicious third-party services."
    ]
  ],

  [
    "Instagram Ban Prevention & Safety",
    "◎",
    "Learn responsible account-safety habits.",
    [
      "Follow platform rules.",
      "Avoid suspicious automation.",
      "Secure your account."
    ]
  ],

  [
    "Facebook Account Restrictions & Recovery",
    "f",
    "Explore safe recovery and reporting practices.",
    [
      "Use official support options.",
      "Protect your login.",
      "Review account notifications."
    ]
  ],

  [
    "Facebook Restriction Prevention",
    "f",
    "Build safer habits around platform rules.",
    [
      "Review community guidelines.",
      "Avoid suspicious links.",
      "Enable security features."
    ]
  ],

  [
    "WhatsApp Account Restrictions & Recovery",
    "◉",
    "Learn legitimate recovery and account protection.",
    [
      "Use official support.",
      "Never share verification codes.",
      "Enable available security features."
    ]
  ],

  [
    "Phishing Awareness",
    "✉",
    "Recognize suspicious messages and fake login pages.",
    [
      "Check the sender.",
      "Inspect links carefully.",
      "Never enter credentials into suspicious pages."
    ]
  ],

  [
    "Strong Passwords",
    "⌁",
    "Understand the importance of unique passwords.",
    [
      "Use unique passwords.",
      "Prefer long passwords.",
      "Never share passwords."
    ]
  ],

  [
    "Two-Factor Authentication",
    "⌘",
    "Learn how an additional verification layer helps.",
    [
      "Enable 2FA where available.",
      "Protect recovery methods.",
      "Never share verification codes."
    ]
  ],

  [
    "Fake Links & Malicious Websites",
    "⚠",
    "Identify misleading URLs and unsafe websites.",
    [
      "Check the domain.",
      "Avoid unknown downloads.",
      "Use trusted websites."
    ]
  ],

  [
    "Account Recovery Safety",
    "↻",
    "Keep account recovery options protected.",
    [
      "Use trusted recovery methods.",
      "Keep email secure.",
      "Review recovery settings."
    ]
  ],

  [
    "Privacy Settings",
    "◈",
    "Understand how privacy controls protect information.",
    [
      "Review privacy settings.",
      "Limit unnecessary public information.",
      "Check connected apps."
    ]
  ],

  [
    "Scam Detection",
    "!",
    "Recognize common digital scam patterns.",
    [
      "Be cautious with urgent requests.",
      "Verify unexpected claims.",
      "Never send money to unknown contacts."
    ]
  ],

  [
    "Session & Login Security",
    "▣",
    "Learn why active sessions matter.",
    [
      "Review logged-in devices.",
      "Sign out of unknown sessions.",
      "Protect your main email."
    ]
  ],

  [
    "Device Security",
    "▤",
    "Build safer habits on phones and computers.",
    [
      "Keep software updated.",
      "Use device locks.",
      "Install trusted applications."
    ]
  ],

  [
    "Social Engineering Awareness",
    "◇",
    "Understand manipulation-based online scams.",
    [
      "Pause before responding.",
      "Verify unusual requests.",
      "Do not reveal private information."
    ]
  ],

  [
    "Suspicious Applications",
    "▥",
    "Learn how to evaluate apps before installing.",
    [
      "Use trusted app stores.",
      "Check permissions.",
      "Remove apps you no longer trust."
    ]
  ],

  [
    "Safe Browsing",
    "⌂",
    "Develop safer everyday browsing habits.",
    [
      "Use secure websites.",
      "Avoid unknown downloads.",
      "Keep your browser updated."
    ]
  ],

  [
    "Reporting Online Abuse",
    "⚑",
    "Learn responsible ways to report harmful content.",
    [
      "Use platform reporting tools.",
      "Save relevant evidence safely.",
      "Contact trusted adults when needed."
    ]
  ],

  [
    "Personal Data Protection",
    "◆",
    "Reduce unnecessary exposure of personal information.",
    [
      "Share less publicly.",
      "Review app permissions.",
      "Think before posting."
    ]
  ],

  [
    "Cyber Hygiene",
    "✓",
    "Create consistent everyday security habits.",
    [
      "Update software.",
      "Use strong passwords.",
      "Review account security regularly."
    ]
  ]

];

const topicGrid =
  document.getElementById("topicGrid");

topics.forEach((topic, index) => {

  const card = document.createElement("article");

  card.className = "topic";

  card.innerHTML = `
    <div class="topic-number">
      ${String(index + 1).padStart(2, "0")} //
    </div>

    <div class="topic-icon">
      ${topic[1]}
    </div>

    <h4>${topic[0]}</h4>

    <p>${topic[2]}</p>

    <button
      class="explore"
      data-topic="${index}">
      EXPLORE →
    </button>
  `;

  topicGrid.appendChild(card);

});


/* ==========================================
   TOPIC MODAL
========================================== */

const modal =
  document.getElementById("modal");

const modalIcon =
  document.getElementById("modalIcon");

const modalNumber =
  document.getElementById("modalNumber");

const modalTitle =
  document.getElementById("modalTitle");

const modalDescription =
  document.getElementById("modalDescription");

const modalTips =
  document.getElementById("modalTips");

document.addEventListener("click", event => {

  const button =
    event.target.closest(".explore");

  if (!button) return;

  const index =
    Number(button.dataset.topic);

  const topic = topics[index];

  modalIcon.textContent = topic[1];

  modalNumber.textContent =
    `TOPIC ${String(index + 1).padStart(2, "0")}`;

  modalTitle.textContent = topic[0];

  modalDescription.textContent = topic[2];

  modalTips.innerHTML = "";

  topic[3].forEach(tip => {

    const li =
      document.createElement("li");

    li.textContent = tip;

    modalTips.appendChild(li);

  });

  modal.classList.add("show");

});


document.getElementById("closeModal")
  .addEventListener("click", closeModal);

document.querySelector(".modal-bg")
  .addEventListener("click", closeModal);

function closeModal() {
  modal.classList.remove("show");
}


/* ==========================================
   TERMINAL
========================================== */

const terminal =
  document.getElementById("terminal");

const terminalLines = [
  "SYSTEM ONLINE",
  "SECURITY ENGINE ACTIVE",
  "ANALYZING ENVIRONMENT...",
  "SECURITY CHECK COMPLETE",
  "PROTECTION MODE ENABLED",
  "READY FOR USER INPUT"
];

terminalLines.forEach((line, index) => {

  setTimeout(() => {

    const div =
      document.createElement("div");

    div.className = "terminal-line";

    div.innerHTML =
      `<span class="prompt">&gt;</span> ${line}`;

    terminal.appendChild(div);

  }, index * 550);

});


/* ==========================================
   REGISTER FORM
========================================== */

let selectedAction = "";
let selectedPlatform = "";

const actionButtons =
  document.querySelectorAll(".choice");

const platformButtons =
  document.querySelectorAll(".platform");

actionButtons.forEach(button => {

  button.addEventListener("click", () => {

    actionButtons.forEach(b =>
      b.classList.remove("selected")
    );

    button.classList.add("selected");

    selectedAction =
      button.dataset.action;
  });

});


platformButtons.forEach(button => {

  button.addEventListener("click", () => {

    platformButtons.forEach(b =>
      b.classList.remove("selected")
    );

    button.classList.add("selected");

    selectedPlatform =
      button.dataset.platform;
  });

});


document.getElementById("robot")
  .addEventListener("change", event => {

    const verification =
      document.getElementById("verification");

    verification.textContent =
      event.target.checked
        ? "✓ VERIFICATION COMPLETE"
        : "";

  });


/* ==========================================
   LOCAL HISTORY
========================================== */

const STORAGE_KEY =
  "cyberSecurityHubRequests";

function getRequests() {

  try {

    return JSON.parse(
      localStorage.getItem(STORAGE_KEY)
    ) || [];

  } catch {

    return [];

  }
}

function saveRequests(requests) {

  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify(requests)
  );

}


function generateRequestId() {

  const requests = getRequests();

  return "REQ-" +
    String(requests.length + 1)
      .padStart(5, "0");

}


/* ==========================================
   FORM SUBMIT
========================================== */

const form =
  document.getElementById("registerForm");

form.addEventListener("submit", event => {

  event.preventDefault();

  const name =
    document.getElementById("name")
      .value.trim();

  const age =
    document.getElementById("age")
      .value.trim();

  const reference =
    document.getElementById("reference")
      .value.trim();

  const robot =
    document.getElementById("robot")
      .checked;

  const message =
    document.getElementById("formMessage");

  message.textContent = "";


  if (!name) {
    message.textContent = "ENTER YOUR NAME";
    return;
  }

  if (!age || Number(age) < 1) {
    message.textContent = "ENTER A VALID AGE";
    return;
  }

  if (!selectedAction) {
    message.textContent = "SELECT BAN OR UNBAN";
    return;
  }

  if (!selectedPlatform) {
    message.textContent = "SELECT A PLATFORM";
    return;
  }

  if (!reference) {
    message.textContent = "ENTER REFERENCE ID";
    return;
  }

  if (!robot) {
    message.textContent = "COMPLETE VERIFICATION";
    return;
  }


  const submit =
    form.querySelector(".submit");

  submit.disabled = true;

  submit.textContent =
    "VALIDATING REQUEST...";


  setTimeout(() => {

    submit.textContent =
      "CREATING DEMO TICKET...";

  }, 700);


  setTimeout(() => {

    const requests = getRequests();

    const request = {

      id: generateRequestId(),

      name: name,

      age: Number(age),

      action: selectedAction,

      platform: selectedPlatform,

      reference: reference,

      date: new Date().toISOString(),

      status: "PENDING"

    };

    requests.unshift(request);

    saveRequests(requests);

    form.reset();

    selectedAction = "";
    selectedPlatform = "";

    actionButtons.forEach(b =>
      b.classList.remove("selected")
    );

    platformButtons.forEach(b =>
      b.classList.remove("selected")
    );

    document.getElementById("verification")
      .textContent = "";

    submit.disabled = false;

    submit.textContent =
      "SUBMIT REQUEST ↗";

    message.style.color =
      "#5cff94";

    message.textContent =
      `REQUEST REGISTERED — ${request.id}`;

    showToast(
      `NEW REQUEST ${request.id}`
    );

    renderHistory();

  }, 1500);

});


/* ==========================================
   HISTORY
========================================== */

const historyList =
  document.getElementById("historyList");

const search =
  document.getElementById("search");

const platformFilter =
  document.getElementById("platformFilter");

const actionFilter =
  document.getElementById("actionFilter");


function renderHistory() {

  const requests = getRequests();

  const query =
    search.value.toLowerCase();

  const platform =
    platformFilter.value;

  const action =
    actionFilter.value;


  const filtered =
    requests.filter(request => {

      const matchesSearch =
        request.name.toLowerCase()
          .includes(query) ||
        request.id.toLowerCase()
          .includes(query) ||
        request.reference.toLowerCase()
          .includes(query) ||
        request.platform.toLowerCase()
          .includes(query);

      const matchesPlatform =
        platform === "ALL" ||
        request.platform === platform;

      const matchesAction =
        action === "ALL" ||
        request.action === action;

      return (
        matchesSearch &&
        matchesPlatform &&
        matchesAction
      );

    });


  if (!filtered.length) {

    historyList.innerHTML = `
      <div class="empty">
        NO REQUESTS FOUND
      </div>
    `;

    return;
  }


  historyList.innerHTML = filtered
    .map(request => {

      const date =
        new Date(request.date);

      return `
        <article class="history-item">

          <div class="request-id">
            ${request.id}
          </div>

          <div>

            <h4>
              ${escapeHTML(request.name)}
            </h4>

            <div class="meta">

              <span class="pill">
                AGE ${request.age}
              </span>

              <span class="pill">
                ${request.action}
              </span>

              <span class="pill">
                ${request.platform}
              </span>

              <span class="pill">
                ${escapeHTML(request.reference)}
              </span>

              <span class="pill">
                ${date.toLocaleString()}
              </span>

            </div>

          </div>

          <div class="reviewed">
            ${request.status}
          </div>

        </article>
      `;

    })
    .join("");

}


search.addEventListener(
  "input",
  renderHistory
);

platformFilter.addEventListener(
  "change",
  renderHistory
);

actionFilter.addEventListener(
  "change",
  renderHistory
);


document.getElementById("clearHistory")
  .addEventListener("click", () => {

    if (!getRequests().length) return;

    const confirmed =
      confirm("Clear all local history?");

    if (!confirmed) return;

    localStorage.removeItem(STORAGE_KEY);

    renderHistory();

    showToast("HISTORY CLEARED");

  });


/* ==========================================
   SECURITY HELPER
========================================== */

function escapeHTML(value) {

  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");

}


/* ==========================================
   TOAST
========================================== */

let toastTimer;

function showToast(message) {

  const toast =
    document.getElementById("toast");

  toast.textContent = message;

  toast.classList.add("show");

  clearTimeout(toastTimer);

  toastTimer =
    setTimeout(() => {

      toast.classList.remove("show");

    }, 2500);

}


/* ==========================================
   EXPLORE BUTTON
========================================== */

document.getElementById("exploreBtn")
  .addEventListener("click", () => {

    document.getElementById("topics")
      .scrollIntoView({
        behavior: "smooth"
      });

  });


/* ==========================================
   INITIAL HISTORY
========================================== */

renderHistory();
