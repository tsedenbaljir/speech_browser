const btn = document.querySelector('.talk');
const content = document.querySelector('.content');

const greetings = [
    'im fined how are you today',
    'so happy today',
    'i wokeup'
];

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();

recognition.onstart=function(){
    console.log('voice is act');
};

recognition.onresult = function(event){
    const current = event.resultIndex;
    const transcript = event.results[current][0].transcript; 
    content.textContent = transcript;
    readOutLoud(transcript);
};

btn.addEventListener('click', () =>{
    recognition.start();
});

function readOutLoud(message){
    const speech = new SpeechSynthesisUtterance();
    speech.text = "i'm not understund";

    if(message.includes('how are you')){
        const finalText = greetings[(Math.random() * greetings.length)];
        
        speech.text = finalText;
    }

    speech.volume = 1;
    speech.rate = 1;
    speech.pitch = 1;

    window.speechSynthesis.speak(speech);
}

// function readOutLoud(message){
//     const speech = new SpeechSynthesisUtterance();
//     speech.text = message;
//     speech.volume = 1;
//     speech.rate = 1;
//     speech.pitch = 1;

//     window.speechSynthesis.speak(speech);
// }