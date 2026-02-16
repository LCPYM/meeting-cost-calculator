// ==================== 翻譯資料 ====================
const translations = {
    zh: {
        'title': '會議成本計算機',
        'subtitle': '即時追蹤會議花費',
        'label-attendees': '參與人數',
        'label-hourly-rate': '平均時薪',
        'label-duration': '預估時長（分鐘）',
        'label-currency': '貨幣',
        'estimate-title': '預估會議成本',
        'per-minute': '每分鐘：',
        'btn-start': '開始計時',
        'timer-label': '會議進行中...',
        'timer-label-stopped': '會議已結束',
        'timer-label-paused': '已暫停',
        'btn-stop': '結束會議',
        'btn-pause': '暫停',
        'btn-resume': '繼續',
        'btn-share': '下載圖片',
        'btn-export-csv': '匯出 CSV',
        'btn-copy-link': '複製分享連結',
        'btn-qr-code': '顯示 QR Code',
        'btn-reset': '新會議',
        'bmc-text': '好用？請我喝杯咖啡吧',
        'footer-tip': '💡 小提示：減少會議時間或人數可顯著節省成本',
        'shortcuts': '快捷鍵：空白鍵 = 開始/暫停 | Esc = 重置 | F = 全螢幕',
        'minutes': '分鐘',
        'seconds': '秒',
        'people': '人',
        'btn-fullscreen': '全螢幕模式',
        'exit-fullscreen-hint': '按 ESC 退出全螢幕',
        'info-attendees': '{count} 位參與者',
        'info-rate': '{currency}{rate}/小時 平均',
        'share-title': '會議成本報告',
        'share-saving': '透過高效會議，我們節省了寶貴的時間和金錢！',
        'cost-warning': '會議成本已超過 {currency}500！',
        'qr-title': '掃描載入這些設定',
        'btn-close': '關閉',
        'template-title': '會議模板',
        'btn-save-template': '儲存為模板',
        'template-empty': '還沒有模板，儲存第一個吧！',
        'btn-save': '儲存',
        'btn-cancel': '取消',
        'btn-load': '載入',
        'btn-delete': '刪除',
        'template-saved': '模板已儲存！',
        'template-loaded': '模板已載入！',
        'template-deleted': '模板已刪除！',
        'budget-enable': '啟用預算提醒',
        'budget-target': '目標預算',
        'budget-exceeded': '⚠️ 預算已超支！',
        'budget-remaining': '剩餘',
        'budget-over': '超支',
        'budget-progress': '已使用預算',
        'history-title': '會議歷史',
        'btn-clear-history': '清除全部',
        'history-empty': '還沒有會議記錄',
        'history-total': '總會議數',
        'history-total-cost': '總成本',
        'history-avg-duration': '平均時長',
        'history-cleared': '歷史記錄已清除！',
        'history-confirm-clear': '確定要清除所有會議歷史嗎？',
        'minutes-short': '分鐘'
    },
    en: {
        'title': 'Meeting Cost Calculator',
        'subtitle': 'See how much this meeting is costing',
        'label-attendees': 'Number of Attendees',
        'label-hourly-rate': 'Average Hourly Rate',
        'label-duration': 'Estimated Duration (minutes)',
        'label-currency': 'Currency',
        'estimate-title': 'Estimated Meeting Cost',
        'per-minute': 'Per Minute: ',
        'btn-start': 'Start Meeting Timer',
        'timer-label': 'Meeting in Progress...',
        'timer-label-stopped': 'Meeting Ended',
        'timer-label-paused': 'Paused',
        'btn-stop': 'End Meeting',
        'btn-pause': 'Pause',
        'btn-resume': 'Resume',
        'btn-share': 'Download Image',
        'btn-export-csv': 'Export CSV',
        'btn-copy-link': 'Copy Share Link',
        'btn-qr-code': 'Show QR Code',
        'btn-reset': 'New Meeting',
        'bmc-text': 'Buy Me a Coffee',
        'footer-tip': '💡 Tip: Reduce meeting time or attendees to save significantly',
        'shortcuts': 'Shortcuts: Space = Start/Pause | Esc = Reset | F = Fullscreen',
        'minutes': 'min',
        'seconds': 'sec',
        'people': 'people',
        'btn-fullscreen': 'Full Screen Mode',
        'exit-fullscreen-hint': 'Press ESC to exit fullscreen',
        'info-attendees': '{count} attendees',
        'info-rate': '{currency}{rate}/hr avg',
        'share-title': 'Meeting Cost Report',
        'share-saving': 'Through efficient meetings, we saved valuable time and money!',
        'cost-warning': 'Meeting cost exceeded {currency}500!',
        'qr-title': 'Scan to load these settings',
        'btn-close': 'Close',
        'template-title': 'Meeting Templates',
        'btn-save-template': 'Save as Template',
        'template-empty': 'No templates yet. Save your first one!',
        'btn-save': 'Save',
        'btn-cancel': 'Cancel',
        'btn-load': 'Load',
        'btn-delete': 'Delete',
        'template-saved': 'Template saved!',
        'template-loaded': 'Template loaded!',
        'template-deleted': 'Template deleted!',
        'budget-enable': 'Enable Budget Alert',
        'budget-target': 'Target Budget',
        'budget-exceeded': '⚠️ Budget Exceeded!',
        'budget-remaining': 'Remaining',
        'budget-over': 'Over',
        'budget-progress': 'Budget Used',
        'history-title': 'Meeting History',
        'btn-clear-history': 'Clear All',
        'history-empty': 'No meeting records yet',
        'history-total': 'Total Meetings',
        'history-total-cost': 'Total Cost',
        'history-avg-duration': 'Avg Duration',
        'history-cleared': 'History cleared!',
        'history-confirm-clear': 'Clear all meeting history?',
        'minutes-short': 'min'
    }
};

