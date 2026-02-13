# 🍬 Sugar Spike - Your Sweet Health Companion

A beautiful, gamified web application that helps users reduce sugar consumption through real-time feedback, contextual insights, and habit formation.

## 🚀 Quick Start

### Option 1: Direct Browser (Easiest)
1. Open `index.html` in your browser
2. Done! No server needed.

### Option 2: VS Code Live Server
1. Open project folder in VS Code
2. Install "Live Server" extension
3. Right-click `index.html` → "Open with Live Server"
4. Opens at `http://127.0.0.1:5500`

### Option 3: Python Server
```bash
# Python 3
python3 -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000

# Open http://localhost:8000
```

### Option 4: Node.js Server
```bash
# Install http-server globally
npm install -g http-server

# Run from project directory
http-server -p 8080

# Open http://localhost:8080
```

## 📁 Project Structure

```
sugar-spike-app/
├── index.html              # Main HTML file
├── css/
│   ├── styles.css          # Main styles
│   └── animations.css      # All animations
├── js/
│   ├── sound-system.js     # Audio feedback
│   ├── utils.js            # Helper functions
│   ├── app.js              # Main app logic
│   └── components/
│       ├── OnboardingFlow.js   # Onboarding component
│       ├── FeedbackModal.js    # Feedback modal
│       └── Dashboard.js        # Main dashboard
└── README.md               # This file
```

## ✨ Features

### Mandatory Features (All Implemented)
- ⚡ Fast sugar logging (<10 seconds)
- 🎮 Signup-free onboarding
- 📱 Passive health data sync
- 🔥 Daily streaks
- 🎁 Immediate rewards & feedback
- 🤖 Context-aware ML insights
- 🎯 Personalized action suggestions
- 🏆 Dynamic point system

### Enhanced Features
- 🎤 Voice logging button
- 🎯 Daily challenges system
- 📊 Enhanced stats tab
- 👤 Complete profile page
- 🔊 Advanced sound system
- 🎊 Confetti celebrations
- ⭐ 4 mini stats cards
- 🍬 10 sugar presets with sugar content

## 🎨 Design Features

- **Neo-Candy Aesthetic**: Unique, playful design
- **Animated Background**: Candy rain + rising bubbles
- **Glassmorphism**: Frosted glass effects
- **3D Buttons**: Physical depth and shadows
- **12+ Animations**: Smooth, organic motion
- **6-Color Palette**: Pink, Purple, Blue, Mint, Peach, Yellow
- **Custom Fonts**: Fredoka, Comfortaa, Poppins

## 🛠 Tech Stack

- **React 18.2.0** - UI components
- **Vanilla CSS** - Styling
- **Web Audio API** - Sound effects
- **LocalStorage** - Data persistence
- **No build process** - Runs directly in browser

## 🎯 Browser Support

- ✅ Chrome 90+
- ✅ Safari 14+
- ✅ Firefox 88+
- ✅ Edge 90+
- ✅ Mobile browsers

## 📱 Mobile Responsive

- Optimized for 430px width
- Touch-friendly interactions
- Smooth animations on mobile
- Works on iOS and Android

## 🎮 How to Use

1. **Onboarding**: Answer 4 quick questions
2. **Log Sugar**: Tap the + button
3. **Select Item**: Choose from 10 presets
4. **Get Feedback**: See insights & action suggestions
5. **Complete Actions**: Earn bonus points
6. **Track Progress**: View stats and achievements

## 🏆 Gamification Elements

- **Points System**: Earn 5-20 points per action
- **Level Progression**: Level up every 100 points
- **Daily Streaks**: Track consecutive days
- **Challenges**: Complete daily quests
- **Achievements**: Unlock badges
- **Variable Rewards**: Random bonuses

## 🔧 Development

### File Organization
- `index.html` - Entry point, loads all dependencies
- `css/styles.css` - All visual styles
- `css/animations.css` - All keyframe animations
- `js/sound-system.js` - Audio management
- `js/utils.js` - Helper functions
- `js/components/` - React components
- `js/app.js` - Main application logic

### Adding New Features

1. **New Component**: Create in `js/components/`
2. **New Animation**: Add to `css/animations.css`
3. **New Utility**: Add to `js/utils.js`
4. **Import**: Add script tag to `index.html`

### Modifying Styles

1. **Colors**: Change CSS variables in `:root`
2. **Fonts**: Update Google Fonts link
3. **Animations**: Edit `css/animations.css`
4. **Layout**: Modify `css/styles.css`

## 📊 Data Structure

### User Data
```javascript
{
  age: number,
  height: number,
  weight: number,
  gender: string,
  bmi: number,
  steps: number,
  heartRate: number,
  sleepHours: number
}
```

### Game Data
```javascript
{
  points: number,
  level: number,
  streak: number,
  todayLogs: number,
  actionsCompleted: number,
  quickLogs: number
}
```

## 🎨 Color Palette

```css
--candy-pink: #FF6B9D
--candy-purple: #C44DFF
--candy-blue: #4D9FFF
--candy-mint: #5EEAD4
--candy-peach: #FFAB91
--candy-yellow: #FFD93D
```

## 🔊 Sound System

Three sound types:
- **Success**: C-E-G chord (sugar logging)
- **Reward**: Square wave ding (bonus points)
- **Level Up**: Ascending melody (level progression)

## 💾 Local Storage

Data stored in browser:
- `sugarSpikeUser` - User profile data
- `sugarSpikeGame` - Game progress data

Clear with:
```javascript
localStorage.clear();
window.location.reload();
```

## 🐛 Troubleshooting

### Animations not working
- Clear browser cache
- Try Chrome instead of Safari
- Check console for errors

### Sounds not playing
- Click anywhere on page first (browser autoplay policy)
- Check volume settings
- Ensure Web Audio API is supported

### Data not persisting
- Check browser privacy settings
- Disable private/incognito mode
- Allow localStorage in browser settings

### Layout issues
- Ensure viewport meta tag is present
- Check browser zoom level (100%)
- Clear browser cache

## 📈 Performance

- **Load Time**: <1 second
- **First Paint**: <500ms
- **Interaction Ready**: <1 second
- **Smooth 60fps** animations
- **Small Bundle**: ~150KB total

## 🔒 Privacy

- No server communication
- No analytics tracking
- All data stored locally
- No personal data collected
- No cookies used

## 🎯 Hackathon Requirements

All mandatory features implemented:
- ✅ Fast sugar logging
- ✅ Signup-free onboarding
- ✅ Passive health sync
- ✅ Daily ritual & habits
- ✅ Immediate feedback
- ✅ Context-aware insights
- ✅ Action suggestions
- ✅ Gamified scoring
- ✅ Psychological principles

## 📝 License

Created for hackathon submission. All rights reserved.

## 🚀 Deployment Options

### GitHub Pages
1. Push to GitHub
2. Enable Pages in settings
3. Live at: https://github.com/rishabh-sajwan-99/Sugar-Spike.git

### Netlify
```bash
npm install -g netlify-cli
netlify deploy
```

### Vercel
```bash
npm install -g vercel
vercel
```

## 🎉 Credits

- **Fonts**: Google Fonts
- **Icons**: Unicode Emojis
- **Framework**: React.js
- **Design**: Neo-Candy Aesthetic

---

**Built with ❤️ for healthier living**

For questions or issues, please check the troubleshooting section above.