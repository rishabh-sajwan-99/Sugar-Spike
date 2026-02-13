// Onboarding Flow Component
const OnboardingFlow = ({ onComplete }) => {
    const { useState, useEffect } = React;
    const [step, setStep] = useState(0);
    const [userData, setUserData] = useState({
        age: 25,
        height: 170,
        weight: 70,
        gender: '',
    });

    useEffect(() => {
        if (!SoundSystem.context) SoundSystem.init();
    }, []);

    const updateUserData = (field, value) => {
        setUserData(prev => ({ ...prev, [field]: value }));
    };

    const nextStep = () => {
        console.log('Button clicked! Current step:', step);
        
        try {
            SoundSystem.playSuccess();
        } catch (e) {
            console.log('Sound not available yet');
        }
        
        if (step < 3) {
            setStep(step + 1);
            console.log('Moving to step:', step + 1);
        } else {
            console.log('Completing onboarding...');
            const bmi = calculateBMI(userData.weight, userData.height);
            try {
                createConfetti();
                SoundSystem.playLevelUp();
            } catch (e) {
                console.log('Effects not available yet');
            }
            onComplete({ ...userData, bmi });
        }
    };

    const stepData = [
        { emoji: '🎂', title: "What's your age?", subtitle: "We'll personalize insights just for you" },
        { emoji: '📏', title: "How tall are you?", subtitle: "This helps us calculate your health metrics" },
        { emoji: '⚖️', title: "What's your weight?", subtitle: "Almost there! One more number" },
        { emoji: '👤', title: "How do you identify?", subtitle: "Help us give you accurate health tips" }
    ];

    return (
        <div className="app-container">
            <div className="onboarding-screen">
                <div className="morphing-shape shape1"></div>
                <div className="morphing-shape shape2"></div>
                
                <div className="progress-dots">
                    {[0, 1, 2, 3].map(i => (
                        <div key={i} className={`dot ${i === step ? 'active' : ''}`}></div>
                    ))}
                </div>

                <div className="onboarding-emoji">{stepData[step].emoji}</div>
                <div className="onboarding-title">{stepData[step].title}</div>
                <div className="onboarding-subtitle">{stepData[step].subtitle}</div>

                {step === 0 && (
                    <div className="slider-container">
                        <div className="slider-value-display">
                            <div className="slider-value">{userData.age}</div>
                            <div className="slider-unit">years old</div>
                        </div>
                        <input
                            type="range"
                            min="16"
                            max="80"
                            value={userData.age}
                            className="slider"
                            onChange={(e) => updateUserData('age', parseInt(e.target.value))}
                        />
                    </div>
                )}

                {step === 1 && (
                    <div className="slider-container">
                        <div className="slider-value-display">
                            <div className="slider-value">{userData.height}</div>
                            <div className="slider-unit">centimeters</div>
                        </div>
                        <input
                            type="range"
                            min="140"
                            max="210"
                            value={userData.height}
                            className="slider"
                            onChange={(e) => updateUserData('height', parseInt(e.target.value))}
                        />
                    </div>
                )}

                {step === 2 && (
                    <div className="slider-container">
                        <div className="slider-value-display">
                            <div className="slider-value">{userData.weight}</div>
                            <div className="slider-unit">kilograms</div>
                        </div>
                        <input
                            type="range"
                            min="40"
                            max="150"
                            value={userData.weight}
                            className="slider"
                            onChange={(e) => updateUserData('weight', parseInt(e.target.value))}
                        />
                    </div>
                )}

                {step === 3 && (
                    <div className="card-grid">
                        {[
                            { value: 'male', emoji: '👨', label: 'Male' },
                            { value: 'female', emoji: '👩', label: 'Female' },
                            { value: 'other', emoji: '🧑', label: 'Non-binary' },
                            { value: 'prefer-not', emoji: '🙋', label: 'Prefer not to say' },
                        ].map(option => (
                            <div
                                key={option.value}
                                className={`card-option ${userData.gender === option.value ? 'selected' : ''}`}
                                onClick={() => updateUserData('gender', option.value)}
                            >
                                <span className="card-emoji">{option.emoji}</span>
                                <div className="card-label">{option.label}</div>
                            </div>
                        ))}
                    </div>
                )}

                <button 
                    className="btn btn-primary" 
                    onClick={nextStep}
                    onTouchEnd={(e) => {
                        e.preventDefault();
                        nextStep();
                    }}
                    disabled={step === 3 && !userData.gender}
                    style={{ cursor: 'pointer', touchAction: 'manipulation' }}
                >
                    {step === 3 ? "Let's Go! 🚀" : 'Continue'}
                </button>
            </div>
        </div>
    );
};