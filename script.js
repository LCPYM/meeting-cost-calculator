// ========== 多語言翻譯 ==========
const translations = {
    zh: {
        'title': '💸 會議成本計算機',
        'subtitle': '看看這場會議正在燒多少錢',
        'label-attendees': '參與人數',
        'label-hourly-rate': '平均時薪',
        'label-duration': '預計時長（分鐘）',
        'label-currency': '貨幣',
        'estimate-title': '預估會議成本',
        'per-minute': '每分鐘：',
        'btn-start': '開始會議計時',
        'timer-label': '會議進行中...',
        'timer-label-stopped': '會議已結束',
        'timer-label-paused': '已暫停',
        'btn-stop': '結束會議',
        'btn-pause': '暫停',
        'btn-resume': '繼續',
        'btn-share': '下載圖片',
        'btn-export-csv': '匯出CSV',
        'btn-copy-link': '複製分享連結',
        'btn-qr-code': '顯示QR碼',
        'btn-reset': '新會議',
        'bmc-text': '請我喝杯咖啡',
        'footer-tip': '💡 提示：減少會議時間或人數可大幅節省成本',
        'shortcuts': '快捷鍵：Space = 開始/暫停 | Esc = 重置 | F = 全螢幕',
        'minutes': '分',
        'seconds': '秒',
        'people': '人',
        'btn-fullscreen': '全螢幕模式',
        'exit-fullscreen-hint': '按 ESC 退出全螢幕',
        'info-attendees': '{count} 位參與者',
        'info-rate': '平均 {currency}{rate}/小時',
        'share-title': '會議成本報告',
        'share-saving': '透過高效會議，我們節省了寶貴的時間和金錢！',
        'cost-warning': '⚠️ 會議成本已超過 {currency}500！',
        'qr-title': '掃描以載入此會議設定',
        'btn-close': '關閉',
        'template-title': '📋 會議模板',
        'btn-save-template': '+ 儲存為模板',
        'template-empty': '尚無模板，儲存第一個吧！',
        'template-modal-title': '儲存會議模板',
        'template-name-placeholder': '例如：團隊週會、客戶簡報',
        'btn-save': '儲存',
        'btn-cancel': '取消',
        'btn-load': '載入',
        'btn-delete': '刪除',
        'template-saved': '✓ 模板已儲存！',
        'template-loaded': '✓ 模板已載入！',
        'template-deleted': '✓ 模板已刪除！',
        'budget-enable': '🎯 啟用預算警報',
        'budget-target': '目標預算',
        'budget-exceeded': '⚠️ 已超出預算！',
        'budget-remaining': '剩餘',
        'budget-over': '超出',
        'budget-progress': '預算使用',
        'budget-enable': '🎯 Enable Budget Alert',
        'budget-target': 'Target Budget',
        'budget-exceeded': '⚠️ Budget Exceeded!',
        'budget-remaining': 'Remaining',
        'budget-over': 'Over',
        'budget-progress': 'Budget Used',
         'history-title': '📝 會議記錄',
        'btn-clear-history': '清除全部',
        'history-empty': '尚無會議記錄',
        'history-total': '總會議',
        'history-total-cost': '總成本',
        'history-avg-duration': '平均時長',
        'history-cleared': '✓ 記錄已清除！',
        'history-confirm-clear': '確定要清除所有會議記錄？',
        'minutes-short': '分鐘'
    },
    en: {
        'title': '💸 Meeting Cost Calculator',
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
        'cost-warning': '⚠️ Meeting cost exceeded {currency}500!',
        'qr-title': 'Scan to load these settings',
        'btn-close': 'Close',
         'template-title': '📋 Meeting Templates',
        'btn-save-template': '+ Save as Template',
        'template-empty': 'No templates yet. Save your first one!',
        'template-modal-title': 'Save Meeting Template',
        'template-name-placeholder': 'e.g., Team Weekly, Client Demo',
        'btn-save': 'Save',
        'btn-cancel': 'Cancel',
        'btn-load': 'Load',
        'btn-delete': 'Delete',
        'template-saved': '✓ Template saved!',
        'template-loaded': '✓ Template loaded!',
        'template-deleted': '✓ Template deleted!',
        'history-title': '📝 Meeting History',
        'btn-clear-history': 'Clear All',
        'history-empty': 'No meeting records yet',
        'history-total': 'Total Meetings',
        'history-total-cost': 'Total Cost',
        'history-avg-duration': 'Avg Duration',
        'history-cleared': '✓ History cleared!',
        'history-confirm-clear': 'Clear all meeting history?',
        'minutes-short': 'min'
    }
};

let currentLang = 'en';
let currentCurrency = 'HKD';

// 貨幣符號映射
const currencySymbols = {
    'HKD': 'HK$',
    'USD': '$',
    'EUR': '€',
    'GBP': '£',
    'CNY': '¥',
    'JPY': '¥'
};

