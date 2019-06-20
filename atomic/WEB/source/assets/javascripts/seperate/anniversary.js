const buttonAnniversaryStart = document.querySelector('.jsButtonAnniversaryStart');
const buttonAnniversaryPost = document.querySelector('.jsButtonAnniversaryPost');
const buttonAnniversaryRecord = document.querySelector('.jsButtonAnniversaryRecord');
const buttonAnniversaryErase = document.querySelector('.jsButtonAnniversaryErase');
let listening = false;
let textBox = document.querySelector('.jsAnniversaryTextBox');
const sound = document.querySelector('.jsSound');

window.SpeechRecognition = window.webkitSpeechRecognition || window.SpeechRecognition;

if (typeof SpeechRecognition !== 'undefined') {
    var recognition = new SpeechRecognition();
    recognition.lang = "id-ID";

    recognition.onstart = function() {
      listening = true;
      $('.jsRecordElement').addClass('is-recording');
      $('.jsRecordHint').text('Silahkan Berbicara...');
    };

    recognition.onend = function() {
      listening = false;
      $('.jsRecordElement').removeClass('is-recording');
      $('.jsRecordHint').text('Klik tombol mic untuk mulai berbicara');
    };
}
else{
  $('.jsRecordHint').text('Fitur Voice Recognition Hanya Tersedia di Browser Chrome dan Mozilla Versi Terbaru');
  $('.jsButtonAnniversaryRecord').hide();
}


buttonAnniversaryRecord.addEventListener('click', () => {
  sound.play();
  dictate();
});

buttonAnniversaryErase.addEventListener('click', () => {
  $('.jsAnniversaryTextBox').html('');
});

buttonAnniversaryStart.addEventListener('click', () => {
  openModal('jsModalAnniversaryPosting');
});

buttonAnniversaryPost.addEventListener('click', () => {
  openModal('jsModalAnniversaryFinish');
});



const dictate = () => {
  recognition.start();
  recognition.onresult = (event) => {
    const speechToText = event.results[0][0].transcript;
    textBox.innerHTML = speechToText;
  }
}