// ==================== 貨幣符號 ====================
const currencySymbols = {
    'HKD': 'HK$',
    'USD': '$',
    'EUR': '€',
    'GBP': '£',
    'CNY': '¥',
    'JPY': '¥'
};

// ==================== 應用程式狀態管理 ====================
const app = {
    // 狀態變量
    state: {
        currentLang: 'en',
        currentCurrency: 'HKD',
        currentTheme: 'ocean',
        timerInterval: null,
        startTime: null,
        elapsedSeconds: 0,
        pausedTime: 0,
        pauseStartTime: 0,
        isPaused: false,
        hasShownWarning: false,
        isFullscreen: false,
        budgetExceededShown: false
    },

    // DOM 元素（延遲初始化）
    elements: {},

    // 初始化 DOM 元素
    initElements() {
        this.elements = {
            attendeesInput: document.getElementById('attendees'),
            hourlyRateInput: document.getElementById('hourly-rate'),
            durationInput: document.getElementById('duration'),
            currencySelect: document.getElementById('currency'),
            estimateCostEl: document.getElementById('estimate-cost'),
            perMinuteEl: document.getElementById('per-minute'),
            startButton: document.getElementById('start-button'),
            timerSection: document.getElementById('timer-section'),
            liveCostEl: document.getElementById('live-cost'),
            elapsedTimeEl: document.getElementById('elapsed-time'),
            stopButton: document.getElementById('stop-button'),
            pauseButton: document.getElementById('pause-button'),
            resetButton: document.getElementById('reset-button'),
            budgetEnabled: document.getElementById('budget-enabled'),
            budgetTarget: document.getElementById('budget-target'),
            budgetInputGroup: document.getElementById('budget-input-group'),
            fullscreenButton: document.getElementById('fullscreen-button'),
            meetingInfo: document.getElementById('meeting-info'),
            shareActions: document.getElementById('share-actions')
        };
    }
};

// ==================== 初始化 ====================
document.addEventListener('DOMContentLoaded', () => {
    app.initElements();
    initializeApp();
});

function initializeApp() {
    // 載入保存的設置
    loadSettings();

    // 初始化配色主題
    initThemeSelector();

    // 初始化語言切換
    initLanguageToggle();

    // 初始化深色模式
    initDarkMode();

    // 初始化輸入監聽
    initInputListeners();

    // 初始化按鈕事件
    initButtonEvents();

    // 初始化預算功能
    initBudget();

    // 初始化模板系統
    initTemplates();

    // 初始化歷史記錄
    initHistory();

    // 初始化快捷鍵
    initKeyboardShortcuts();

    // 初始化 URL 參數
    loadFromURL();

    // 初始計算
    calculateEstimate();
}

// ==================== 配色主題 ====================
function initThemeSelector() {
    const savedTheme = localStorage.getItem('colorTheme') || 'ocean';
    switchColorTheme(savedTheme);

    document.querySelectorAll('.theme-option').forEach(btn => {
        btn.addEventListener('click', () => {
            const theme = btn.getAttribute('data-theme');
            switchColorTheme(theme);
        });
    });
}

