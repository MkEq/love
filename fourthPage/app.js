// Обработчик для кнопки "Sure"
document.getElementById("sure-button").addEventListener("click", function () {
    // Скрываем текущий контейнер
    document.querySelector(".content").style.display = "none";

    // Показываем новый контейнер с временем
    document.getElementById("time-container").style.display = "flex";

    // Запускаем отсчёт времени
    startTimeCounter();

    // Через 3 секунды запускаем показ сообщений
    setTimeout(showMessages, 1000);
});

// Список сообщений
const messages = [
    "Remember when we first met?",
    "So many memories!",
    "You are my person!",
    "Thank you for being here!",
    "Here’s more time together!",
    "All the love!",
    "Forever and always!",
    "Counting every moment!",
    "You make my heart smile!",
    "My favourite story is ours!",
    "You are the best thing ever!",
    "Cherishing every moment!"
];

// Функция для показа сообщений
function showMessages() {
    messages.forEach((message, index) => {
        setTimeout(() => {
            createMessage(message);
        }, index * 1300); // Каждое сообщение появляется через 1.5 секунды после предыдущего
    });

    // После завершения показа всех сообщений показываем кнопку
    setTimeout(() => {
        document.getElementById("forever-button").style.display = "block";
    }, messages.length * 1500); // Общее время показа всех сообщений + 3 секунды
}

// Функция для создания сообщения
function createMessage(text) {
    const messageBox = document.createElement('div');
    messageBox.classList.add('message-box');
    messageBox.textContent = text;

    // Позиционируем сообщение в случайном месте
    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;
    const xPos = Math.random() * (screenWidth - 200); // Учитываем ширину сообщения
    const yPos = Math.random() * (screenHeight - 100); // Учитываем высоту сообщения

    messageBox.style.left = `${xPos}px`;
    messageBox.style.top = `${yPos}px`;

    document.body.appendChild(messageBox);

    // Удаляем сообщение после завершения анимации
    setTimeout(() => {
        messageBox.remove();
    }, 2800); // Сообщение исчезает через 3 секунды
}

// Функция для отсчёта времени
function startTimeCounter() {
    const startDate = new Date("2024-11-22T00:00:00"); // Начальная дата

    function updateTime() {
        const now = new Date();
        const diff = now - startDate;

        const years = Math.floor(diff / (1000 * 60 * 60 * 24 * 365));
        const months = Math.floor((diff % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24 * 30));
        const days = Math.floor((diff % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((diff % (1000 * 60)) / 1000);

        document.getElementById("years").textContent = years;
        document.getElementById("months").textContent = months;
        document.getElementById("days").textContent = days;
        document.getElementById("hours").textContent = hours;
        document.getElementById("minutes").textContent = minutes;
        document.getElementById("seconds").textContent = seconds;
    }

    // Обновляем время каждую секунду
    setInterval(updateTime, 1000);
    updateTime(); // Первый вызов
}

// Обработчик для кнопки "Maybe later"
document.getElementById("maybe-later").addEventListener("click", function () {
    // Скрываем основной контейнер
    document.querySelector(".content").style.display = "none";

    // Показываем бокс "I'll Wait!"
    const waitBox = document.getElementById("wait-box");
    waitBox.style.display = "block";

    // Через 3 секунды скрываем бокс и перенаправляем на другую страницу
    setTimeout(function () {
        waitBox.style.display = "none";
        window.location.href = "../index.html"; // Укажите нужный URL
    }, 3000); // 3000 мс = 3 секунды
});

// Обработчик для кнопки "Click for forever"
document.getElementById("forever-button").addEventListener("click", function () {
    // Скрываем текущий контейнер и кнопку "Click for forever"
    document.getElementById("time-container").style.display = "none";
    document.getElementById("forever-button").style.display = "none";

    // Показываем финальный контейнер
    document.getElementById("final-container").style.display = "flex";
});

// Обработчик для кнопки "Replay"
document.getElementById("replay-button").addEventListener("click", function () {
    // Скрываем финальный контейнер
    document.getElementById("final-container").style.display = "none";

    // Показываем начальный контейнер
    document.querySelector(".content").style.display = "flex";
});

// ==========================hearts-background=====================================
function createHeart() {
    const heart = document.createElement('div');
    heart.innerHTML = '❤️';
    heart.classList.add('heart');

    const screenWidth = window.innerWidth;
    const xPos = Math.random() * screenWidth;
    heart.style.left = `${xPos}px`;

    const delay = Math.random() * 1.5;
    heart.style.animationDelay = `${delay}s`;

    document.getElementById('hearts-container').appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 5000);
}

setInterval(createHeart, 250);