// 切換語言
function switchLanguage(lang) {
    currentLang = lang;
    
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[lang][key]) {
            if (key === 'per-minute') {
                element.innerHTML = translations[lang][key] + '<span id="per-minute">' + perMinuteEl.textContent + '</span>';
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
}

// 更新貨幣標籤
function updateCurrencyLabel() {
    const label = document.querySelector('label[for="hourly-rate"]');
    label.textContent = translations[currentLang]['label-hourly-rate'] + ' (' + currentCurrency + ')';
}

// 更新會議資訊顯示
function updateMeetingInfo() {
    const attendees = parseInt(attendeesInput.value) || 0;
    const hourlyRate = parseFloat(hourlyRateInput.value) || 0;
    const symbol = currencySymbols[currentCurrency];
    
    const infoText = translations[currentLang]['info-attendees'].replace('{count}', attendees) + 
                     ' · ' + 
                     translations[currentLang]['info-rate']
                        .replace('{currency}', symbol)
                        .replace('{rate}', hourlyRate);
    
    document.getElementById('meeting-info').innerHTML = infoText;
}

// ========== 原有功能 ==========
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
    document.querySelector('.input-section').style.display = 'none';
    document.querySelector('.estimate-section').style.display = 'none';
    document.querySelector('.budget-section').style.display = 'none';
    document.querySelector('.template-section').style.display = 'none';
    startButton.style.display = 'none';
    
    document.querySelector('.support-section').style.display = 'none';
    document.getElementById('history-section').style.display = 'none';

    timerSection.classList.add('active');
    pauseButton.style.display = 'flex';
    
    updateMeetingInfo();
    
    startTime = Date.now();
    elapsedSeconds = 0;
    pausedTime = 0;
    isPaused = false;
    hasShownWarning = false;
    budgetExceededShown = false; 
    removeBudgetExceededBanner();
    
    timerInterval = setInterval(updateTimer, 100);
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

    // 更新預算進度（新增）
    updateBudgetProgress(currentCost);
    
    // 成本警報（超過500）
    if (currentCost >= 500 && !hasShownWarning) {
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
        pausedTime += Date.now() - pauseStartTime;
        
        pauseButton.classList.remove('paused');
        pauseButton.innerHTML = `
            <span>⏸️</span>
            <span data-i18n="btn-pause">${translations[currentLang]['btn-pause']}</span>
        `;
        
        document.querySelector('.timer-display').classList.remove('stopped');
        document.querySelector('[data-i18n="timer-label"]').textContent = 
            translations[currentLang]['timer-label'];
    } else {
        // 暫停
        isPaused = true;
        pauseStartTime = Date.now();
        
        pauseButton.classList.add('paused');
        pauseButton.innerHTML = `
            <span>▶️</span>
            <span data-i18n="btn-resume">${translations[currentLang]['btn-resume']}</span>
        `;
        
        document.querySelector('.timer-display').classList.add('stopped');
        document.querySelector('[data-i18n="timer-label"]').textContent = 
            translations[currentLang]['timer-label-paused'];
    }
}

// 成本警報
function showCostWarning() {
    const symbol = currencySymbols[currentCurrency];
    const warning = document.createElement('div');
    warning.className = 'cost-warning';
    warning.textContent = translations[currentLang]['cost-warning'].replace('{currency}', symbol);
    document.body.appendChild(warning);
    
    document.querySelector('.timer-display').classList.add('alert');
    
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
    
    document.querySelector('.timer-display').classList.add('stopped');
    document.querySelector('.timer-display').classList.remove('alert');
    document.querySelector('.status-indicator').classList.remove('running');
    document.querySelector('.status-indicator').classList.add('stopped');
    document.querySelector('[data-i18n="timer-label"]').textContent = 
        translations[currentLang]['timer-label-stopped'];
    
    liveCostEl.classList.add('final');
    liveCostEl.textContent = `${symbol}${finalCost.toFixed(2)}`;
    
    stopButton.style.display = 'none';
    pauseButton.style.display = 'none';
    document.getElementById('share-actions').style.display = 'flex';
    document.getElementById('reset-button').style.display = 'block';
    document.querySelector('.support-section').style.display = 'block';
    
    // 儲存會議記錄
    saveMeetingRecord();

    if (isFullscreen) {
        setTimeout(() => {
            document.getElementById('reset-button').scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }, 300);
    }
}