function switchColorTheme(theme) {
    app.state.currentTheme = theme;
    document.body.classList.remove('theme-ocean', 'theme-purple', 'theme-green');

    if (theme !== 'ocean') {
        document.body.classList.add(`theme-${theme}`);
    }

    document.querySelectorAll('.theme-option').forEach(btn => {
        btn.classList.toggle('active', btn.getAttribute('data-theme') === theme);
    });

    localStorage.setItem('colorTheme', theme);
}

// ==================== 語言切換 ====================
function initLanguageToggle() {
    const savedLang = localStorage.getItem('language') || 'en';
    switchLanguage(savedLang);

    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const lang = btn.getAttribute('data-lang');
            switchLanguage(lang);
        });
    });
}

function switchLanguage(lang) {
    app.state.currentLang = lang;

    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });

    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
    });

    updateCurrencyLabel();
    localStorage.setItem('language', lang);
}

function updateCurrencyLabel() {
    const label = document.querySelector('label[for="hourly-rate"]');
    const { currentLang, currentCurrency } = app.state;
    label.textContent = `${translations[currentLang]['label-hourly-rate']} (${currentCurrency})`;
}

// ==================== 深色模式 ====================
function initDarkMode() {
    const savedMode = localStorage.getItem('darkMode') === 'true';
    if (savedMode) {
        document.body.classList.add('dark-mode');
        updateThemeIcon(true);
    }

    document.getElementById('theme-toggle').addEventListener('click', toggleDarkMode);
}

function toggleDarkMode() {
    const isDark = document.body.classList.toggle('dark-mode');
    localStorage.setItem('darkMode', isDark);
    updateThemeIcon(isDark);
}

function updateThemeIcon(isDark) {
    const icon = document.querySelector('.theme-icon');
    icon.textContent = isDark ? '☀️' : '🌙';
}

// ==================== 輸入監聽 ====================
function initInputListeners() {
    const { attendeesInput, hourlyRateInput, durationInput, currencySelect } = app.elements;

    [attendeesInput, hourlyRateInput, durationInput].forEach(input => {
        input.addEventListener('input', calculateEstimate);
    });

    currencySelect.addEventListener('change', () => {
        app.state.currentCurrency = currencySelect.value;
        updateCurrencyLabel();
        calculateEstimate();
        saveSettings();
    });
}

// ==================== 計算預估成本 ====================
function calculateEstimate() {
    const { attendeesInput, hourlyRateInput, durationInput, estimateCostEl, perMinuteEl } = app.elements;
    const { currentCurrency } = app.state;

    const attendees = parseInt(attendeesInput.value) || 0;
    const hourlyRate = parseFloat(hourlyRateInput.value) || 0;
    const duration = parseInt(durationInput.value) || 0;
    const symbol = currencySymbols[currentCurrency];

    const costPerMinute = (attendees * hourlyRate) / 60;
    const totalCost = costPerMinute * duration;

    estimateCostEl.textContent = `${symbol}${totalCost.toFixed(2)}`;
    perMinuteEl.textContent = `${symbol}${costPerMinute.toFixed(2)}`;

    updateMeetingInfo();
    saveSettings();
}

function updateMeetingInfo() {
    const { attendeesInput, hourlyRateInput, meetingInfo } = app.elements;
    const { currentLang, currentCurrency } = app.state;

    const attendees = parseInt(attendeesInput.value) || 0;
    const hourlyRate = parseFloat(hourlyRateInput.value) || 0;
    const symbol = currencySymbols[currentCurrency];

    const infoText = `${translations[currentLang]['info-attendees'].replace('{count}', attendees)} • ${translations[currentLang]['info-rate'].replace('{currency}', symbol).replace('{rate}', hourlyRate)}`;

    meetingInfo.innerHTML = infoText;
}

// ==================== 按鈕事件 ====================
function initButtonEvents() {
    app.elements.startButton.addEventListener('click', startTimer);
    app.elements.stopButton.addEventListener('click', stopTimer);
    app.elements.pauseButton.addEventListener('click', togglePause);
    app.elements.resetButton.addEventListener('click', reset);
    app.elements.fullscreenButton.addEventListener('click', toggleFullscreen);

    // 分享按鈕
    document.getElementById('share-button').addEventListener('click', downloadImage);
    document.getElementById('export-csv-button').addEventListener('click', exportToCSV);
    document.getElementById('copy-link-button').addEventListener('click', copyShareLink);
    document.getElementById('qr-button').addEventListener('click', showQRCode);
}

