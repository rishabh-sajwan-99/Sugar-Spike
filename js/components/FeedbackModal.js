// Feedback Modal Component
const FeedbackModal = ({ sugarItem, userData, onClose, onActionComplete }) => {
    const { useEffect } = React;
    const reward = getRandomReward();
    const insight = getContextualInsight(userData, new Date().getHours());
    const action = getActionSuggestion(userData);

    useEffect(() => {
        SoundSystem.playSuccess();
        setTimeout(() => SoundSystem.playReward(), 400);
        createConfetti();
    }, []);

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal" onClick={(e) => e.stopPropagation()}>
                <span className="success-emoji">🎉</span>
                <div className="modal-title">Awesome Logging!</div>
                <div className="modal-text">You logged: <strong>{sugarItem}</strong></div>

                <div className="reward-badge">
                    {reward.emoji} {reward.text}
                </div>

                <div className="insight-box">
                    <div className="insight-title">💡 Smart Insight</div>
                    <div className="insight-text">{insight}</div>
                </div>

                <div className="action-suggestion">
                    <div className="action-title">{action.emoji} {action.title}</div>
                    <div className="action-text">{action.description}</div>
                    <button
                        className="btn btn-primary"
                        onClick={() => {
                            onActionComplete(action);
                            createConfetti();
                            SoundSystem.playLevelUp();
                            onClose();
                        }}
                    >
                        I'll do it! (+{action.points} pts)
                    </button>
                </div>

                <button
                    className="btn"
                    style={{ background: '#f0f0f0', color: '#666' }}
                    onClick={onClose}
                >
                    Maybe Later
                </button>
            </div>
        </div>
    );
};