// 重置
function reset() {
    if (isFullscreen) {
        if (document.exitFullscreen) {
            document.exitFullscreen();
        } else if (document.webkitExitFullscreen) {
            document.webkitExitFullscreen();
        }
        document.body.classList.remove('fullscreen-mode');
        isFullscreen = false;
    }
    
    document.querySelector('.timer-display').classList.remove('stopped');
    document.querySelector('.timer-display').classList.remove('alert');
    document.querySelector('.timer-display').classList.remove('budget-warning');
    document.querySelector('.status-indicator').classList.add('running');
    document.querySelector('.status-indicator').classList.remove('stopped');
    document.querySelector('[data-i18n="timer-label"]').textContent = 
        translations[currentLang]['timer-label'];
    liveCostEl.classList.remove('final');
    
    timerSection.classList.remove('active');
    
    document.querySelector('.input-section').style.display = 'flex';
    document.querySelector('.estimate-section').style.display = 'block';
    startButton.style.display = 'block';
    document.querySelector('.support-section').style.display = 'block';
    
    stopButton.style.display = 'block';
    pauseButton.style.display = 'none';
    pauseButton.classList.remove('paused');
    document.getElementById('share-actions').style.display = 'none';
    document.getElementById('reset-button').style.display = 'none';

    // 移除預算進度條
    const budgetProgress = document.querySelector('.budget-progress');
    const budgetInfo = document.querySelector('.budget-info');
    if (budgetProgress) budgetProgress.remove();
    if (budgetInfo) budgetInfo.remove();
    removeBudgetExceededBanner();
    
    isPaused = false;
    hasShownWarning = false;
    budgetExceededShown = false;
    
    calculateEstimate();
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ========== 儲存/載入設定 ==========
function saveSettings() {
    localStorage.setItem('meetingCalc_attendees', attendeesInput.value);
    localStorage.setItem('meetingCalc_hourlyRate', hourlyRateInput.value);
    localStorage.setItem('meetingCalc_currency', currentCurrency);
}

function loadSettings() {
    const savedAttendees = localStorage.getItem('meetingCalc_attendees');
    const savedRate = localStorage.getItem('meetingCalc_hourlyRate');
    const savedCurrency = localStorage.getItem('meetingCalc_currency');
    
    if (savedAttendees) attendeesInput.value = savedAttendees;
    if (savedRate) hourlyRateInput.value = savedRate;
    if (savedCurrency) {
        currentCurrency = savedCurrency;
        currencySelect.value = savedCurrency;
    }
}

// ========== URL 分享參數 ==========
function loadFromURL() {
    const params = new URLSearchParams(window.location.search);
    
    if (params.has('attendees')) {
        attendeesInput.value = params.get('attendees');
    }
    if (params.has('rate')) {
        hourlyRateInput.value = params.get('rate');
    }
    if (params.has('currency')) {
        const currency = params.get('currency').toUpperCase();
        if (currencySymbols[currency]) {
            currentCurrency = currency;
            currencySelect.value = currency;
        }
    }
}

function generateShareURL() {
    const baseURL = window.location.origin + window.location.pathname;
    const params = new URLSearchParams({
        attendees: attendeesInput.value,
        rate: hourlyRateInput.value,
        currency: currentCurrency
    });
    return `${baseURL}?${params.toString()}`;
}

// ========== 事件監聽 ==========
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

document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        const lang = btn.getAttribute('data-lang');
        switchLanguage(lang);
    });
});

// ========== 鍵盤快捷鍵 ==========
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

// ========== 全螢幕模式 ==========
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
        
        document.body.classList.add('fullscreen-mode');
        isFullscreen = true;
        
        exitHint.textContent = translations[currentLang]['exit-fullscreen-hint'];
        exitHint.classList.add('show');
        setTimeout(() => {
            exitHint.classList.remove('show');
        }, 3000);
        
        fullscreenButton.innerHTML = `
            <span class="fullscreen-icon">✕</span>
            <span data-i18n="btn-fullscreen">${currentLang === 'zh' ? '退出全螢幕' : 'Exit Full Screen'}</span>
        `;
        
    } else {
        if (document.exitFullscreen) {
            document.exitFullscreen();
        } else if (document.webkitExitFullscreen) {
            document.webkitExitFullscreen();
        }
        
        document.body.classList.remove('fullscreen-mode');
        isFullscreen = false;
        
        fullscreenButton.innerHTML = `
            <span class="fullscreen-icon">⛶</span>
            <span data-i18n="btn-fullscreen">${translations[currentLang]['btn-fullscreen']}</span>
        `;
    }
}

document.addEventListener('fullscreenchange', () => {
    if (!document.fullscreenElement) {
        document.body.classList.remove('fullscreen-mode');
        isFullscreen = false;
        fullscreenButton.innerHTML = `
            <span class="fullscreen-icon">⛶</span>
            <span data-i18n="btn-fullscreen">${translations[currentLang]['btn-fullscreen']}</span>
        `;
    }
});

document.addEventListener('webkitfullscreenchange', () => {
    if (!document.webkitFullscreenElement) {
        document.body.classList.remove('fullscreen-mode');
        isFullscreen = false;
        fullscreenButton.innerHTML = `
            <span class="fullscreen-icon">⛶</span>
            <span data-i18n="btn-fullscreen">${translations[currentLang]['btn-fullscreen']}</span>
        `;
    }
});

fullscreenButton.addEventListener('click', toggleFullscreen);

