// Sidebar Mobile Toggle
const openSidebarBtn = document.getElementById('openSidebar');
const closeSidebarBtn = document.getElementById('closeSidebar');
const sidebar = document.getElementById('sidebar');
const sidebarOverlay = document.getElementById('sidebarOverlay');

if (openSidebarBtn) {
    openSidebarBtn.addEventListener('click', () => {
        sidebar.classList.add('active');
        sidebarOverlay.classList.add('active');
    });
}

if (closeSidebarBtn) {
    closeSidebarBtn.addEventListener('click', () => {
        sidebar.classList.remove('active');
        sidebarOverlay.classList.remove('active');
    });
}

if (sidebarOverlay) {
    sidebarOverlay.addEventListener('click', () => {
        sidebar.classList.remove('active');
        sidebarOverlay.classList.remove('active');
    });
}

// Từ điển chức năng
function selectWord(hanzi, pinyin, meaning, example) {
    document.getElementById('displayHanzi').innerText = hanzi;
    document.getElementById('displayPinyin').innerText = pinyin;
    document.getElementById('displayMeaning').innerText = meaning;
    document.getElementById('displayExample').innerHTML = example;

    // Active item trong list
    const items = document.querySelectorAll('#dictList li');
    items.forEach(item => item.classList.remove('active'));
    event.currentTarget.classList.add('active');
}

function speakWord() {
    const text = document.getElementById('displayHanzi').innerText;
    if ('speechSynthesis' in window) {
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = 'zh-CN';
        window.speechSynthesis.speak(utterance);
    } else {
        alert('Trình duyệt của bạn không hỗ trợ phát âm!');
    }
}

function searchDict() {
    const query = document.getElementById('dictInput').value;
    if (query.trim() !== "") {
        document.getElementById('displayHanzi').innerText = query;
        document.getElementById('displayPinyin').innerText = 'pīnyīn';
        document.getElementById('displayMeaning').innerText = 'Kết quả tra cứu cho "' + query + '"';
        document.getElementById('displayExample').innerText = 'Ví dụ mẫu tương ứng với từ "' + query + '"';
    }
}
