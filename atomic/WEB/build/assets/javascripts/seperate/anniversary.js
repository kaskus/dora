const buttonAnniversaryStart=document.querySelector(".jsButtonAnniversaryStart"),buttonAnniversaryPost=document.querySelector(".jsButtonAnniversaryPost"),buttonAnniversaryRecord=document.querySelector(".jsButtonAnniversaryRecord"),buttonAnniversaryErase=document.querySelector(".jsButtonAnniversaryErase");let listening=!1,textBox=document.querySelector(".jsAnniversaryTextBox");const sound=document.querySelector(".jsSound");if(window.SpeechRecognition=window.webkitSpeechRecognition||window.SpeechRecognition,"undefined"!=typeof SpeechRecognition){var recognition=new SpeechRecognition;recognition.lang="id-ID",recognition.onstart=function(){listening=!0,$(".jsRecordElement").addClass("is-recording"),$(".jsRecordHint").text("Silahkan Berbicara...")},recognition.onend=function(){listening=!1,$(".jsRecordElement").removeClass("is-recording"),$(".jsRecordHint").text("Klik tombol mic untuk mulai berbicara")}}else $(".jsRecordHint").text("Fitur Voice Recognition Hanya Tersedia di Browser Chrome dan Mozilla Versi Terbaru"),$(".jsButtonAnniversaryRecord").hide();buttonAnniversaryRecord.addEventListener("click",()=>{sound.play(),dictate()}),buttonAnniversaryErase.addEventListener("click",()=>{$(".jsAnniversaryTextBox").html("")}),buttonAnniversaryStart.addEventListener("click",()=>{openModal("jsModalAnniversaryPosting")}),buttonAnniversaryPost.addEventListener("click",()=>{openModal("jsModalAnniversaryFinish")});const dictate=()=>{recognition.start(),recognition.onresult=(e=>{const n=e.results[0][0].transcript;textBox.innerHTML=n})};