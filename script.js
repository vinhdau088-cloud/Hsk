const speak=document.getElementById("speak");

speak.onclick=()=>{

const msg=new SpeechSynthesisUtterance("你好");

msg.lang="zh-CN";

speechSynthesis.speak(msg);

}
