document.body.style.backgroundColor = "black";
document.body.style.color = "#33ff33";
document.body.style.fontFamily = "monospace";

function generateRandom() {
    return Math.floor(Math.random() * 4) + 1;
}

function addLine(message) {
    let line = document.createElement("h3");
    document.body.appendChild(line);
    let i = 0;

    return new Promise((resolve) => {
        let interval = setInterval(() => {
            line.innerHTML =
            message.slice(0, i) + '<span class="cursor">|</span>';
            i++;

            if (i > message.length) {
                clearInterval(interval);
                line.innerHTML = message;
                resolve();
            }
        }, 50);
    });
}

function executeNext(cb) {
    return new Promise((resolve) => {
        setTimeout(async () => {
            await cb();
            resolve();
        }, generateRandom() * 1000);
    });
}

async function initializeHacking() {
    return addLine("Initializing Hacking...");
}
async function readFiles() {
    return addLine("Reading Files...");
}
async function readPasswords() {
    return addLine("Password files Detected...");
}
async function sendPasswords() {
    return addLine("Sending all passwords and personal files to server...");
}
async function cleanUp() {
    return addLine("Cleaning up...");
}

async function fetchData() {
    await executeNext(initializeHacking);
    await executeNext(readFiles);
    await executeNext(readPasswords);
    await executeNext(sendPasswords);
    await executeNext(cleanUp);
}

fetchData();