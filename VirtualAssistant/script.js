/*let btn=document.querySelector("#btn")
let content=document.querySelector("#content")
let voice=document.querySelector("#voice")

function speak(text){
    let text_speak=new SpeechSynthesisUtterance(text)
    text_speak.rate=1
    text_speak.pitch=1.5
    text_speak.volume=1
    //text_speak.lang="hi-GB"
    text_speak.lang = "en-GB"; 
    window.speechSynthesis.speak(text_speak)
}

function wishMe(){
    let day=new Date()
    let hours=day.getHours()
    if(hours>=0 && hours<12){
        speak("Good Morning")
    }
    else if(hours>=12 && hours<16){
        speak("Good Afternoon")
    }
    else{
        speak("Good Evening")
    }
}
window.addEventListener('load',()=>{
    wishMe()
})

let speechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition
let recognition = new speechRecognition()
recognition.onresult = (event)=>{
    let currentIndex=event.resultIndex
    let transcript=event.results[currentIndex][0].transcript
    content.innerText=transcript
    //console.log(event)
    takeCommand(transcript.toLowerCase())
}

btn.addEventListener("click",()=>{
    recognition.start()
    btn.style.display="none"
    voice.style.display="block"
})

function takeCommand(message){
    btn.style.display="flex"
    voice.style.display="block"
    if(message.includes("Hello") || message.includes("Hey") || message.includes("Hi")){
        speak("Hello, How can I help you?")
    }
    else if(message.includes("Who are you?")){
        speak("I am Arina. Your Virtual Assistant created by Ar-chah-na")
    }
    else if(message.includes("Open youtube")){
        speak("Opening youtube....")
        window.open("https://www.youtube.com/","_blank")
    }
    else if(message.includes("Open google")){
        speak("Opening google....")
        window.open("https://www.google.com/","_blank")
    }
    else if(message.includes("Open facebook")){
        speak("Opening facebook....")
        window.open("https://www.facebook.com/","_blank")
    }
    else if(message.includes("Open instagram")){
        speak("Opening instagram....")
        window.open("https://www.instagram.com/","_blank")
    }
    else if(message.includes("Open github")){
        speak("Opening Github....")
        window.open("https://github.com/")
    }
    else if(message.includes("Open linkedin")){
        speak("Opening linkedin....")
        window.open("https://linkedin.com/","_blank")
    }
    else if(message.includes("Open calculator")){
        speak("Opening calculator....")
        window.open("calculator://")
    }
    else if(message.includes("Open whatsapp")){
        speak("Opening whatsapp....")
        window.open("https://web.whatsapp.com/","_blank")
    }
    else if(message.includes("Open gmail")){
        speak("Opening gmail....")
        window.open("https://mail.google.com/mail/","_blank")
    }
    else if(message.includes("time")){
        let time=new Date().toLocaleString(undefined,{hour:"numeric",minute:"numeric"})
        speak(time)
    }
    else if(message.includes("date")){
        let date=new Date().toLocaleString(undefined,{day:"numeric",month:"short"})
        speak(date)
    }
    else{
        let finalText="This is what I found on internet regarding" + message.replace("Arina","") || message.replace("Arena","")
        speak(finalText)
        window.open(`https://www.google.com/search?q=${message.replace("Arina","")}`,"_blank")
    }
}*/

let btn = document.querySelector("#btn");
let content = document.querySelector("#content");
let voice = document.querySelector("#voice");

function speak(text) {
    let text_speak = new SpeechSynthesisUtterance(text);
    text_speak.rate = 1;
    text_speak.pitch = 1.5;
    text_speak.volume = 2;
    text_speak.lang = "en-GB"; 
    window.speechSynthesis.speak(text_speak);
}

function wishMe() {
    let day = new Date();
    let hours = day.getHours();
    if (hours >= 0 && hours < 12) {
        speak("Good Morning");
    } else if (hours >= 12 && hours < 16) {
        speak("Good Afternoon");
    } else {
        speak("Good Evening");
    }
}

window.addEventListener('load', () => {
    wishMe();
});

let speechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
let recognition = new speechRecognition();

recognition.onresult = (event) => {
    let currentIndex = event.resultIndex;
    let transcript = event.results[currentIndex][0].transcript;
    let message = transcript.toLowerCase().trim(); //  Normalize here

    content.innerText = transcript;
    console.log("Recognized:", message); //  Add debug line
    takeCommand(message);
};

btn.addEventListener("click", () => {
    recognition.start();
    btn.style.display = "none";
    voice.style.display = "block";
});

function takeCommand(message) {
    btn.style.display = "flex";
    voice.style.display = "block";

    console.log("Command received:", message);  // Debug log

    if (
        (message.includes("hello") || message.includes("hi") || message.includes("hey")) &&
        (message.includes("arina") || message.includes("arena"))
    ) {
        speak("Hello, how can I help you?");
        return;
    }

    if (message.includes("who are you") || message.includes("your name")) {
        speak("I am Arina, your virtual assistant created by Ar-chah-na.");
        return;
    }

    if (message.includes("open youtube")) {
        speak("Opening YouTube...");
        window.open("https://www.youtube.com/", "_blank");
        return;
    }

    if (message.includes("open google")) {
        speak("Opening Google...");
        window.open("https://www.google.com/", "_blank");
        return;
    }

    if (message.includes("open facebook")) {
        speak("Opening Facebook...");
        window.open("https://www.facebook.com/", "_blank");
        return;
    }

    if (message.includes("open instagram")) {
        speak("Opening Instagram...");
        window.open("https://www.instagram.com/", "_blank");
        return;
    }

    if (message.includes("open github")) {
        speak("Opening GittHub...");
        window.open("https://github.com/", "_blank");
        return;
    }

    if (message.includes("open linkedin")) {
        speak("Opening LinkedIn...");
        window.open("https://www.linkedin.com/", "_blank");
        return;
    }

    if (message.includes("open whatsapp")) {
        speak("Opening WhatsApp...");
        window.open("https://web.whatsapp.com/", "_blank");
        return;
    }

    if (message.includes("open gmail")) {
        speak("Opening Gmail...");
        window.open("https://mail.google.com/", "_blank");
        return;
    }

    if (message.includes("open calculator")) {
        speak("Opening calculator...");
        //window.open("https://www.google.com/search?q=calculator", "_blank");
        window.open("calculator://")
        return;
    }

    if (message.includes("time")) {
        let time = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
        speak("The current time is " + time);
        return;
    }

    if (message.includes("date")) {
        let date = new Date().toLocaleDateString([], { day: 'numeric', month: 'long' });
        speak("Today's date is " + date);
        return;
    }

    //  Fallback
    let query = message.replace(/arina|arena/gi, "").trim();
    let finalText = "This is what I found on the internet regarding " + query;
    speak(finalText);
    window.open(`https://www.google.com/search?q=${query}`, "_blank");
}
