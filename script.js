// 翻譯資料
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
        'bmc-text': '請我喝咖啡',
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

// 當前語言和貨幣
let currentLang = 'en';
let currentCurrency = 'HKD';

// 貨幣符號
const currencySymbols = {
    'HKD': 'HK$',
    'USD': '$',
    'EUR': '€',
    'GBP': '£',
    'CNY': '¥',
    'JPY': '¥'
};

// 配色主題
let currentTheme = 'ocean';

// 配色切換功能
function switchColorTheme(theme) {
    currentTheme = theme;
    
    // 移除所有主題 class
    document.body.classList.remove('theme-ocean', 'theme-purple', 'theme-green');
    
    // 如果不是預設主題，加上對應的 class
    if (theme !== 'ocean') {
        document.body.classList.add(`theme-${theme}`);
    }
    
    // 更新按鈕狀態
    document.querySelectorAll('.theme-option').forEach(btn => {
        btn.classList.remove('active');
        if (btn.getAttribute('data-theme') === theme) {
            btn.classList.add('active');
        }
    });
    
    // 儲存偏好
    localStorage.setItem('colorTheme', theme);
}

// 初始化配色切換器
document.querySelectorAll('.theme-option').forEach(btn => {
    btn.addEventListener('click', () => {
        const theme = btn.getAttribute('data-theme');
        switchColorTheme(theme);
    });
});

// 切換語言
function switchLanguage(lang) {
    currentLang = lang;
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[lang][key]) {
            if (key === 'per-minute') {
                element.innerHTML = `${translations[lang][key]}<span id="per-minute">${perMinuteEl.textContent}</span>`;
            } else {
                element.textContent = translations[lang][key];
            }
        }
    });

    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.getAttribute('data-lang') === lang) {
            btn.classList.add('active');
        }
    });

    updateCurrencyLabel();
    localStorage.setItem('language', lang);
}

// 更新貨幣標籤
function updateCurrencyLabel() {
    const label = document.querySelector('label[for="hourly-rate"]');
    label.textContent = `${translations[currentLang]['label-hourly-rate']} (${currentCurrency})`;
}

// 更新會議資訊
function updateMeetingInfo() {
    const attendees = parseInt(attendeesInput.value) || 0;
    const hourlyRate = parseFloat(hourlyRateInput.value) || 0;
    const symbol = currencySymbols[currentCurrency];
    
    const infoText = `${translations[currentLang]['info-attendees'].replace('{count}', attendees)} • ${translations[currentLang]['info-rate'].replace('{currency}', symbol).replace('{rate}', hourlyRate)}`;
    
    document.getElementById('meeting-info').innerHTML = infoText;
}

// DOM 元素
const attendeesInput = document.getElementById('attendees');
const hourlyRateInput = document.getElementById('hourly-rate');
const durationInput = document.getElementById('duration');
const currencySelect = document.getElementById('currency');
const estimateCostEl = document.getElementById('estimate-cost');
const perMinuteEl = document.getElementById('per-minute');
const startButton = document.getElementById('start-button');
const timerSection = document.getElementById('timer-section');
const liveCostEl = document.getElementById('live-cost');
const elapsedTimeEl = document.getElementById('elapsed-time');
const stopButton = document.getElementById('stop-button');
const pauseButton = document.getElementById('pause-button');
const resetButton = document.getElementById('reset-button');

// 計時器變數
let timerInterval = null;
let startTime = null;
let elapsedSeconds = 0;
let pausedTime = 0;
let pauseStartTime = 0;
let isPaused = false;
let hasShownWarning = false;

// 計算預估成本
function calculateEstimate() {
    const attendees = parseInt(attendeesInput.value) || 0;
    const hourlyRate = parseFloat(hourlyRateInput.value) || 0;
    const duration = parseInt(durationInput.value) || 0;
    const symbol = currencySymbols[currentCurrency];
    
    const costPerMinute = (attendees * hourlyRate) / 60;
    const totalCost = costPerMinute * duration;
    
    estimateCostEl.textContent = `${symbol}${totalCost.toFixed(2)}`;
    perMinuteEl.textContent = `${symbol}${costPerMinute.toFixed(2)}`;
    
    saveSettings();
}

