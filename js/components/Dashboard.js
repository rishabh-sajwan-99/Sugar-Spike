// Dashboard Component
const Dashboard = ({ userData, gameData, onLogSugar, challenges, onReset }) => {
    const { useState } = React;
    const [activeTab, setActiveTab] = useState('home');
    const [showLogModal, setShowLogModal] = useState(false);
    const [selectedSugar, setSelectedSugar] = useState(null);
    const [showFeedback, setShowFeedback] = useState(false);
    const [isRecording, setIsRecording] = useState(false);

    const sugarPresets = [
        { emoji: '☕', label: 'Chai/Coffee', value: 'chai', sugar: '15g' },
        { emoji: '🍭', label: 'Candy', value: 'candy', sugar: '20g' },
        { emoji: '🥤', label: 'Cold Drink', value: 'soda', sugar: '39g' },
        { emoji: '🍪', label: 'Cookies', value: 'cookies', sugar: '12g' },
        { emoji: '🍰', label: 'Cake', value: 'cake', sugar: '35g' },
        { emoji: '🍫', label: 'Chocolate', value: 'chocolate', sugar: '24g' },
        { emoji: '🧃', label: 'Juice', value: 'juice', sugar: '26g' },
        { emoji: '🍩', label: 'Donut', value: 'donut', sugar: '22g' },
        { emoji: '🍨', label: 'Ice Cream', value: 'icecream', sugar: '28g' },
        { emoji: '🥐', label: 'Pastry', value: 'pastry', sugar: '18g' },
    ];

    const handleSugarLog = (item) => {
        setSelectedSugar(item.label);
        setShowLogModal(false);
        setShowFeedback(true);
        onLogSugar(item);
    };

    const handleActionComplete = (action) => {
        onLogSugar({ type: 'action', value: action.title, points: action.points });
    };

    const handleVoiceRecord = () => {
        setIsRecording(!isRecording);
        if (!isRecording) {
            SoundSystem.playSuccess();
            setTimeout(() => {
                setIsRecording(false);
                alert('Voice logging coming soon! 🎤');
            }, 2000);
        }
    };

    const handleReset = () => {
        if (confirm('Are you sure you want to reset everything and start over? This will clear all your progress.')) {
            onReset();
        }
    };

    return (
        <>
            <div className="app-container">
                <div className="header">
                    <div className="logo">Sugar Spike 🍬</div>
                    <div className="tagline">Your sweet health companion</div>
                    <div className="streak-container">
                        <div className="streak-badge">
                            <span className="fire-emoji">🔥</span>
                            <div className="streak-text">{gameData.streak} Day Streak</div>
                        </div>
                        <div className="streak-badge">
                            <span className="fire-emoji">⚡</span>
                            <div className="streak-text">{gameData.todayLogs} Logged Today</div>
                        </div>
                    </div>
                </div>

                <div className="points-card">
                    <div className="points-header">
                        <div className="points-main">
                            <div className="points-label">Total Points</div>
                            <div className="points-value">{gameData.points}</div>
                        </div>
                        <div className="level-badge">Lvl {gameData.level}</div>
                    </div>
                    <div className="progress-section">
                        <div className="progress-info">
                            <span>Progress to Level {gameData.level + 1}</span>
                            <span>{gameData.points % 100}/100</span>
                        </div>
                        <div className="progress-bar">
                            <div className="progress-fill" style={{ width: `${(gameData.points % 100)}%` }}></div>
                        </div>
                    </div>
                </div>

                {activeTab === 'home' && (
                    <div className="dashboard">
                        <div className="section-title">Today's Challenge 🎯</div>
                        {challenges.map((challenge, idx) => (
                            <div key={idx} className="challenge-card">
                                <div className="challenge-header">
                                    <div className="challenge-title">{challenge.title}</div>
                                    <div className="challenge-reward">+{challenge.points} pts</div>
                                </div>
                                <div className="challenge-description">{challenge.description}</div>
                                <div className="challenge-progress">
                                    <div className="challenge-progress-fill" style={{ width: `${challenge.progress}%` }}></div>
                                </div>
                            </div>
                        ))}

                        <div className="section-title">Quick Stats 📊</div>
                        <div className="stats-grid">
                            <div className="stat-mini-card">
                                <span className="stat-emoji">🍬</span>
                                <div className="stat-content">
                                    <div className="stat-value">{gameData.todayLogs}</div>
                                    <div className="stat-label">Logs Today</div>
                                </div>
                            </div>
                            <div className="stat-mini-card">
                                <span className="stat-emoji">✅</span>
                                <div className="stat-content">
                                    <div className="stat-value">{gameData.actionsCompleted}</div>
                                    <div className="stat-label">Actions Completed</div>
                                </div>
                            </div>
                            <div className="stat-mini-card">
                                <span className="stat-emoji">👟</span>
                                <div className="stat-content">
                                    <div className="stat-value">{userData.steps || 0}</div>
                                    <div className="stat-label">Steps Today</div>
                                </div>
                            </div>
                            <div className="stat-mini-card">
                                <span className="stat-emoji">😴</span>
                                <div className="stat-content">
                                    <div className="stat-value">{userData.sleepHours || 0}h</div>
                                    <div className="stat-label">Sleep Last Night</div>
                                </div>
                            </div>
                        </div>

                        <div className="section-title">Achievements 🏆</div>
                        <div className="achievement-card">
                            <div className="achievement-icon">🔥</div>
                            <div className="achievement-info">
                                <div className="achievement-name">Streak Master</div>
                                <div className="achievement-progress">{gameData.streak} day streak</div>
                            </div>
                        </div>
                        <div className="achievement-card">
                            <div className="achievement-icon">⚡</div>
                            <div className="achievement-info">
                                <div className="achievement-name">Quick Logger</div>
                                <div className="achievement-progress">{gameData.quickLogs} quick logs</div>
                            </div>
                        </div>
                        <div className="achievement-card">
                            <div className="achievement-icon">🦸</div>
                            <div className="achievement-info">
                                <div className="achievement-name">Action Hero</div>
                                <div className="achievement-progress">{gameData.actionsCompleted} actions completed</div>
                            </div>
                        </div>
                    </div>
                )}

                {activeTab === 'stats' && (
                    <div className="dashboard">
                        <div className="section-title">Weekly Overview 📈</div>
                        <div style={{background: 'white', padding: '24px', borderRadius: '20px', marginBottom: '20px', boxShadow: '0 4px 16px rgba(0,0,0,0.08)'}}>
                            <div style={{marginBottom: '16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '12px', background: 'rgba(255,107,157,0.05)', borderRadius: '12px'}}>
                                <span style={{color: '#666', fontSize: '14px'}}>Average daily sugar</span>
                                <span style={{fontWeight: 'bold', color: 'var(--dark)', fontSize: '20px'}}>42g</span>
                            </div>
                            <div style={{marginBottom: '16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '12px', background: 'rgba(94,234,212,0.05)', borderRadius: '12px'}}>
                                <span style={{color: '#666', fontSize: '14px'}}>Best day</span>
                                <span style={{fontWeight: 'bold', color: 'var(--candy-mint)', fontSize: '18px'}}>Monday (28g)</span>
                            </div>
                            <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '12px', background: 'rgba(94,234,212,0.05)', borderRadius: '12px'}}>
                                <span style={{color: '#666', fontSize: '14px'}}>Improvement</span>
                                <span style={{fontWeight: 'bold', color: 'var(--candy-mint)', fontSize: '18px'}}>-15% vs last week</span>
                            </div>
                        </div>

                        <div className="section-title">Monthly Progress 🎯</div>
                        <div style={{background: 'white', padding: '32px', borderRadius: '20px', boxShadow: '0 4px 16px rgba(0,0,0,0.08)', textAlign: 'center'}}>
                            <div style={{fontSize: '64px', marginBottom: '16px'}}>🎉</div>
                            <div style={{fontSize: '20px', fontWeight: 'bold', marginBottom: '12px', color: 'var(--dark)'}}>15 Days Sugar-Conscious!</div>
                            <div style={{color: '#666', fontSize: '14px', lineHeight: '1.6'}}>You're building amazing habits! Keep up the great work.</div>
                        </div>
                    </div>
                )}

                {activeTab === 'profile' && (
                    <div className="dashboard">
                        <div className="section-title">Your Profile 👤</div>
                        <div style={{background: 'white', padding: '24px', borderRadius: '20px', marginBottom: '16px', boxShadow: '0 4px 16px rgba(0,0,0,0.08)'}}>
                            <div style={{display: 'flex', alignItems: 'center', gap: '20px', marginBottom: '24px', padding: '16px', background: 'linear-gradient(135deg, rgba(255,107,157,0.05), rgba(196,77,255,0.05))', borderRadius: '16px'}}>
                                <div style={{width: '80px', height: '80px', borderRadius: '50%', background: 'linear-gradient(135deg, var(--candy-pink), var(--candy-purple))', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '40px', boxShadow: '0 4px 16px rgba(196, 77, 255, 0.3)'}}>
                                    {userData.gender === 'male' ? '👨' : userData.gender === 'female' ? '👩' : '🧑'}
                                </div>
                                <div>
                                    <div style={{fontSize: '24px', fontWeight: 'bold', marginBottom: '4px', color: 'var(--dark)'}}>Level {gameData.level} Tracker</div>
                                    <div style={{color: '#999', fontSize: '14px'}}>{gameData.points} total points</div>
                                </div>
                            </div>
                            <div style={{borderTop: '2px solid #f0f0f0', paddingTop: '20px'}}>
                                <div style={{marginBottom: '16px', padding: '12px', background: 'rgba(0,0,0,0.02)', borderRadius: '12px', display: 'flex', justifyContent: 'space-between'}}>
                                    <span style={{color: '#666', fontSize: '14px'}}>Age</span>
                                    <span style={{fontWeight: 'bold', fontSize: '16px'}}>{userData.age} years</span>
                                </div>
                                <div style={{marginBottom: '16px', padding: '12px', background: 'rgba(0,0,0,0.02)', borderRadius: '12px', display: 'flex', justifyContent: 'space-between'}}>
                                    <span style={{color: '#666', fontSize: '14px'}}>Height</span>
                                    <span style={{fontWeight: 'bold', fontSize: '16px'}}>{userData.height} cm</span>
                                </div>
                                <div style={{marginBottom: '16px', padding: '12px', background: 'rgba(0,0,0,0.02)', borderRadius: '12px', display: 'flex', justifyContent: 'space-between'}}>
                                    <span style={{color: '#666', fontSize: '14px'}}>Weight</span>
                                    <span style={{fontWeight: 'bold', fontSize: '16px'}}>{userData.weight} kg</span>
                                </div>
                                <div style={{padding: '12px', background: 'rgba(0,0,0,0.02)', borderRadius: '12px', display: 'flex', justifyContent: 'space-between'}}>
                                    <span style={{color: '#666', fontSize: '14px'}}>BMI</span>
                                    <span style={{fontWeight: 'bold', fontSize: '16px'}}>{userData.bmi}</span>
                                </div>
                            </div>
                        </div>

                        <button className="btn btn-reset" onClick={handleReset}>
                            🔄 Reset & Start Over
                        </button>
                    </div>
                )}
            </div>

            <div className="fab-container">
                <button className="quick-log-fab" onClick={() => setShowLogModal(true)}>
                    ➕
                </button>
            </div>

            <button 
                className={`voice-fab ${isRecording ? 'recording' : ''}`}
                onClick={handleVoiceRecord}
            >
                🎤
            </button>

            <div className="bottom-nav">
                <div className={`nav-item ${activeTab === 'home' ? 'active' : ''}`} onClick={() => setActiveTab('home')}>
                    <div className="nav-icon">🏠</div>
                    <div className="nav-label">Home</div>
                </div>
                <div className={`nav-item ${activeTab === 'stats' ? 'active' : ''}`} onClick={() => setActiveTab('stats')}>
                    <div className="nav-icon">📊</div>
                    <div className="nav-label">Stats</div>
                </div>
                <div className={`nav-item ${activeTab === 'profile' ? 'active' : ''}`} onClick={() => setActiveTab('profile')}>
                    <div className="nav-icon">👤</div>
                    <div className="nav-label">Profile</div>
                </div>
            </div>

            {showLogModal && (
                <div className="modal-overlay" onClick={() => setShowLogModal(false)}>
                    <div className="modal" onClick={(e) => e.stopPropagation()}>
                        <div className="modal-title">What did you have? 🍬</div>
                        <div className="modal-text">Tap to log in under 5 seconds!</div>
                        <div className="preset-grid">
                            {sugarPresets.map(item => (
                                <div 
                                    key={item.value} 
                                    className="preset-button"
                                    onClick={() => handleSugarLog(item)}
                                >
                                    <span className="preset-emoji">{item.emoji}</span>
                                    <div className="preset-label">{item.label}</div>
                                    <div style={{fontSize: '11px', color: '#999', marginTop: '4px'}}>{item.sugar}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            )}

            {showFeedback && (
                <FeedbackModal
                    sugarItem={selectedSugar}
                    userData={userData}
                    onClose={() => setShowFeedback(false)}
                    onActionComplete={handleActionComplete}
                />
            )}
        </>
    );
};