// ==================== 計時器功能 ====================
function startTimer() {
    document.body.classList.add('meeting-active');
    document.body.classList.remove('meeting-ended');

    // 隱藏輸入區域
    document.querySelectorAll('.input-group').forEach(group => group.style.display = 'none');

    // 隱藏其他區塊
    ['.estimate-section', '.budget-section', '.template-section', '.support-section'].forEach(selector => {
        const element = document.querySelector(selector);
        if (element) element.style.display = 'none';
    });

    const historySection = document.getElementById('history-section');
    if (historySection) historySection.style.display = 'none';

    app.elements.startButton.style.display = 'none';
    app.elements.timerSection.classList.add('active');
    app.elements.pauseButton.style.display = 'flex';

    // 重置計時器狀態
    app.state.startTime = Date.now();
    app.state.elapsedSeconds = 0;
    app.state.pausedTime = 0;
    app.state.isPaused = false;
    app.state.hasShownWarning = false;
    app.state.budgetExceededShown = false;

    removeBudgetExceededBanner();
    updateMeetingInfo();

    app.state.timerInterval = setInterval(updateTimer, 100);
}

function updateTimer() {
    if (app.state.isPaused) return;

    const now = Date.now();
    app.state.elapsedSeconds = (now - app.state.startTime - app.state.pausedTime) / 1000;

    const { attendeesInput, hourlyRateInput, liveCostEl, elapsedTimeEl } = app.elements;
    const { currentCurrency } = app.state;

    const attendees = parseInt(attendeesInput.value) || 0;
    const hourlyRate = parseFloat(hourlyRateInput.value) || 0;
    const symbol = currencySymbols[currentCurrency];

    const costPerSecond = (attendees * hourlyRate) / 3600;
    const currentCost = costPerSecond * app.state.elapsedSeconds;

    liveCostEl.textContent = `${symbol}${currentCost.toFixed(2)}`;

    // 更新預算進度
    updateBudgetProgress(currentCost);

    // 檢查超支背景變色
    const budgetEnabled = app.elements.budgetEnabled.checked;
    const budgetTarget = parseFloat(app.elements.budgetTarget.value) || 0;

    if (budgetEnabled && budgetTarget > 0 && currentCost > budgetTarget) {
        document.body.classList.add('budget-exceeded');
    } else {
        document.body.classList.remove('budget-exceeded');
    }

    // 成本警告
    if (currentCost > 500 && !app.state.hasShownWarning) {
        showCostWarning();
        app.state.hasShownWarning = true;
    }

    // 更新時間顯示
    const minutes = Math.floor(app.state.elapsedSeconds / 60);
    const seconds = Math.floor(app.state.elapsedSeconds % 60);
    elapsedTimeEl.textContent = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}

function togglePause() {
    const { pauseButton } = app.elements;
    const { currentLang } = app.state;

    if (app.state.isPaused) {
        // 繼續
        app.state.isPaused = false;
        app.state.pausedTime += (Date.now() - app.state.pauseStartTime);
        pauseButton.classList.remove('paused');
        pauseButton.innerHTML = `<span>⏸</span><span data-i18n="btn-pause">${translations[currentLang]['btn-pause']}</span>`;

        document.querySelector('.timer-display').classList.remove('stopped');
        document.querySelector('[data-i18n="timer-label"]').textContent = translations[currentLang]['timer-label'];
    } else {
        // 暫停
        app.state.isPaused = true;
        app.state.pauseStartTime = Date.now();
        pauseButton.classList.add('paused');
        pauseButton.innerHTML = `<span>▶</span><span data-i18n="btn-resume">${translations[currentLang]['btn-resume']}</span>`;

        document.querySelector('.timer-display').classList.add('stopped');
        document.querySelector('[data-i18n="timer-label"]').textContent = translations[currentLang]['timer-label-paused'];
    }
}