// ========== 截圖分享功能 ==========
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
    
    const gradient = ctx.createLinearGradient(0, 0, 0, 600);
    gradient.addColorStop(0, '#03045e');
    gradient.addColorStop(1, '#0077b6');
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, 800, 600);
    
    ctx.fillStyle = '#caf0f8';
    ctx.font = 'bold 48px -apple-system, sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText('💸 ' + translations[currentLang]['share-title'], 400, 100);
    
    ctx.fillStyle = '#ffffff';
    ctx.font = 'bold 96px -apple-system, sans-serif';
    ctx.fillText(finalCost, 400, 250);
    
    ctx.fillStyle = '#90e0ef';
    ctx.font = '28px -apple-system, sans-serif';
    ctx.fillText(`⏱️ ${duration}  |  👥 ${attendees} ${translations[currentLang]['people']}  |  💵 ${symbol}${hourlyRate}/hr`, 400, 330);
    
    ctx.strokeStyle = '#00b4d8';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(100, 380);
    ctx.lineTo(700, 380);
    ctx.stroke();
    
    ctx.fillStyle = '#caf0f8';
    ctx.font = '24px -apple-system, sans-serif';
    ctx.fillText(translations[currentLang]['share-saving'], 400, 440);
    
    ctx.fillStyle = '#90e0ef';
    ctx.font = '20px -apple-system, sans-serif';
    ctx.fillText('meeting-cost-calculator.vercel.app', 400, 500);
    
    const shareURL = generateShareURL();
    ctx.fillStyle = '#caf0f8';
    ctx.font = 'italic 16px -apple-system, sans-serif';
    const urlText = currentLang === 'zh' ? '🔗 使用此設定: ' : '🔗 Use these settings: ';
    ctx.fillText(urlText + shareURL, 400, 550);
    
    canvas.toBlob(function(blob) {
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.download = `meeting-cost-${Date.now()}.png`;
        link.href = url;
        link.click();
        URL.revokeObjectURL(url);
        
        showToast(currentLang === 'zh' ? '✓ 圖片已下載！' : '✓ Image downloaded!');
    });
}

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

const style = document.createElement('style');
style.textContent = `
    @keyframes slideDown {
        from { transform: translate(-50%, -100%); opacity: 0; }
        to { transform: translate(-50%, 0); opacity: 1; }
    }
    @keyframes slideUp {
        from { transform: translate(-50%, 0); opacity: 1; }
        to { transform: translate(-50%, -100%); opacity: 0; }
    }
`;
document.head.appendChild(style);

shareButton.addEventListener('click', shareResult);

// ========== 複製分享連結 ==========
const copyLinkButton = document.getElementById('copy-link-button');

function copyShareLink() {
    const shareURL = generateShareURL();
    
    navigator.clipboard.writeText(shareURL).then(() => {
        showToast(currentLang === 'zh' ? '🔗 分享連結已複製！' : '🔗 Share link copied!');
        
        copyLinkButton.innerHTML = `
            <span>✓</span>
            <span>${currentLang === 'zh' ? '已複製' : 'Copied'}</span>
        `;
        
        setTimeout(() => {
            copyLinkButton.innerHTML = `
                <span>🔗</span>
                <span data-i18n="btn-copy-link">${translations[currentLang]['btn-copy-link']}</span>
            `;
        }, 2000);
        
    }).catch(() => {
        showToast(currentLang === 'zh' ? '❌ 無法複製連結' : '❌ Failed to copy link');
    });
}

copyLinkButton.addEventListener('click', copyShareLink);

// ========== 匯出CSV報告 ==========
const exportCsvButton = document.getElementById('export-csv-button');