// 開始計時
function startTimer() {
    console.log('🚀 開始計時');
    
    // 隱藏所有輸入欄位
    const inputGroups = document.querySelectorAll('.input-group');
    inputGroups.forEach(group => {
        group.style.display = 'none';
    });
    
    // 隱藏其他區域
    const sections = [
        '.estimate-section',
        '.budget-section',
        '.template-section',
        '.support-section'
    ];
    
    sections.forEach(selector => {
        const element = document.querySelector(selector);
        if (element) element.style.display = 'none';
    });
    
    const historySection = document.getElementById('history-section');
    if (historySection) historySection.style.display = 'none';
    
    if (startButton) startButton.style.display = 'none';
    
    // 顯示計時器
    timerSection.classList.add('active');
    pauseButton.style.display = 'flex';
    
    // 初始化計時
    startTime = Date.now();
    elapsedSeconds = 0;
    pausedTime = 0;
    isPaused = false;
    hasShownWarning = false;
    
    if (typeof budgetExceededShown !== 'undefined') {
        budgetExceededShown = false;
    }
    
    if (typeof removeBudgetExceededBanner === 'function') {
        removeBudgetExceededBanner();
    }
    
    updateMeetingInfo();
    
    // 開始計時
    timerInterval = setInterval(updateTimer, 100);
    console.log('✅ 計時器已啟動');
}

// 更新計時器
function updateTimer() {
    if (isPaused) return;
    
    const now = Date.now();
    elapsedSeconds = (now - startTime - pausedTime) / 1000;
    
    const attendees = parseInt(attendeesInput.value) || 0;
    const hourlyRate = parseFloat(hourlyRateInput.value) || 0;
    const symbol = currencySymbols[currentCurrency];
    
    const costPerSecond = (attendees * hourlyRate) / 3600;
    const currentCost = costPerSecond * elapsedSeconds;
    
    liveCostEl.textContent = `${symbol}${currentCost.toFixed(2)}`;
    
    // 更新預算進度
    if (typeof updateBudgetProgress === 'function') {
        updateBudgetProgress(currentCost);
    }
    
    // 成本警告
    if (currentCost > 500 && !hasShownWarning) {
        showCostWarning();
        hasShownWarning = true;
    }
    
    const minutes = Math.floor(elapsedSeconds / 60);
    const seconds = Math.floor(elapsedSeconds % 60);
    elapsedTimeEl.textContent = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}

// 暫停/繼續
function togglePause() {
    if (isPaused) {
        // 繼續
        isPaused = false;
        pausedTime += (Date.now() - pauseStartTime);
        pauseButton.classList.remove('paused');
        pauseButton.innerHTML = `<span>⏸</span><span data-i18n="btn-pause">${translations[currentLang]['btn-pause']}</span>`;
        
        const timerDisplay = document.querySelector('.timer-display');
        if (timerDisplay) timerDisplay.classList.remove('stopped');
        
        const timerLabel = document.querySelector('[data-i18n="timer-label"]');
        if (timerLabel) timerLabel.textContent = translations[currentLang]['timer-label'];
    } else {
        // 暫停
        isPaused = true;
        pauseStartTime = Date.now();
        pauseButton.classList.add('paused');
        pauseButton.innerHTML = `<span>▶</span><span data-i18n="btn-resume">${translations[currentLang]['btn-resume']}</span>`;
        
        const timerDisplay = document.querySelector('.timer-display');
        if (timerDisplay) timerDisplay.classList.add('stopped');
        
        const timerLabel = document.querySelector('[data-i18n="timer-label"]');
        if (timerLabel) timerLabel.textContent = translations[currentLang]['timer-label-paused'];
    }
}

// 成本警告
function showCostWarning() {
    const symbol = currencySymbols[currentCurrency];
    const warning = document.createElement('div');
    warning.className = 'cost-warning';
    warning.textContent = translations[currentLang]['cost-warning'].replace('{currency}', symbol);
    document.body.appendChild(warning);
    
    const timerDisplay = document.querySelector('.timer-display');
    if (timerDisplay) timerDisplay.classList.add('alert');
    
    setTimeout(() => {
        warning.style.animation = 'warningPulse 0.5s ease reverse';
        setTimeout(() => warning.remove(), 500);
    }, 2000);
}

// 停止計時
function stopTimer() {
    clearInterval(timerInterval);
    
    const attendees = parseInt(attendeesInput.value) || 0;
    const hourlyRate = parseFloat(hourlyRateInput.value) || 0;
    const symbol = currencySymbols[currentCurrency];
    
    const costPerSecond = (attendees * hourlyRate) / 3600;
    const finalCost = costPerSecond * elapsedSeconds;
    
    const timerDisplay = document.querySelector('.timer-display');
    if (timerDisplay) {
        timerDisplay.classList.add('stopped');
        timerDisplay.classList.remove('alert');
    }
    
    const statusIndicator = document.querySelector('.status-indicator');
    if (statusIndicator) {
        statusIndicator.classList.remove('running');
        statusIndicator.classList.add('stopped');
    }
    
    const timerLabel = document.querySelector('[data-i18n="timer-label"]');
    if (timerLabel) timerLabel.textContent = translations[currentLang]['timer-label-stopped'];
    
    liveCostEl.classList.add('final');
    liveCostEl.textContent = `${symbol}${finalCost.toFixed(2)}`;
    
    stopButton.style.display = 'none';
    pauseButton.style.display = 'none';
    document.getElementById('share-actions').style.display = 'flex';
    document.getElementById('reset-button').style.display = 'block';
    
    const supportSection = document.querySelector('.support-section');
    if (supportSection) supportSection.style.display = 'block';
    
    saveMeetingRecord();
}

