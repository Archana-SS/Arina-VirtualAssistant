Overview:

This project is a voice-activated virtual assistant named Arina, built using HTML, CSS, and JavaScript. It uses the browser's native Web Speech API for speech recognition and speech synthesis. Arina is designed to respond to basic voice commands, greet users based on the time of day, and perform tasks like opening websites or telling the time/date.

----

🧠 Key Features:

Feature	Description:
* Speech Recognition	Uses SpeechRecognition (Web Speech API) to capture and interpret user commands.
* Text-to-Speech	Uses SpeechSynthesisUtterance to respond vocally.
* Time-Based Greeting	Automatically greets the user with "Good Morning", "Good Afternoon", or "Good Evening" based on the system clock.
* Dynamic Commands	Can open common websites (YouTube, Google, Gmail, etc.) through voice.
* Fallback Handling	If an unknown command is given, Arina performs a Google search with the spoken phrase.
* Custom Trigger Words	Responds only to messages containing keywords like “hello arina”, avoiding false triggers.
* Visual Feedback	Displays animation (GIF) when listening, and transcript of recognized speech.

----

🔧 Technical Components:

📁 index.html
Contains the UI: title, a logo, heading with assistant's name, a microphone button, and an animated voice visual (galaxy.gif).

All JavaScript logic is loaded via script.js.

🎨 style.css
Uses a clean, tech-themed style with Orbitron font, gradients, hover effects, and shadows.

Makes the assistant visually futuristic and professional.

⚙️ script.js
Contains:

* speak(text) – Synthesizes voice responses.

* wishMe() – Greets based on time of day.

* recognition.onresult – Captures and processes spoken input.

* takeCommand(message) – Parses commands and performs corresponding actions.

* Voice-triggered site navigation: YouTube, Google, Instagram, Facebook, GitHub, LinkedIn, WhatsApp, Gmail, Calculator.

* Time and date reporting.

* Smart fallback to Google Search if the command isn't predefined.

----

💡 How It Works:

When the page is loaded, nothing is spoken until the user clicks somewhere (due to Chrome autoplay restrictions).

On first click, wishMe() is triggered to greet the user based on the time.

Clicking the microphone button starts speech recognition.

The assistant listens, transcribes the input, and processes it using conditionals.

If recognized, it speaks a relevant response or opens the corresponding link in a new tab.

If not recognized, it responds: “This is what I found on the internet regarding...” and searches Google.

----

🌐 Browser Compatibility:

✅ Chrome: Fully supported with user interaction.

✅ Edge: Works as expected.

❌ Firefox: Web Speech API recognition is not supported.
