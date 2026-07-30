// =============================
// Hanzi Master Animation
// =============================

// Hiệu ứng xuất hiện khi tải trang
window.addEventListener("load", () => {

    document.querySelector(".hero").animate(
        [
            {
                opacity:0,
                transform:"translateY(50px)"
            },
            {
                opacity:1,
                transform:"translateY(0px)"
            }
        ],
        {
            duration:1000,
            easing:"ease-out",
            fill:"forwards"
        }
    );

});


// =============================
// Hiệu ứng chuột
// =============================

document.addEventListener("mousemove",(e)=>{

    document.body.style.backgroundPosition=
        `${e.clientX/30}px ${e.clientY/30}px`;

});


// =============================
// Nút Bắt đầu học
// =============================

document.querySelector(".start")
.addEventListener("click",()=>{

    alert("🚀 Chào mừng đến với Hanzi Master!");

});


// =============================
// Nút Luyện thi
// =============================

document.querySelector(".exam")
.addEventListener("click",()=>{

    alert("📝 Đang mở hệ thống luyện thi...");

});


// =============================
// Hover Logo
// =============================

const logo=document.querySelector(".logo");

logo.addEventListener("mouseenter",()=>{

    logo.style.transform="scale(1.08)";
    logo.style.transition=".3s";

});

logo.addEventListener("mouseleave",()=>{

    logo.style.transform="scale(1)";

});
