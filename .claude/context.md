# Jeopardy Game Project - Claude Context

## Project Overview

This is a Jeopardy-style trivia game web application called "Disheopardy". It's a modern, frontend-only game built with React that allows teams to compete by answering trivia questions organized by categories and point levels.

## Tech Stack

- **Framework**: React 19
- **Build Tool**: Vite
- **UI Framework**: Bootstrap 5.3.3
- **Component Library**: React Bootstrap 2.10.7
- **No Backend**: Pure client-side application

## Project Structure

```
/
├── src/
│   ├── components/
│   │   └── QuestionModal.jsx   # Modal component for question display
│   ├── data/
│   │   └── gameData.js         # Game questions and team data
│   ├── App.jsx                 # Main game component
│   ├── App.css                 # Custom styles
│   └── main.jsx                # Application entry point
├── public/
│   └── assets/
│       └── audio/              # Sound effects (gamestart, success, lose, buzzer)
├── index.html                  # HTML entry point
├── package.json                # Dependencies and scripts
├── vite.config.js              # Vite configuration
└── README.md                   # Project documentation
```

## Key Components

### 1. App.jsx
- Main game component that manages all game state
- Handles team management, score tracking, and turn switching
- Renders the game board with categories and questions
- Displays team scores and active player indicators
- Key state:
  - `gameData`: Categories, questions, and players
  - `currentPlayer`: Index of active team
  - `gameStarted`: Game initialization flag
  - `selectedQuestion`: Currently displayed question
- Key functions:
  - `handleQuestionClick()`: Opens question modal
  - `switchTeam()`: Cycles to next team
  - `addPoints()`: Updates team score and switches turn
  - `startGame()`: Initializes game and plays start audio

### 2. QuestionModal.jsx
- React Bootstrap modal component for question display
- Manages countdown timer (30 seconds)
- Handles answer selection and validation
- Controls question states: initial, incorrect, correct, no_more
- Features:
  - 30-second countdown timer with auto-stop
  - Multiple choice answer buttons
  - Answer reveal on correct/incorrect
  - Sound effects for success, failure, and timeout
  - Team switching logic
- Key functions:
  - `checkAnswer()`: Validates answer and updates state
  - `startCountdown()`: Initiates 30-second timer
  - `revealAnswer()`: Disables incorrect options
  - `handleAward()`: Awards points to current team

### 3. gameData.js
- Exports `initialGameData` object containing:
  - Categories with questions (5 categories total)
  - Each question has: level, value, question text, multiple choice options
  - Player/team data with names and scores
- Structure:
```javascript
{
  categories: [
    {
      title: "Category Name",
      data: [
        {
          level: "$100",
          value: 100,
          question: "Question text",
          options: [
            { text: "Answer", is_correct: true/false }
          ],
          disabled: false
        }
      ]
    }
  ],
  players: [
    { name: "Team Name", score: 0, is_turn: false }
  ]
}
```

### 4. App.css
- Custom styles for Jeopardy theme
- Blue (#3F48CC) and gold (#FFC90E) color scheme
- Game board styling with category headers
- Question button states (default, inactive, hover)
- Player score boxes with active/inactive states
- Question modal styling

## Game Features

### Audio System
- Game start sound on initialization
- Success sound for correct answers
- Lose sound for incorrect answers
- Buzzer sound when timer expires
- All audio files in `/public/assets/audio/`

### Gameplay Flow
1. Game auto-starts on load with start sound
2. First team is set as active
3. Team selects a question by clicking
4. Question modal opens with 30-second timer
5. Team selects an answer:
   - **Correct**: Success sound, answer revealed, points awarded, next team
   - **Incorrect**: Lose sound, option disabled, next team gets a try
   - **Second incorrect**: Answer revealed, move to next team
6. Question disabled on game board after use
7. Repeat until all questions answered

## Customization

To customize the game:
1. Edit `/src/data/gameData.js`:
   - Modify categories and their titles
   - Update questions, answers, and point values
   - Change team names and count
2. Adjust styling in `/src/App.css`:
   - Update color scheme
   - Modify board layout
   - Customize fonts and sizes
3. Replace audio files in `/public/assets/audio/`:
   - gamestart.wav, success.wav, lose.wav, buzzer.wav

## Running the Application

### Development
```bash
npm install      # Install dependencies
npm run dev      # Start dev server (http://localhost:5173)
```

### Production
```bash
npm run build    # Build for production (outputs to /dist)
npm run preview  # Preview production build
```

## Development Notes

- React 19 with modern hooks (useState, useEffect, useRef)
- React Bootstrap for modal system (no jQuery needed)
- Vite for fast HMR and optimized builds
- State managed through React hooks (no external state library)
- Questions disabled after selection (one-time use)
- No persistent storage (game resets on refresh)
- No external API calls or server communication

## Author

- Jason Baldwin (JTBA)
- Licensed under MIT License

## Future Enhancements Considerations

- Convert to modern framework (React, Vue, Angular 2+)
- Add persistent storage (localStorage or backend)
- Implement sound effects and animations
- Add timer functionality for questions
- Create admin interface for easier game setup
- Add Daily Double functionality
- Implement Final Jeopardy round