function stopTimer() {
    clearInterval(app.state.timerInterval);

    document.body.classList.remove('meeting-active');
    document.body.classList.add('meeting-ended');

    const { attendeesInput, hourlyRateInput, liveCostEl, stopButton, pauseButton, shareActions, resetButton } = app.elements;
    const { currentCurrency, elapsedSeconds } = app.state;

    const attendees = parseInt(attendeesInput.value) || 0;
    const hourlyRate = parseFloat(hourlyRateInput.value) || 0;
    const symbol = currencySymbols[currentCurrency];

    const costPerSecond = (attendees * hourlyRate) / 3600;
    const finalCost = costPerSecond * elapsedSeconds;

    document.querySelector('.timer-display').classList.add('stopped');
    document.querySelector('.timer-display').classList.remove('alert');
    document.querySelector('.status-indicator').classList.remove('running');
    document.querySelector('.status-indicator').classList.add('stopped');
    document.querySelector('[data-i18n="timer-label"]').textContent = translations[app.state.currentLang]['timer-label-stopped'];

    liveCostEl.classList.add('final');
    liveCostEl.textContent = `${symbol}${finalCost.toFixed(2)}`;

    stopButton.style.display = 'none';
    pauseButton.style.display = 'none';
    shareActions.style.display = 'flex';
    resetButton.style.display = 'block';

    document.querySelector('.support-section').style.display = 'block';

    saveMeetingRecord();
}

function reset() {
    location.reload();
}

function showCostWarning() {
    const symbol = currencySymbols[app.state.currentCurrency];
    const warning = document.createElement('div');
    warning.className = 'cost-warning';
    warning.textContent = translations[app.state.currentLang]['cost-warning'].replace('{currency}', symbol);
    document.body.appendChild(warning);

    document.querySelector('.timer-display').classList.add('alert');

    setTimeout(() => {
        warning.style.animation = 'warningPulse 0.5s ease reverse';
        setTimeout(() => warning.remove(), 500);
    }, 2000);
}

// ==================== 預算功能 ====================
function initBudget() {
    const { budgetEnabled, budgetTarget, budgetInputGroup } = app.elements;

    budgetEnabled.addEventListener('change', () => {
        budgetInputGroup.style.display = budgetEnabled.checked ? 'block' : 'none';
        saveSettings();
    });

    budgetTarget.addEventListener('input', saveSettings);
}

function updateBudgetProgress(currentCost) {
    const budgetEnabled = app.elements.budgetEnabled.checked;
    const budgetTarget = parseFloat(app.elements.budgetTarget.value) || 0;

    if (!budgetEnabled || budgetTarget <= 0) return;

    const budgetProgress = document.querySelector('.budget-progress');
    const budgetInfo = document.querySelector('.budget-info');

    if (budgetProgress) budgetProgress.style.display = 'block';
    if (budgetInfo) budgetInfo.style.display = 'flex';

    const percentage = Math.min((currentCost / budgetTarget) * 100, 100);
    const budgetFill = document.querySelector('.budget-fill');

    if (budgetFill) {
        budgetFill.style.width = `${percentage}%`;
        budgetFill.classList.remove('warning', 'danger');

        if (percentage >= 100) {
            budgetFill.classList.add('danger');
            if (!app.state.budgetExceededShown) {
                showBudgetExceededBanner();
                app.state.budgetExceededShown = true;
            }
        } else if (percentage >= 80) {
            budgetFill.classList.add('warning');
        }
    }

    updateBudgetInfo(currentCost, budgetTarget);
}

function updateBudgetInfo(currentCost, budgetTarget) {
    const budgetInfo = document.querySelector('.budget-info');
    if (!budgetInfo) return;

    const symbol = currencySymbols[app.state.currentCurrency];
    const { currentLang } = app.state;

    if (currentCost <= budgetTarget) {
        const remaining = budgetTarget - currentCost;
        budgetInfo.innerHTML = `<span>${translations[currentLang]['budget-remaining']}: <strong>${symbol}${remaining.toFixed(2)}</strong></span>`;
    } else {
        const over = currentCost - budgetTarget;
        budgetInfo.innerHTML = `<span style="color: var(--danger-color)">${translations[currentLang]['budget-over']}: <strong>${symbol}${over.toFixed(2)}</strong></span>`;
    }
}

function showBudgetExceededBanner() {
    if (document.querySelector('.budget-exceeded-banner')) return;

    const banner = document.createElement('div');
    banner.className = 'budget-exceeded-banner';
    banner.innerHTML = `<span class="budget-icon">⚠️</span><span>${translations[app.state.currentLang]['budget-exceeded']}</span>`;

    banner.addEventListener('click', () => banner.remove());
    document.body.appendChild(banner);
}

