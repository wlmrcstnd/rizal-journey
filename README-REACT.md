# Rizal's Journey - Interactive Decision Game

An educational interactive game that allows players to experience key decisions in Dr. Jose Rizal's life, the Philippine national hero. Built with React, Vite, and Tailwind CSS.

## 🎮 Features

- **Interactive Decision Tree**: Make choices that shaped Philippine history
- **8 Major Decision Points**: From childhood to martyrdom
- **Multiple Endings**: Bad, neutral, and ideal endings based on your choices
- **Historical Context**: Deep educational content about each period
- **Rubric System**: Track progress through 8 key elements (A-H) of Rizal's life
- **Locked Choices**: Historical path decisions are locked once chosen
- **Randomized Options**: Choices are shuffled for better engagement

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

The app will be available at `http://localhost:5173`

## 📦 Deployment

### Deploy to Vercel

1. Push your code to GitHub
2. Import repository in Vercel
3. Vercel will auto-detect Vite and deploy

Or use Vercel CLI:

```bash
npm i -g vercel
vercel --prod
```

### Deploy to Netlify

```bash
npm run build
# Upload the 'dist' folder to Netlify
```

## 🏗️ Project Structure

```
src/
├── components/          # React components
│   ├── Navigation.jsx   # Top navigation bar
│   ├── SceneContent.jsx # Main scene display
│   ├── ConfirmationModal.jsx
│   └── GoodChoiceModal.jsx
├── data/
│   ├── scenes.js       # All game scenes
│   └── goodChoices.js  # Historical path data
├── utils/
│   └── helpers.js      # Utility functions
├── App.jsx             # Main app component
├── main.jsx            # Entry point
└── index.css           # Global styles
```

## 🎯 Rubric Elements

The game tracks 8 key elements from Rizal's life:

- **A**: Childhood & Early Influences (GOMBURZA execution)
- **B**: Sa Aking mga Kababata (national language)
- **C**: A La Juventud Filipina (youth empowerment)
- **D**: Noli Me Tangere (exposing colonial abuse)
- **E**: El Filibusterismo (revolution preparation)
- **F**: Letter to Young Women of Malolos (women's rights)
- **G**: La Liga Filipina (civic organizing)
- **H**: Mi Último Adiós (ultimate sacrifice)

## 🛠️ Technologies

- **React 18**: UI framework
- **Vite**: Build tool and dev server
- **Tailwind CSS**: Utility-first styling
- **ES6 Modules**: Modern JavaScript

## 📝 License

Educational use - based on Philippine history and Dr. Jose Rizal's documented life.

## 🙏 Acknowledgments

Content based on historical records of Dr. Jose Rizal, Philippine national hero (1861-1896).
