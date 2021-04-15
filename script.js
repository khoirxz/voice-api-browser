var message = document.querySelector("#message");
const lampu = document.querySelector("#lampu");

var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition;
var SpeechGrammarList = SpeechGrammarList || webkitSpeechGrammarList;

var grammar = "#JSGF V1.0;";

var recognition = new SpeechRecognition();
var speechRecognitionList = new SpeechGrammarList();
speechRecognitionList.addFromString(grammar, 1);
recognition.grammars = speechRecognitionList;
recognition.lang = "id-ID";
recognition.interimResults = false;

recognition.onresult = function (event) {
  var last = event.results.length - 1;
  var command = event.results[last][0].transcript;
  message.textContent = " " + command + ".";

  // if (command.toLowerCase() === "steve") {
  //   document.querySelector("#chkSteve").checked = true;
  // } else if (command.toLowerCase() === "select tony") {
  //   document.querySelector("#chkTony").checked = true;
  // } else if (command.toLowerCase() === "select bruce") {
  //   document.querySelector("#chkBruce").checked = true;
  // } else if (command.toLowerCase() === "select nick") {
  //   document.querySelector("#chkNick").checked = true;
  // }

  if (command.toLowerCase() === "nyala") {
    lampu.src = "on.png";
  } else if (command.toLowerCase() === "mati") {
    lampu.src = "off.png";
  }
};

recognition.onspeechend = function () {
  recognition.stop();
};

recognition.onerror = function (event) {
  message.textContent = "Error occurred in recognition: " + event.error;
};

document
  .querySelector("#btnGiveCommand")
  .addEventListener("click", function () {
    recognition.start();
  });