function exportToCSV() {
    const now = new Date();
    const dateStr = now.toLocaleDateString('en-CA');
    
    if (meetingHistory.length === 0) {
        // 如果沒有歷史記錄，只匯出當前會議
        const attendees = attendeesInput.value;
        const hourlyRate = hourlyRateInput.value;
        const currency = currentCurrency;
        const symbol = currencySymbols[currency];
        const duration = elapsedTimeEl.textContent;
        const finalCost = liveCostEl.textContent.replace(symbol, '').replace('HK', '').replace(/[^\d.]/g, '');
        
        const [minutes, seconds] = duration.split(':').map(Number);
        const totalMinutes = (minutes + seconds / 60).toFixed(2);
        
        const timeStr = now.toLocaleTimeString('en-GB', { hour12: false });
        
        const csvContent = [
            ['Date', 'Time', 'Duration (min)', 'Attendees', 'Hourly Rate', 'Currency', 'Total Cost'],
            [dateStr, timeStr, totalMinutes, attendees, hourlyRate, currency, finalCost]
        ].map(row => row.join(',')).join('\n');
        
        const BOM = '\uFEFF';
        const blob = new Blob([BOM + csvContent], { type: 'text/csv;charset=utf-8;' });
        
        const link = document.createElement('a');
        const url = URL.createObjectURL(blob);
        link.setAttribute('href', url);
        link.setAttribute('download', `meeting-report-${dateStr}.csv`);
        link.style.visibility = 'hidden';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        URL.revokeObjectURL(url);
        
        showToast(currentLang === 'zh' ? '✓ CSV已下載！' : '✓ CSV downloaded!');
        return;
    }
    
    // 匯出完整歷史記錄
    const header = ['Date', 'Time', 'Duration (min)', 'Attendees', 'Hourly Rate', 'Currency', 'Total Cost'];
    const rows = meetingHistory.map(record => {
        const date = new Date(record.date);
        const dateStr = date.toLocaleDateString('en-CA');
        const timeStr = date.toLocaleTimeString('en-GB', { hour12: false });
        return [
            dateStr,
            timeStr,
            record.duration,
            record.attendees,
            record.hourlyRate,
            record.currency,
            record.cost.toFixed(2)
        ];
    });
    
    const csvContent = [header, ...rows].map(row => row.join(',')).join('\n');
    
    const BOM = '\uFEFF';
    const blob = new Blob([BOM + csvContent], { type: 'text/csv;charset=utf-8;' });
    
    const link = document.createElement('a');
    const url = URL.createObjectURL(blob);
    link.setAttribute('href', url);
    link.setAttribute('download', `meeting-history-${dateStr}.csv`);
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
    
    showToast(currentLang === 'zh' ? `✓ 已匯出 ${meetingHistory.length} 筆記錄！` : `✓ Exported ${meetingHistory.length} records!`);
}

exportCsvButton.addEventListener('click', exportToCSV);

// ========== QR碼/連結分享（備用方案）==========
const qrButton = document.getElementById('qr-button');

const qrModal = document.createElement('div');
qrModal.className = 'qr-modal';
qrModal.innerHTML = `
    <div class="qr-content">
        <h3 data-i18n="qr-title">Scan to load these settings</h3>
        <div id="qr-container" style="margin: 20px 0; position: relative;">
            <img id="qr-image" style="width: 280px; height: 280px; border: 4px solid #caf0f8; border-radius: 8px; display: block; margin: 0 auto;">
            <div id="qr-fallback" style="display: none; padding: 20px; background: #f0f0f0; border-radius: 8px; text-align: left;">
                <p style="color: #03045e; font-weight: 600; margin-bottom: 10px;">📋 Share this link:</p>
                <input type="text" id="fallback-url" readonly style="width: 100%; padding: 10px; border: 2px solid #caf0f8; border-radius: 6px; font-size: 0.9em; margin-bottom: 10px;">
                <button id="copy-fallback" style="width: 100%; padding: 10px; background: #0077b6; color: white; border: none; border-radius: 6px; cursor: pointer; font-weight: 600;">Copy Link</button>
            </div>
        </div>
        <button class="qr-close" data-i18n="btn-close">Close</button>
    </div>
`;
document.body.appendChild(qrModal);

function showQRCode() {
    const shareURL = generateShareURL();
    const qrImage = document.getElementById('qr-image');
    const qrFallback = document.getElementById('qr-fallback');
    const fallbackInput = document.getElementById('fallback-url');
    
    // 先隱藏備用方案
    qrImage.style.display = 'block';
    qrFallback.style.display = 'none';
    
    // 設定備用連結
    fallbackInput.value = shareURL;
    
    // 使用 QR Server API
    const qrCodeURL = `https://api.qrserver.com/v1/create-qr-code/?size=280x280&data=${encodeURIComponent(shareURL)}`;
    
    qrImage.src = qrCodeURL;
    qrImage.alt = 'QR Code';
    
    // 更新翻譯
    qrModal.querySelector('[data-i18n="qr-title"]').textContent = 
        translations[currentLang]['qr-title'];
    qrModal.querySelector('[data-i18n="btn-close"]').textContent = 
        currentLang === 'zh' ? '關閉' : 'Close';
    
    // 圖片載入成功
    qrImage.onload = function() {
        qrModal.classList.add('show');
    };
    
    // 如果載入失敗，顯示備用方案（文字連結）
    qrImage.onerror = function() {
        console.log('QR Code API failed, showing fallback');
        qrImage.style.display = 'none';
        qrFallback.style.display = 'block';
        qrModal.classList.add('show');
    };
}

qrModal.querySelector('.qr-close').addEventListener('click', () => {
    qrModal.classList.remove('show');
});

qrModal.addEventListener('click', (e) => {
    if (e.target === qrModal) {
        qrModal.classList.remove('show');
    }
});

// 複製備用連結
document.addEventListener('click', (e) => {
    if (e.target && e.target.id === 'copy-fallback') {
        const fallbackInput = document.getElementById('fallback-url');
        fallbackInput.select();
        document.execCommand('copy');
        e.target.textContent = currentLang === 'zh' ? '✓ 已複製' : '✓ Copied';
        setTimeout(() => {
            e.target.textContent = currentLang === 'zh' ? '複製連結' : 'Copy Link';
        }, 2000);
    }
});

