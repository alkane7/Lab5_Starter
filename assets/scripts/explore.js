// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  const textArea = document.getElementById('text-to-speak');
  const voiceSelect = document.getElementById('voice-select');
  const talkButton = document.querySelector('button');
  const faceImage = document.querySelector('img');

  let voices = [];

  function populateVoices() {
    voices = speechSynthesis.getVoices();
    voices.forEach((voice, i) => {
      const option = document.createElement('option');
      option.value = i;
      option.textContent = `${voice.name} (${voice.lang})`;
      voiceSelect.appendChild(option);
    });
  }

  populateVoices();
  speechSynthesis.addEventListener('voiceschanged', populateVoices);

  talkButton.addEventListener('click', () => {
    const text = textArea.value;
    const selectedIndex = voiceSelect.value;

    if (!text || selectedIndex === 'select') return;

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.voice = voices[selectedIndex];

    faceImage.src = 'assets/images/smiling-open.png';

    utterance.addEventListener('end', () => {
      faceImage.src = 'assets/images/smiling.png';
    });

    speechSynthesis.speak(utterance);
  });
}
