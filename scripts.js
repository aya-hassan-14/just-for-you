const messages = [
    "Aya, you are stronger than you think.",
    "Aya, brighter days are ahead.",
    "Aya, your resilience is inspiring.",
    "Keep going, Aya, you’ve got this.",
    "Aya, remember, you are loved and valued.",
    "Aya, every storm runs out of rain.",
    "Aya, you are capable of amazing things.",
    "Aya, trust in your strength and your heart.",
    "Aya, you are a light even on the darkest days.",
    "Aya, take things one step at a time, you’ll make it.",
    "Aya, no challenge is too great for your spirit.",
    "Aya, never forget how far you’ve come.",
    "Aya, small steps in the right direction lead to great things.",
    "Aya, your kindness is your greatest strength.",
    "Aya, even in difficult times, you shine.",
    "Aya, let go of what you can’t control, focus on what you can.",
    "Aya, believe in the beauty of new beginnings.",
    "Aya, it’s okay to rest when you need to, the world will wait.",
    "Aya, your courage is more powerful than your fears.",
    "Aya, there is nothing you cannot overcome.",
    "Aya, you are made of strength, hope, and love.",
    "Aya, keep faith, every storm brings a rainbow.",
    "Aya, your heart is brave, your spirit unbreakable.",
    "Aya, the best is yet to come.",
    "Aya, each day brings new strength and new thoughts.",
    "Aya, don’t let yesterday take up too much of today.",
    "Aya, you have the power to create a beautiful life.",
    "Aya, happiness is found in the journey, not the destination.",
    "Aya, be gentle with yourself, you’re doing the best you can.",
    "Aya, peace begins with you.",
    "Aya, one day at a time, and you’ll get through this.",
    "Aya, you are not alone, even in the toughest moments.",
    "Aya, trust the process, your hard work will pay off.",
    "Aya, you are capable of things you never imagined.",
    "Aya, beauty blooms in the most unexpected places.",
    "Aya, where there is hope, there is strength.",
    "Aya, your heart knows the way, follow it.",
    "Aya, there is always light, even if you have to search for it.",
    "Aya, your soul is pure and full of love.",
    "Aya, never doubt your ability to rise after every fall.",
    "Aya, difficult roads often lead to beautiful destinations.",
    "Aya, embrace the uncertainty, it’s where the magic happens.",
    "Aya, you have the strength to turn your dreams into reality.",
    "Aya, don’t be afraid to take that leap of faith.",
    "Aya, your story is still being written, and it’s beautiful.",
    "Aya, you are exactly where you are meant to be.",
    "Aya, every challenge is an opportunity to grow.",
    "Aya, don’t rush the process, good things take time.",
    "Aya, your light shines brighter than you know.",
    "Aya, let your dreams be bigger than your fears.",
    "Aya, your potential is endless.",
    "Aya, hold on, better days are coming.",
    "Aya, your spirit is unstoppable.",
    "Aya, you are worthy of all the love and kindness in the world.",
    "Aya, every sunset brings the promise of a new dawn.",
    "Aya, you are a masterpiece in progress.",
    "Aya, trust yourself, you know more than you think you do.",
    "Aya, take pride in how far you’ve come.",
    "Aya, the sky is not the limit, your mind is.",
    "Aya, choose hope, even when it’s hard.",
    "Aya, your dreams are valid and within reach.",
    "Aya, the best view comes after the hardest climb.",
    "Aya, you are worthy of the happiness you seek.",
    "Aya, greatness is in your future.",
    "Aya, every moment is a fresh beginning.",
    "Aya, the universe is guiding you, trust its timing."
];

function displayMessage() {
    const messageElement = document.getElementById('message');
    const randomMessage = messages[Math.floor(Math.random() * messages.length)];

    messageElement.classList.remove('fade-in');

    messageElement.textContent = randomMessage;

    setTimeout(() => {
        messageElement.classList.add('fade-in');
    }, 10);
}

function changeBackground() {
    const body = document.body;
    const backgrounds = ['transition-bg-1', 'transition-bg-2'];
    let currentIndex = 0;

    setInterval(() => {
        body.classList.remove(backgrounds[currentIndex]);
        currentIndex = (currentIndex + 1) % backgrounds.length;
        body.classList.add(backgrounds[currentIndex]);
    }, 5000);
}

window.onload = function() {
    displayMessage();
    changeBackground();
};

document.getElementById('newMessageBtn').addEventListener('click', displayMessage);