// 重置
function reset() {
    console.log('🔄 重置中');
    
    // 退出全螢幕
    if (typeof isFullscreen !== 'undefined' && isFullscreen) {
        if (document.exitFullscreen) {
            document.exitFullscreen();
        } else if (document.webkitExitFullscreen) {
            document.webkitExitFullscreen();
        }
        document.body.classList.remove('fullscreen-mode');
        isFullscreen = false;
    }
    
    // 重置計時器樣式
    const timerDisplay = document.querySelector('.timer-display');
    if (timerDisplay) {
        timerDisplay.classList.remove('stopped', 'alert', 'budget-warning');
    }
    
    const statusIndicator = document.querySelector('.status-indicator');
    if (statusIndicator) {
        statusIndicator.classList.add('running');
        statusIndicator.classList.remove('stopped');
    }
    
    const timerLabel = document.querySelector('[data-i18n="timer-label"]');
    if (timerLabel) {
        timerLabel.textContent = translations[currentLang]['timer-label'];
    }
    
    if (liveCostEl) liveCostEl.classList.remove('final');
    
    // 隱藏計時器
    timerSection.classList.remove('active');
    
    // 顯示所有輸入欄位
    const inputGroups = document.querySelectorAll('.input-group');
    inputGroups.forEach(group => {
        group.style.display = 'flex';
    });
    
    // 顯示其他區域
    const sections = [
        { selector: '.estimate-section', display: 'block' },
        { selector: '.budget-section', display: 'block' },
        { selector: '.template-section', display: 'block' },
        { selector: '.support-section', display: 'block' }
    ];
    
    sections.forEach(({ selector, display }) => {
        const element = document.querySelector(selector);
        if (element) element.style.display = display;
    });
    
    if (startButton) startButton.style.display = 'block';
    if (stopButton) stopButton.style.display = 'block';
    
    if (pauseButton) {
        pauseButton.style.display = 'none';
        pauseButton.classList.remove('paused');
    }
    
    document.getElementById('share-actions').style.display = 'none';
    document.getElementById('reset-button').style.display = 'none';
    
    // 移除預算元素
    const budgetProgress = document.querySelector('.budget-progress');
    const budgetInfo = document.querySelector('.budget-info');
    if (budgetProgress) budgetProgress.remove();
    if (budgetInfo) budgetInfo.remove();
    
    if (typeof removeBudgetExceededBanner === 'function') {
        removeBudgetExceededBanner();
    }
    
    // 重置變數
    isPaused = false;
    hasShownWarning = false;
    if (typeof budgetExceededShown !== 'undefined') {
        budgetExceededShown = false;
    }
    
    calculateEstimate();
    window.scrollTo({ top: 0, behavior: 'smooth' });
    
    console.log('✅ 重置完成');
}

// 儲存設定
function saveSettings() {
    localStorage.setItem('meetingCalc-attendees', attendeesInput.value);
    localStorage.setItem('meetingCalc-hourlyRate', hourlyRateInput.value);
    localStorage.setItem('meetingCalc-currency', currentCurrency);
}

// 載入設定
function loadSettings() {
    const savedAttendees = localStorage.getItem('meetingCalc-attendees');
    const savedRate = localStorage.getItem('meetingCalc-hourlyRate');
    const savedCurrency = localStorage.getItem('meetingCalc-currency');
    const savedLang = localStorage.getItem('language');
    const savedTheme = localStorage.getItem('colorTheme');
    
    if (savedAttendees) attendeesInput.value = savedAttendees;
    if (savedRate) hourlyRateInput.value = savedRate;
    if (savedCurrency) {
        currentCurrency = savedCurrency;
        currencySelect.value = savedCurrency;
    }
    if (savedLang) {
        currentLang = savedLang;
    }
    if (savedTheme) {
        switchColorTheme(savedTheme);
    }
}

// 從 URL 載入參數
function loadFromURL() {
    const params = new URLSearchParams(window.location.search);
    
    if (params.has('attendees')) attendeesInput.value = params.get('attendees');
    if (params.has('rate')) hourlyRateInput.value = params.get('rate');
    if (params.has('currency')) {
        const currency = params.get('currency').toUpperCase();
        if (currencySymbols[currency]) {
            currentCurrency = currency;
            currencySelect.value = currency;
        }
    }
}

// 生成分享URL
function generateShareURL() {
    const baseURL = window.location.origin + window.location.pathname;
    const params = new URLSearchParams({
        attendees: attendeesInput.value,
        rate: hourlyRateInput.value,
        currency: currentCurrency
    });
    return `${baseURL}?${params.toString()}`;
}

