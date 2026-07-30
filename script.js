let hskData = {};
let currentLevel = 'hsk1'; // Mặc định là HSK 1

// 1. Tải dữ liệu từ tệp JSON
fetch('./hsk_data.json')
  .then(response => response.json())
  .then(data => {
    hskData = data;
    console.log("Đã tải xong dữ liệu HSK!");
    
    // Đăng ký sự kiện click cho các nút HSK 1 -> HSK 6
    setupHskButtons();
    
    // Hiển thị từ ngẫu nhiên đầu tiên của HSK 1 khi vừa vào trang
    showRandomWord('hsk1');
  })
  .catch(error => console.error("Lỗi khi tải JSON:", error));

// 2. Hàm lấy và hiển thị một từ NGẪU NHIÊN theo cấp độ HSK
function showRandomWord(level) {
  currentLevel = level;
  const wordList = hskData[level];
  
  if (!wordList || wordList.length === 0) return;

  // Lấy ngẫu nhiên 1 từ trong danh sách
  const randomIndex = Math.floor(Math.random() * wordList.length);
  const randomWord = wordList[randomIndex];

  // Cập nhật lên giao diện HTML (với điều kiện các ID trùng khớp trong index.html)
  const hanziEl = document.getElementById("hanzi") || document.querySelector(".hanzi") || document.querySelector("h1");
  const pinyinEl = document.getElementById("pinyin") || document.querySelector(".pinyin");
  const meaningEl = document.getElementById("meaning") || document.querySelector(".meaning");

  if (hanziEl) hanziEl.innerText = randomWord.hanzi;
  if (pinyinEl) pinyinEl.innerText = randomWord.pinyin;
  if (meaningEl) meaningEl.innerText = randomWord.meaning;
}

// 3. Bắt sự kiện khi bấm vào các nút HSK 1 đến HSK 6
function setupHskButtons() {
  // Tìm tất cả các phần tử chứa chữ "HSK"
  const buttons = document.querySelectorAll("button, .card, div");
  
  buttons.forEach(btn => {
    const text = btn.innerText ? btn.innerText.trim() : "";
    
    // Nếu nút có chứa chữ "HSK 1", "HSK 2", ...
    if (/HSK\s*[1-6]/i.test(text)) {
      const levelNumber = text.match(/[1-6]/)[0];
      
      btn.style.cursor = "pointer";
      btn.onclick = () => {
        showRandomWord(`hsk${levelNumber}`);
      };
    }
  });
}

// 4. Hàm phát âm tiếng Trung
function speakWord(text) {
  if (!('speechSynthesis' in window)) return;
  
  window.speechSynthesis.cancel();
  const msg = new SpeechSynthesisUtterance(text);
  msg.lang = "zh-CN";
  msg.rate = 0.8;
  
  window.speechSynthesis.speak(msg);
}

// 5. Bấm vào khung từ vựng hoặc nút phát âm để nghe giọng đọc
document.addEventListener("click", (e) => {
  // Nếu bấm vào khu vực hiển thị chữ Trung Quốc
  if (e.target.id === "hanzi" || e.target.closest("#hanzi") || e.target.id === "speak") {
    const hanziEl = document.getElementById("hanzi") || document.querySelector("h1");
    if (hanziEl) {
      speakWord(hanziEl.innerText);
    }
  }
});
