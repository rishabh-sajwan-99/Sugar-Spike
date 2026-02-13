// Main App Component
const App = () => {
    const { useState, useEffect } = React;
    const [hasCompletedOnboarding, setHasCompletedOnboarding] = useState(false);
    const [userData, setUserData] = useState(null);
    const [gameData, setGameData] = useState({
        points: 0,
        level: 1,
        streak: 1,
        todayLogs: 0,
        actionsCompleted: 0,
        quickLogs: 0,
    });
    const [challenges, setChallenges] = useState([
        { title: 'Log 3 items today', description: 'Track your sugar intake', points: 20, progress: 0 },
        { title: 'Complete 2 actions', description: 'Take healthy actions', points: 30, progress: 0 },
    ]);

    useEffect(() => {
        // Initialize sound system
        if (!SoundSystem.context) SoundSystem.init();

        // Check localStorage
        const existingUser = localStorage.getItem('sugarSpikeUser');
        const existingGameData = localStorage.getItem('sugarSpikeGame');
        
        if (existingUser) {
            setUserData(JSON.parse(existingUser));
            setHasCompletedOnboarding(true);
        }
        
        if (existingGameData) {
            setGameData(JSON.parse(existingGameData));
        }

        // Simulate passive health data
        setUserData(prev => prev ? {
            ...prev,
            steps: Math.floor(Math.random() * 8000) + 2000,
            heartRate: Math.floor(Math.random() * 20) + 70,
            sleepHours: Math.floor(Math.random() * 3) + 6,
        } : null);

        // Initialize decorations
        initializeDecorations();
    }, []);

    const handleOnboardingComplete = (data) => {
        setUserData(data);
        setHasCompletedOnboarding(true);
        localStorage.setItem('sugarSpikeUser', JSON.stringify(data));
        SoundSystem.playLevelUp();
    };

    const handleLogSugar = (item) => {
        const currentHour = new Date().getHours();
        let pointsEarned = 5;
        
        if (currentHour < 18) pointsEarned += 3;
        if (gameData.todayLogs === 0) pointsEarned += 5;
        if (item.type === 'action') pointsEarned = item.points;

        const newPoints = gameData.points + pointsEarned;
        const newLevel = Math.floor(newPoints / 100) + 1;
        const leveledUp = newLevel > gameData.level;

        const newGameData = {
            ...gameData,
            points: newPoints,
            level: newLevel,
            todayLogs: item.type !== 'action' ? gameData.todayLogs + 1 : gameData.todayLogs,
            actionsCompleted: item.type === 'action' ? gameData.actionsCompleted + 1 : gameData.actionsCompleted,
            quickLogs: gameData.quickLogs + 1,
        };

        setGameData(newGameData);
        localStorage.setItem('sugarSpikeGame', JSON.stringify(newGameData));

        // Update challenges
        setChallenges(prev => prev.map((c, idx) => {
            if (idx === 0 && item.type !== 'action') {
                return { ...c, progress: Math.min((newGameData.todayLogs / 3) * 100, 100) };
            }
            if (idx === 1 && item.type === 'action') {
                return { ...c, progress: Math.min((newGameData.actionsCompleted / 2) * 100, 100) };
            }
            return c;
        }));

        if (leveledUp) {
            setTimeout(() => {
                SoundSystem.playLevelUp();
                createConfetti();
            }, 500);
        }
    };

    const handleReset = () => {
        localStorage.clear();
        setHasCompletedOnboarding(false);
        setUserData(null);
        setGameData({
            points: 0,
            level: 1,
            streak: 1,
            todayLogs: 0,
            actionsCompleted: 0,
            quickLogs: 0,
        });
        setChallenges([
            { title: 'Log 3 items today', description: 'Track your sugar intake', points: 20, progress: 0 },
            { title: 'Complete 2 actions', description: 'Take healthy actions', points: 30, progress: 0 },
        ]);
        SoundSystem.playSuccess();
    };

    if (!hasCompletedOnboarding) {
        return <OnboardingFlow onComplete={handleOnboardingComplete} />;
    }

    return <Dashboard userData={userData} gameData={gameData} onLogSugar={handleLogSugar} challenges={challenges} onReset={handleReset} />;
};

// Render the app
ReactDOM.render(<App />, document.getElementById('root'));