// 事件監聽器
attendeesInput.addEventListener('input', calculateEstimate);
hourlyRateInput.addEventListener('input', calculateEstimate);
durationInput.addEventListener('input', calculateEstimate);

currencySelect.addEventListener('change', (e) => {
    currentCurrency = e.target.value;
    updateCurrencyLabel();
    calculateEstimate();
    
    if (timerSection.classList.contains('active')) {
        updateMeetingInfo();
    }
});

startButton.addEventListener('click', startTimer);
stopButton.addEventListener('click', stopTimer);
pauseButton.addEventListener('click', togglePause);
resetButton.addEventListener('click', reset);

// 語言切換
document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        const lang = btn.getAttribute('data-lang');
        switchLanguage(lang);
    });
});

// 鍵盤快捷鍵
document.addEventListener('keydown', (e) => {
    if (e.target.tagName === 'INPUT' || e.target.tagName === 'SELECT') return;
    
    if (e.code === 'Space') {
        e.preventDefault();
        if (timerSection.classList.contains('active')) {
            if (stopButton.style.display !== 'none') {
                togglePause();
            }
        } else {
            startTimer();
        }
    }
    
    if (e.code === 'Escape' && !isFullscreen) {
        e.preventDefault();
        if (timerSection.classList.contains('active')) {
            reset();
        }
    }
    
    if (e.code === 'KeyF' && timerSection.classList.contains('active')) {
        e.preventDefault();
        toggleFullscreen();
    }
});

// 全螢幕功能
const fullscreenButton = document.getElementById('fullscreen-button');
let isFullscreen = false;

const exitHint = document.createElement('div');
exitHint.className = 'exit-fullscreen-hint';
document.body.appendChild(exitHint);

function toggleFullscreen() {
    if (!isFullscreen) {
        if (document.documentElement.requestFullscreen) {
            document.documentElement.requestFullscreen();
        } else if (document.documentElement.webkitRequestFullscreen) {
            document.documentElement.webkitRequestFullscreen();
        }
        
        // 動態計算放大比例
        const screenHeight = window.screen.height;
        const screenWidth = window.screen.width;
        
        // 根據螢幕高度調整容器
        const container = document.querySelector('.container');
        if (screenHeight >= 1440) {
            container.style.transform = 'scale(1.1)';
        } else if (screenHeight >= 1080) {
            container.style.transform = 'scale(1.05)';
        } else {
            container.style.transform = 'scale(1.0)';
        }  

        
        document.body.classList.add('fullscreen-mode');
        isFullscreen = true;
        
        exitHint.textContent = translations[currentLang]['exit-fullscreen-hint'];
        exitHint.classList.add('show');
        setTimeout(() => exitHint.classList.remove('show'), 3000);
        
        fullscreenButton.innerHTML = `<span class="fullscreen-icon">⛶</span><span data-i18n="btn-fullscreen">${currentLang === 'zh' ? '退出全螢幕' : 'Exit Full Screen'}</span>`;
    } else {
        if (document.exitFullscreen) {
            document.exitFullscreen();
        } else if (document.webkitExitFullscreen) {
            document.webkitExitFullscreen();
        }
        
        // 重置 transform
        const container = document.querySelector('.container');
        container.style.transform = 'none';
        
        document.body.classList.remove('fullscreen-mode');
        isFullscreen = false;
        
        fullscreenButton.innerHTML = `<span class="fullscreen-icon">⛶</span><span data-i18n="btn-fullscreen">${translations[currentLang]['btn-fullscreen']}</span>`;
    }
}


document.addEventListener('fullscreenchange', () => {
    if (!document.fullscreenElement) {
        const container = document.querySelector('.container');
        container.style.transform = 'none';
        document.body.classList.remove('fullscreen-mode');
        isFullscreen = false;
        fullscreenButton.innerHTML = `<span class="fullscreen-icon">⛶</span><span data-i18n="btn-fullscreen">${translations[currentLang]['btn-fullscreen']}</span>`;
    }
});

document.addEventListener('webkitfullscreenchange', () => {
    if (!document.webkitFullscreenElement) {
        const container = document.querySelector('.container');
        container.style.transform = 'none';
        document.body.classList.remove('fullscreen-mode');
        isFullscreen = false;
        fullscreenButton.innerHTML = `<span class="fullscreen-icon">⛶</span><span data-i18n="btn-fullscreen">${translations[currentLang]['btn-fullscreen']}</span>`;
    }
});

fullscreenButton.addEventListener('click', toggleFullscreen);

// 分享功能（修正版：顯示預算超支）
const shareButton = document.getElementById('share-button');