qrButton.addEventListener('click', showQRCode);

// ========== 目標預算模式 ==========
const budgetEnabled = document.getElementById('budget-enabled');
const budgetInputGroup = document.getElementById('budget-input-group');
const budgetTarget = document.getElementById('budget-target');
let isBudgetEnabled = localStorage.getItem('budgetEnabled') === 'true';
let budgetExceededShown = false;
let budgetExceededBanner = null;

// 載入預算設定
if (isBudgetEnabled) {
    budgetEnabled.checked = true;
    budgetInputGroup.style.display = 'flex';
}

const savedBudget = localStorage.getItem('budgetTarget');
if (savedBudget) {
    budgetTarget.value = savedBudget;
}

// 切換預算模式
budgetEnabled.addEventListener('change', (e) => {
    isBudgetEnabled = e.target.checked;
    budgetInputGroup.style.display = isBudgetEnabled ? 'flex' : 'none';
    localStorage.setItem('budgetEnabled', isBudgetEnabled);
    
    if (isBudgetEnabled) {
        budgetTarget.focus();
    }
});

// 儲存預算目標
budgetTarget.addEventListener('input', () => {
    localStorage.setItem('budgetTarget', budgetTarget.value);
});

// 顯示預算超出橫幅
function showBudgetExceededBanner() {
    if (budgetExceededBanner) return;
    
    budgetExceededBanner = document.createElement('div');
    budgetExceededBanner.className = 'budget-exceeded-banner';
    const message = currentLang === 'zh' ? '⚠️ 已超出預算！' : '⚠️ Budget Exceeded!';
    budgetExceededBanner.innerHTML = `
        <span class="budget-icon">🚨</span>
        <span>${message}</span>
    `;
    document.body.appendChild(budgetExceededBanner);
    
    // 播放提示音（如果瀏覽器支援）
    try {
        const audio = new Audio('data:audio/wav;base64,UklGRnoGAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQoGAACBhYqFbF1fdJivrJBhNjVgodDbq2EcBj+a2/LDciUFLIHO8tiJNwgZaLvt559NEAxQp+PwtmMcBjiR1/LMeSwFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBSuBzvLZiTYIG2m98OScTgwOUKXh8bllHAU2jtfyz3goBS l3yPDej0EKElyx6ezqVxQJQ5zd8cBxIgUpfs7y2og3Bxpnve/mnFIMDU+k4fG7Zh4GNI3X8dJ7LgUnd8nw4JFDChFaoe3uqVkWC0OZ2/K9bCIGKX7P8diINQcZZbzv5p1QDAZMouLyv2seBy qO2fPUfS8GJ3bK8eGSRgoQWKDt7qxcGQ1Dn9vyvmwjBSh+zfHajzgIF2W+8OihUQ4NTqPj8rhrHwg2jtjy0nswBSZzyO3PkUUMDFmf6+6rWhkMQ5vb8bxsIwUog83y2YczBxdmu+/mnVIMC0yi4fG7aCAINJDY8s9+MQYmdsjv0JFECw1Zpejtr1kZC0Kb2vG7bSMGJ3/N8dmINgcYZLzv5p1SCgxLn+3yv2ohBy+M2PTRfisFJnXI7tCRRQsNWaXo7alZGQpCmtrzumwiCCR9zvPZijYHGWK68OWdTwsNTKLj8b5sIAcwj9jy1oAxByZzzO7QkUULDVmj5+ynVxkMQpvb8rpqIwgmfMzx2II0CBlhuO/lm1ANDk2k5fK8aiAGLYvX8NR8MwcldMjt0I9GDA5ZpOjvqVQXD0Sa2fK9ayMHJXzN89iEMwkZYLfu5ZtPDQ5Nn+TwvGkfBy yJ1/DTfDMHJHTH7c+QRYEMWAUG4G1yH4YsXh8Rd' + 
        'WwqhS2Hb9l/KIcu5DphQAnBRKb+w5bqzgw5ftkGO/4BjfRSMWB6oUL1/gqD3hA03jDeLuMkJ1Q7Xp3kxfWVN1jrfKQ=='
        );
        audio.volume = 0.3;
        audio.play().catch(() => {});
    } catch (e) {}
}

// 移除預算超出橫幅
function removeBudgetExceededBanner() {
    if (budgetExceededBanner) {
        budgetExceededBanner.remove();
        budgetExceededBanner = null;
    }
}

