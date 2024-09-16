// Countdown Timer Functionality
function countdown() {
    const newYear = new Date('January 1, 2025 00:00:00').getTime();
    const now = new Date().getTime();
    const distance = newYear - now;

    if (distance <= 0) {
        document.querySelector('.days').textContent = '00';
        document.querySelector('.hours').textContent = '00';
        document.querySelector('#minutes').textContent = '00';
        document.querySelector('.seconds').textContent = '00';
        clearInterval(countdownInterval);
        document.querySelector('p').textContent = "Happy New Year!";
        return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.querySelector('.days').textContent = days.toString().padStart(2, '0');
    document.querySelector('.hours').textContent = hours.toString().padStart(2, '0');
    document.querySelector('#minutes').textContent = minutes.toString().padStart(2, '0');
    document.querySelector('.seconds').textContent = seconds.toString().padStart(2, '0');
}

const countdownInterval = setInterval(countdown, 1000);

// Dark Mode Toggle Functionality
const toggleButton = document.createElement('button');
toggleButton.textContent = "Dark Mode";
toggleButton.style.position = "absolute";
toggleButton.style.top = "20px";
toggleButton.style.right = "20px";
toggleButton.style.padding = "10px 20px";
toggleButton.style.background = "#555";
toggleButton.style.color = "#fff";
toggleButton.style.border = "none";
toggleButton.style.cursor = "pointer";
document.body.appendChild(toggleButton);

let isDarkMode = false;

toggleButton.addEventListener('click', () => {
    if (!isDarkMode) {
        document.body.style.background = "#000";
        document.body.style.color = "#fff";
        toggleButton.textContent = "Light Mode";
    } else {
        document.body.style.background = "url('https://i.pinimg.com/originals/b6/f9/26/b6f9266a0d77423c5ecec5570dd7995c.gif') no-repeat center center/cover";
        document.body.style.color = "#fff";
        toggleButton.textContent = "Dark Mode";
    }
    isDarkMode = !isDarkMode;
});

// Show a celebratory message when New Year starts
function showNewYearMessage() {
    const message = document.createElement('div');
    message.textContent = "🎉 Happy New Year! 🎉";
    message.style.position = "fixed";
    message.style.top = "50%";
    message.style.left = "50%";
    message.style.transform = "translate(-50%, -50%)";
    message.style.fontSize = "40px";
    message.style.color = "#ff0";
    message.style.textAlign = "center";
    message.style.padding = "20px";
    message.style.background = "rgba(0, 0, 0, 0.8)";
    message.style.borderRadius = "10px";
    document.body.appendChild(message);
}

// Show fireworks on New Year
function showFireworks() {
    const fireworks = document.createElement('div');
    fireworks.style.position = 'absolute';
    fireworks.style.width = '100%';
    fireworks.style.height = '100%';
    fireworks.style.top = '0';
    fireworks.style.left = '0';
    fireworks.style.background = 'url(https://i.pinimg.com/originals/b6/f9/26/b6f9266a0d77423c5ecec5570dd7995c.gif) no-repeat center center';
    fireworks.style.backgroundSize = 'cover';
    fireworks.style.zIndex = '1000';
    document.body.appendChild(fireworks);
}

setTimeout(() => {
    showNewYearMessage();
    showFireworks();
}, new Date('January 1, 2025 00:00:00').getTime() - new Date().getTime());