async function shareResult() {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    canvas.width = 800;
    canvas.height = 600;
    
    const finalCost = liveCostEl.textContent;
    const duration = elapsedTimeEl.textContent;
    const attendees = attendeesInput.value;
    const hourlyRate = hourlyRateInput.value;
    const symbol = currencySymbols[currentCurrency];
    
    // 檢查是否超支
    const finalCostNumber = parseFloat(finalCost.replace(/[^0-9.]/g, ''));
    const budgetTarget = parseFloat(document.getElementById('budget-target').value) || 0;
    const isBudgetEnabled = document.getElementById('budget-enabled').checked;
    const isBudgetExceeded = isBudgetEnabled && budgetTarget > 0 && finalCostNumber > budgetTarget;
    
    // 背景漸層（如果超支用紅色）
    const gradient = ctx.createLinearGradient(0, 0, 0, 600);
    if (isBudgetExceeded) {
        gradient.addColorStop(0, '#ef476f');
        gradient.addColorStop(1, '#e63946');
    } else {
        gradient.addColorStop(0, '#03045e');
        gradient.addColorStop(1, '#0077b6');
    }
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, 800, 600);
    
    // 如果超支，加上警告圖標和文字
    if (isBudgetExceeded) {
        ctx.fillStyle = '#ffffff';
        ctx.font = 'bold 60px -apple-system, sans-serif';
        ctx.textAlign = 'center';
        ctx.fillText('⚠️', 400, 80);
        
        ctx.fillStyle = '#ffffff';
        ctx.font = 'bold 28px -apple-system, sans-serif';
        ctx.fillText(translations[currentLang]['budget-exceeded'], 400, 130);
    }
    
    // 標題
    ctx.fillStyle = '#caf0f8';
    ctx.font = 'bold 40px -apple-system, sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText(translations[currentLang]['share-title'], 400, isBudgetExceeded ? 180 : 100);
    
    // 成本（如果超支用更大更醒目）
    ctx.fillStyle = '#ffffff';
    ctx.font = isBudgetExceeded ? 'bold 110px -apple-system, sans-serif' : 'bold 96px -apple-system, sans-serif';
    ctx.fillText(finalCost, 400, isBudgetExceeded ? 300 : 250);
    
    // 預算資訊（如果超支）
    if (isBudgetExceeded) {
        ctx.fillStyle = '#ffffff';
        ctx.font = 'bold 24px -apple-system, sans-serif';
        const overAmount = finalCostNumber - budgetTarget;
        ctx.fillText(`${translations[currentLang]['budget-over']}: ${symbol}${overAmount.toFixed(2)}`, 400, 360);
    }
    
    // 詳細資訊
    ctx.fillStyle = '#90e0ef';
    ctx.font = '28px -apple-system, sans-serif';
    ctx.fillText(`${duration} • ${attendees} ${translations[currentLang]['people']} • ${symbol}${hourlyRate}/hr`, 400, isBudgetExceeded ? 420 : 330);
    
    // 分隔線
    ctx.strokeStyle = '#00b4d8';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(100, isBudgetExceeded ? 460 : 380);
    ctx.lineTo(700, isBudgetExceeded ? 460 : 380);
    ctx.stroke();
    
    // 底部文字
    ctx.fillStyle = '#caf0f8';
    ctx.font = '24px -apple-system, sans-serif';
    const bottomText = isBudgetExceeded 
        ? (currentLang === 'zh' ? '會議時間過長，建議精簡議程！' : 'Meeting too long, consider streamlining!')
        : translations[currentLang]['share-saving'];
    ctx.fillText(bottomText, 400, isBudgetExceeded ? 510 : 440);
    
    ctx.fillStyle = '#90e0ef';
    ctx.font = '20px -apple-system, sans-serif';
    ctx.fillText('meeting-cost-calculator.vercel.app', 400, isBudgetExceeded ? 550 : 500);
    
    const shareURL = generateShareURL();
    ctx.fillStyle = '#caf0f8';
    ctx.font = 'italic 16px -apple-system, sans-serif';
    const urlText = currentLang === 'zh' ? `使用這些設定：${shareURL}` : `Use these settings: ${shareURL}`;
    ctx.fillText(urlText, 400, isBudgetExceeded ? 580 : 550);
    
    canvas.toBlob(function(blob) {
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.download = `meeting-cost-${Date.now()}.png`;
        link.href = url;
        link.click();
        URL.revokeObjectURL(url);
        
        showToast(currentLang === 'zh' ? '圖片已下載！' : 'Image downloaded!');
    });
}

// 顯示提示訊息
function showToast(message) {
    const toast = document.createElement('div');
    toast.textContent = message;
    toast.style.cssText = `
        position: fixed;
        top: 20px;
        left: 50%;
        transform: translateX(-50%);
        background: #00b4d8;
        color: white;
        padding: 12px 24px;
        border-radius: 8px;
        font-weight: 600;
        z-index: 10000;
        box-shadow: 0 4px 12px rgba(0,0,0,0.3);
        animation: slideDown 0.3s ease;
    `;
    document.body.appendChild(toast);
    
    setTimeout(() => {
        toast.style.animation = 'slideUp 0.3s ease';
        setTimeout(() => toast.remove(), 300);
    }, 2000);
}