// 更新預算進度條
function updateBudgetProgress(currentCost) {
    if (!isBudgetEnabled) return;
    
    const target = parseFloat(budgetTarget.value) || 0;
    if (target === 0) return;
    
    const percentage = Math.min((currentCost / target) * 100, 100);
    const symbol = currencySymbols[currentCurrency];
    
    // 檢查是否有進度條，沒有則建立
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
    
    // 更新樣式和文字
    progressBar.classList.remove('warning', 'exceeded');
    remainingTextEl.classList.remove('warning', 'exceeded');
    document.querySelector('.timer-display').classList.remove('budget-warning');
    
    if (currentCost >= target) {
        // 超出預算
        progressBar.classList.add('exceeded');
        remainingTextEl.classList.add('exceeded');
        remainingTextEl.textContent = `${translations[currentLang]['budget-over']}: ${symbol}${(currentCost - target).toFixed(2)}`;
        document.querySelector('.timer-display').classList.add('budget-warning');
        
        if (!budgetExceededShown) {
            showBudgetExceededBanner();
            budgetExceededShown = true;
        }
    } else if (percentage >= 80) {
        // 警告狀態（80%以上）
        progressBar.classList.add('warning');
        remainingTextEl.classList.add('warning');
        remainingTextEl.textContent = `${translations[currentLang]['budget-remaining']}: ${symbol}${(target - currentCost).toFixed(2)}`;
    } else {
        // 正常狀態
        remainingTextEl.textContent = `${translations[currentLang]['budget-remaining']}: ${symbol}${(target - currentCost).toFixed(2)}`;
    }
}

// ========== 會議記錄 ==========
let meetingHistory = JSON.parse(localStorage.getItem('meetingHistory')) || [];

// 儲存會議記錄
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
    
    meetingHistory.unshift(record); // 加到開頭
    
    // 只保留最近50筆
    if (meetingHistory.length > 50) {
        meetingHistory = meetingHistory.slice(0, 50);
    }
    
    localStorage.setItem('meetingHistory', JSON.stringify(meetingHistory));
    renderHistory();
}