function removeBudgetExceededBanner() {
    const banner = document.querySelector('.budget-exceeded-banner');
    if (banner) banner.remove();
}

// ==================== 全屏模式 ====================
function toggleFullscreen() {
    if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen();
        document.body.classList.add('fullscreen-mode');
        app.state.isFullscreen = true;
        app.elements.fullscreenButton.innerHTML = `<span class="fullscreen-icon">⛶</span><span data-i18n="exit-fullscreen-hint">${translations[app.state.currentLang]['exit-fullscreen-hint']}</span>`;

        showExitFullscreenHint();
    } else {
        document.exitFullscreen();
    }
}

function showExitFullscreenHint() {
    let hint = document.querySelector('.exit-fullscreen-hint');

    if (!hint) {
        hint = document.createElement('div');
        hint.className = 'exit-fullscreen-hint';
        hint.textContent = translations[app.state.currentLang]['exit-fullscreen-hint'];
        document.body.appendChild(hint);
    }

    hint.classList.add('show');
    setTimeout(() => hint.classList.remove('show'), 3000);
}

document.addEventListener('fullscreenchange', () => {
    if (!document.fullscreenElement) {
        document.body.classList.remove('fullscreen-mode');
        app.state.isFullscreen = false;
        app.elements.fullscreenButton.innerHTML = `<span class="fullscreen-icon">⛶</span><span data-i18n="btn-fullscreen">${translations[app.state.currentLang]['btn-fullscreen']}</span>`;
    }
});

document.addEventListener('webkitfullscreenchange', () => {
    if (!document.webkitFullscreenElement) {
        document.body.classList.remove('fullscreen-mode');
        app.state.isFullscreen = false;
        app.elements.fullscreenButton.innerHTML = `<span class="fullscreen-icon">⛶</span><span data-i18n="btn-fullscreen">${translations[app.state.currentLang]['btn-fullscreen']}</span>`;
    }
});

// ==================== 模板系統 ====================
function initTemplates() {
    document.getElementById('save-template-btn').addEventListener('click', saveTemplate);
    loadTemplates();
}

function saveTemplate() {
    const { attendeesInput, hourlyRateInput } = app.elements;
    const { currentCurrency } = app.state;

    const name = prompt(translations[app.state.currentLang]['btn-save-template'] + ':');
    if (!name) return;

    const templates = JSON.parse(localStorage.getItem('templates') || '[]');
    templates.push({
        name,
        attendees: parseInt(attendeesInput.value),
        hourlyRate: parseFloat(hourlyRateInput.value),
        currency: currentCurrency
    });

    localStorage.setItem('templates', JSON.stringify(templates));
    loadTemplates();
    showToast(translations[app.state.currentLang]['template-saved']);
}

function loadTemplates() {
    const templates = JSON.parse(localStorage.getItem('templates') || '[]');
    const templateList = document.getElementById('template-list');

    if (templates.length === 0) {
        templateList.innerHTML = `<p class="template-empty" data-i18n="template-empty">${translations[app.state.currentLang]['template-empty']}</p>`;
        return;
    }

    templateList.innerHTML = templates.map((template, index) => `
        <div class="template-item">
            <div class="template-info">
                <div class="template-name">${template.name}</div>
                <div class="template-details">${template.attendees} ${translations[app.state.currentLang]['people']} • ${currencySymbols[template.currency]}${template.hourlyRate}/hr</div>
            </div>
            <div class="template-actions">
                <button class="template-load-btn" onclick="loadTemplate(${index})" data-i18n="btn-load">${translations[app.state.currentLang]['btn-load']}</button>
                <button class="template-delete-btn" onclick="deleteTemplate(${index})" data-i18n="btn-delete">${translations[app.state.currentLang]['btn-delete']}</button>
            </div>
        </div>
    `).join('');
}

function loadTemplate(index) {
    const templates = JSON.parse(localStorage.getItem('templates') || '[]');
    const template = templates[index];

    app.elements.attendeesInput.value = template.attendees;
    app.elements.hourlyRateInput.value = template.hourlyRate;
    app.elements.currencySelect.value = template.currency;
    app.state.currentCurrency = template.currency;

    calculateEstimate();
    showToast(translations[app.state.currentLang]['template-loaded']);
}