shareButton.addEventListener('click', shareResult);

// 複製分享連結
const copyLinkButton = document.getElementById('copy-link-button');

function copyShareLink() {
    const shareURL = generateShareURL();
    navigator.clipboard.writeText(shareURL).then(() => {
        showToast(currentLang === 'zh' ? '分享連結已複製！' : 'Share link copied!');
        copyLinkButton.innerHTML = `<span>✓</span><span>${currentLang === 'zh' ? '已複製' : 'Copied'}</span>`;
        setTimeout(() => {
            copyLinkButton.innerHTML = `<span>🔗</span><span data-i18n="btn-copy-link">${translations[currentLang]['btn-copy-link']}</span>`;
        }, 2000);
    }).catch(() => {
        showToast(currentLang === 'zh' ? '複製失敗，請重試' : 'Failed to copy link');
    });
}

copyLinkButton.addEventListener('click', copyShareLink);

// 匯出 CSV
const exportCsvButton = document.getElementById('export-csv-button');

function exportToCSV() {
    const now = new Date();
    const dateStr = now.toLocaleDateString('en-CA');
    const timeStr = now.toLocaleTimeString('en-GB', { hour12: false });
    
    const attendees = attendeesInput.value;
    const hourlyRate = hourlyRateInput.value;
    const currency = currentCurrency;
    const symbol = currencySymbols[currency];
    const duration = elapsedTimeEl.textContent;
    const finalCost = liveCostEl.textContent.replace(symbol, '').replace('HK', '').replace(/,/g, '');
    
    const [minutes, seconds] = duration.split(':').map(Number);
    const totalMinutes = (minutes + seconds / 60).toFixed(2);
    
    const header = 'Date,Time,Duration (min),Attendees,Hourly Rate,Currency,Total Cost';
    const row = `${dateStr},${timeStr},${totalMinutes},${attendees},${hourlyRate},${currency},${finalCost}`;
    const csvContent = `${header}\n${row}`;
    
    const BOM = '\uFEFF';
    const blob = new Blob([BOM + csvContent], { type: 'text/csv;charset=utf-8' });
    const link = document.createElement('a');
    const url = URL.createObjectURL(blob);
    link.setAttribute('href', url);
    link.setAttribute('download', `meeting-report-${dateStr}.csv`);
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
    
    showToast(currentLang === 'zh' ? 'CSV 已匯出！' : 'CSV downloaded!');
}

exportCsvButton.addEventListener('click', exportToCSV);

// 深色模式
const themeToggle = document.getElementById('theme-toggle');
let isDarkMode = localStorage.getItem('darkMode') === 'true';

function toggleDarkMode() {
    isDarkMode = !isDarkMode;
    document.body.classList.toggle('dark-mode', isDarkMode);
    themeToggle.querySelector('.theme-icon').textContent = isDarkMode ? '☀️' : '🌙';
    localStorage.setItem('darkMode', isDarkMode);
}

if (isDarkMode) {
    document.body.classList.add('dark-mode');
    themeToggle.querySelector('.theme-icon').textContent = '☀️';
}

themeToggle.addEventListener('click', toggleDarkMode);

// 會議歷史
let meetingHistory = JSON.parse(localStorage.getItem('meetingHistory')) || [];

function saveMeetingRecord() {
    const attendees = parseInt(attendeesInput.value);
    const hourlyRate = parseFloat(hourlyRateInput.value);
    const symbol = currencySymbols[currentCurrency];
    const costPerSecond = (attendees * hourlyRate) / 3600;
    const finalCost = costPerSecond * elapsedSeconds;
    const duration = Math.floor(elapsedSeconds / 60);
    
    const record = {
        id: Date.now(),
        date: new Date().toISOString(),
        attendees: attendees,
        hourlyRate: hourlyRate,
        currency: currentCurrency,
        duration: duration,
        cost: finalCost
    };
    
    meetingHistory.unshift(record);
    
    if (meetingHistory.length > 50) {
        meetingHistory = meetingHistory.slice(0, 50);
    }
    
    localStorage.setItem('meetingHistory', JSON.stringify(meetingHistory));
    renderHistory();
}

