// Utility Functions

// Confetti Animation
const createConfetti = () => {
    const colors = ['var(--candy-pink)', 'var(--candy-purple)', 'var(--candy-blue)', 'var(--candy-mint)', 'var(--candy-yellow)'];
    for (let i = 0; i < 30; i++) {
        setTimeout(() => {
            const confetti = document.createElement('div');
            confetti.className = 'confetti';
            confetti.style.left = Math.random() * 100 + 'vw';
            confetti.style.background = colors[Math.floor(Math.random() * colors.length)];
            confetti.style.animationDelay = Math.random() * 0.5 + 's';
            document.body.appendChild(confetti);
            setTimeout(() => confetti.remove(), 3000);
        }, i * 50);
    }
};

// BMI Calculation
const calculateBMI = (weight, height) => {
    const heightInMeters = height / 100;
    return (weight / (heightInMeters * heightInMeters)).toFixed(1);
};

// Random Reward Generator
const getRandomReward = () => {
    const rewards = [
        { type: 'points', value: 10, emoji: '⭐', text: '+10 Points!' },
        { type: 'points', value: 15, emoji: '✨', text: '+15 Bonus!' },
        { type: 'points', value: 20, emoji: '💎', text: '+20 Jackpot!' },
        { type: 'badge', value: 'Quick Logger', emoji: '⚡', text: 'Speed Demon!' },
        { type: 'badge', value: 'Health Hero', emoji: '🦸', text: 'Health Hero!' },
        { type: 'bonus', value: 'streak', emoji: '🔥', text: 'Streak Boost!' },
    ];
    return rewards[Math.floor(Math.random() * rewards.length)];
};

// Contextual Insights
const getContextualInsight = (userData, timeOfDay) => {
    const hour = new Date().getHours();
    const insights = [
        "Late-day sugar can spike your blood glucose when your body's insulin sensitivity is lower.",
        "Your step count today is stellar! That walk will help metabolize this sugar faster.",
        "Quality sleep tonight matters - sugar this late might disrupt your REM cycles.",
        "Morning sugar hits different - your cortisol levels make it harder to process right now.",
        `Based on your BMI (${userData.bmi}), staying hydrated helps manage sugar absorption.`,
        "Your heart rate suggests you're relaxed - perfect time for a quick walk to balance this out.",
    ];
    return insights[Math.floor(Math.random() * insights.length)];
};

// Action Suggestions
const getActionSuggestion = (userData) => {
    const currentHour = new Date().getHours();
    const actions = [
        { 
            title: "Take a 10-minute walk", 
            description: "Movement activates GLUT4 receptors, helping your muscles absorb glucose without insulin spikes.", 
            emoji: "🚶",
            points: 10
        },
        { 
            title: "Drink 500ml of water", 
            description: "Hydration dilutes blood sugar and helps your kidneys flush excess glucose.", 
            emoji: "💧",
            points: 5
        },
        { 
            title: "Eat 20g of protein", 
            description: "Protein slows glucose absorption and prevents the sugar crash later.", 
            emoji: "🥜",
            points: 8
        },
        { 
            title: "5 minutes of stretching", 
            description: "Light activity improves insulin sensitivity without intense effort.", 
            emoji: "🧘",
            points: 7
        },
        { 
            title: "Chew sugar-free gum", 
            description: "Tricks your brain into feeling satisfied without more sugar.", 
            emoji: "🍃",
            points: 3
        },
    ];
    
    if (currentHour > 18) return actions[0];
    if (userData.steps < 3000) return actions[0];
    return actions[Math.floor(Math.random() * actions.length)];
};

// Initialize Decorative Elements
const initializeDecorations = () => {
    // Create candy rain
    const candyRain = document.getElementById('candyRain');
    const candies = ['🍭', '🍬', '🍩', '🍪', '🧁'];
    for (let i = 0; i < 15; i++) {
        const candy = document.createElement('div');
        candy.className = 'candy';
        candy.textContent = candies[Math.floor(Math.random() * candies.length)];
        candy.style.left = Math.random() * 100 + '%';
        candy.style.animationDuration = (Math.random() * 3 + 5) + 's';
        candy.style.animationDelay = Math.random() * 5 + 's';
        candyRain.appendChild(candy);
    }

    // Create bubbles
    const bubblesContainer = document.getElementById('bubbles');
    for (let i = 0; i < 10; i++) {
        const bubble = document.createElement('div');
        bubble.className = 'bubble';
        const size = Math.random() * 60 + 20;
        bubble.style.width = size + 'px';
        bubble.style.height = size + 'px';
        bubble.style.left = Math.random() * 100 + '%';
        bubble.style.bottom = '-100px';
        bubble.style.animationDuration = (Math.random() * 5 + 10) + 's';
        bubble.style.animationDelay = Math.random() * 5 + 's';
        bubblesContainer.appendChild(bubble);
    }
};