function deleteTemplate(index) {
    const templates = JSON.parse(localStorage.getItem('templates') || '[]');
    templates.splice(index, 1);
    localStorage.setItem('templates', JSON.stringify(templates));
    loadTemplates();
    showToast(translations[app.state.currentLang]['template-deleted']);
}

// ==================== 會議歷史 ====================
function initHistory() {
    loadHistory();
    document.getElementById('clear-history-btn').addEventListener('click', clearHistory);
}

function saveMeetingRecord() {
    const { attendeesInput, hourlyRateInput } = app.elements;
    const { currentCurrency, elapsedSeconds } = app.state;

    const attendees = parseInt(attendeesInput.value);
    const hourlyRate = parseFloat(hourlyRateInput.value);
    const duration = elapsedSeconds / 60;
    const cost = (attendees * hourlyRate * duration) / 60;

    const history = JSON.parse(localStorage.getItem('meetingHistory') || '[]');
    history.push({
        date: new Date().toLocaleString(),
        attendees,
        hourlyRate,
        currency: currentCurrency,
        duration: duration.toFixed(1),
        cost: cost.toFixed(2)
    });

    localStorage.setItem('meetingHistory', JSON.stringify(history));
    loadHistory();
}

function loadHistory() {
    const history = JSON.parse(localStorage.getItem('meetingHistory') || '[]');
    const historySection = document.getElementById('history-section');
    const historyList = document.getElementById('history-list');

    if (history.length === 0) {
        historySection.style.display = 'none';
        return;
    }

    historySection.style.display = 'block';

    // 計算統計
    const totalMeetings = history.length;
    const totalCost = history.reduce((sum, record) => sum + parseFloat(record.cost), 0);
    const totalDuration = history.reduce((sum, record) => sum + parseFloat(record.duration), 0);
    const avgDuration = totalDuration / totalMeetings;

    // 顯示統計
    const statsHTML = `
        <div class="history-stats">
            <div class="history-stat">
                <div class="stat-label" data-i18n="history-total">${translations[app.state.currentLang]['history-total']}</div>
                <div class="stat-value">${totalMeetings}</div>
            </div>
            <div class="history-stat">
                <div class="stat-label" data-i18n="history-total-cost">${translations[app.state.currentLang]['history-total-cost']}</div>
                <div class="stat-value">${currencySymbols[app.state.currentCurrency]}${totalCost.toFixed(2)}</div>
            </div>
            <div class="history-stat">
                <div class="stat-label" data-i18n="history-avg-duration">${translations[app.state.currentLang]['history-avg-duration']}</div>
                <div class="stat-value">${avgDuration.toFixed(1)} ${translations[app.state.currentLang]['minutes-short']}</div>
            </div>
        </div>
    `;

    // 顯示記錄
    const recordsHTML = history.reverse().map(record => `
        <div class="history-item">
            <div class="history-date">${record.date}</div>
            <div class="history-details">${record.attendees} ${translations[app.state.currentLang]['people']} • ${record.duration} ${translations[app.state.currentLang]['minutes-short']}</div>
            <div class="history-cost">${currencySymbols[record.currency]}${record.cost}</div>
        </div>
    `).join('');

    historyList.innerHTML = statsHTML + recordsHTML;
}

function clearHistory() {
    if (confirm(translations[app.state.currentLang]['history-confirm-clear'])) {
        localStorage.removeItem('meetingHistory');
        document.getElementById('history-section').style.display = 'none';
        showToast(translations[app.state.currentLang]['history-cleared']);
    }
}

// ==================== 導出功能 ====================
function downloadImage() {
    showToast('Downloading image...');
    // 需要引入 html2canvas 庫
}

function exportToCSV() {
    const history = JSON.parse(localStorage.getItem('meetingHistory') || '[]');

    if (history.length === 0) {
        showToast('No records to export');
        return;
    }

    const csvContent = [
        ['Date', 'Attendees', 'Hourly Rate', 'Currency', 'Duration (min)', 'Total Cost'],
        ...history.map(record => [
            record.date,
            record.attendees,
            record.hourlyRate,
            record.currency,
            record.duration,
            record.cost
        ])
    ].map(row => row.join(',')).join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `meeting-history-${new Date().toISOString().split('T')[0]}.csv`;
    link.click();

    showToast(translations[app.state.currentLang]['btn-export-csv'] + ' ✓');
}

