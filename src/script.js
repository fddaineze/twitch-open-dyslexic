console.log("%c---> Twitch Dyslexic has started", "color:green");
const interval = setInterval(startBuild, 1000);

let fontSize = 13;

function startBuild() {
    const streamChatRoom = document.querySelector("div.stream-chat .chat-room");
    const streamChat = document.querySelector("div.stream-chat");

    const fs = parseInt(localStorage.getItem('dyslexic-font-size'));
    if(fs) {
        fontSize = fs;
        setFontSize(streamChatRoom, fontSize);
    }
    
    const ff = localStorage.getItem('dyslexic-font-family');
    if(ff) switchFontFamily(streamChatRoom);

    const dyslexicHeader = document.createElement('div');
    dyslexicHeader.classList.add('dyslexic-header');
    streamChat.prepend(dyslexicHeader);
    
    if (streamChat) {
        clearInterval(interval);
        createButton(dyslexicHeader, "Switch Font", "switchFontButton");
        createButton(dyslexicHeader, "A+", "fontPlusButton");
        createButton(dyslexicHeader, "A-", "fontMinusButton");
        createButton(dyslexicHeader, "Reset", "fontResetButton");
    }

    document.getElementById("switchFontButton").addEventListener("click", () => {
        switchFontFamily(streamChatRoom);
    });
    
    document.getElementById("fontPlusButton").addEventListener("click", () => {
        fontSize += 2;
        setFontSize(streamChatRoom, fontSize);
    });
    
    document.getElementById("fontMinusButton").addEventListener("click", () => {
        fontSize -= 2;
        setFontSize(streamChatRoom, fontSize);
    });
    
    document.getElementById("fontResetButton").addEventListener("click", () => {
        resetFont(streamChatRoom);
    });
}

function createButton(header, name, cname) {
    const btn = document.createElement('button');
    btn.innerHTML = name;
    btn.id = cname;
    header.appendChild(btn);
}

function switchFontFamily(e){
    if(e.style.fontFamily) {
        e.style.removeProperty('font-family');
        localStorage.removeItem('dyslexic-font-family');
    } else {
        e.style.setProperty('font-family', 'OpenDyslexic', 'important');
        localStorage.setItem('dyslexic-font-family', true);
    }
}

function setFontSize(e, fs) {
    localStorage.setItem('dyslexic-font-size', fs);
    e.style.setProperty('font-size', (fs/10+'rem'), 'important');
}

function resetFont(e) {
    e.style.removeProperty('font-family');
    e.style.removeProperty('font-size');
    localStorage.removeItem('dyslexic-font-family');
    localStorage.removeItem('dyslexic-font-size');
}