function renderHistory() {
    const historySection = document.getElementById('history-section');
    const historyList = document.getElementById('history-list');
    
    if (meetingHistory.length === 0) {
        historySection.style.display = 'none';
        return;
    }
    
    historySection.style.display = 'block';
    
    const totalMeetings = meetingHistory.length;
    const totalCost = meetingHistory.reduce((sum, record) => sum + record.cost, 0);
    const avgDuration = meetingHistory.reduce((sum, record) => sum + record.duration, 0) / totalMeetings;
    
    const statsHTML = `
        <div class="history-stats">
            <div class="history-stat">
                <div class="history-stat-label" data-i18n="history-total">${translations[currentLang]['history-total']}</div>
                <div class="history-stat-value">${totalMeetings}</div>
            </div>
            <div class="history-stat">
                <div class="history-stat-label" data-i18n="history-total-cost">${translations[currentLang]['history-total-cost']}</div>
                <div class="history-stat-value">${currencySymbols[meetingHistory[0].currency]}${totalCost.toFixed(0)}</div>
            </div>
            <div class="history-stat">
                <div class="history-stat-label" data-i18n="history-avg-duration">${translations[currentLang]['history-avg-duration']}</div>
                <div class="history-stat-value">${Math.round(avgDuration)} <span style="font-size: 0.7em">${translations[currentLang]['minutes-short']}</span></div>
            </div>
        </div>
    `;
    
    const recordsHTML = meetingHistory.map(record => {
        const date = new Date(record.date);
        const dateStr = date.toLocaleDateString(currentLang === 'zh' ? 'zh-TW' : 'en-US', { month: 'short', day: 'numeric', year: 'numeric' });
        const timeStr = date.toLocaleTimeString(currentLang === 'zh' ? 'zh-TW' : 'en-US', { hour: '2-digit', minute: '2-digit' });
        
        return `
            <div class="history-item">
                <div class="history-item-header">
                    <span class="history-date">${dateStr} ${timeStr}</span>
                    <span class="history-cost">${currencySymbols[record.currency]}${record.cost.toFixed(2)}</span>
                </div>
                <div class="history-details">
                    <span class="history-detail-item">${record.attendees} ${currentLang === 'zh' ? '人' : 'people'}</span>
                    <span class="history-detail-item">${record.duration} ${translations[currentLang]['minutes-short']}</span>
                    <span class="history-detail-item">${currencySymbols[record.currency]}${record.hourlyRate}/hr</span>
                </div>
            </div>
        `;
    }).join('');
    
    historyList.innerHTML = recordsHTML + statsHTML;
}

document.getElementById('clear-history-btn').addEventListener('click', () => {
    if (confirm(translations[currentLang]['history-confirm-clear'])) {
        meetingHistory = [];
        localStorage.removeItem('meetingHistory');
        renderHistory();
        showToast(translations[currentLang]['history-cleared']);
    }
});

// 模板功能
let templates = JSON.parse(localStorage.getItem('meetingTemplates')) || [];

function renderTemplates() {
    const templateList = document.getElementById('template-list');
    
    if (templates.length === 0) {
        templateList.innerHTML = `<p class="template-empty" data-i18n="template-empty">${translations[currentLang]['template-empty']}</p>`;
        return;
    }
    
    templateList.innerHTML = templates.map((template, index) => `
        <div class="template-item">
            <div class="template-info">
                <div class="template-name">${template.name}</div>
                <div class="template-details">
                    ${template.attendees} • ${currencySymbols[template.currency]}${template.hourlyRate}/hr • ${template.duration} min
                </div>
            </div>
            <div class="template-actions">
                <button class="template-load-btn" onclick="loadTemplate(${index})" data-i18n="btn-load">${translations[currentLang]['btn-load']}</button>
                <button class="template-delete-btn" onclick="deleteTemplate(${index})" data-i18n="btn-delete">${translations[currentLang]['btn-delete']}</button>
            </div>
        </div>
    `).join('');
}

window.loadTemplate = function(index) {
    const template = templates[index];
    attendeesInput.value = template.attendees;
    hourlyRateInput.value = template.hourlyRate;
    durationInput.value = template.duration;
    currentCurrency = template.currency;
    currencySelect.value = template.currency;
    calculateEstimate();
    updateCurrencyLabel();
    showToast(translations[currentLang]['template-loaded']);
};

window.deleteTemplate = function(index) {
    if (confirm(currentLang === 'zh' ? '確定要刪除這個模板嗎？' : 'Delete this template?')) {
        templates.splice(index, 1);
        localStorage.setItem('meetingTemplates', JSON.stringify(templates));
        renderTemplates();
        showToast(translations[currentLang]['template-deleted']);
    }
};

document.getElementById('save-template-btn').addEventListener('click', () => {
    const name = prompt(currentLang === 'zh' ? '輸入模板名稱：' : 'Enter template name:');
    if (!name) return;
    
    const newTemplate = {
        name: name,
        attendees: parseInt(attendeesInput.value),
        hourlyRate: parseFloat(hourlyRateInput.value),
        duration: parseInt(durationInput.value),
        currency: currentCurrency
    };
    
    templates.push(newTemplate);
    localStorage.setItem('meetingTemplates', JSON.stringify(templates));
    renderTemplates();
    showToast(translations[currentLang]['template-saved']);
});

