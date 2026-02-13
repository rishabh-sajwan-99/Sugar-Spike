// Sound System for Audio Feedback
const SoundSystem = {
    context: null,
    
    init() {
        this.context = new (window.AudioContext || window.webkitAudioContext)();
    },

    playSuccess() {
        if (!this.context) this.init();
        const notes = [523.25, 659.25, 783.99]; // C-E-G chord
        notes.forEach((freq, i) => {
            setTimeout(() => {
                const osc = this.context.createOscillator();
                const gain = this.context.createGain();
                osc.connect(gain);
                gain.connect(this.context.destination);
                osc.frequency.value = freq;
                osc.type = 'sine';
                gain.gain.setValueAtTime(0.3, this.context.currentTime);
                gain.gain.exponentialRampToValueAtTime(0.01, this.context.currentTime + 0.5);
                osc.start(this.context.currentTime);
                osc.stop(this.context.currentTime + 0.5);
            }, i * 100);
        });
    },

    playReward() {
        if (!this.context) this.init();
        const osc = this.context.createOscillator();
        const gain = this.context.createGain();
        osc.connect(gain);
        gain.connect(this.context.destination);
        osc.frequency.value = 880;
        osc.type = 'square';
        gain.gain.setValueAtTime(0.2, this.context.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.01, this.context.currentTime + 0.3);
        osc.start();
        osc.stop(this.context.currentTime + 0.3);
    },

    playLevelUp() {
        if (!this.context) this.init();
        [261.63, 329.63, 392.00, 523.25].forEach((freq, i) => {
            setTimeout(() => {
                const osc = this.context.createOscillator();
                const gain = this.context.createGain();
                osc.connect(gain);
                gain.connect(this.context.destination);
                osc.frequency.value = freq;
                osc.type = 'triangle';
                gain.gain.setValueAtTime(0.25, this.context.currentTime);
                gain.gain.exponentialRampToValueAtTime(0.01, this.context.currentTime + 0.4);
                osc.start();
                osc.stop(this.context.currentTime + 0.4);
            }, i * 100);
        });
    }
};