function copyShareLink() {
    const { attendeesInput, hourlyRateInput, durationInput } = app.elements;
    const { currentCurrency } = app.state;

    const url = `${window.location.origin}${window.location.pathname}?attendees=${attendeesInput.value}&rate=${hourlyRateInput.value}&duration=${durationInput.value}&currency=${currentCurrency}`;

    navigator.clipboard.writeText(url).then(() => {
        showToast('Link copied! 🔗');
    });
}

function showQRCode() {
    const { attendeesInput, hourlyRateInput, durationInput } = app.elements;
    const { currentCurrency } = app.state;

    const url = `${window.location.origin}${window.location.pathname}?attendees=${attendeesInput.value}&rate=${hourlyRateInput.value}&duration=${durationInput.value}&currency=${currentCurrency}`;

    const modal = document.createElement('div');
    modal.className = 'qr-modal';
    modal.innerHTML = `
        <div class="qr-content">
            <h3 data-i18n="qr-title">${translations[app.state.currentLang]['qr-title']}</h3>
            <div id="qrcode"></div>
            <button class="qr-close" data-i18n="btn-close">${translations[app.state.currentLang]['btn-close']}</button>
        </div>
    `;

    document.body.appendChild(modal);

    new QRCode(document.getElementById('qrcode'), {
        text: url,
        width: 200,
        height: 200
    });

    modal.querySelector('.qr-close').addEventListener('click', () => modal.remove());
    modal.addEventListener('click', (e) => {
        if (e.target === modal) modal.remove();
    });
}

// ==================== 快捷鍵 ====================
function initKeyboardShortcuts() {
    document.addEventListener('keydown', (e) => {
        // Enter 或 Space：開始/暫停
        if ((e.key === 'Enter' || e.key === ' ') && !e.target.matches('input, select')) {
            e.preventDefault();
            if (app.elements.startButton.style.display !== 'none') {
                startTimer();
            } else if (app.elements.pauseButton.style.display !== 'none') {
                togglePause();
            }
        }

        // Esc：重置
        if (e.key === 'Escape' && app.elements.resetButton.style.display !== 'none') {
            reset();
        }

        // F：全屏
        if (e.key === 'f' || e.key === 'F') {
            if (app.elements.timerSection.classList.contains('active')) {
                e.preventDefault();
                toggleFullscreen();
            }
        }
    });
}

// ==================== URL 參數載入 ====================
function loadFromURL() {
    const params = new URLSearchParams(window.location.search);

    if (params.has('attendees')) {
        app.elements.attendeesInput.value = params.get('attendees');
    }

    if (params.has('rate')) {
        app.elements.hourlyRateInput.value = params.get('rate');
    }

    if (params.has('duration')) {
        app.elements.durationInput.value = params.get('duration');
    }

    if (params.has('currency')) {
        app.elements.currencySelect.value = params.get('currency');
        app.state.currentCurrency = params.get('currency');
    }

    calculateEstimate();
}

// ==================== 設置持久化 ====================
function saveSettings() {
    const settings = {
        attendees: app.elements.attendeesInput.value,
        hourlyRate: app.elements.hourlyRateInput.value,
        duration: app.elements.durationInput.value,
        currency: app.state.currentCurrency,
        budgetEnabled: app.elements.budgetEnabled.checked,
        budgetTarget: app.elements.budgetTarget.value
    };

    localStorage.setItem('meetingSettings', JSON.stringify(settings));
}

function loadSettings() {
    const settings = JSON.parse(localStorage.getItem('meetingSettings') || '{}');

    if (settings.attendees) app.elements.attendeesInput.value = settings.attendees;
    if (settings.hourlyRate) app.elements.hourlyRateInput.value = settings.hourlyRate;
    if (settings.duration) app.elements.durationInput.value = settings.duration;
    if (settings.currency) {
        app.elements.currencySelect.value = settings.currency;
        app.state.currentCurrency = settings.currency;
    }
    if (settings.budgetEnabled) {
        app.elements.budgetEnabled.checked = settings.budgetEnabled;
        app.elements.budgetInputGroup.style.display = 'block';
    }
    if (settings.budgetTarget) app.elements.budgetTarget.value = settings.budgetTarget;
}

// ==================== Toast 提示 ====================
function showToast(message) {
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.textContent = message;
    document.body.appendChild(toast);

    setTimeout(() => {
        toast.style.animation = 'toastSlide 0.3s ease reverse';
        setTimeout(() => toast.remove(), 300);
    }, 3000);
}