// 預算功能
const budgetEnabled = document.getElementById('budget-enabled');
const budgetInputGroup = document.getElementById('budget-input-group');
const budgetTarget = document.getElementById('budget-target');
let isBudgetEnabled = localStorage.getItem('budgetEnabled') === 'true';
let budgetExceededShown = false;
let budgetExceededBanner = null;

if (isBudgetEnabled) {
    budgetEnabled.checked = true;
    budgetInputGroup.style.display = 'flex';
    const savedBudget = localStorage.getItem('budgetTarget');
    if (savedBudget) budgetTarget.value = savedBudget;
}

budgetEnabled.addEventListener('change', (e) => {
    isBudgetEnabled = e.target.checked;
    budgetInputGroup.style.display = isBudgetEnabled ? 'flex' : 'none';
    localStorage.setItem('budgetEnabled', isBudgetEnabled);
    if (isBudgetEnabled) budgetTarget.focus();
});

budgetTarget.addEventListener('input', () => {
    localStorage.setItem('budgetTarget', budgetTarget.value);
});

function showBudgetExceededBanner() {
    if (budgetExceededBanner) return;
    
    budgetExceededBanner = document.createElement('div');
    budgetExceededBanner.className = 'budget-exceeded-banner';
    const message = translations[currentLang]['budget-exceeded'];
    budgetExceededBanner.innerHTML = `<span class="budget-icon">⚠️</span><span>${message}</span>`;
    document.body.appendChild(budgetExceededBanner);
}

function removeBudgetExceededBanner() {
    if (budgetExceededBanner) {
        budgetExceededBanner.remove();
        budgetExceededBanner = null;
    }
}

function updateBudgetProgress(currentCost) {
    if (!isBudgetEnabled) return;
    
    const target = parseFloat(budgetTarget.value) || 0;
    if (target === 0) return;
    
    const percentage = Math.min((currentCost / target) * 100, 100);
    const symbol = currencySymbols[currentCurrency];
    
    let progressContainer = document.querySelector('.budget-progress');
    
    if (!progressContainer) {
        const timerDisplay = document.querySelector('.timer-display');
        const progressHTML = `
            <div class="budget-progress">
                <div class="budget-progress-bar" id="budget-progress-bar"></div>
            </div>
            <div class="budget-info">
                <span class="budget-current">${translations[currentLang]['budget-progress']}: <span id="budget-current-cost">${symbol}0</span></span>
                <span class="budget-remaining" id="budget-remaining-text">${translations[currentLang]['budget-remaining']}: ${symbol}${target.toFixed(2)}</span>
            </div>
        `;
        timerDisplay.insertAdjacentHTML('beforeend', progressHTML);
        progressContainer = document.querySelector('.budget-progress');
    }
    
    const progressBar = document.getElementById('budget-progress-bar');
    const currentCostEl = document.getElementById('budget-current-cost');
    const remainingTextEl = document.getElementById('budget-remaining-text');
    
    progressBar.style.width = `${percentage}%`;
    currentCostEl.textContent = `${symbol}${currentCost.toFixed(2)}`;
    
    progressBar.classList.remove('warning', 'exceeded');
    remainingTextEl.classList.remove('warning', 'exceeded');
    document.querySelector('.timer-display').classList.remove('budget-warning');
    
    if (currentCost >= target) {
        progressBar.classList.add('exceeded');
        remainingTextEl.classList.add('exceeded');
        remainingTextEl.textContent = `${translations[currentLang]['budget-over']}: ${symbol}${(currentCost - target).toFixed(2)}`;
        document.querySelector('.timer-display').classList.add('budget-warning');
        
        if (!budgetExceededShown) {
            showBudgetExceededBanner();
            budgetExceededShown = true;
        }
    } else if (percentage >= 80) {
        progressBar.classList.add('warning');
        remainingTextEl.classList.add('warning');
        remainingTextEl.textContent = `${translations[currentLang]['budget-remaining']}: ${symbol}${(target - currentCost).toFixed(2)}`;
    } else {
        remainingTextEl.textContent = `${translations[currentLang]['budget-remaining']}: ${symbol}${(target - currentCost).toFixed(2)}`;
    }
}

// QR Code 功能
const qrButton = document.getElementById('qr-button');

qrButton.addEventListener('click', () => {
    const shareURL = generateShareURL();
    const message = currentLang === 'zh' 
        ? `掃描 QR Code 或使用此連結：\n${shareURL}` 
        : `Scan QR Code or use this link:\n${shareURL}`;
    alert(message);
});

// 初始化
loadSettings();
loadFromURL();
switchLanguage(currentLang);
calculateEstimate();
updateCurrencyLabel();
renderTemplates();
renderHistory();

console.log('✅ Meeting Cost Calculator 已載入');