// 渲染會議記錄
function renderHistory() {
    const historySection = document.getElementById('history-section');
    const historyList = document.getElementById('history-list');
    
    if (meetingHistory.length === 0) {
        historySection.style.display = 'none';
        return;
    }
    
    historySection.style.display = 'block';
    
    // 計算統計數據
    const totalMeetings = meetingHistory.length;
    const totalCost = meetingHistory.reduce((sum, record) => sum + record.cost, 0);
    const avgDuration = meetingHistory.reduce((sum, record) => sum + record.duration, 0) / totalMeetings;
    
    // 渲染統計
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
                <div class="history-stat-value">${Math.round(avgDuration)} <span style="font-size: 0.7em;">${translations[currentLang]['minutes-short']}</span></div>
            </div>
        </div>
    `;
    
    // 渲染記錄列表
    const recordsHTML = meetingHistory.map(record => {
        const date = new Date(record.date);
        const dateStr = date.toLocaleDateString(currentLang === 'zh' ? 'zh-TW' : 'en-US', {
            month: 'short',
            day: 'numeric',
            year: 'numeric'
        });
        const timeStr = date.toLocaleTimeString(currentLang === 'zh' ? 'zh-TW' : 'en-US', {
            hour: '2-digit',
            minute: '2-digit'
        });
        
        return `
            <div class="history-item">
                <div class="history-item-header">
                    <span class="history-date">${dateStr} ${timeStr}</span>
                    <span class="history-cost">${currencySymbols[record.currency]}${record.cost.toFixed(2)}</span>
                </div>
                <div class="history-details">
                    <span class="history-detail-item">👥 ${record.attendees} ${currentLang === 'zh' ? '人' : 'people'}</span>
                    <span class="history-detail-item">⏱️ ${record.duration} ${translations[currentLang]['minutes-short']}</span>
                    <span class="history-detail-item">💵 ${currencySymbols[record.currency]}${record.hourlyRate}/hr</span>
                </div>
            </div>
        `;
    }).join('');
    
    historyList.innerHTML = recordsHTML + statsHTML;
}

// 清除所有記錄
document.getElementById('clear-history-btn').addEventListener('click', () => {
    if (confirm(translations[currentLang]['history-confirm-clear'])) {
        meetingHistory = [];
        localStorage.removeItem('meetingHistory');
        renderHistory();
        showToast(translations[currentLang]['history-cleared']);
    }
});

// ========== 深色模式 ==========
const themeToggle = document.getElementById('theme-toggle');
let isDarkMode = localStorage.getItem('darkMode') === 'true';

function toggleDarkMode() {
    isDarkMode = !isDarkMode;
    document.body.classList.toggle('dark-mode', isDarkMode);
    themeToggle.querySelector('.theme-icon').textContent = isDarkMode ? '☀️' : '🌙';
    localStorage.setItem('darkMode', isDarkMode);
}

// 載入保存的主題
if (isDarkMode) {
    document.body.classList.add('dark-mode');
    themeToggle.querySelector('.theme-icon').textContent = '☀️';
}

themeToggle.addEventListener('click', toggleDarkMode);

// ========== 預設模板管理 ==========
let templates = JSON.parse(localStorage.getItem('meetingTemplates')) || [];

// 建立模板輸入彈窗
const templateModal = document.createElement('div');
templateModal.className = 'template-modal';
templateModal.innerHTML = `
    <div class="template-modal-content">
        <h3 data-i18n="template-modal-title">Save Meeting Template</h3>
        <input type="text" id="template-name-input" data-i18n-placeholder="template-name-placeholder" placeholder="e.g., Team Weekly, Client Demo">
        <div class="template-modal-buttons">
            <button class="template-save-confirm" id="template-save-confirm" data-i18n="btn-save">Save</button>
            <button class="template-modal-cancel" id="template-modal-cancel" data-i18n="btn-cancel">Cancel</button>
        </div>
    </div>
`;
document.body.appendChild(templateModal);

// 顯示模板列表
function renderTemplates() {
    const templateList = document.getElementById('template-list');
    
    if (templates.length === 0) {
        templateList.innerHTML = '<p class="template-empty" data-i18n="template-empty">' + 
            translations[currentLang]['template-empty'] + '</p>';
        return;
    }
    
    templateList.innerHTML = templates.map((template, index) => `
        <div class="template-item">
            <div class="template-info">
                <div class="template-name">${template.name}</div>
                <div class="template-details">
                    👥 ${template.attendees} · 
                    ${currencySymbols[template.currency]}${template.hourlyRate}/hr · 
                    ${template.duration} min
                </div>
            </div>
            <div class="template-actions">
                <button class="template-load-btn" onclick="loadTemplate(${index})" data-i18n="btn-load">
                    ${translations[currentLang]['btn-load']}
                </button>
                <button class="template-delete-btn" onclick="deleteTemplate(${index})" data-i18n="btn-delete">
                    ${translations[currentLang]['btn-delete']}
                </button>
            </div>
        </div>
    `).join('');
}

// 儲存模板
document.getElementById('save-template-btn').addEventListener('click', () => {
    templateModal.classList.add('show');
    document.getElementById('template-name-input').value = '';
    document.getElementById('template-name-input').focus();
});

// 確認儲存
document.getElementById('template-save-confirm').addEventListener('click', () => {
    const name = document.getElementById('template-name-input').value.trim();
    
    if (!name) {
        document.getElementById('template-name-input').focus();
        return;
    }
    
    const newTemplate = {
        name: name,
        attendees: parseInt(attendeesInput.value),
        hourlyRate: parseFloat(hourlyRateInput.value),
        duration: parseInt(durationInput.value),
        currency: currentCurrency
    };
    
    templates.push(newTemplate);
    localStorage.setItem('meetingTemplates', JSON.stringify(templates));
    
    templateModal.classList.remove('show');
    renderTemplates();
    showToast(translations[currentLang]['template-saved']);
});

// 取消儲存
document.getElementById('template-modal-cancel').addEventListener('click', () => {
    templateModal.classList.remove('show');
});

// 點擊外部關閉
templateModal.addEventListener('click', (e) => {
    if (e.target === templateModal) {
        templateModal.classList.remove('show');
    }
});

// 載入模板
function loadTemplate(index) {
    const template = templates[index];
    
    attendeesInput.value = template.attendees;
    hourlyRateInput.value = template.hourlyRate;
    durationInput.value = template.duration;
    currentCurrency = template.currency;
    currencySelect.value = template.currency;
    
    calculateEstimate();
    updateCurrencyLabel();
    
    showToast(translations[currentLang]['template-loaded']);
}

// 刪除模板
function deleteTemplate(index) {
    if (confirm(currentLang === 'zh' ? '確定要刪除此模板？' : 'Delete this template?')) {
        templates.splice(index, 1);
        localStorage.setItem('meetingTemplates', JSON.stringify(templates));
        renderTemplates();
        showToast(translations[currentLang]['template-deleted']);
    }
}

// Enter 鍵儲存
document.getElementById('template-name-input').addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        document.getElementById('template-save-confirm').click();
    }
});

// ========== 數字輸入框增減按鈕 ==========
function incrementValue(id) {
    const input = document.getElementById(id);
    const step = parseFloat(input.step) || 1;
    const max = parseFloat(input.max);
    const current = parseFloat(input.value) || 0;
    const newValue = current + step;
    
    if (!max || newValue <= max) {
        input.value = newValue;
        calculateEstimate();
    }
}

function decrementValue(id) {
    const input = document.getElementById(id);
    const step = parseFloat(input.step) || 1;
    const min = parseFloat(input.min) || 0;
    const current = parseFloat(input.value) || 0;
    const newValue = current - step;
    
    if (newValue >= min) {
        input.value = newValue;
        calculateEstimate();
    }
}

// 初始化
loadSettings();
loadFromURL();
switchLanguage('en');
calculateEstimate();
updateCurrencyLabel();
renderTemplates(); 
renderHistory();